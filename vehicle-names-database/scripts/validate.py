#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
validate.py — 数据完整性校验
=============================

用法:
    python3 scripts/validate.py [--fix]

检查项:
  1. 所有文件均可解析为合法 JSON。
  2. 车型条目:id 唯一、字段齐全、4 语言键齐全。
  3. 车型引用的 segment / body_style / powertrain 必须存在于 vehicle_classes。
  4. 车型 brand 必须存在于 brands(英文名匹配)。
  5. 品牌 id 唯一;术语 id 唯一;跨市场异名 id 唯一。
  6. 车型 status 取值限 current / discontinued / concept。
  7. 待核实清单条目编号唯一。

退出码: 0 = 全部通过;1 = 存在错误。

许可: 本仓库整体采用 CC BY-SA 4.0;本脚本额外可按 MIT 使用。
"""
import json
import glob
import os
import re
import sys
from urllib.parse import urlparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data")
MODELS_DIR = os.path.join(DATA_DIR, "models")
LANGS = ("en", "zh-CN", "zh-TW", "ja")
VALID_STATUS = ("current", "order-suspended", "discontinued", "concept")
OFFICIAL_ORIGIN_HOSTS = {
    "Suzuki": {"www.suzuki.co.jp"},
    "Toyota": {"www.toyota.co.jp", "toyota.jp"},
    "Lexus": {"www.toyota.co.jp"},
    "Honda": {"global.honda", "www.honda.co.jp"},
    "Acura": {"www.acura.com"},
    "Nissan": {"www.nissan.co.jp", "faq2.nissan.co.jp"},
    "Mitsubishi": {"faq.mitsubishi-motors.co.jp"},
    "Subaru": {"faq.subaru.jp", "www.subaru.jp"},
    "Daihatsu": {"www.daihatsu.com"},
    "Isuzu": {"www.isuzu.co.jp"},
    "Volkswagen": {"www.volkswagen-newsroom.com"},
    "Škoda": {"www.skoda-storyboard.com"},
    "Hyundai": {"www.hyundai.com"},
    "Renault": {"www.renaultgroup.com"},
    "Porsche": {"newsroom.porsche.com"},
    "Fiat": {"www.media.stellantis.com"},
    "Ford": {"media.ford.com"},
    "Kia": {"www.kiamedia.com", "worldwide.kia.com", "www.kia.com"},
    "Genesis": {"newsroom.genesis.com"},
    "SsangYong": {"en.kg-mobility.com", "allways.kg-mobility.com"},
    "Peugeot": {"www.media.stellantis.com"},
    "Jeep": {"www.media.stellantis.com"},
    "Lincoln": {"media.lincoln.com", "www.media.lincoln.com"},
    "Alfa Romeo": {"www.media.stellantis.com"},
    "Citroën": {"www.media.stellantis.com"},
    "DS": {"www.media.stellantis.com"},
    "Audi": {"www.audi.com", "uploads.audi-mediacenter.com"},
    "Aston Martin": {"www.astonmartin.com", "media.astonmartin.com"},
    "Bentley": {"www.bentleymedia.com"},
    "Ferrari": {"www.ferrari.com", "cdn.ferrari.com"},
    "Lamborghini": {"www.lamborghini.com"},
    "Lotus": {"media.lotuscars.com"},
    "Maserati": {"www.maserati.com"},
    "MINI": {"www.mini.com"},
    "SEAT": {"www.seat.com"},
    "Cupra": {"www.seat.com"},
    "BYD": {"www.denza.com", "www.byd.com"},
    "Maxus": {"www.saicmotor.com"},
    "Roewe": {"www.saicmotor.com"},
    "Mazda": {"newsroom.mazda.com"},
    "Opel": {"www.media.stellantis.com"},
    "Great Wall": {"www.gwm-global.com"},
    "MG": {"www.saicmotor.com"},
    "NIO": {"www.firefly.world", "www.nio.com"},
    "Chevrolet": {"www.chevrolet.com"},
    "Land Rover": {"media.jlr.com", "www.landrover.co.uk"},
    "McLaren": {"www.mclaren.com"},
    "Rolls-Royce": {"www.press.rolls-roycemotorcars.com"},
    "XPeng": {"www.xpeng.com"},
    "Xiaomi": {"www.mi.com"},
    "Volvo": {"www.volvocars.com"},
    "BMW": {"www.press.bmwgroup.com"},
    "Mercedes-Benz": {"media.mercedes-benz.com", "www.media.mercedes-benz.com"},
}

_DIACRITICS = str.maketrans(
    {"ë": "e", "é": "e", "è": "e", "ü": "u", "ç": "c", "ä": "a", "ö": "o", "š": "s", "ß": "ss"}
)


def normalize_id(s):
    """品牌名 → id 前缀:小写、空格转连字符、去变音符(如 Citroën → citroen)。"""
    return s.strip().lower().replace(" ", "-").translate(_DIACRITICS)

errors = []
warnings = []


def load_json(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:  # noqa: BLE001
        errors.append(f"JSON 解析失败: {os.path.relpath(path, ROOT)} -> {e}")
        return None


def build_id_sets():
    """收集可引用的 class/body/pt id。"""
    vc = load_json(os.path.join(DATA_DIR, "vehicle_classes.json"))
    refs = set()
    for section in vc.values():
        if isinstance(section, list):
            for item in section:
                if isinstance(item, dict) and item.get("id"):
                    refs.add(item["id"])
    return refs


def main():
    ref_ids = build_id_sets()
    meta = load_json(os.path.join(DATA_DIR, "meta.json"))
    brands = load_json(os.path.join(DATA_DIR, "brands.json"))
    glossary = load_json(os.path.join(DATA_DIR, "glossary.json"))
    pending = load_json(os.path.join(DATA_DIR, "pending_verification.json"))
    cross = load_json(os.path.join(MODELS_DIR, "cross_market.json"))

    if None in (meta, brands, glossary, pending, cross):
        sys.exit(1)

    # 品牌
    brand_ids = set()
    brand_en = {}
    for b in brands:
        if b["id"] in brand_ids:
            errors.append(f"品牌 id 重复: {b['id']}")
        brand_ids.add(b["id"])
        brand_en[b["names"]["en"].lower()] = b["id"]
        missing = [l for l in LANGS if l not in b["names"]]
        if missing:
            errors.append(f"品牌 {b['id']} 缺少语言键: {missing}")

    # 术语
    term_ids = set()
    for t in glossary["terms"]:
        if t["id"] in term_ids:
            errors.append(f"术语 id 重复: {t['id']}")
        term_ids.add(t["id"])
        if t.get("category") not in {c["id"] for c in glossary["categories"]}:
            errors.append(f"术语 {t['id']} 类别无效: {t.get('category')}")

    # 车型
    model_ids = set()
    models_by_id = {}
    n_models = 0
    for fname in sorted(os.listdir(MODELS_DIR)):
        if not fname.endswith(".json") or fname == "cross_market.json":
            continue
        data = load_json(os.path.join(MODELS_DIR, fname))
        if data is None:
            continue
        models = data["models"] if isinstance(data, dict) else data
        for m in models:
            n_models += 1
            mid = m.get("id", "")
            if mid in model_ids:
                errors.append(f"车型 id 重复: {mid}")
            model_ids.add(mid)
            models_by_id[mid] = m

            if not mid.startswith("model:"):
                errors.append(f"车型 id 格式错误: {mid}")
            for field in ("segment", "body_style", "powertrain"):
                if field not in m:
                    errors.append(f"车型 {mid} 缺少字段 {field}")
                elif m[field] not in ref_ids:
                    errors.append(f"车型 {mid} 引用不存在的 {field}: {m[field]}")
            if "brand" not in m:
                errors.append(f"车型 {mid} 缺少 brand")
            elif m["brand"].lower() not in brand_en:
                warnings.append(f"车型 {mid} 的品牌 {m['brand']} 不在 brands 列表(检查是否需补充品牌)")
            if "names" not in m:
                errors.append(f"车型 {mid} 缺少 names")
            else:
                missing = [l for l in LANGS if l not in m["names"]]
                if missing:
                    errors.append(f"车型 {mid} 缺少语言键: {missing}")
            if "status" in m and m["status"] not in VALID_STATUS:
                errors.append(f"车型 {mid} status 非法: {m['status']}")
            if "years" in m and not re.match(
                r"^(\d{4}\s*[-–—~]\s*(\d{4}|present|至今|現行)(\s*[,;]\s*\d{4}\s*[-–—~]\s*(\d{4}|present|至今|現行))*|\d{4}|—)$",
                str(m["years"]).strip(),
            ):
                warnings.append(f"车型 {mid} years 格式待规范: {m['years']}")
            # id 需与 brand 一致(小写英文名,忽略大小写与变音符,如 Citroën→citroen)
            expected_prefix = "model:" + normalize_id(m.get("brand", "")) + ":"
            if mid.startswith("model:") and not mid.startswith(expected_prefix):
                warnings.append(f"车型 {mid} 的 id 前缀与 brand 不一致(期望 {expected_prefix}*)")

    # 官方车名释义：只允许可追溯、按车型 ID 精确绑定的人工核验记录。
    origin_entries = []
    origin_paths = sorted(glob.glob(os.path.join(DATA_DIR, "name_origins*.json")))
    if not origin_paths:
        errors.append("缺少 name_origins*.json 车名释义清单")
    for path in origin_paths:
        origins_doc = load_json(path)
        if not isinstance(origins_doc, dict) or not isinstance(origins_doc.get("models"), list):
            errors.append(f"{os.path.basename(path)} 必须包含 models 数组")
        else:
            origin_entries.extend(origins_doc["models"])
    if origin_entries:
        origin_ids = set()
        for origin in origin_entries:
            if not isinstance(origin, dict):
                errors.append("name_origins.json 中的条目必须是对象")
                continue
            mid = origin.get("id", "")
            if not mid or mid in origin_ids:
                errors.append(f"车名释义 ID 缺失或重复: {mid}")
            origin_ids.add(mid)
            model = models_by_id.get(mid)
            if model is None:
                errors.append(f"车名释义引用不存在的车型: {mid}")
            elif not isinstance(model.get("brand"), str):
                errors.append(f"车名释义车型缺少有效品牌: {mid}")
            summary = origin.get("summary")
            if not isinstance(summary, dict) or any(
                not isinstance(summary.get(language), str) or not summary[language].strip()
                for language in LANGS
            ):
                errors.append(f"车名释义 {mid} 必须提供四种语言的非空简述")
            if not isinstance(origin.get("source_language"), str) or not re.fullmatch(r"[a-z]{2}(?:-[A-Z]{2})?", origin["source_language"]):
                errors.append(f"车名释义 {mid} 的 source_language 无效")
            if origin.get("canonical_name_column") not in LANGS:
                errors.append(f"车名释义 {mid} 的 canonical_name_column 必须是四种名称列之一")
            if not isinstance(origin.get("source_title"), str) or not origin["source_title"].strip():
                errors.append(f"车名释义 {mid} 缺少 source_title")
            source_url = origin.get("source_url")
            parsed_url = urlparse(source_url) if isinstance(source_url, str) else None
            allowed_hosts = OFFICIAL_ORIGIN_HOSTS.get(model.get("brand"), set()) if model else set()
            if (
                parsed_url is None
                or parsed_url.scheme != "https"
                or parsed_url.hostname not in allowed_hosts
            ):
                errors.append(f"车名释义 {mid} 的来源必须是该品牌许可的 HTTPS 官方域名")

    # 跨市场异名
    alias_ids = set()
    for a in cross:
        if a["id"] in alias_ids:
            errors.append(f"异名 id 重复: {a['id']}")
        alias_ids.add(a["id"])

    # 待核实
    pv_ids = set()
    for p in pending:
        if p["id"] in pv_ids:
            errors.append(f"待核实 id 重复: {p['id']}")
        pv_ids.add(p["id"])

    print(f"检查完成: 品牌 {len(brands)} · 车型 {n_models} · 术语 {len(glossary['terms'])} · 异名 {len(cross)}")
    for w in warnings:
        print("WARN:", w)
    for e in errors:
        print("ERROR:", e)
    if errors:
        print("校验未通过。")
        sys.exit(1)
    if warnings:
        print("校验通过(含警告)。")
    else:
        print("校验全部通过。")
    sys.exit(0)


if __name__ == "__main__":
    main()
