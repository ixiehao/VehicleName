# 多语言汽车车名资料库(Multilingual Vehicle Name Database)

> 面向 AI 与人类的双语/多语可读、结构化可调用的汽车多语言名词资料库。
> 覆盖语言:英文(`en`)、简体中文(`zh-CN`)、繁体中文(`zh-TW`,以台湾地区用法为主)、日语(`ja`)。
> 开源协作:欢迎全球网友参与补充与修改,详见 [CONTRIBUTING.md](CONTRIBUTING.md) / [CONTRIBUTING.en.md](CONTRIBUTING.en.md)。

语言 / Languages: [English](README.en.md) · [简体中文](README.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md)

---

## 0. 开源信息(Open Source)

| 项目 | 内容 |
|------|------|
| 许可证 | [CC BY-SA 4.0](../LICENSE)(署名—相同方式共享) |
| 数据格式 | JSON(机器可读)+ Markdown(人类可读),二者由 `scripts/build.py` 生成,同源一致 |
| 贡献方式 | 修改 `data/` 下的数据文件后提交 Pull Request;校验请运行 `scripts/validate.py` |
| 行为准则 | [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) |
| 安全策略 | [SECURITY.md](SECURITY.md) |
| 隐私声明 | [PRIVACY.md](PRIVACY.md) |
| 免责声明 | [DISCLAIMER.md](DISCLAIMER.md) |
| 变更记录 | [CHANGELOG.md](CHANGELOG.md) |

> 本仓库的**数据与文档**采用 CC BY-SA 4.0 授权;`scripts/` 下的构建工具代码在 LICENSE 基础上额外可按 MIT 协议使用(见各脚本文件头注释)。使用数据时请保留署名并共享派生作品。

---

## 1. 这是什么

本资料库收录四类汽车领域名词,每种名词均提供 4 语言对照:

| 板块 | 内容 | 条目数 |
|------|------|--------|
| **级别分类** `vehicle_classes` | 中国/欧洲/日本/美国分级体系 + 车身形式 + 动力类型 | 6 个子类 |
| **专业术语** `glossary` | 动力、传动、底盘、制动、安全、智驾、新能源等 10 大类 | 72 条 |
| **品牌** `brands` | 全球 164 个主流品牌(16 国分组) | 164 条 |
| **车型** `models` | 现售 + 停产车型名录(按品牌拆分文件,含生产年份与状态) | 3030 条 |
| **跨市场异名** `cross_market` | 同一车型在不同市场的不同名称对照 | 24 组 |

设计目标:

- **人类可读**:`dist/vehicle-names-database.md` 表格化呈现,可直接阅读或分享。
- **AI 可调用**:`dist/vehicle-names-database.json` 字段统一、层级固定,可直接被程序 / AI 工具读取。
- **社区可协作**:`data/` 按品牌拆分文件,多人可并行编辑、互不冲突,PR 审阅友好。

---

## 2. 文件结构

```
vehicle-names-database/
├── README.md                    # 本文档(总览、Schema、调用与维护指南)
├── README.en.md                 # 英文版
├── README.zh-TW.md              # 繁體中文版
├── README.ja.md                 # 日文版
├── CONTRIBUTING.md              # 贡献指南(中文)
├── CONTRIBUTING.en.md           # 贡献指南(English)
├── CONTRIBUTING.zh-TW.md        # 貢獻指南(繁體中文)
├── CONTRIBUTING.ja.md           # コントリビューションガイド(日本語)
├── CODE_OF_CONDUCT.md           # 行为准则
├── SECURITY.md                  # 安全策略
├── PRIVACY.md                   # 隐私声明(多语言)
├── DISCLAIMER.md                # 免责声明(多语言)
├── CHANGELOG.md                 # 变更记录
├── data/                        # ★ 数据源(唯一事实来源,社区在此编辑)
│   ├── meta.json                #   元信息:版本、语言、覆盖范围、数据来源
│   ├── vehicle_classes.json     #   ① 级别分类
│   ├── glossary.json            #   ② 专业术语
│   ├── brands.json              #   ③ 品牌
│   ├── models/                  #   ④ 车型
│   │   ├── cross_market.json    #       跨市场异名对照表
│   │   ├── jp_toyota.json       #       按品牌/车系拆分的车型文件(每文件可含多品牌)
│   │   └── ...                  #       新增品牌按此模式追加
│   └── pending_verification.json#   ⑤ 待核实清单(避免 AI 误用未确认数据)
├── scripts/                     # 构建与校验工具
│   ├── build.py                 #   合并 data/ → dist/(含 MD 生成)
│   └── validate.py              #   结构、引用、ID 唯一性校验
└── dist/                        # 构建产物(勿手动编辑,由 build.py 生成)
    ├── vehicle-names-database.json  #   机器可读版
    └── vehicle-names-database.md    #   人类可读版
```

> `dist/` 为构建产物,提交进仓库方便使用者直接下载;任何修改请在 `data/` 中进行并重新构建。

