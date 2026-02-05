# 5 Axis Head Repair - 完整版網站總結

> **專案完成日期：** 2026-02-05  
> **網站狀態：** ✅ 生產環境運行中  
> **網址：** https://5axisheadrepair.com

---

## 📋 目錄

1. [專案概述](#專案概述)
2. [核心功能](#核心功能)
3. [技術架構](#技術架構)
4. [Email 通知系統](#email-通知系統)
5. [優惠券彈窗系統](#優惠券彈窗系統)
6. [頁面結構](#頁面結構)
7. [SEO 優化](#seo-優化)
8. [GDPR 合規](#gdpr-合規)
9. [維護指南](#維護指南)
10. [部署記錄](#部署記錄)

---

## 專案概述

### 🎯 業務目標
獨立售後維修服務商，專門維修配備 Cytec M21 和 G30 雙軸銑頭的機器。

### 🌍 目標市場
- 全球終端用戶（非中國市場）
- 經銷商/服務合作夥伴
- 機器故障或停機的客戶

### 💼 核心服務
1. 主軸旋轉接頭漏油維修
2. 主軸維修與重建
3. 液壓總成壓力問題

### 📧 聯絡信箱
**yschao@elixirfb.com** - 所有表單提交都會發送到此信箱

---

## 核心功能

### ✅ 已實現功能清單

#### 1. **專業網站設計**
- ✅ 現代化 UI/UX 設計
- ✅ 完全響應式（手機/平板/桌面）
- ✅ 品牌識別一致性
- ✅ 專業配色方案（藍色主調 + 橙色 CTA）

#### 2. **維修案例展示系統** 📸
- ✅ **123 張專業維修照片**
  - 旋轉接頭：17 張
  - 主軸維修：88 張
  - 液壓總成：18 張
- ✅ 自動輪播（每 3 秒切換）
- ✅ 手動控制（左右箭頭 + 指示器）
- ✅ 圖片優化（Next.js Image 自動處理）
- ✅ 響應式圖庫設計

#### 3. **Email 通知系統** ✉️
- ✅ **Formspree 整合** (Form ID: mvzbpkbz)
- ✅ 收件信箱：yschao@elixirfb.com
- ✅ 即時通知（1-2 分鐘內送達）
- ✅ 免費額度：50 次提交/月
- ✅ 垃圾郵件過濾
- ✅ 自動記錄所有提交

#### 4. **優惠券彈窗系統** 🎁
- ✅ **進入網站 11 秒後自動彈出**
- ✅ 優惠內容：
  - 🆓 免費線上評估服務
  - 💰 $150 美金折扣優惠券
- ✅ 必填欄位（5 個）：
  1. 維修需求
  2. Email 地址
  3. Head Serial Number
  4. 所在地點
  5. 公司名稱
- ✅ 即時生成優惠碼（格式：M21G30-XXXXXX）
- ✅ 自動發送 Email 通知
- ✅ 僅顯示一次（sessionStorage）
- ✅ 瀏覽器儲存（localStorage）

#### 5. **GDPR Cookie 合規** 🔒
- ✅ Cookie 同意橫幅
- ✅ 完整隱私政策頁面（/privacy）
- ✅ Cookie 偏好設定管理
- ✅ 符合歐盟 GDPR 法規
- ✅ 兩種 Cookie 類別：
  - Necessary（必要）- 永遠啟用
  - Analytics（分析）- 需用戶同意

#### 6. **SEO 優化** 🔍
- ✅ 完整 meta tags
- ✅ 語意化 HTML
- ✅ 關鍵字優化（M21、G30）
- ✅ 結構化資料（Schema.org）
- ✅ Sitemap 自動生成
- ✅ 快速載入速度

---

## 技術架構

### 🛠️ 技術棧

```
前端框架：Next.js 15.1.6 (App Router)
UI 框架：React 19.0.0
樣式系統：Tailwind CSS 3.4.17
語言：TypeScript 5.7.2
部署平台：Vercel
表單服務：Formspree
版本控制：Git + GitHub
```

### 📁 專案結構

```
cytecrepair/
├── app/                                    # Next.js App Router 頁面
│   ├── layout.tsx                          # 根 Layout（含 GDPR）
│   ├── page.tsx                            # 首頁（含優惠券彈窗）
│   ├── privacy/page.tsx                    # 隱私政策頁面
│   ├── repair-gallery/page.tsx             # 維修實例畫廊
│   ├── spindle-rotary-union-leakage/       # SEO 頁面 1
│   ├── spindle-repair-rebuild/             # SEO 頁面 2
│   └── hydraulic-aggregate-pressure-issue/ # SEO 頁面 3
│
├── components/                             # React 組件
│   ├── Header.tsx                          # 導航欄
│   ├── Footer.tsx                          # 頁腳
│   ├── AssessmentForm.tsx                  # 評估表單（Formspree）
│   ├── ImageCarousel.tsx                   # 圖片輪播組件
│   ├── DiscountPopup.tsx                   # 優惠券彈窗
│   ├── ConsentProvider.tsx                 # Cookie 同意管理
│   ├── CookieBanner.tsx                    # Cookie 橫幅
│   ├── CookiePreferences.tsx               # Cookie 偏好設定
│   ├── AnalyticsScripts.tsx                # 條件式載入分析腳本
│   ├── CookieSettingsButton.tsx            # Cookie 設定按鈕
│   ├── ServiceCard.tsx                     # 服務卡片
│   └── FAQ.tsx                             # FAQ 組件
│
├── lib/
│   └── consent.ts                          # Cookie 同意邏輯
│
├── public/
│   └── case-studies/                       # 維修案例照片
│       ├── rotary-union/                   # 17 張照片
│       ├── spindle-repair/                 # 88 張照片
│       └── hydraulic-aggregate/            # 18 張照片
│
├── DEPLOY.md                               # 部署指南（v2.0）
├── GDPR_IMPLEMENTATION.md                  # GDPR 技術文檔
├── WEBSITE_SUMMARY.md                      # 本文檔
└── package.json                            # 依賴管理
```

### 🔧 關鍵依賴

```json
{
  "next": "15.1.6",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "typescript": "5.7.2",
  "tailwindcss": "3.4.17"
}
```

---

## Email 通知系統

### 📧 Formspree 設定

**服務：** Formspree (https://formspree.io)  
**Form ID：** `mvzbpkbz`  
**Endpoint：** `https://formspree.io/f/mvzbpkbz`  
**收件信箱：** `yschao@elixirfb.com`

### 📨 兩種 Email 通知

#### **1. 評估表單提交（AssessmentForm）**

**觸發位置：**
- 首頁底部「Get Started」區域
- 維修實例頁面底部

**包含欄位：**
```
- Name
- Email
- Phone
- Company
- Machine Model
- Issue Category
- Issue Description
- Documentation availability (photos/videos/alarms)
```

#### **2. 優惠券彈窗提交（DiscountPopup）**

**觸發時間：** 進入網站 11 秒後

**包含欄位：**
```
- Repair need (維修需求)
- Email
- Head Serial Number
- Location
- Company name
- Coupon Code (自動生成)
- Coupon Amount ($150 USD)
- Form Type (Free Assessment + Discount Coupon)
- Submitted At (時間戳)
```

### 📊 Formspree 儀表板

**查看提交記錄：**
```
https://formspree.io/forms/mvzbpkbz/submissions
```

**功能：**
- ✅ 查看所有提交
- ✅ 匯出資料（CSV/JSON）
- ✅ 垃圾郵件過濾
- ✅ Email 通知設定
- ✅ 統計資料

**免費額度：**
- 50 次提交/月
- 無限制表單數量
- 垃圾郵件防護

---

## 優惠券彈窗系統

### 🎁 彈窗規格

**觸發條件：**
- ✅ 進入網站後 **11 秒**
- ✅ 每個訪客僅顯示一次（sessionStorage）
- ✅ 關閉後不再顯示（除非清除瀏覽器資料）

**優惠內容：**
```
🆓 免費線上評估服務
💰 $150 美金折扣優惠券
```

**必填欄位（5 個）：**
1. **Repair need** - 維修需求（textarea）
2. **Email** - Email 地址（驗證格式）
3. **Head Serial Number** - 頭序列號（必填）
4. **Location** - 所在地點
5. **Company name** - 公司名稱

### 🎯 優惠碼系統

**格式：** `M21G30-XXXXXX`  
**範例：** `M21G30-AB12CD`

**儲存位置：**
- ✅ localStorage（持久化）
- ✅ sessionStorage（防止重複顯示）
- ✅ Email 通知（發送給管理員）

**有效期：** 90 天

### 📋 使用者流程

```
1. 訪客進入網站
   ↓
2. 瀏覽內容 11 秒
   ↓
3. 彈窗自動出現 🎉
   ↓
4. 填寫 5 個必填欄位
   ↓
5. 提交表單
   ↓
6. 即時獲得優惠碼
   ↓
7. 管理員收到 Email 通知
   ↓
8. 24-48 小時內回覆客戶
   ↓
9. 提供免費評估 + 維護建議
   ↓
10. 客戶使用優惠碼折抵 $150
```

### 💡 轉換率優化設計

**心理學原理：**
1. **緊迫感** - "Limited time offer"
2. **立即滿足** - 即時生成優惠碼
3. **明確價值** - FREE Assessment + $150 OFF
4. **低摩擦** - 只需 5 個欄位
5. **信任建立** - 專業設計 + 團隊跟進說明
6. **損失厭惡** - "Don't miss this opportunity"

---

## 頁面結構

### 🏠 首頁 (/)

**區塊結構：**
```
1. Hero Section
   - 標題：Independent Aftermarket Repair for Cytec M21 & G30
   - CTA 按鈕：Get Started | Check How Professional We Are!
   - 信任指標：24-48h、Global、Independent

2. Services Section
   - 三個服務卡片（含症狀列表）
   - 連結到詳細 SEO 頁面

3. How We Work Section
   - 4 步驟流程圖

4. Experience Section
   - 10+ 年經驗說明
   - M21 & G30 專業服務

5. Repair Gallery Showcase (新)
   - 自動輪播（9 張精選照片）
   - 三個類別卡片
   - View All 按鈕

6. FAQ Section
   - 6 個常見問題

7. Contact Section
   - 完整評估表單
```

### 📸 維修實例頁面 (/repair-gallery)

**結構：**
```
1. Hero Section
   - 標題 + 說明
   - 匿名化聲明

2. Gallery Sections (3 個)
   - Rotary Union (12 張照片輪播)
   - Spindle Repair (15 張照片輪播)
   - Hydraulic Aggregate (12 張照片輪播)
   - 每個區塊含：
     * 圖片輪播
     * 統計數據（10+ 年、100+ 維修）
     * Learn More + Request Assessment 按鈕

3. Call to Action
   - 黑色背景區塊
   - Submit Your Issue 按鈕

4. Contact Form Section (新)
   - 標題：Request Your Free Assessment
   - 信任指標（24-48h、No Obligation、Confidential）
   - 完整評估表單
```

### 🔍 SEO 子頁面（3 個）

**頁面清單：**
1. `/spindle-rotary-union-leakage`
2. `/spindle-repair-rebuild`
3. `/hydraulic-aggregate-pressure-issue`

**共同結構：**
```
- Hero Section（症狀驅動）
- 問題說明
- 我們的解決方案
- 技術細節
- FAQ（3-5 個）
- CTA + 評估表單
```

### 🔒 隱私政策頁面 (/privacy)

**內容：**
```
- 公司資訊
- 資料收集說明
- Cookie 使用說明
- 第三方服務（Vercel、Formspree）
- 資料保留政策
- 用戶權利
- Cookie Settings 按鈕
```

---

## SEO 優化

### 🎯 關鍵字策略

**主要關鍵字：**
- Cytec M21 repair
- Cytec G30 repair
- Two-axis milling head repair
- Independent aftermarket service
- Spindle repair M21 G30

**長尾關鍵字：**
- Spindle rotary union leakage M21
- G30 hydraulic aggregate pressure issue
- Cytec head serial number repair
- Independent Cytec repair service

### 📊 技術 SEO

**已實現：**
- ✅ 語意化 HTML（H1、H2、H3 層級正確）
- ✅ Meta tags 完整（title、description、keywords）
- ✅ Open Graph 標籤（社群分享）
- ✅ 結構化資料（FAQ Schema）
- ✅ Alt 文字（所有圖片）
- ✅ 內部連結優化
- ✅ URL 結構清晰
- ✅ Mobile-friendly（響應式設計）
- ✅ 快速載入（Next.js 優化）

### 🚀 效能優化

**自動優化：**
- ✅ 圖片壓縮（Next.js Image）
- ✅ 懶加載（Lazy loading）
- ✅ 程式碼分割（Code splitting）
- ✅ 靜態生成（Static generation）
- ✅ CDN 部署（Vercel Edge Network）

---

## GDPR 合規

### 🔒 Cookie 合規系統

**實現功能：**
- ✅ Cookie 同意橫幅（首次訪問）
- ✅ Cookie 偏好設定彈窗
- ✅ 完整隱私政策頁面
- ✅ 可撤回同意（Cookie Settings）

**Cookie 類別：**
```
1. Necessary（必要）
   - 永遠啟用
   - 網站基本功能
   - Cookie 同意記錄

2. Analytics（分析）
   - 預設關閉
   - 需用戶同意
   - Google Analytics（條件載入）
```

**資料儲存：**
```
Cookie: cookie_consent
Path: /
Max-Age: 180 days
SameSite: Lax
Secure: true (生產環境)

Payload:
{
  "v": 1,
  "necessary": true,
  "analytics": false,
  "updatedAt": "2026-02-05T..."
}
```

### 📋 合規檢查清單

- [x] Cookie 同意橫幅
- [x] 接受/拒絕選項同等顯著
- [x] 隱私政策頁面
- [x] 資料收集說明
- [x] 第三方服務列表
- [x] 用戶權利說明
- [x] 可撤回同意機制
- [x] Cookie 設定連結（Footer）
- [x] IP 匿名化（Analytics）

---

## 維護指南

### 📸 如何添加新照片

**步驟 1：準備照片**
```bash
# 檢查清單：
- [ ] 移除客戶名稱、Logo
- [ ] 遮蔽機器序列號
- [ ] 無身份識別資訊
- [ ] 格式：.jpg 或 .webp
- [ ] 檔案大小：< 500KB
```

**步驟 2：放置照片**
```bash
# 放入對應資料夾：
public/case-studies/rotary-union/       # 旋轉接頭
public/case-studies/spindle-repair/     # 主軸維修
public/case-studies/hydraulic-aggregate/ # 液壓總成
```

**步驟 3：更新程式碼**

編輯 `app/page.tsx` 或 `app/repair-gallery/page.tsx`：
```typescript
images: [
  '/case-studies/rotary-union/new-photo.jpg',
  // ... 添加更多
]
```

**步驟 4：部署**
```bash
git add public/case-studies/ app/
git commit -m "feat: Add new repair case photos"
git push origin main
```

### 📧 Email 通知管理

**查看提交記錄：**
```
https://formspree.io/forms/mvzbpkbz/submissions
```

**如果沒收到 Email：**
1. 檢查垃圾郵件資料夾
2. 確認 Formspree form 狀態為 "Active"
3. 檢查 email 地址設定正確
4. 查看 Formspree 儀表板的提交記錄

**配額監控：**
- 免費方案：50 次/月
- 接近上限時考慮升級或切換服務

### 🎁 優惠券管理

**查看客戶提交：**
```
https://formspree.io/forms/mvzbpkbz/submissions
```

**修改優惠金額：**

編輯 `components/DiscountPopup.tsx`：
```typescript
// 改這裡的金額
couponAmount: '$150 USD',  // 改成其他金額
amount: 150,                // 改成對應數字
```

**修改彈窗延遲：**
```typescript
// 改這裡的毫秒數
}, 11000);  // 11 秒 = 11000 毫秒
```

### 🔄 更新部署

**快速部署流程：**
```bash
# 1. 確認當前狀態
git status

# 2. 添加變更
git add .

# 3. 提交
git commit -m "描述你的變更"

# 4. 推送到 GitHub
git push origin main

# 5. Vercel 自動部署（2-3 分鐘）
```

**檢查部署狀態：**
```
https://vercel.com/herrciao/cytecrepair/deployments
```

---

## 部署記錄

### 📅 重要版本里程碑

| 日期 | 版本 | 功能 | Commit |
|------|------|------|--------|
| 2026-02-04 | v1.0 | 基礎網站 + GDPR | `7286bc8` |
| 2026-02-05 | v1.1 | 維修案例畫廊 + 123 張照片 | `2e4f655` |
| 2026-02-05 | v1.2 | Email 通知（Formspree） | `c773dfe` |
| 2026-02-05 | v2.0 | 優惠券彈窗系統 | `d7641f5` |
| 2026-02-05 | v2.1 | 彈窗延遲調整（11 秒） | `ede5c8c` |

### 🌐 部署資訊

**平台：** Vercel  
**域名：** https://5axisheadrepair.com  
**Git Repository：** https://github.com/herrciao/cytecrepair  
**自動部署：** ✅ 推送到 main 分支自動觸發

**環境變數：**
```
NEXT_PUBLIC_GA_ID=（如有使用 Google Analytics）
```

### 📊 網站統計

**總檔案數：** 212 個  
**總照片數：** 123 張  
**總頁面數：** 9 個  
**總組件數：** 15 個

**構建時間：** ~45 秒  
**部署時間：** 2-3 分鐘

---

## 🎯 轉換率優化策略

### 已實現的 CRO 元素

1. **信任建立**
   - ✅ 10+ 年經驗強調
   - ✅ 123 張真實維修照片
   - ✅ 專業設計和內容
   - ✅ 清楚的非 OEM 說明

2. **降低摩擦**
   - ✅ 一鍵評估表單
   - ✅ 24-48 小時回應承諾
   - ✅ No Obligation 強調
   - ✅ 優惠券即時生成

3. **緊迫感**
   - ✅ "Downtime costs money" 標題
   - ✅ "Limited time offer" 彈窗
   - ✅ 11 秒策略性延遲

4. **價值明確化**
   - ✅ FREE Assessment
   - ✅ $150 OFF 折扣
   - ✅ 預防性維護建議

5. **多重 CTA**
   - ✅ Hero 區域 2 個按鈕
   - ✅ 每個頁面底部表單
   - ✅ 優惠券彈窗
   - ✅ 導航欄「Contact Us」

---

## 🚀 未來可能的擴展

### 建議功能（未實現）

- [ ] 即時聊天系統（LiveChat）
- [ ] 客戶評價/推薦系統
- [ ] 多語言支援（中文版）
- [ ] 線上預約系統
- [ ] 維修進度追蹤
- [ ] 知識庫/部落格
- [ ] 影片介紹（YouTube 嵌入）
- [ ] 案例研究詳細頁面
- [ ] 客戶登入系統
- [ ] 即時報價計算器

---

## 📞 聯絡資訊

**Email：** yschao@elixirfb.com  
**網站：** https://5axisheadrepair.com  
**專案：** https://github.com/herrciao/cytecrepair

---

## 📚 相關文檔

- **部署指南：** [DEPLOY.md](./DEPLOY.md)
- **GDPR 實作：** [GDPR_IMPLEMENTATION.md](./GDPR_IMPLEMENTATION.md)
- **專案筆記：** [PROJECT_NOTES.md](./PROJECT_NOTES.md)
- **快速開始：** [QUICK_START.md](./QUICK_START.md)
- **README：** [README.md](./README.md)

---

## ✅ 檢查清單

### 上線前檢查

- [x] 所有頁面正常顯示
- [x] 表單提交正常運作
- [x] Email 通知正常發送
- [x] 優惠券彈窗正常彈出
- [x] 圖片輪播正常運作
- [x] 響應式設計正常
- [x] Cookie 同意系統正常
- [x] SEO meta tags 完整
- [x] 無 console 錯誤
- [x] 構建成功無警告
- [x] Git 提交完整
- [x] Vercel 部署成功

### 定期維護檢查

- [ ] 每週檢查 Email 是否正常接收
- [ ] 每月檢查 Formspree 配額使用量
- [ ] 每月檢查網站載入速度
- [ ] 每季更新維修案例照片
- [ ] 每季檢查 SEO 排名
- [ ] 每年檢查依賴套件更新

---

## 🎉 總結

這是一個功能完整、專業的售後維修服務網站，具備：

✅ **完整的潛在客戶捕獲系統**  
✅ **自動化 Email 通知**  
✅ **專業的案例展示**  
✅ **GDPR 合規**  
✅ **SEO 優化**  
✅ **轉換率優化設計**

**準備好開始接單了！** 🚀

---

**文檔版本：** v1.0  
**最後更新：** 2026-02-05  
**建立者：** AI Assistant  
**專案狀態：** ✅ 生產環境運行中
