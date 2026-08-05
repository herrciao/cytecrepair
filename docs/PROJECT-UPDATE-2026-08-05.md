# 5 Axis Head Repair — 專案階段總結

**記錄日期**：2026-08-05  
**專案**：5 Axis Head Repair / Cytec M21 & G30 Independent Aftermarket Repair  
**正式網站**：https://www.5axisheadrepair.com  
**GitHub 分支**：`main`  
**本階段狀態**：SEO Runtime v0.1 基礎完成，第一個 supervised weekly run 已發布

---

## 一、本階段目標

本次工作的目的不是建立完整的多Agent或自動化系統，而是先完成第一個可以反覆運行、可以驗證成功或失敗的SEO Runtime。

目前確定的唯一目標：

> 每週至少發布一篇經人工技術確認的高意圖M21內容，並使Google非品牌自然搜尋曝光與合格維修詢問持續成長。

Runtime v0.1明確不包含：

- CRM
- Supplier Agent
- Cold Call Agent
- Dashboard
- 多Agent編排
- 無人審核直接發布
- Email自動化
- Mac mini常駐排程
- 每日大量發布文章

---

## 二、Git安全保存與工作方式

SEO Runtime修改前，已先保存Cursor最後版本及未追蹤的網站更新紀錄。

- 基準提交：`c14d975`
- 備份Tag：`pre-seo-runtime-v0.1-2026-08-04`
- Runtime工作分支：`codex/seo-runtime-v0.1`
- Runtime完成後已fast-forward合併至`main`
- 正式發布前所有修改均通過SEO、TypeScript、lint、build及頁面檢查

如需查看Runtime實作前狀態，可使用上述Tag。

---

## 三、Codex正式接管規則

已新增根目錄`AGENTS.md`，固定未來Codex必須遵守的專案規則：

- 不得任意改動、移除或搬遷既有公開URL
- 保留metadata、canonical、schema、sitemap、breadcrumb與內部連結
- 不得虛構案例、結果、數據、規格、經驗或維修時間
- 技術文章必須經過真人技術審核
- 案例必須匿名
- 不得宣稱official、authorized、certified或OEM-approved
- 必須維持independent、aftermarket及non-OEM定位
- 不得複製OEM手冊、專有圖面或受版權保護的技術內容
- 未經專案擁有者授權，不得push、merge、deploy、publish或提交索引

主要文件：

- `AGENTS.md`
- `docs/SEO-STRATEGY.md`
- `docs/SEO-RUNTIME.md`
- `docs/SEO-CHANGELOG.md`

---

## 四、SEO技術架構修正

### 文章單一資料來源

建立：

`content/knowledge-articles.json`

目前所有Knowledge文章由同一份資料管理：

- slug
- title與description
- category
- target及secondary keywords
- search intent
- publish及modified dates
- related article slugs
- CTA
- published狀態

### Sitemap

Sitemap不再手動重複登錄Knowledge文章，而是由文章registry自動產生。

已修正：

- 補入原本遺漏的兩篇Case Study
- `lastModified`不再於每次build自動變成現在時間
- 每篇文章使用實際內容日期

### Related Articles

相關文章不再依陣列順序任意選取，而是使用明確的`relatedSlugs`。

### 結構化資料

- 技術文章：`TechArticle`
- 維修案例：`Article`
- 保留既有FAQ、Breadcrumb及Organization schema

### Knowledge Hub

M21 Hub新增由registry產生的完整文章索引。新文章完成登錄後，可自動出現在Hub和Sitemap。

### SEO一致性檢查

新增：

```bash
npm run seo:check
```

目前可檢查：

- 重複或不合法slug
- 必填metadata
- 發布及修改日期
- 不存在的Related Slug
- 已發布文章缺少實際頁面
- canonical與slug不一致
- 頁面未綁定registry article slug

---

## 五、SEO Runtime v0.1

建立目錄：

```text
seo-runtime/
├── config/
├── runs/
├── briefs/
├── reports/
└── templates/
```

Runtime循環：

```text
Collect
→ Discover
→ Select
→ Brief
→ Draft
→ Technical Review
→ Build
→ SEO Validate
→ Commit
→ Publish
→ Measure
→ Repeat
```

文章狀態不得跳過：

```text
waiting-technical-review
→ approved
→ built
→ validated
→ committed
→ published
→ measuring
→ completed
```

---

## 六、Google Search Console Baseline 0

收到`https://www.5axisheadrepair.com/` URL-prefix資源匯出資料。

實際有資料期間：2026-07-19至2026-08-02。

- 點擊：0
- 曝光：13
- CTR：0%
- 平均排名：約6.8

