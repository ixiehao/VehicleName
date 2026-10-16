(() => {
  const site = "https://ixiehao.github.io/vehicle-name/";
  const supported = ["en", "zh-CN", "zh-TW", "ja"];
  const requested = new URLSearchParams(location.search).get("lang");
  const lang = supported.includes(requested) ? requested : "zh-CN";
  const copy = {
    en: {
      title: "Find the right vehicle name — in every market.", eyebrow: "GLOBAL AUTOMOTIVE REFERENCE · FOUR LANGUAGES",
      intro: "Search verified model names, regional variants, production years, and status across English, Simplified Chinese, Traditional Chinese, and Japanese.",
      browse: "Search the directory", source: "Explore the data on GitHub", brands: "GLOBAL BRANDS", models: "VEHICLE MODELS", terms: "AUTOMOTIVE TERMS", aliases: "MARKET ALIASES",
      directory: "Search the model directory", guide: "Search any name, brand, or model ID. Filter by brand and status; press / to focus search.", search: "Search", brand: "Brand", status: "Status", reset: "Reset", allBrands: "All brands", allStatus: "All statuses", current: "Current", discontinued: "Discontinued", concept: "Concept", years: "YEARS", previous: "Previous", next: "Next", scroll: "Scroll horizontally to see every language and the complete production-year range.", trust: "Structured data · CC BY-SA 4.0 · Verify formal names with each manufacturer.", desc: "Search 3,030 vehicle model names in English, Simplified Chinese, Traditional Chinese, and Japanese.", meta: "Multilingual Car Model Names | Vehicle Name Database"
    },
    "zh-CN": {
      title: "一眼查清每个市场的车型名称。", eyebrow: "全球汽车资料 · 四种语言",
      intro: "面向人类与 AI 的结构化汽车名称索引。四语检索官方名称、地区异名、生产年份与车型状态。",
      browse: "开始检索车型", source: "在 GitHub 查看数据", brands: "全球品牌", models: "收录车型", terms: "汽车术语", aliases: "跨市场异名",
      directory: "检索车型目录", guide: "输入任意语言名称、品牌或数据 ID；可按品牌与状态缩小范围。按 / 可快速聚焦搜索框。", search: "搜索", brand: "品牌", status: "状态", reset: "重置", allBrands: "全部品牌", allStatus: "全部状态", current: "在售", discontinued: "停产", concept: "概念", years: "年份", previous: "上一页", next: "下一页", scroll: "左右滚动即可完整查看四种语言和生产年份，所有列均不会被截断。", trust: "结构化数据 · CC BY-SA 4.0 · 正式名称请以制造商公布信息为准。", desc: "面向人类与 AI 的四语汽车名称资料库，收录 3,030 款车型的英文、简体中文、繁体中文与日语名称。", meta: "汽车名称资料库｜四语车型名称速查"
    },
    "zh-TW": {
      title: "一次查清各市場的車型名稱。", eyebrow: "全球汽車資料 · 四種語言",
      intro: "供人類與 AI 使用的結構化汽車名稱索引。以四種語言檢索正式名稱、地區異名、生產年份與車型狀態。",
      browse: "開始搜尋車型", source: "在 GitHub 查看資料", brands: "全球品牌", models: "收錄車型", terms: "汽車術語", aliases: "跨市場異名",
      directory: "搜尋車型目錄", guide: "輸入任一語言名稱、品牌或資料 ID；可依品牌與狀態縮小範圍。按 / 可快速聚焦搜尋框。", search: "搜尋", brand: "品牌", status: "狀態", reset: "重設", allBrands: "全部品牌", allStatus: "全部狀態", current: "現售", discontinued: "停產", concept: "概念", years: "年份", previous: "上一頁", next: "下一頁", scroll: "左右捲動即可完整查看四種語言與生產年份，所有欄位均不會被截斷。", trust: "結構化資料 · CC BY-SA 4.0 · 正式名稱請以製造商公布資訊為準。", desc: "供人類與 AI 使用的四語汽車名稱資料庫，收錄 3,030 款車型的英文、簡體中文、繁體中文與日文名稱。", meta: "汽車名稱資料庫｜四語車型名稱速查"
    },
    ja: {
      title: "どの市場でも、正しい車名へ。", eyebrow: "グローバル自動車リファレンス · 4言語",
      intro: "人と AI のための構造化された自動車名称インデックスです。正式名称、地域別名称、生産年、販売状況を4言語で検索できます。",
      browse: "車種を検索", source: "GitHub でデータを見る", brands: "登録ブランド", models: "収録車種", terms: "自動車用語", aliases: "市場別別名",
      directory: "車種を検索", guide: "任意の言語の名称、ブランド、またはデータ ID を入力してください。ブランドと販売状況でも絞り込めます。/ キーで検索欄に移動します。", search: "検索", brand: "ブランド", status: "販売状況", reset: "リセット", allBrands: "すべてのブランド", allStatus: "すべて", current: "販売中", discontinued: "生産終了", concept: "コンセプト", years: "生産年", previous: "前へ", next: "次へ", scroll: "左右にスクロールすると、4言語と生産年を省略せずに確認できます。", trust: "構造化データ · CC BY-SA 4.0 · 正式名称はメーカーの情報をご確認ください。", desc: "英語・簡体字中国語・繁体字中国語・日本語で3,030車種を検索できる自動車名称データベース。", meta: "車名データベース｜4言語対応の自動車名称検索"
    }
  };
  const t = copy[lang];
  const $ = (selector) => document.querySelector(selector);
  const set = (selector, value) => { const node = $(selector); if (node) node.textContent = value; };
  const label = (selector, value) => { const node = $(selector); if (node && node.firstChild) node.firstChild.nodeValue = `${value} `; };
  const css = `
    .promotion-hero{color:#fff;background:linear-gradient(120deg,#102d63,#2c62c9)}.promotion-hero .wrap{position:relative;padding:4rem 0 4.4rem}.promotion-hero .wrap:after{position:absolute;right:-10rem;top:-15rem;width:34rem;height:34rem;border:1px solid rgba(255,255,255,.17);border-radius:50%;box-shadow:0 0 0 5rem rgba(255,255,255,.025);content:""}.promotion-content{position:relative;z-index:1;max-width:51rem}.promotion-eyebrow{margin:0 0 .8rem;color:#bdd4ff;font-size:.7rem;font-weight:850;letter-spacing:.15em}.promotion-hero h1{margin:0;font-size:clamp(2.3rem,5vw,4.2rem);font-weight:800;letter-spacing:-.06em;line-height:1}.promotion-copy{max-width:44rem;margin:1.1rem 0 0;color:#dae6fb;font-size:clamp(1rem,1.5vw,1.12rem);line-height:1.75}.promotion-actions{display:flex;flex-wrap:wrap;gap:.7rem;margin-top:1.7rem}.promotion-button{display:inline-flex;align-items:center;min-height:2.75rem;padding:.6rem 1rem;border:1px solid transparent;border-radius:.62rem;font-size:.84rem;font-weight:800;text-decoration:none}.promotion-button.primary{color:#173d89;background:#fff}.promotion-button.secondary{border-color:rgba(255,255,255,.3);color:#fff;background:rgba(255,255,255,.07)}.promo-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;overflow:hidden;margin:2rem 0 3.6rem;border:1px solid var(--line);border-radius:var(--radius);background:var(--line);box-shadow:var(--shadow)}.promo-stat{min-width:0;padding:1.25rem;background:var(--paper)}.promo-stat small{display:block;color:var(--muted);font-size:.66rem;font-weight:800;letter-spacing:.08em}.promo-stat strong{display:block;margin-top:.52rem;color:var(--blue-dark);font-size:clamp(1.55rem,2.5vw,2.25rem);letter-spacing:-.04em;font-variant-numeric:tabular-nums}.promo-trust{margin:-2.7rem 0 3.2rem;color:var(--muted);font-size:.78rem}.top-actions{display:flex;align-items:center;gap:.5rem}.locale-nav{display:flex;gap:.22rem}.locale-nav a{display:inline-flex;align-items:center;min-height:2.25rem;padding:0 .45rem;border:1px solid #d5e1fa;border-radius:.45rem;color:#315aab;background:#fff;font-size:.68rem;font-weight:800;text-decoration:none}.locale-nav a[aria-current="page"]{color:#fff;background:var(--blue);border-color:var(--blue)}@media(max-width:900px){.promo-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.promotion-hero .wrap{padding:2.7rem 0 3.3rem}.promotion-hero .wrap:after{right:-23rem}.promo-stats{margin:1.4rem 0 2.9rem}.promo-stat{padding:1rem}.promo-trust{margin:-2.15rem 0 2.6rem}.repo-link{display:none}}`;
  document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);
  document.documentElement.lang = lang;
  document.title = t.meta;
  const canonical = `${site}?lang=${encodeURIComponent(lang)}`;
  $("#canonical").href = canonical; $("#og-url").content = canonical;
  ["#meta-description", "#og-description", "#twitter-description"].forEach((id) => { $(id).content = t.desc; });
  ["#og-title", "#twitter-title"].forEach((id) => { $(id).content = t.meta; });
  const schema = {"@context":"https://schema.org","@type":"Dataset",name:"Vehicle Name Database",description:t.desc,url:canonical,sameAs:"https://github.com/ixiehao/vehicle-name",license:"https://creativecommons.org/licenses/by-sa/4.0/",inLanguage:supported};
  document.head.insertAdjacentHTML("beforeend", `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`);
  const nav = `<nav class="locale-nav" aria-label="Language"><a href="?lang=en"${lang === "en" ? " aria-current=\"page\"" : ""}>EN</a><a href="?lang=zh-CN"${lang === "zh-CN" ? " aria-current=\"page\"" : ""}>简</a><a href="?lang=zh-TW"${lang === "zh-TW" ? " aria-current=\"page\"" : ""}>繁</a><a href="?lang=ja"${lang === "ja" ? " aria-current=\"page\"" : ""}>日</a></nav>`;
  $(".repository-link").insertAdjacentHTML("beforebegin", nav);
  $("main").insertAdjacentHTML("beforebegin", `<section class="promotion-hero"><div class="wrap"><div class="promotion-content"><p class="promotion-eyebrow">${t.eyebrow}</p><h1>${t.title}</h1><p class="promotion-copy">${t.intro}</p><div class="promotion-actions"><a class="promotion-button primary" href="#directory">${t.browse}</a><a class="promotion-button secondary" href="https://github.com/ixiehao/vehicle-name#readme" target="_blank" rel="noreferrer">${t.source}</a></div></div></div></section>`);
  $("main").insertAdjacentHTML("afterbegin", `<section class="promo-stats" aria-label="Database overview"><div class="promo-stat"><small>${t.brands}</small><strong id="promo-brands">—</strong></div><div class="promo-stat"><small>${t.models}</small><strong id="promo-models">—</strong></div><div class="promo-stat"><small>${t.terms}</small><strong id="promo-terms">—</strong></div><div class="promo-stat"><small>${t.aliases}</small><strong id="promo-aliases">—</strong></div></section><p class="promo-trust" id="promo-trust">${t.trust}</p>`);
  $(".page-title").closest("section").id = "directory";
  set(".overline", t.directory); set(".page-title h1", t.directory); $(".page-title p").textContent = t.guide;
  label("label[for=query]", t.search); $("#query").placeholder = lang === "ja" ? "Corolla · カローラ · 卡罗拉 · Toyota" : "Corolla · 卡罗拉 · カローラ · Toyota";
  label("label[for=brand]", t.brand); label("label[for=status]", t.status); set("#reset", t.reset); set("#previous", t.previous); set("#next", t.next); set("th:last-child", t.years);
  $(".directory").setAttribute("aria-label", t.directory);
  $(".language-key").setAttribute("aria-label", "English · 简体中文 · 繁體中文 · 日本語");
  const translateRuntime = () => {
    const allBrands = $("#brand option[value='']");
    if (allBrands) allBrands.textContent = t.allBrands;
    const options = {"":t.allStatus,current:t.current,discontinued:t.discontinued,concept:t.concept};
    document.querySelectorAll("#status option").forEach((option) => { option.textContent = options[option.value] || option.textContent; });
    document.querySelectorAll(".status").forEach((badge) => { badge.textContent = t[badge.classList.contains("discontinued") ? "discontinued" : badge.classList.contains("concept") ? "concept" : "current"]; });
  };
  new MutationObserver(translateRuntime).observe($("#rows"), {childList:true, subtree:true});
  fetch("./data/vehicle-names-preview.json", {cache:"no-cache"}).then((response) => response.json()).then((data) => {
    const coverage = data.meta?.coverage || {};
    set("#promo-brands", (coverage.brands ?? data.brands?.length ?? 0).toLocaleString());
    set("#promo-models", (coverage.models ?? data.models?.list?.length ?? 0).toLocaleString());
    set("#promo-terms", (coverage.glossary_terms ?? data.glossary?.terms?.length ?? 0).toLocaleString());
    set("#promo-aliases", (coverage.cross_market_aliases ?? data.models?.cross_market?.length ?? 0).toLocaleString());
    $("#promo-trust").textContent = `${t.trust} Data v${data.meta?.database_version || "—"} · ${data.meta?.updated || "—"}`;
  }).catch(() => {});
})();
