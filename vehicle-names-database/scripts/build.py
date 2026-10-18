#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build.py — 合并 data/ 拆分数据,生成 dist/ 合并产物
==================================================

用法:
    python3 scripts/build.py [--out-dir dist]

说明:
    data/ 目录下的文件是唯一数据源(SSOT)。本脚本将它们合并为:
      - dist/vehicle-names-database.json   机器可读版
      - dist/vehicle-names-database.md     人类可读版(表格化)

    data/models/*.json 中每个文件为一组车型(通常按品牌),文件名不含
    cross_market.json。合并时会按 (brand, id) 排序,保证输出稳定,便于
    GitHub 上的 diff 审查。

许可: 本仓库整体采用 CC BY-SA 4.0;构建脚本额外可按 MIT 使用。
"""
import argparse
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data")
MODELS_DIR = os.path.join(DATA_DIR, "models")

LANGS = ("en", "zh-CN", "zh-TW", "ja")


def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def collect_models():
    """读取 data/models/*.json(排除 cross_market.json),返回模型列表。"""
    models = []
    for fname in sorted(os.listdir(MODELS_DIR)):
        if not fname.endswith(".json") or fname == "cross_market.json":
            continue
        data = load_json(os.path.join(MODELS_DIR, fname))
        if isinstance(data, dict) and isinstance(data.get("models"), list):
            models.extend(data["models"])
        elif isinstance(data, list):
            models.extend(data)
    # 稳定排序,便于 diff
    models.sort(key=lambda m: (m.get("brand", ""), m.get("id", "")))
    return models


def apply_name_origins(models):
    """把人工核验的车名释义按稳定车型 ID 合并进数据库。"""
    by_id = {}
    paths = sorted(glob.glob(os.path.join(DATA_DIR, "name_origins*.json")))
    for path in paths:
        document = load_json(path)
        entries = document.get("models", []) if isinstance(document, dict) else []
        if not isinstance(entries, list):
            raise ValueError(f"车名释义文件必须包含 models 数组: {os.path.basename(path)}")
        for entry in entries:
            model_id = entry.get("id")
            if not model_id or model_id in by_id:
                raise ValueError(f"车名释义 ID 缺失或重复: {model_id} ({os.path.basename(path)})")
            by_id[model_id] = entry

    models_by_id = {model.get("id"): model for model in models}
    unknown_ids = sorted(set(by_id) - set(models_by_id))
    if unknown_ids:
        raise ValueError(f"车名释义引用了不存在的车型: {', '.join(unknown_ids)}")

    for model_id, entry in by_id.items():
        models_by_id[model_id]["name_origin"] = {
            key: value for key, value in entry.items() if key != "id"
        }
    return models


def coverage_counts(meta, n_models):
    counts = dict(meta.get("coverage", {}))
    counts["models"] = n_models
    return counts


def main():
    parser = argparse.ArgumentParser(description="Merge data/ into dist/")
    parser.add_argument("--out-dir", default=os.path.join(ROOT, "dist"))
    args = parser.parse_args()

    meta = load_json(os.path.join(DATA_DIR, "meta.json"))
    vehicle_classes = load_json(os.path.join(DATA_DIR, "vehicle_classes.json"))
    glossary = load_json(os.path.join(DATA_DIR, "glossary.json"))
    brands = load_json(os.path.join(DATA_DIR, "brands.json"))
    cross_market = load_json(os.path.join(MODELS_DIR, "cross_market.json"))
    pending = load_json(os.path.join(DATA_DIR, "pending_verification.json"))
    models = apply_name_origins(collect_models())

    meta["coverage"] = coverage_counts(meta, len(models))
    meta["updated"] = meta.get("updated", "unknown")

    merged = {
        "schema_version": meta["schema_version"],
        "meta": meta,
        "vehicle_classes": vehicle_classes,
        "glossary": glossary,
        "brands": brands,
        "models": {
            "list": models,
            "cross_market": cross_market,
        },
        "pending_verification": pending,
    }

    os.makedirs(args.out_dir, exist_ok=True)
    json_path = os.path.join(args.out_dir, "vehicle-names-database.json")
    md_path = os.path.join(args.out_dir, "vehicle-names-database.md")

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(merged, f, ensure_ascii=False, indent=2)
        f.write("\n")

    md = render_markdown(merged)
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(md)

    print(f"OK  models={len(models)}  cross_market={len(cross_market)}")
    print(f"    -> {json_path}")
    print(f"    -> {md_path}")


# ---------------------------------------------------------------------------
# Markdown 渲染
# ---------------------------------------------------------------------------

def md_escape(text):
    return str(text).replace("|", "\\|").replace("\n", " ")


def render_markdown(db):
    meta = db["meta"]
    vc = db["vehicle_classes"]
    gl = db["glossary"]
    brands = db["brands"]
    models = db["models"]["list"]
    aliases = db["models"]["cross_market"]
    pending = db["pending_verification"]

    L = []
    L.append("# 多语言汽车车名资料库(Multilingual Vehicle Name Database)")
    L.append("")
    L.append(f"- **版本**:{meta.get('database_version')} | **更新日期**:{meta.get('updated')}")
    L.append(f"- **Schema 版本**:{db['schema_version']}")
    L.append("- **覆盖语言**:`en` 英文 / `zh-CN` 简体中文 / `zh-TW` 繁体中文 / `ja` 日语")
    L.append(f"- **条目统计**:品牌 {len(brands)} · 车型 {len(models)} · 跨市场异名 {len(aliases)} · 术语 {len(gl['terms'])}")
    L.append("- **状态标记**:`verified` = 已核实;`pending` = 待复核")
    L.append("- **数据源**:本文件由 `scripts/build.py` 从 `data/` 生成,请勿直接编辑。")
    L.append("")

    # ---- 级别分类 ----
    L.append("---")
    L.append("")
    L.append("# Part 1 汽车级别分类(vehicle_classes)")
    L.append("")

    def table(headers, rows):
        L.append("| " + " | ".join(headers) + " |")
        L.append("|" + "|".join(["---"] * len(headers)) + "|")
        for r in rows:
            L.append("| " + " | ".join(md_escape(c) for c in r) + " |")
        L.append("")

    table(["id", "en", "zh-CN", "zh-TW", "ja", "标准/说明"],
          [[c["id"], c["en"], c.get("zh-CN", ""), c.get("zh-TW", ""), c.get("ja", ""),
            c.get("standard", c.get("note", ""))] for c in vc["cn_segments"]])
    table(["id", "en", "zh-CN", "zh-TW", "ja", "说明"],
          [[c["id"], c["en"], c.get("zh-CN", ""), c.get("zh-TW", ""), c.get("ja", ""), c.get("note", "")]
           for c in vc["cn_gbt"]])
    table(["id", "段", "en", "zh-CN", "zh-TW", "ja", "参考长度", "代表车型"],
          [[c["id"], c.get("segment", ""), c["en"], c.get("zh-CN", ""), c.get("zh-TW", ""), c.get("ja", ""),
            c.get("length", ""), c.get("examples", "")] for c in vc["eu_segments"]])
    table(["id", "en", "zh-CN", "zh-TW", "ja", "判定标准", "牌照"],
          [[c["id"], c["en"], c.get("zh-CN", ""), c.get("zh-TW", ""), c.get("ja", ""), c.get("standard", ""),
            c.get("plate", "")] for c in vc["jp_categories"]])
    table(["id", "en", "zh-CN", "zh-TW", "ja", "判定标准"],
          [[c["id"], c["en"], c.get("zh-CN", ""), c.get("zh-TW", ""), c.get("ja", ""), c.get("standard", "")]
           for c in vc["us_epa"]])
    table(["id", "en", "zh-CN", "zh-TW", "ja", "注释"],
          [[c["id"], c["en"], c.get("zh-CN", ""), c.get("zh-TW", ""), c.get("ja", ""), c.get("note", "")]
           for c in vc["body_styles"]])
    table(["id", "en", "zh-CN", "zh-TW", "ja", "缩写", "注释"],
          [[c["id"], c["en"], c.get("zh-CN", ""), c.get("zh-TW", ""), c.get("ja", ""), c.get("abbr", ""),
            c.get("note", "")] for c in vc["powertrain_types"]])

    # ---- 术语 ----
    L.append("---")
    L.append("")
    L.append("# Part 2 专业术语(glossary)")
    L.append("")
    table(["id", "en", "zh-CN", "zh-TW", "ja", "缩写", "注释"],
          [[t["id"], t["names"]["en"], t["names"]["zh-CN"], t["names"]["zh-TW"], t["names"]["ja"],
            t.get("abbr", ""), t.get("note", "")] for t in gl["terms"]])

    # ---- 品牌 ----
    L.append("---")
    L.append("")
    L.append("# Part 3 品牌(brands)")
    L.append("")
    table(["id", "国家", "en", "zh-CN", "zh-TW", "ja", "注释"],
          [[b["id"], b.get("country", ""), b["names"]["en"], b["names"]["zh-CN"], b["names"]["zh-TW"],
            b["names"]["ja"], b.get("note", "")] for b in brands])

    # ---- 车型(按品牌分组) ----
    L.append("---")
    L.append("")
    L.append("# Part 4 车型(models)")
    L.append("")
    by_brand = {}
    for m in models:
        by_brand.setdefault(m.get("brand", "其他"), []).append(m)

    for brand in sorted(by_brand, key=lambda s: s.lower()):
        L.append(f"## {brand}")
        L.append("")
        table(["id", "en", "zh-CN", "zh-TW", "ja", "级别", "车身", "动力", "状态/年份", "注释"],
              [[m["id"], m["names"]["en"], m["names"].get("zh-CN", ""), m["names"].get("zh-TW", ""),
                m["names"].get("ja", ""), m.get("segment", ""), m.get("body_style", ""),
                m.get("powertrain", ""),
                (m.get("status", "current") + (" · " + str(m["years"]) if m.get("years") else "")),
                m.get("note", "")] for m in by_brand[brand]])

    # ---- 跨市场异名 ----
    L.append("---")
    L.append("")
    L.append("# Part 5 跨市场异名(cross_market)")
    L.append("")
    table(["id", "车型", "jp", "us", "eu", "cn", "tw", "注释"],
          [[a["id"], a["model"], a["names"].get("jp", ""), a["names"].get("us", ""), a["names"].get("eu", ""),
            a["names"].get("cn", ""), a["names"].get("tw", ""), a.get("note", "")] for a in aliases])

    # ---- 待核实 ----
    L.append("---")
    L.append("")
    L.append("# Part 6 待核实清单(pending_verification)")
    L.append("")
    table(["id", "条目", "说明"], [[p["id"], p["item"], p["detail"]] for p in pending])

    L.append("---")
    L.append("")
    L.append(f"> 本文件由 `scripts/build.py` 自动生成({meta.get('updated')})。")
    L.append(f"> 许可证:CC BY-SA 4.0。详见仓库 LICENSE 与 README。")
    L.append("")
    return "\n".join(L)


if __name__ == "__main__":
    main()
