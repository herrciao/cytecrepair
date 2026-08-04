# 網站結構更新記錄 — 2026-03-02

**更新日期**：2026 年 3 月 2 日  
**執行人員**：Cursor AI  
**Git Commits**：`39c6a21`、`02bf853`

---

## 一、本次更新摘要

新增第一篇 **Case Study（案例實績）** 頁面，並同步更新 Knowledge Center Hub 頁面結構，新增 Case Studies 入口區塊。

---

## 二、新增檔案

### `app/knowledge/cytec-m21/case-spindle-oil-leak-rotary-union/page.tsx`

**頁面 URL**：`/knowledge/cytec-m21/case-spindle-oil-leak-rotary-union`  
**上線日期**：2026-03-02  
**分類**：`case`（案例實績）

**內容結構**（STAR 邏輯）：

| 段落 | 說明 |
|---|---|
| Situation | 龍門五軸工具機搭配 CYTEC 二軸頭，主軸端面發現液壓油滲漏，三種流體混淆導致誤判風險 |
| Task | 單次到場完成：確認液體種類、定位洩漏路徑、找出根因、完成修復 |
| Action — Step 1 | 透過外觀、觸感、液壓站油位，確認漏出液體為液壓油 |
| Action — Step 2 | 5 個可能洩漏位置逐一排除，鎖定主軸端面洩油孔 |
| Action — Step 3 | 拆解迴轉單元，確認內部密封失效為根因 |
| Action — Step 4 | 備品到位，現場當日完成迴轉單元更換 |
| Result | 夾鬆刀 ×20 次驗證，無再滲漏，當日復機 |
| Preventing Recurrence | 連結日常保養與常見錯誤文章 |
| FAQ | 5 題：液體判別、是否必須整組換、小漏放著的風險、間歇性漏油原因、現場更換時間 |

**內文 Echo 關聯連結（inline）**：

| 連結位置 | 連結到 | 說明 |
|---|---|---|
| Root Cause 段落 | `/spindle-rotary-union-leakage` | 迴轉接頭漏油症狀與維修選項（現有服務頁） |
| Preventing Recurrence 段落 | `/knowledge/cytec-m21/rotary-union-daily-checks` | 日常保養指南 |
| Preventing Recurrence 段落 | `/knowledge/cytec-m21/rotary-union-costly-mistakes` | 常見錯誤與代價 |
| Related Articles 區塊 | 自動抓取其他 4 篇文章 | 由 `getRelatedM21Articles()` 產生 |

---

## 三、修改檔案

### `lib/knowledge-articles.ts`

新增文章 metadata 登錄：

```typescript
{
  slug: 'case-spindle-oil-leak-rotary-union',
  title: 'Case Study: Spindle Face Oil Leak — Same-Day Root Cause & Repair',
  category: 'case',
  date: '2026-03-02',
  summary: 'Hydraulic oil leaking from the spindle face drain hole on a gantry five-axis machine...',
  published: true,
}
```

### `app/knowledge/cytec-m21/page.tsx`（Knowledge Center Hub）

新增 **Case Studies 區塊**，插入位置：Preventive Maintenance 下方、Technical Resources 上方。

區塊內容：
- 卡片 1：`case-spindle-oil-leak-rotary-union`（已上線，可點擊）
- 卡片 2：CTS Coolant Leak 案例佔位（Coming Soon，等第二篇完成替換）

---

## 四、更新後的 Knowledge Center 完整結構

```
/knowledge/cytec-m21/                        ← Hub 主頁
│
├── [症狀導覽區]
│   ├── /spindle-rotary-union-leakage         ← 現有服務頁（外部）
│   ├── /hydraulic-aggregate-pressure-issue   ← 現有服務頁（外部）
│   ├── /knowledge/cytec-m21/tool-clamping-unstable
│   ├── /spindle-repair-rebuild               ← 現有服務頁（外部）
│   ├── /knowledge/cytec-m21/hydraulic-alarm-reset
│   └── /knowledge/cytec-m21/spindle-face-oil-leak
│
├── [預防保養指南區]
│   ├── /knowledge/cytec-m21/rotary-union-daily-checks
│   └── /knowledge/cytec-m21/rotary-union-costly-mistakes
│
├── [案例實績區] ← 本次新增
│   ├── /knowledge/cytec-m21/case-spindle-oil-leak-rotary-union  ✅ 2026-03-02 上線
│   └── （Coming Soon：CTS 漏水案例）
│
└── [技術資源區]
    ├── /repair-gallery
    └── （Coming Soon：提交指南、保養清單）
```

---

## 五、下一步待辦

- [ ] 撰寫第二篇案例：**CYTEC 二軸頭主軸端面漏水 — CTS 啟動即噴出，陶瓷密封失效**
  - Slug 預定：`case-spindle-cts-leak-ceramic-seal`
  - 建立後將 Hub 頁面 Coming Soon 卡片替換為正式連結

---

**部署平台**：Vercel（git push 自動觸發）  
**網站 URL**：https://5axisheadrepair.com
