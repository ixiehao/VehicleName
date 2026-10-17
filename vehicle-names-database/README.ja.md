# 多言語車名データベース

> AI と人のための、構造化された自動車用語データベースです。
> 英語（`en`）、簡体字中国語（`zh-CN`）、繁体字中国語（`zh-TW`、主に台湾での用法）、日本語（`ja`）を収録しています。

言語 / Languages: [English](README.en.md) · [简体中文](README.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md)

## オープンソース情報

| 項目 | 内容 |
|------|------|
| ライセンス | [CC BY-SA 4.0](../LICENSE)（表示—継承） |
| データ形式 | JSON（機械可読）と Markdown（人が読める形式）。いずれも `scripts/build.py` が同一のソースから生成します |
| 貢献方法 | `data/` を編集し Pull Request を作成します。提出前に `scripts/validate.py` を実行してください |
| 行動規範 | [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) |
| セキュリティ、プライバシー、免責 | [SECURITY.md](SECURITY.md) · [PRIVACY.md](PRIVACY.md) · [DISCLAIMER.md](DISCLAIMER.md) |
| 変更履歴 | [CHANGELOG.md](CHANGELOG.md) |

データと文書は CC BY-SA 4.0 で提供します。`scripts/` 配下のビルドツールは、各ファイルのヘッダーに示す MIT ライセンスでも提供されます。データを再利用する際は、帰属表示を残し、派生物も同じライセンスで共有してください。

## 収録内容

| 区分 | 内容 | 件数 |
|------|------|------|
| **車両分類** `vehicle_classes` | 中国・欧州・日本・米国の分類体系、ボディタイプ、パワートレイン | 6 サブシステム |
| **用語集** `glossary` | パワートレイン、変速機、シャシー、ブレーキ、安全、運転支援、新エネルギー、ボディ、照明／快適装備、タイヤ／ホイールの 10 分類 | 72 語 |
| **ブランド** `brands` | 国・地域別に整理した主要ブランド | 164 件 |
| **車種** `models` | 現行・生産終了車種。ブランドごとに分割し、生産年と状態を記録 | 3030 件 |
| **市場別名称** `cross_market` | 同じ車種が市場によって異なる名称を持つ例 | 24 組 |

- `dist/vehicle-names-database.md` は閲覧・共有に適した表形式です。
- `dist/vehicle-names-database.json` は固定 schema のため、プログラムや AI で直接利用できます。
- `data/` はブランド単位で分割され、共同編集に適した**唯一のデータソース**です。

## リポジトリ構成

```
vehicle-names-database/
├── README.md / README.en.md / README.zh-TW.md / README.ja.md
├── CONTRIBUTING.md / CONTRIBUTING.en.md / CONTRIBUTING.zh-TW.md / CONTRIBUTING.ja.md
├── CODE_OF_CONDUCT.md / SECURITY.md / PRIVACY.md / DISCLAIMER.md
├── CHANGELOG.md
├── data/                        # ★ 唯一のデータソース。編集はここで行います
│   ├── meta.json                #   バージョン、言語、収録範囲、出典
│   ├── vehicle_classes.json     #   車両分類
│   ├── glossary.json            #   用語集
│   ├── brands.json              #   ブランド
│   ├── models/                  #   ブランド／グループ別の車種ファイル
│   │   └── cross_market.json    #   市場別名称表
│   └── pending_verification.json#   確認待ち項目
├── scripts/                     # ビルドと検証のツール
└── dist/                        # ビルド成果物。手動編集禁止
```

`dist/` は利用しやすさのためコミットされていますが、データの変更は必ず `data/` で行ってください。

## 言語キーとフィールド

| キー | 言語 | 方針 |
|------|------|------|
| `en` | 英語 | ブランド／車種の公式名称、国際的な用語 |
| `zh-CN` | 簡体字中国語 | 中国大陸での用法 |
| `zh-TW` | 繁体字中国語 | 台湾での用法。香港・マカオの用法は必要に応じて注記 |
| `ja` | 日本語 | 日本市場での表記（カタカナまたは漢字） |

主なフィールドは `id`（グローバルに一意な識別子）、`name`／`names`（多言語名称）、`abbr`（略称）、`note`（出典・別名・沿革）、`verified`、`country`、`segment`／`body_style`／`powertrain`、`status`、`years` です。

ブランド id は `brand:{country_code}:{lowercase_english_name}`、車種 id は `model:{brand}:{lowercase_model_name}`、用語 id は `glossary:{category}:{two-digit}`、分類 id は `class:{system}:{code}` です。

## 車種データ

`data/models/` はブランドまたはグループ別に分かれています。ファイル名には `{region}_{brand}.json`（例：`jp_toyota.json`）を推奨し、トップレベルの形式は `{"models": [...]}` です。各車種には `id`、`brand`、4 言語の `names`、`segment`、`body_style`、`powertrain`、`status`、`years`、`note` が必要です。

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
  "note": "世界的なベストセラー車名。Levin は中国の一汽系における姉妹車名",
  "verified": "verified"
}
```

生産終了車種は `status: "discontinued"` を使用します。名称や情報を確認できない場合は `verified: "pending"` とし、`pending_verification.json` に記録してください。

## ビルドと検証

```bash
# データ完全性の検証（参照、id の一意性、言語キー）
python3 scripts/validate.py

# data/ を JSON と Markdown の dist/ に統合
python3 scripts/build.py
```

Pull Request を作成する前に `validate.py` の実行が必須です。`data/` を変更した場合は `build.py` を実行し、更新された `dist/` もコミットしてください。

## 利用上の注意

- 中国大陸、台湾、香港、マカオ、日本ではブランド名・車名の表記が異なる場合があります。繁体字中国語では市場で定着した表記（Mercedes「賓士」、Volkswagen「福斯」、Volvo「富豪」、Infiniti「無限」など）を尊重してください。
- 日本の軽自動車には厳格な寸法・排気量の上限があります。一般的なマイクロカーと混同しないでください。
- セグメントの寸法は業界慣行であり、法的な基準ではありません。正式な発行物や商用利用では、自動車メーカー、規格機関、現地代理店の一次資料で再確認してください。

責任とプライバシーの詳細は [DISCLAIMER.md](DISCLAIMER.md) と [PRIVACY.md](PRIVACY.md) を、変更履歴は [CHANGELOG.md](CHANGELOG.md) をご覧ください。

## リポジトリの保守

開発、検証、公式サイトのデプロイは[ドキュメント一覧](../docs/README.md)を参照してください。データはこのパッケージ内に保持し、公式サイトのソースはリポジトリ直下の `website/` に置きます。
