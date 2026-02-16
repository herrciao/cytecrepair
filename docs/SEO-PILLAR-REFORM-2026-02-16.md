# 5 Axis Head Repair — SEO Pillar 重大改革提案

**提案日期**：2026 年 2 月 16 日  
**提案性質**：重大架構改革 — 從單一 Lead Gen 網站升級為 M21 技術知識中心  
**Git 備份**：改革前已建立 `pre-seo-pillar-reform-2026-02-16` tag 保存完整現狀

---

## 一、改革目的

將網站從「單一轉換頁面」升級為「Cytec M21 技術權威資料中心」，建立 Google 主題權威（Topical Authority），目標 6-9 個月內讓長尾關鍵字進入 Google 搜尋第一頁。

**核心原則：擴建，不拆除。** 現有頁面全部保留，不改 URL，不改內容，只新增結構和連結。

---

## 二、決策記錄

- **現有頁面**：保留原 URL 不搬遷，透過內部連結整合進 Hub
- **URL 結構**：`/knowledge/cytec-m21/`（未來可擴展 `/knowledge/cytec-g30/`）
- **執行順序**：先建 git tag 保存現狀 ✅ → 補技術 SEO 基礎 → 建 Pillar 內容 → 建文章發布系統
- **語氣風格**：工程手冊風格 — 冷靜、精確、結構化
- **文章產製流程**：下屬用中文 .md 模板撰寫 → 老闆審核 → Cursor 翻譯並建頁

---

## 三、改革前 Git 備份 ✅

已完成：

```bash
git tag -a pre-seo-pillar-reform-2026-02-16 -m "改革前備份"
git push origin pre-seo-pillar-reform-2026-02-16
```

如需回復到改革前狀態：`git checkout pre-seo-pillar-reform-2026-02-16`

---

## 四、所有變更清單

### 新建檔案（共 17 個）

| 檔案路徑 | 說明 |
|---|---|
| `docs/SEO-PILLAR-REFORM-2026-02-16.md` | 本改革提案文件 |
| `app/sitemap.ts` | Sitemap 自動生成（含所有新舊頁面） |
| `app/robots.ts` | 搜尋引擎爬蟲指引 |
| `components/Breadcrumb.tsx` | 麵包屑導航元件（含 BreadcrumbList schema） |
| `components/SpokePageTemplate.tsx` | Spoke 文章頁面模板元件（含圖片區塊支援） |
| `lib/knowledge-articles.ts` | 文章登錄系統（Hub 自動索引用） |
| `app/knowledge/cytec-m21/page.tsx` | Pillar Hub 主頁 |
| `app/knowledge/cytec-m21/layout.tsx` | Knowledge Center 專用 layout |
| `app/knowledge/cytec-m21/tool-clamping-unstable/page.tsx` | Spoke：刀具夾持不穩 |
| `app/knowledge/cytec-m21/hydraulic-alarm-reset/page.tsx` | Spoke：液壓警報無法復位 |
| `templates/README.md` | 文章撰寫操作說明（中文） |
| `templates/template-symptom-article.md` | 模板 A：故障/症狀類文章（中文） |
| `templates/template-case-study.md` | 模板 B：維修案例類文章（中文） |
| `public/knowledge/README.md` | 圖片存放說明（中文） |
| `public/knowledge/cytec-m21/tool-clamping-unstable/.gitkeep` | 圖片資料夾佔位 |
| `public/knowledge/cytec-m21/hydraulic-alarm-reset/.gitkeep` | 圖片資料夾佔位 |

### 修改檔案（共 7 個）

| 檔案路徑 | 修改內容 | 破壞性 |
|---|---|---|
| `app/layout.tsx` | 加入 canonical URL 設定 + Organization JSON-LD schema | 無 — 只加 metadata 欄位 |
| `app/page.tsx` | 症狀卡片加連結 + 新增 Knowledge Center 入口區塊 | 無 — 加新區塊，現有區塊不動 |
| `app/spindle-rotary-union-leakage/page.tsx` | 加 Breadcrumb + Hub 回鏈 | 無 — 加 2 個小元件 |
| `app/spindle-repair-rebuild/page.tsx` | 同上 | 無 |
| `app/hydraulic-aggregate-pressure-issue/page.tsx` | 同上 | 無 |
| `components/Header.tsx` | 導航加 "Knowledge Center" | 無 — 加一個 Link |
| `components/Footer.tsx` | Services 欄加 Knowledge Center + 新 Spoke 連結 | 無 — 加幾個 Link |

