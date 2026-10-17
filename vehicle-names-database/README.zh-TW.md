# 多語言汽車車名資料庫

> 提供給 AI 與人類使用的結構化汽車名詞資料庫。
> 收錄英文（`en`）、簡體中文（`zh-CN`）、繁體中文（`zh-TW`，以臺灣用法為主）與日語（`ja`）。

語言 / Languages: [English](README.en.md) · [简体中文](README.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md)

## 開源資訊

| 項目 | 說明 |
|------|------|
| 授權 | [CC BY-SA 4.0](../LICENSE)（姓名標示—相同方式分享） |
| 資料格式 | JSON（供程式讀取）與 Markdown（供人閱讀），均由 `scripts/build.py` 自同一來源產生 |
| 如何貢獻 | 編輯 `data/` 內的資料後提交 Pull Request；提交前請執行 `scripts/validate.py` |
| 行為準則 | [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) |
| 安全、隱私與免責 | [SECURITY.md](SECURITY.md) · [PRIVACY.md](PRIVACY.md) · [DISCLAIMER.md](DISCLAIMER.md) |
| 變更記錄 | [CHANGELOG.md](CHANGELOG.md) |

資料與文件依 CC BY-SA 4.0 授權；`scripts/` 下的建置工具亦依檔頭所示的 MIT 授權提供。再利用資料時請保留姓名標示，並以相同授權分享衍生作品。

## 收錄內容

| 區塊 | 內容 | 數量 |
|------|------|------|
| **車輛分類** `vehicle_classes` | 中國、歐洲、日本、美國分類體系，以及車身型式和動力種類 | 6 個子系統 |
| **術語表** `glossary` | 動力、變速箱、底盤、煞車、安全、駕駛輔助、新能源、車身、照明舒適、輪胎輪圈等 10 類 | 72 條 |
| **品牌** `brands` | 依國別整理的主流品牌 | 164 筆 |
| **車型** `models` | 現行與停產車型，依品牌拆分，並記錄生產年份與狀態 | 3030 筆 |
| **跨市場異名** `cross_market` | 同一車款在不同市場的名稱 | 24 組 |

- `dist/vehicle-names-database.md` 是可直接閱讀或分享的表格版。
- `dist/vehicle-names-database.json` 採固定 schema，可直接供程式與 AI 使用。
- `data/` 按品牌拆檔，適合多人平行編輯，且是**唯一資料來源**。

## 目錄結構

```
vehicle-names-database/
├── README.md / README.en.md / README.zh-TW.md / README.ja.md
├── CONTRIBUTING.md / CONTRIBUTING.en.md / CONTRIBUTING.zh-TW.md / CONTRIBUTING.ja.md
├── CODE_OF_CONDUCT.md / SECURITY.md / PRIVACY.md / DISCLAIMER.md
├── CHANGELOG.md
├── data/                        # ★ 唯一資料來源；請在此編輯
│   ├── meta.json                #   版本、語言、收錄範圍與來源
│   ├── vehicle_classes.json     #   車輛分類
│   ├── glossary.json            #   術語表
│   ├── brands.json              #   品牌
│   ├── models/                  #   各品牌／集團車型檔
│   │   └── cross_market.json    #   跨市場異名表
│   └── pending_verification.json#   待覆核項目
├── scripts/                     # 建置與驗證工具
└── dist/                        # 建置產物；請勿手動編輯
```

`dist/` 是為方便使用而提交的建置產物；所有資料修改必須先在 `data/` 進行。

## 語言鍵與欄位

| 鍵 | 語言 | 使用原則 |
|----|------|----------|
| `en` | 英文 | 品牌／車型官方名稱與國際術語 |
| `zh-CN` | 簡體中文 | 中國大陸常用名稱 |
| `zh-TW` | 繁體中文 | 臺灣常用名稱；港澳用法另行標註 |
| `ja` | 日語 | 日本市場表記（片假名或漢字） |

常用欄位包括：`id`（全域唯一識別碼）、`name`／`names`（多語名稱）、`abbr`（術語縮寫）、`note`（來源、別名與沿革）、`verified`、`country`、`segment`／`body_style`／`powertrain`、`status` 與 `years`。

品牌 id 為 `brand:{country_code}:{lowercase_english_name}`；車型 id 為 `model:{brand}:{lowercase_model_name}`；術語 id 為 `glossary:{category}:{two-digit}`；分類 id 為 `class:{system}:{code}`。

## 車型資料

`data/models/` 依品牌或集團拆分，建議檔名為 `{region}_{brand}.json`（例如 `jp_toyota.json`），頂層結構為 `{"models": [...]}`。每筆車型需要 `id`、`brand`、四語 `names`、`segment`、`body_style`、`powertrain`、`status`、`years` 與 `note`。

```json
{
  "id": "model:toyota:corolla",
  "brand": "Toyota",
  "names": {"en": "Corolla", "zh-CN": "卡罗拉/雷凌(广汽)", "zh-TW": "Corolla Altis", "ja": "カローラ"},
  "segment": "class:cn:a",
  "body_style": "body:sedan",
  "powertrain": "pt:ice",
  "status": "current",
  "years": "1966–present",
  "note": "全球暢銷車系；Levin 為中國一汽的姊妹名稱",
  "verified": "verified"
}
```

停產車型使用 `status: "discontinued"`。資料或譯名無法確認時，請設為 `verified: "pending"`，並登錄至 `pending_verification.json`。

## 建置與驗證

```bash
# 驗證資料完整性（引用、id 唯一性、語言鍵）
python3 scripts/validate.py

# 將 data/ 合併為 dist/ 的 JSON 與 Markdown
python3 scripts/build.py
```

建立 Pull Request 前必須執行 `validate.py`。修改 `data/` 後，也必須執行 `build.py` 並一併提交更新後的 `dist/`。

## 使用注意事項

- 中國大陸、臺灣、香港、澳門與日本的品牌及車型譯名可能不同；繁體中文應使用市場慣稱，例如 Mercedes「賓士」、Volkswagen「福斯」、Volvo「富豪」、Infiniti「無限」。
- 日本輕自動車有嚴格的尺寸與排氣量限制，請勿與一般微型車混為一談。
- 分級尺寸是產業慣例，並非強制標準；正式發佈或商業用途請以車廠、標準機關或當地代理商的一手資料再次核對。

完整條款請見 [DISCLAIMER.md](DISCLAIMER.md) 與 [PRIVACY.md](PRIVACY.md)，版本沿革請見 [CHANGELOG.md](CHANGELOG.md)。

## 儲存庫維護文件

儲存庫層級的開發、驗證與官網部署請見[文件索引](../docs/README.md)。資料來源仍在本目錄，獨立官網原始碼位於儲存庫根目錄的 `website/`。