有曝光的主要頁面：

| 頁面 | 曝光 | 平均排名 |
|---|---:|---:|
| M21 Knowledge Center | 10 | 6.6 |
| Hydraulic Aggregate Pressure Issue | 7 | 5.86 |

限制：

- Query匯出沒有任何關鍵字資料
- Search Appearance沒有資料
- 樣本數太小，不能判斷國家或裝置表現
- Search Console目前選取`www` URL-prefix，但網站canonical及sitemap使用無`www`網址

後續應新增或選擇Domain property：`5axisheadrepair.com`，讓`www`及無`www`都被涵蓋。

詳細基準：

`seo-runtime/reports/2026-08-04-baseline.md`

---

## 七、第一個Weekly Run

Run ID：`2026-W32`

五個候選方向：

1. M21 spindle overheating / temperature rising
2. M21 encoder alarm / intermittent encoder signal
3. Cytec spindle vibration / bearing noise
4. M21 A/C axis clamping or positioning instability
5. M21 CTS filtration / ceramic seal failure prevention

第一名選定：

> Cytec M21 spindle overheating / temperature rising

選擇原因：

- 高維修意圖
- 現有服務頁只簡要提到thermal issue
- 網站缺少專門的溫度警報診斷文章
- 可連接至Spindle Repair & Rebuild服務頁
- 能以真實售後工程經驗建立內容差異

---

## 八、人工技術審核

專案擁有者訪談具有Cytec故障處理經驗的售後工程師，並完成以下內容確認：

- 溫度警報可能指向軸承或電機
- 初期不一定伴隨噪音、震動或精度變化
- 第一個診斷問題是確認溫度訊號是否可信
- 感測器可能為PT100、KTY84或其他型號
- 不同主軸配置必須查閱正確手冊
- 電阻數值不能跨感測器直接套用
- 約125Ω／65°C只作特定PT100情境的概念參考
- 確認真實過熱後不應繼續運轉
- 可能方向包含軸承受傷、固定或預壓異常、碰撞、冷卻或負載問題
- 約20 μm端面跳動是需要進一步調查的經驗性參考，不是單獨故障結論

文章不得出現工程師姓名，並必須在開頭加入明確安全與技術聲明。

---

## 九、本週正式發布文章

文章：**Cytec M21 Spindle Overheating**

正式網址：

https://www.5axisheadrepair.com/knowledge/cytec-m21/spindle-overheating

完成項目：

- 英文技術文章
- Prominent safety and technical disclaimer
- SEO title及meta description
- Canonical URL
- TechArticle schema
- FAQ schema
- Breadcrumb
- Hub自動索引
- Sitemap自動登錄
- Spindle Repair & Rebuild內部連結
- 三篇明確Related Articles
- Assessment表單
- 表單自動選擇`M21 Spindle Overheating`

文章提交：`b51eba8`  
發布紀錄提交：`97926cb`

---

## 十、驗證結果

- `npm run seo:check`：8/8篇已發布Knowledge文章通過
- TypeScript：通過
- ESLint：0 errors；保留一個既有Google Analytics `next/script`建議警告
- Production build：通過
- 靜態路由：21頁成功生成
- 正式網址：已上線
- H1：1個
- Canonical：正確
- TechArticle：存在
- Safety disclaimer：存在
- PT100/KTY84內容：存在
- 20 μm內容：存在
- Broken images：0
- Horizontal overflow：無
- Assessment category：`M21 Spindle Overheating`
- Browser console errors：0

---

## 十一、追蹤提醒

目前使用單一Codex Heartbeat：

**名稱**：`cytecrepair SEO Runtime追蹤`

排程邏輯：

- 每天上午09:00唯讀檢查
- 每週一提供SEO Runtime例行回顧
- 沒有到期事項時不顯示更新
- 不自動修改、提交、推送、部署或提交索引

文章追蹤點：

- 2026-08-12：7天Google發現／收錄檢查
- 2026-09-02：28天曝光、點擊、CTR、排名、查詢及詢問檢查
- 2026-11-03：90天完整SEO回顧，決定keep、improve、consolidate或investigate

---

## 十二、下一步

本階段到此告一段落。下一個必做動作不是繼續增加Infrastructure，而是：

1. 於7天檢查點確認Google發現及收錄狀態
2. 準備下一個Weekly Run的五個候選主題
3. 每週只選一篇，完成真人技術確認後再發布
4. 於28天及90天依真實數據判斷Runtime是否有效

SEO Runtime v0.1是否成功，將以連續四週運行、技術審核完整、SEO步驟零遺漏，以及Google非品牌曝光與合格詢問的變化判定。