### 不動的檔案

- `app/repair-gallery/page.tsx` — 不改
- `app/privacy/page.tsx` — 不改
- `app/contact-success/page.tsx` — 不改
- `components/SimpleContactForm.tsx` — 不改
- `components/AssessmentForm.tsx` — 不改（被新頁面複用）
- `components/FAQ.tsx` — 不改（被新頁面複用）
- 所有 `public/case-studies/` 底下的圖片 — 不動

---

## 五、執行時程

- **Pre-Reform**（已完成）：Git tag 備份 ✅
- **Phase 0**（預計 1-2 天）：技術 SEO 基礎（sitemap、robots.txt、canonical、schema、breadcrumb）
- **Phase 1**（預計 1-2 週）：Pillar Hub + 2 個 Spoke + 整合現有頁面 + 文章模板系統

---

## 六、內部連結架構

```
Homepage
    ↓
Pillar Hub (/knowledge/cytec-m21/)
    ↓
    ├── 現有 Spoke 1: /spindle-rotary-union-leakage
    ├── 現有 Spoke 2: /spindle-repair-rebuild
    ├── 現有 Spoke 3: /hydraulic-aggregate-pressure-issue
    ├── 新 Spoke 1: /knowledge/cytec-m21/tool-clamping-unstable/
    └── 新 Spoke 2: /knowledge/cytec-m21/hydraulic-alarm-reset/
```

所有 Spoke 都有「Back to M21 Knowledge Center」回鏈到 Hub。

---

## 七、關鍵字布局

| 頁面 | 主攻關鍵字 | 類型 |
|---|---|---|
| `/knowledge/cytec-m21/` | cytec m21 repair, m21 technical guide | Pillar Hub |
| `/spindle-rotary-union-leakage` | m21 rotary union leakage, spindle seal leak | Spoke (現有) |
| `/spindle-repair-rebuild` | m21 spindle repair rebuild, encoder issues | Spoke (現有) |
| `/hydraulic-aggregate-pressure-issue` | m21 hydraulic pressure, pressure cycling | Spoke (現有) |
| `/knowledge/cytec-m21/tool-clamping-unstable/` | m21 tool clamping unstable, clamping force | Spoke (新建) |
| `/knowledge/cytec-m21/hydraulic-alarm-reset/` | m21 alarm won't reset, hydraulic alarm | Spoke (新建) |

---

## 八、文章發布工作流程（下屬協作系統）

### 流程

1. **下屬**：複製 `templates/` 中的模板（A 或 B），用中文填寫內容 + 標注照片位置
2. **老闆**：審核內容，把 .md 檔 + 照片丟給 Cursor
3. **Cursor AI**：翻譯成英文 → 建立網頁 → 放圖片 → 更新 Hub 和 Sitemap
4. **自動部署**：git push 後 Vercel 自動上線

### 模板檔案

- `templates/README.md` — 完整操作說明（中文）
- `templates/template-symptom-article.md` — 故障/症狀類文章模板
- `templates/template-case-study.md` — 維修案例類文章模板

### 照片管理

照片存放位置與文章一一對應：

```
public/knowledge/cytec-m21/
├── tool-clamping-unstable/          ← 對應文章 slug
│   ├── symptom-overview.jpg
│   └── check-procedure.jpg
├── case-rotary-bearing-damage/      ← 對應文章 slug
│   ├── before-01.jpg
│   ├── finding-01.jpg
│   └── result-01.jpg
└── ...（每篇文章一個資料夾）
```

---

## 九、SEO 目標

- **短期（2-3 個月）**：長尾關鍵字（如 "m21 tool clamping unstable"）開始出現在搜尋結果
- **中期（6-9 個月）**：多數長尾詞進入第一頁，部分進入前三名
- **長期（12+ 個月）**：成為 "Cytec M21 repair" 主題的權威資源，持續擴展到 G30

---

## 十、未來擴展

- **Phase 2**（3-6 週後）：新增 how-to-submit-data 頁面 + quick-checklist 頁面
- **Phase 3**（2-6 個月）：每週 1-2 篇案例/技術文章，持續擴充 Hub
- **未來**：建立 `/knowledge/cytec-g30/` 第二個 Pillar Hub

---

**改革執行人員**：Cursor AI (Claude Sonnet 4.5)  
**改革批准人員**：herrciao  
**改革執行日期**：2026 年 2 月 16 日