---

## 3. 语言标记与字段约定

统一使用 4 个语言键(全小写):

| 键 | 语言 | 区域说明 |
|----|------|----------|
| `en` | 英文 | 品牌官方名 / 车型官方名 / 国际通用术语 |
| `zh-CN` | 简体中文 | 中国大陆译名 |
| `zh-TW` | 繁体中文 | 台湾地区常用译名(个别注明港澳) |
| `ja` | 日语 | 日本市场表记(片假名或汉字) |

通用字段约定:

| 字段 | 含义 |
|------|------|
| `id` | 全局唯一 ID,格式 `类别:子类:序号`(如 `glossary:powertrain:01`、`brand:jp:toyota`、`model:toyota:corolla`) |
| `name` / `names` | 名称(不同语言存于 `names` 对象) |
| `abbr` | 缩略语(仅术语,如 `TPMS`) |
| `note` | 注释:释义、来源、别名、历史沿革等 |
| `verified` | 校验状态:`verified`(已核实)/ `pending`(待核实) |
| `country` | 品牌所属国家(仅品牌) |
| `segment` / `body_style` / `powertrain` | 车型的级别 / 车身形式 / 动力类型(引用 `vehicle_classes` 中的 `id`) |
| `status` | 车型状态:`current`(现售)/ `discontinued`(停产)/ `concept`(概念) |
| `years` | 生产年份区间,如 `1966–present` |

---

## 4. 层级规则(数据组织逻辑)

```
data/ 各文件合并后
├── meta                  # 元信息:版本、语言、覆盖范围、数据来源
├── vehicle_classes       # ① 级别分类
│   ├── cn_segments       #   中国行业分级 A00/A0/A/B/C/D(轴距口径)
│   ├── cn_gbt            #   国标 GB/T 3730.1 乘用车类型
│   ├── eu_segments       #   欧洲分段 A–F + J/M/S
│   ├── jp_categories     #   日本:軽自動車 / 小型自動車 / 普通自動車
│   ├── us_epa            #   美国 EPA 尺寸分类
│   ├── body_styles       #   车身形式(19 种)
│   └── powertrain_types  #   动力类型
├── glossary              # ② 专业术语(10 大类,类目见 §6)
├── brands                # ③ 品牌(按国家分组,国别为一级维度)
├── models                # ④ 车型
│   ├── list              #   按品牌分组的车型名录
│   └── cross_market      #   跨市场异名对照表(同一车型不同市场不同名)
└── pending_verification  # ⑤ 待核实清单(避免 AI 误用未确认数据)
```

**命名规则**:

- 品牌 `id`:`brand:{国别代码}:{小写英文名}`(如 `brand:jp:toyota`)。
- 车型 `id`:`model:{品牌}:{车型英文名小写}`(如 `model:toyota:corolla`)。
- 术语 `id`:`glossary:{类别}:{两位序号}`(如 `glossary:safety:01`)。
- 级别 `id`:`class:{体系}:{级别代码}`(如 `class:cn:a`、`class:jp:kei`)。

---

## 5. 车型数据文件组织

`data/models/` 下的文件按品牌/车系拆分,便于社区并行贡献:

- 文件名建议:`{国别或集团}_{品牌}.json`,如 `jp_toyota.json`、`de_vw_group.json`、`cn_byd.json`。
- 每个文件顶层为 `{"models": [...]}`。
- 每款车型至少包含:`id`、`brand`、`names{en,zh-CN,zh-TW,ja}`、`segment`、`body_style`、`powertrain`、`status`、`years`、`note`。
- 停产车型保留在文件中,`status: "discontinued"`,并在 `note` 中注明停产年份。
- 名称不确定时,`verified: "pending"` 并登记到 `pending_verification.json`。

示例条目:

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
  "note": "全球累计销量最高车型;雷凌为大陆姊妹名",
  "verified": "verified"
}
```

---

## 6. 专业术语分类(glossary 的 10 大类别)

| 类别 `category` | 含义 | 条目数 |
|-----------------|------|--------|
| `powertrain` | 动力系统 | 10 |
| `transmission` | 传动系统 | 8 |
| `chassis` | 底盘与悬架 | 7 |
| `braking` | 制动系统 | 7 |
| `safety` | 电子与安全系统 | 8 |
| `driver_assist` | 驾驶辅助 | 6 |
| `new_energy` | 新能源 | 6 |
| `body` | 车身与结构 | 7 |
| `lighting_comfort` | 照明与舒适 | 5 |
| `tire_wheel` | 轮胎与车轮 | 8 |

> 注意:ESP/ESC/VSC/VSA/DSC 为同一功能(车身稳定控制)在不同厂商的命名,表中统一列出并注释。

---

## 7. 构建与校验

```bash
# 校验 data/ 数据完整性(引用、ID 唯一性、语言键)
python3 scripts/validate.py

