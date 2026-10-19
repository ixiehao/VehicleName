# 变更记录 / Changelog

本仓库遵循「语义化版本 2.0.0」(MAJOR.MINOR.PATCH)近似约定:
This project loosely follows Semantic Versioning 2.0.0 (MAJOR.MINOR.PATCH):

- MAJOR:结构/许可等不兼容变更 — breaking structural/license changes
- MINOR:新增数据/功能,向后兼容 — backward-compatible additions
- PATCH:修正与微调 — fixes and tweaks

---

## [Unreleased]

### 数据修正 Data fixes

- 校正铃木 XBee、国际版 S-Cross、印度 Grand Vitara 与日本 Landy 的市场/销售状态；新增“暂停接单”状态，区分暂停售新订单与永久停产。
- Corrected the market and sales states for Suzuki XBee, global S-Cross, India-market Grand Vitara, and Japan-market Landy; added `order-suspended` to distinguish a pause in new orders from permanent discontinuation.

### Documentation

- 新增繁體中文與日語的 README、貢獻指南，並在所有入口文件建立四語導航。
- Added Traditional Chinese and Japanese README/contribution guides, with four-language navigation across entry documents.

## [1.2.0] — 2026-08-10

### 新增 Added

- **补充铃木印度市场车型**:新增 Maruti Suzuki 在印度市场生产/销售的 12 款车型(Dzire、Vitara Brezza、S-Presso、Fronx、Ciaz、Eeco、Omni、Alto 800、Ritz、XL6、S-Cross、Maruti 800),均标注中国市场对应关系。
- **补充铃木东南亚车型**:新增印尼市场商用厢式车 APV。
- **补充大发东南亚车型**:新增印尼/马来西亚市场 6 款(Ayla、Sigra、Xenia、Luxio、Gran Max、Sirion),注明与丰田姊妹车关系。

### 清理 Cleanup

- 删除 183 条补录脚本误加的未核实条目(概念车/赛车/重复条目/字段默认值,`verified: pending` 且注明"参考封面车系数据补充")。
- 清理大发品牌 7 个概念车(DN 系列、D-R、D-Base、FX)及归属错误条目(森雅属一汽品牌,已由一汽数据覆盖)。

### 修正 Fixed

- 修正 `meta.json` 车型统计与 dist 产物对齐;`.gitignore` 忽略临时脚本与 Obsidian 配置。

### 统计 Statistics

- 车型总数:3030(清理垃圾 + 补充海外车型后净增 989)
- 覆盖品牌:164 个 | 术语:72 条 | 跨市场异名:24 组

---

## [1.1.0] — 2026-08-09

### 项目 Project

- **国际化命名**:项目名 `vehiclename`,数据目录 `vehicle-names-database/`,构建产物 `dist/vehicle-names-database.json` / `dist/vehicle-names-database.md`,英文标题统一为 *Multilingual Vehicle Name Database*;CI 工作流同步适配。
- **开源化改造**:新增 `LICENSE`(CC BY-SA 4.0)、行为准则/安全/隐私/免责声明文档、中英贡献指南、README.en.md,以及 GitHub Issue/PR 模板与 CI 校验工作流。
- **文件系统重构**:数据拆分为 `data/`,构建产物输出至 `dist/`,新增 `scripts/build.py` 与 `scripts/validate.py`。

### 新增 Added

- **品牌大规模扩充**:品牌总数 63 → 164,覆盖 16 个国家/地区(新增欧洲、美洲及中国品牌 100+ 个)。
- **车型数据大幅扩充**:车型总数 84 → 2041(含 1955-2000 年代历史车型与中国在售/历史车型)。
- **补充子品牌车型**:BYD(仰望/腾势/方程豹)、吉利(极氪/领克/银河/几何)、长城(哈弗/魏牌/坦克/欧拉)、奇瑞(捷途/星途)、铃木(长安铃木系列)等。
- **模型字段新增**:`status`(current/discontinued/concept)与 `years`(生产年份)。
- **联网核实待核实条目**:依据权威资料关闭大量待核实条目,部分年份不确定的条目以 `verified: "pending"` 标注。

### 修正 Fixed

- `scripts/validate.py`:`_DIACRITICS` 增加 `š`/`ß` 归一化(支持 Škoda 品牌 id 前缀匹配)。
- 修正部分车型年份与市场状态数据。

### 统计 Statistics

- 车型总数:2041(现售 / 停产)
- 覆盖品牌:164 个
- 术语:72 条(10 大类) | 级别体系:6 类 | 跨市场异名:24 组
- 待核实条目:`data/pending_verification.json` 及条目内 pending 标记若干

---

## [1.0.0] — 2026-08-09

### 新增 Added

- 初始版本。
- 内容:级别体系 6 类、术语 72 条(10 大类)、品牌 63 个、车型 84 款、跨市场异名 24 组、待核实清单 13 项。
- 文件:`README.md`、`vehicle-names-database.json`、`vehicle-names-database.md`。
