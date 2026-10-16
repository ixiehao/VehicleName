# vehiclename — 多语言汽车车名资料库

> 面向 AI 与人类的 4 语言(en / zh-CN / zh-TW / ja)汽车名词资料库:车型、品牌、术语、级别分类与跨市场异名。

语言 / Languages: [English](vehicle-names-database/README.en.md) · [简体中文](vehicle-names-database/README.md) · [繁體中文](vehicle-names-database/README.zh-TW.md) · [日本語](vehicle-names-database/README.ja.md)

![Data version](https://img.shields.io/badge/data-v1.2.0-2ea44f)
![Brands](https://img.shields.io/badge/brands-164-blue)
![Models](https://img.shields.io/badge/models-3030-blue)
![License](https://img.shields.io/badge/license-CC%20BY--SA%204.0-lightgrey)
![CI](https://img.shields.io/github/actions/workflow/status/ixiehao/vehicle-name/validate.yml?label=validate)

<p align="center">
  <img src="vehicle-names-database/assets/banner.jpg" alt="vehiclename" width="100%" />
</p>

## 开源信息

| 项目 | 内容 |
|------|------|
| 许可证 | [CC BY-SA 4.0](LICENSE)(署名—相同方式共享) |
| 协作 | 欢迎全球网友参与补充与修改:[贡献指南](vehicle-names-database/CONTRIBUTING.md)([English](vehicle-names-database/CONTRIBUTING.en.md)) |
| 责任 | [免责声明](vehicle-names-database/DISCLAIMER.md) · [隐私声明](vehicle-names-database/PRIVACY.md) |
| 安全 | [SECURITY.md](vehicle-names-database/SECURITY.md) · [CODE_OF_CONDUCT.md](vehicle-names-database/CODE_OF_CONDUCT.md) |
| 变更记录 | [CHANGELOG.md](vehicle-names-database/CHANGELOG.md) |
| 官网 | [ixiehao.github.io/vehicle-name](https://ixiehao.github.io/vehicle-name/) — 四语车型名称快速检索 |
| 仓库 | [github.com/ixiehao/vehicle-name](https://github.com/ixiehao/vehicle-name) |

## 项目结构

```
vehiclename/
├── LICENSE                     # CC BY-SA 4.0
├── .github/
│   ├── workflows/validate.yml  # GitHub Actions:数据校验 + dist 同步检查
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ISSUE_TEMPLATE/         # bug_report / data_correction
└── vehicle-names-database/    # 数据包(核心内容)
    ├── data/                   # 数据源(唯一事实来源,按品牌拆分)
    ├── scripts/                # build.py / validate.py
    ├── dist/                   # 构建产物(合并版 JSON + MD)
    └── README.md / CONTRIBUTING.md / DISCLAIMER.md / PRIVACY.md ...
```

## 快速开始

```bash
cd vehicle-names-database
python3 scripts/validate.py   # 校验数据
python3 scripts/build.py      # 生成 dist/ 合并产物
```

## 免责声明

本资料库仅用于学习、翻译与检索参考,数据整理自公开资料,不保证完全准确,正式使用请以官方口径复核。详见 [DISCLAIMER.md](vehicle-names-database/DISCLAIMER.md)。