# 合并 data/ → dist/(生成 json + md)
python3 scripts/build.py
```

提交 PR 前请务必运行 `validate.py`,确保通过。

---

## 8. AI 调用指南

### 8.1 常规用法

```text
1. 读取 dist/vehicle-names-database.json,按其 meta.schema_version 确认结构版本。
2. 需要某术语多语言名称时,检索 glossary.terms 中 name 字段。
3. 需要某车型的各地市场名称时,先查 models.list,再查 models.cross_market 是否有异名。
4. 需要某品牌名时,检索 brands(注意国别与台湾/日本差异)。
5. 翻译或命名类任务请先查本库,未收录的名词参考 pending_verification 与维护规范补充。
```

### 8.2 典型易错点(供 AI 生成内容时规避)

- 丰田:大陆「荣放 / 威兰达」为姊妹车名,台湾直接用 `RAV4`;「威驰」是大陆名,台湾用 `Vios`。
- 本田:大陆「飞度」,欧洲/港澳叫 `Jazz`;台湾 Civic 俗称「喜美」。
- 马自达:日本旧名 `デミオ/アクセラ/アテンザ/ロードスター`,2019 年后日本也统一为 `MAZDA2/3/6` 与 `Roadster`。
- 奔驰/大众/沃尔沃/英菲尼迪/斯巴鲁/雷克萨斯等品牌在两岸三地译名差异大(賓士/福斯/富豪/無限/速霸陸/凌志),生成繁体内容时务必区分。
- 日本轻自动车(K-car)有严格尺寸/排量限制(`vehicle_classes.jp_categories`),不可与「微型车」混为一谈。
- 车型数据区分现售(`current`)与停产(`discontinued`),引用历史车型时注意核对生产年份。

---

## 9. 数据来源与免责声明

- **标准类**:GB/T 3730.1-2001/2022、GB/T 19596(新能源)、日本《道路运输车辆法》(軽自動車規格 1998 年改定)、美国 40 CFR 600.315-08(EPA 分类)、欧盟委员会分段(A–F)等。
- **机构类**:日本国土交通省、EPA / NHTSA / IIHS、Euro NCAP、JAMA(日本汽车工业会)、C-NCAP。
- **资料类**:日文/英文维基百科(車種別・ブランド別)、两岸三地译名对比专文、各品牌官网与台湾总代理(和泰、裕隆、中华三菱等)官方文案。
- **局限**:分级数值(如 A00–D 的轴距区间)为行业通行口径,非强制标准;个别条目已列入 `pending_verification` 待复核。数据仅供学习、翻译与检索参考,正式出版物请以官方口径复核。

完整的责任与隐私说明见 [DISCLAIMER.md](DISCLAIMER.md) 与 [PRIVACY.md](PRIVACY.md)。

---

## 10. 更新说明 / Release Notes

**v1.2.0(2026-08-10)— 海外市场车型补充与数据清理**,核心更新:

- **新增铃木印度/东南亚车型**:Maruti Suzuki 印度市场 12 款(Dzire、Vitara Brezza、S-Presso、Fronx、Ciaz 等)+ 印尼 APV;大发东南亚 6 款(Ayla、Sigra、Xenia、Luxio、Gran Max、Sirion)。
- **数据清理**:删除 190 条补录脚本误加的未核实条目(概念车/赛车/重复/归属错误),保证数据质量。
- **统计修正**:车型统计与 dist 产物对齐,车型总数 2041 → 3030。

**v1.1.0(2026-08-09)— 首个正式发布版本**,核心更新:

- **数据规模**:品牌 63 → 164(覆盖 16 国分组),车型 84 → 2041(含 1955 年以来历史车型与在售车型)。
- **开源化**:CC BY-SA 4.0 许可、行为准则/安全/隐私/免责声明文档、中英贡献指南,以及 GitHub Issue/PR 模板与 CI 校验工作流。
- **项目结构**:数据按 `data/` 拆分,构建与校验脚本 `scripts/build.py` / `scripts/validate.py`,产物输出 `dist/`。
- **字段增强**:车型新增 `status`(current/discontinued/concept) 与 `years`(生产年份)。

### 变更记录 / Changelog

见 [CHANGELOG.md](CHANGELOG.md)。

| 版本 | 日期 | 说明 |
|------|------|------|
| 1.2.0 | 2026-08-10 | 补充铃木印度/东南亚与大发东南亚车型;清理补录垃圾条目;车型 2041 → 3030 |
| 1.1.0 | 2026-08-09 | 项目 vehiclename + vehicle-names-database 国际化命名;开源化改造(许可证/CI/模板);品牌扩充至 164、车型扩充至 2041 |
| 1.0.0 | 2026-08-09 | 初始版本:级别体系、72 条术语、63 品牌、84 车型、24 组异名对照 |

## 仓库维护文档

仓库级开发、验证和官网部署请见[文档索引](../docs/README.md)。数据源仍在本目录，独立官网源码位于仓库根目录 `website/`。
