# VehicleName 开发与数据维护

[文档索引](README.md) · [贡献指南](../vehicle-names-database/CONTRIBUTING.md)

## 环境与目录

使用 Python 3.11（与 CI 对齐）。官网使用原生 HTML / JavaScript，无 npm 构建依赖。

- `vehicle-names-database/data/`：权威数据源。
- `vehicle-names-database/scripts/`：校验、数据构建和官网预览脚本。
- `vehicle-names-database/dist/`：跟踪在仓库中的生成数据。
- `vehicle-names-database/README*.md` 等：数据包多语言说明与政策。
- `website/`：官网源码；`docs/`：仓库级开发、验证与部署指南。

## 维护顺序

核对来源及四语言名称 → 修改源数据 → 验证 → 重建分发数据 → 审查差异 → 预览官网。保持 ID、品牌/分类引用及核验状态一致，不手改 `dist/` 绕过源数据。

## 验证与构建

以下命令从**仓库根目录**运行：

```sh
python3 vehicle-names-database/scripts/validate.py
python3 vehicle-names-database/scripts/build.py
git diff -- vehicle-names-database/dist
git diff --check
```

嵌套数据包的 README 使用 `cd vehicle-names-database` 后的相对命令，两者等价，不要混用工作目录。构建会更新分发文件；提交源数据时审查并同步这些生成结果。

## 官网与发布

[WEBSITE.md](WEBSITE.md) 说明如何把官网源码、完整数据和预览数据组成 Pages 产物。纯文档/目录迁移不改变数据版本、许可证或公开 URL。字段、来源、贡献和许可细则继续使用嵌套数据包的独立文档。
