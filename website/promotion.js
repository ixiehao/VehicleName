(() => {
  "use strict";

  const site = "https://ixiehao.github.io/VehicleName/";
  const supported = ["en", "zh-CN", "zh-TW", "ja"];
  const requested = new URLSearchParams(location.search).get("lang");
  const lang = supported.includes(requested) ? requested : "zh-CN";
  const copy = {
    en: {
      meta: "VehicleName | A multilingual vehicle name index", desc: "Search 3,030 vehicle models across English, Simplified Chinese, Traditional Chinese, and Japanese.",
      eyebrow: "GLOBAL VEHICLE NAME INDEX · FOUR LANGUAGES", title: "One vehicle. Different markets. Different names.", intro: "Find and compare vehicle names across English, Simplified Chinese, Traditional Chinese, and Japanese by model, brand, or record ID.",
      searchLabel: "Search a model, brand, year, or record ID", searchHint: "Search any of the four name languages, brand, model year, or record ID.", placeholder: "Corolla · 卡罗拉 · カローラ · Toyota",
      overviewKicker: "THE INDEX", overviewTitle: "Database at a glance", models: "models", brands: "Brands", terms: "Glossary terms", aliases: "Market aliases", updated: "Data updated",
      directoryEyebrow: "MODEL SEARCH", directory: "Vehicle directory", directoryCopy: "Compare four-language names and filter by brand or sales status. Press / to focus search.",
      brand: "Brand", status: "Sales status", reset: "Clear filters", loading: "Loading vehicle names…", loadingLabel: "Loading…",
      resultCount: (start, end, total) => `Showing ${start}–${end} of ${total} models`,
      previewCountLoading: (count, remaining) => `Showing ${count} preview models · ${remaining} more are loading.`,
      previewCountFailed: (count) => `Showing ${count} preview models · the full dataset could not load.`,
      previewEmptyLoading: "No match in the preview yet; the full dataset is still loading.", previewEmptyFailed: "No match in the preview. The full dataset could not load.",
      noResults: "No models match these filters.", emptyTitle: "No matching models", emptyBody: "Try another spelling or clear your filters.",
      loadFailed: "The database could not be loaded.", loadFailedHint: "Check your connection and try again.", retry: "Retry loading", missing: "Not listed", unknownBrand: "Unknown brand", years: "Years",
      languageLabels: ["English", "Simplified Chinese", "Traditional Chinese", "Japanese"], languageNav: "Choose language", languageKey: "Available name languages",
      skipLink: "Skip to vehicle directory", repository: "GitHub", dataLink: "Data & methodology", trustTitle: "A reference, not a substitute for manufacturer information",
      trust: "Regional names and sales status can change by market and over time. Confirm official naming with the manufacturer.",
      tableCaption: (count) => `Vehicle brands, ${count} four-language model names, and production years`, tableBrand: "Brand / ID",
      pageLabel: (page, pages) => `Page ${page} of ${pages}`, previous: "Previous", next: "Next", footerVersion: (version, date) => `Data v${version} · Updated ${date}`,
      license: "CC BY-SA 4.0", statuses: { current: "Current", discontinued: "Discontinued", concept: "Concept" }
    },
    "zh-CN": {
      meta: "汽车名称资料库｜VehicleName 四语车型速查", desc: "四语汽车名称资料库，收录 3,030 款车型，支持英文、简体中文、繁体中文与日文检索。",
      eyebrow: "全球汽车名称索引 · 四种语言", title: "同一款车，换个市场就换个名字。", intro: "按车型、品牌或数据编号检索，核对不同市场的英文、简体中文、繁体中文与日文车名。",
      searchLabel: "搜索车型、品牌、年份或数据编号", searchHint: "输入任一语言车名、品牌、年份或数据编号开始查找。", placeholder: "Corolla · 卡罗拉 · カローラ · Toyota",
      overviewKicker: "THE INDEX", overviewTitle: "资料库概览", models: "款车型", brands: "品牌", terms: "汽车术语", aliases: "跨市场异名", updated: "数据更新",
      directoryEyebrow: "车型检索", directory: "车型目录", directoryCopy: "并列对照四语车名，并按品牌或销售状态筛选。按 / 可快速聚焦搜索框。",
      brand: "品牌", status: "销售状态", reset: "清除条件", loading: "正在载入汽车名称…", loadingLabel: "正在载入…",
      resultCount: (start, end, total) => `显示第 ${start}–${end} 条，共 ${total} 款车型`,
      previewCountLoading: (count, remaining) => `当前显示 ${count} 条预览数据 · 另有 ${remaining} 条正在载入。`,
      previewCountFailed: (count) => `当前显示 ${count} 条预览数据 · 完整资料载入失败。`,
      previewEmptyLoading: "预览资料中暂未找到，完整资料仍在载入。", previewEmptyFailed: "预览资料中未找到，完整资料也未能载入。",
      noResults: "没有符合条件的车型。", emptyTitle: "没有找到匹配车型", emptyBody: "试试其他拼写，或清除筛选条件。",
      loadFailed: "暂时无法载入资料库。", loadFailedHint: "请检查网络连接后重试。", retry: "重新载入", missing: "尚未收录", unknownBrand: "未知品牌", years: "生产年份",
      languageLabels: ["英文", "简体中文", "繁体中文", "日文"], languageNav: "切换界面语言", languageKey: "名称提供语言",
      skipLink: "跳到车型目录", repository: "GitHub", dataLink: "数据与方法", trustTitle: "检索参考，不替代厂商信息",
      trust: "地区名称与销售状态可能随市场和时间变化；正式用名请以制造商公布的信息为准。",
      tableCaption: (count) => `汽车品牌、${count} 款车型的四语名称与生产年份`, tableBrand: "品牌 / ID",
      pageLabel: (page, pages) => `第 ${page} / ${pages} 页`, previous: "上一页", next: "下一页", footerVersion: (version, date) => `数据版本 ${version} · 更新于 ${date}`,
      license: "CC BY-SA 4.0", statuses: { current: "在售", discontinued: "停产", concept: "概念" }
    },
    "zh-TW": {
      meta: "汽車名稱資料庫｜VehicleName 四語車型速查", desc: "四語汽車名稱資料庫，收錄 3,030 款車型，支援英文、簡體中文、繁體中文與日文搜尋。",
      eyebrow: "全球汽車名稱索引 · 四種語言", title: "同一款車，換個市場就換個名字。", intro: "依車型、品牌或資料編號搜尋，核對不同市場的英文、簡體中文、繁體中文與日文車名。",
      searchLabel: "搜尋車型、品牌、年份或資料編號", searchHint: "輸入任一語言車名、品牌、年份或資料編號即可查找。", placeholder: "Corolla · 卡羅拉 · カローラ · Toyota",
      overviewKicker: "THE INDEX", overviewTitle: "資料庫概覽", models: "款車型", brands: "品牌", terms: "汽車術語", aliases: "跨市場異名", updated: "資料更新",
      directoryEyebrow: "車型搜尋", directory: "車型目錄", directoryCopy: "並列對照四語車名，並依品牌或銷售狀態篩選。按 / 可快速聚焦搜尋框。",
      brand: "品牌", status: "銷售狀態", reset: "清除條件", loading: "正在載入汽車名稱…", loadingLabel: "正在載入…",
      resultCount: (start, end, total) => `顯示第 ${start}–${end} 筆，共 ${total} 款車型`,
      previewCountLoading: (count, remaining) => `目前顯示 ${count} 筆預覽資料 · 另有 ${remaining} 筆正在載入。`,
      previewCountFailed: (count) => `目前顯示 ${count} 筆預覽資料 · 完整資料載入失敗。`,
      previewEmptyLoading: "預覽資料中尚未找到，完整資料仍在載入。", previewEmptyFailed: "預覽資料中未找到，完整資料也無法載入。",
      noResults: "沒有符合條件的車型。", emptyTitle: "找不到符合的車型", emptyBody: "試試其他拼法，或清除篩選條件。",
      loadFailed: "目前無法載入資料庫。", loadFailedHint: "請檢查網路連線後再試一次。", retry: "重新載入", missing: "尚未收錄", unknownBrand: "未知品牌", years: "生產年份",
      languageLabels: ["英文", "簡體中文", "繁體中文", "日文"], languageNav: "切換介面語言", languageKey: "名稱提供語言",
      skipLink: "跳至車型目錄", repository: "GitHub", dataLink: "資料與方法", trustTitle: "供查找參考，不取代廠商資訊",
      trust: "地區名稱與銷售狀態可能隨市場和時間變化；正式名稱請以製造商公布的資訊為準。",
      tableCaption: (count) => `汽車品牌、${count} 款車型的四語名稱與生產年份`, tableBrand: "品牌 / ID",
      pageLabel: (page, pages) => `第 ${page} / ${pages} 頁`, previous: "上一頁", next: "下一頁", footerVersion: (version, date) => `資料版本 ${version} · 更新於 ${date}`,
      license: "CC BY-SA 4.0", statuses: { current: "現售", discontinued: "停產", concept: "概念" }
    },
    ja: {
      meta: "車名データベース｜VehicleName 4言語対応", desc: "英語・簡体字中国語・繁体字中国語・日本語で3,030車種を検索できる自動車名称データベース。",
      eyebrow: "世界の車名インデックス · 4言語", title: "同じ車でも、市場が変われば名前も変わる。", intro: "車種、ブランド、データ ID から、英語・簡体字中国語・繁体字中国語・日本語の車名を検索・比較できます。",
      searchLabel: "車種、ブランド、年式、またはデータ ID を検索", searchHint: "4言語の車名、ブランド、年式、データ ID で検索できます。", placeholder: "Corolla · カローラ · 卡罗拉 · Toyota",
      overviewKicker: "THE INDEX", overviewTitle: "データベース概要", models: "車種", brands: "ブランド", terms: "自動車用語", aliases: "市場別名称", updated: "データ更新日",
      directoryEyebrow: "車名検索", directory: "車種一覧", directoryCopy: "4言語の車名を並べて比較。ブランドや販売状況で絞り込めます。/ キーで検索欄に移動します。",
      brand: "ブランド", status: "販売状況", reset: "条件をクリア", loading: "車名データを読み込んでいます…", loadingLabel: "読み込み中…",
      resultCount: (start, end, total) => `${total}車種中 ${start}〜${end}件を表示`,
      previewCountLoading: (count, remaining) => `プレビュー ${count}件を表示中 · 残り ${remaining}件を読み込み中です。`,
      previewCountFailed: (count) => `プレビュー ${count}件を表示中 · 全データを読み込めませんでした。`,
      previewEmptyLoading: "プレビューでは見つかりません。全データを読み込み中です。", previewEmptyFailed: "プレビューでは見つからず、全データも読み込めませんでした。",
      noResults: "条件に一致する車種はありません。", emptyTitle: "一致する車種がありません", emptyBody: "別の表記を試すか、絞り込みを解除してください。",
      loadFailed: "データベースを読み込めませんでした。", loadFailedHint: "ネットワークを確認して、もう一度お試しください。", retry: "再読み込み", missing: "未収録", unknownBrand: "不明なブランド", years: "生産年",
      languageLabels: ["英語", "簡体字中国語", "繁体字中国語", "日本語"], languageNav: "表示言語を選択", languageKey: "名称の対応言語",
      skipLink: "車種一覧へ移動", repository: "GitHub", dataLink: "データと方法", trustTitle: "検索の参考情報です。メーカー情報もご確認ください",
      trust: "地域名や販売状況は市場や時期によって異なる場合があります。正式名称はメーカーの情報をご確認ください。",
      tableCaption: (count) => `自動車ブランド、${count}車種の4言語名と生産年`, tableBrand: "ブランド / ID",
      pageLabel: (page, pages) => `${pages}ページ中 ${page}ページ`, previous: "前へ", next: "次へ", footerVersion: (version, date) => `データ ${version} · 更新日 ${date}`,
      license: "CC BY-SA 4.0", statuses: { current: "販売中", discontinued: "生産終了", concept: "コンセプト" }
    }
  };

  const t = copy[lang];
  const setText = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };
  document.documentElement.lang = lang;
  document.title = t.meta;
  window.siteLanguage = lang;
  window.siteCopy = t;
  const canonical = site + "?lang=" + encodeURIComponent(lang);
  document.querySelector("#canonical").href = canonical;
  document.querySelector("#og-url").content = canonical;
  ["#meta-description", "#og-description", "#twitter-description"].forEach((selector) => { document.querySelector(selector).content = t.desc; });
  ["#og-title", "#twitter-title"].forEach((selector) => { document.querySelector(selector).content = t.meta; });

  const schema = { "@context": "https://schema.org", "@type": "Dataset", name: "VehicleName", description: t.desc, url: canonical,
    sameAs: "https://github.com/ixiehao/VehicleName", license: "https://creativecommons.org/licenses/by-sa/4.0/", inLanguage: supported };
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify(schema);
  document.head.append(schemaScript);

  const labels = {
    "#brand-caption": lang === "en" ? "Multilingual vehicle name index" : lang === "ja" ? "多言語車名データベース" : lang === "zh-TW" ? "多語汽車名稱資料庫" : "汽车名称资料库",
    "#eyebrow": t.eyebrow, "#hero-title": t.title, "#hero-description": t.intro, "#search-label": t.searchLabel, "#search-hint": t.searchHint,
    "#overview-kicker": t.overviewKicker, "#overview-title": t.overviewTitle, "#model-count-label": t.models, "#brand-count-label": t.brands,
    "#term-count-label": t.terms, "#alias-count-label": t.aliases, "#updated-count-label": t.updated,
    "#directory-eyebrow": t.directoryEyebrow, "#directory-title": t.directory, "#directory-copy": t.directoryCopy,
    "#brand-label": t.brand, "#status-label": t.status, "#reset": t.reset, "#loading-label": t.loadingLabel,
    "#heading-brand": t.tableBrand, "#heading-years": t.years, "#retry-load": t.retry, "#skip-link": t.skipLink,
    "#repository-label": t.repository, "#data-link-label": t.dataLink, "#trust-title": t.trustTitle, "#footer-note": t.trust,
    "#license-link": t.license, "#previous": t.previous, "#next": t.next
  };
  Object.entries(labels).forEach(([selector, value]) => setText(selector, value));
  document.querySelector("#query").placeholder = t.placeholder;
  document.querySelector("#language-nav").setAttribute("aria-label", t.languageNav);
  document.querySelector("#language-key").setAttribute("aria-label", t.languageKey);
  document.querySelector("#repository-link").setAttribute("aria-label", t.repository);
  document.querySelector(".filters").setAttribute("aria-label", t.status + " and " + t.brand);
  document.querySelector("#pagination").setAttribute("aria-label", t.directory + " pagination");
  document.querySelectorAll("#language-nav a[data-language]").forEach((anchor) => {
    const url = new URL(location.href);
    const code = anchor.dataset.language;
    url.searchParams.set("lang", code);
    anchor.href = url.pathname + url.search + url.hash;
    if (code === lang) anchor.setAttribute("aria-current", "page"); else anchor.removeAttribute("aria-current");
  });
  document.querySelectorAll("#status option").forEach((option) => {
    const values = { "": lang === "en" ? "All statuses" : lang === "ja" ? "すべて" : lang === "zh-TW" ? "全部狀態" : "全部状态", ...t.statuses };
    if (values[option.value]) option.textContent = values[option.value];
  });
})();
