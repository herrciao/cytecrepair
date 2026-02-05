# 靜態網站專案藍圖 (Static Website Blueprint)

> **用途：** 將此文檔提供給 AI 助手，快速搭建專業的靜態行銷網站  
> **基準專案：** 5 Axis Head Repair (cytecrepair)  
> **適用場景：** B2B 服務、專業諮詢、售後維修、技術服務等

---

## 🎯 專案目標

### 業務核心
```
目標客戶：[描述你的目標客戶]
核心服務：[3-5 個主要服務]
商業目標：產生合格的潛在客戶（lead generation）
地區市場：[目標地區/國家]
主要語言：[英文/中文/其他]
```

### 關鍵指標
- ✅ **轉換率優化**（CRO）- 讓訪客變成詢單
- ✅ **信任建立** - 專業形象 + 實際案例
- ✅ **SEO 友善** - 自然搜尋流量
- ✅ **快速載入** - < 3 秒首屏
- ✅ **響應式設計** - 手機/平板/桌面

---

## 🛠️ 技術棧（固定）

```yaml
框架: Next.js 15+ (App Router)
UI 庫: React 19+
樣式: Tailwind CSS 3.4+
語言: TypeScript 5+
部署: Vercel
版控: Git + GitHub
Node: >= 18.0.0
```

### 為什麼這個技術棧？
- ✅ SEO 優化（SSR + Static Generation）
- ✅ 極快載入速度
- ✅ 零成本部署（Vercel 免費版）
- ✅ 自動 HTTPS + CDN
- ✅ 易於維護（單人可維護）

---

## 📐 核心架構（必須）

### 1. 專案結構
```
project/
├── app/                    # Next.js App Router 頁面
│   ├── layout.tsx         # 根 Layout
│   ├── page.tsx           # 首頁
│   ├── privacy/           # 隱私政策（GDPR）
│   └── [service-pages]/   # 服務/產品頁面
│
├── components/            # React 組件
│   ├── Header.tsx         # 導航欄（必須）
│   ├── Footer.tsx         # 頁腳（必須）
│   ├── [LeadForm].tsx     # 潛在客戶表單（必須）
│   └── [其他組件]
│
├── public/                # 靜態資源
│   └── [images/case-studies/etc]
│
├── lib/                   # 工具函數
├── types/                 # TypeScript 類型
├── tailwind.config.ts     # Tailwind 設定
├── next.config.js         # Next.js 設定
└── package.json
```

### 2. 設計系統
```css
/* Tailwind 配置建議 */
主色調: blue-600 (可改)
強調色: orange-500 (CTA 按鈕)
文字色: gray-900, gray-600
背景色: white, gray-50, gray-100

字體層級:
- heading-xl: 3-4rem (Hero 標題)
- heading-lg: 2-2.5rem (區塊標題)
- heading-md: 1.5-2rem (子標題)
- body: 1rem (內文)

間距系統:
- section-padding: py-16 (區塊上下間距)
- container: max-w-7xl mx-auto px-4 (容器)
```

### 3. 必備組件
```typescript
// 1. Header (導航欄)
- Logo + 網站名稱
- 桌面導航 (Services, About, Gallery, FAQ, Contact)
- 手機漢堡選單
- Sticky (滾動時固定)
- 主要 CTA 按鈕

// 2. Footer (頁腳)
- 公司資訊
- 快速連結
- 隱私政策連結
- Cookie 設定按鈕
- 版權聲明

// 3. Lead Form (潛在客戶表單)
- 姓名、Email (必填)
- 電話、公司 (選填)
- 需求描述 (textarea)
- 提交後顯示成功訊息
```

---

## 🎨 首頁結構（標準）

```markdown
1. Hero Section (英雄區塊)
   - 清晰的價值主張標題
   - 副標題說明
   - 2 個 CTA 按鈕（主要 + 次要）
   - 信任指標（數字/徽章）

2. Services/Products Section
   - 3-6 個服務卡片
   - 每個卡片含：標題、說明、圖示、連結
   - Grid 排版（responsive）

3. How We Work Section
   - 3-5 步驟流程圖
   - 清楚的步驟編號
   - 簡潔的說明文字

4. Social Proof Section (社會證明)
   - 案例照片/圖庫（如有）
   - 客戶評價（如有）
   - 統計數據（經驗年數、完成案例數）

5. FAQ Section
   - 6-8 個常見問題
   - 手風琴式展開/收合

6. Contact/CTA Section
   - 潛在客戶表單
   - 聯絡資訊
   - 回應時間承諾
```

---

## 🔌 功能模組（可選）

### ✅ 基礎功能（建議全部實現）

#### 1. GDPR Cookie 合規
```yaml
組件:
  - ConsentProvider (Context)
  - CookieBanner (首次訪問橫幅)
  - CookiePreferences (偏好設定彈窗)
  - CookieSettingsButton (設定按鈕)
  
Cookie 類別:
  - necessary: 必要（永遠啟用）
  - analytics: 分析（需同意）
  
實作:
  - lib/consent.ts (Cookie 邏輯)
  - app/privacy/page.tsx (隱私政策頁面)
  - Footer 連結：Privacy | Cookie Settings
```

#### 2. Email 通知系統
```yaml
推薦服務: Formspree (免費 50 次/月)
替代方案: EmailJS, Resend, SendGrid

設定步驟:
  1. 註冊 Formspree
  2. 創建 Form，取得 Form ID
  3. 在表單組件設定 action 或 fetch
  4. 驗證 Email 地址（會收到確認信）
  5. 測試提交

必須欄位:
  - Name, Email (必填)
  - 其他業務相關欄位
  - _subject (自訂信件主旨)
```

#### 3. SEO 基礎設定
```typescript
// 每個頁面必須有：
export const metadata = {
  title: "明確的頁面標題 | 公司名稱",
  description: "150-160 字的頁面描述，包含關鍵字",
  keywords: "關鍵字1, 關鍵字2, 關鍵字3",
  openGraph: { ... },  // 社群分享
}

// 語意化 HTML
- 正確的 H1 > H2 > H3 層級
- Alt 文字（所有圖片）
- 結構化資料（FAQ Schema、Organization Schema）
```

### 🎁 進階功能（視需求選擇）

#### 4. 優惠券彈窗系統
```yaml
觸發: 進入網站 N 秒後
儲存: sessionStorage (防止重複) + localStorage (優惠碼)
必填: Email + 其他業務欄位
優惠碼: 自動生成（格式：PREFIX-XXXXXX）
Email: 同樣發送到指定信箱
關閉: 僅顯示一次，關閉後不再出現
```

#### 5. 圖片輪播/畫廊
```yaml
組件: ImageCarousel.tsx
功能:
  - 自動輪播（可設定間隔）
  - 手動控制（左右箭頭）
  - 指示器（圓點）
  - 滑鼠懸停暫停
  - 圖片計數器
使用: next/image 自動優化
```

#### 6. 動態內容頁面
```yaml
範例: /repair-gallery, /case-studies, /blog
結構:
  - Hero Section
  - 內容展示（Grid/List）
  - 篩選/分類（如需要）
  - CTA + 表單
```

---

## 📊 SEO 檢查清單

### 技術 SEO
- [ ] 所有頁面有獨特的 title 和 description
- [ ] H1 標籤（每頁一個）
- [ ] H2/H3 層級正確
- [ ] 所有圖片有 alt 文字
- [ ] 結構化資料（JSON-LD）
- [ ] Sitemap 自動生成
- [ ] Robots.txt 設定
- [ ] Mobile-friendly（響應式）
- [ ] 載入速度 < 3 秒
- [ ] HTTPS（Vercel 自動）

### 內容 SEO
- [ ] 關鍵字研究（3-5 個主要關鍵字）
- [ ] 自然融入關鍵字（不堆疊）
- [ ] 每個服務/產品有獨立頁面
- [ ] 內部連結優化
- [ ] CTA 按鈕清晰可見
- [ ] 聯絡資訊完整

---

## 🎯 轉換率優化（CRO）原則

### 信任建立
```
✅ 專業視覺設計
✅ 真實案例/照片
✅ 客戶評價/推薦
✅ 經驗年數/完成案例數
✅ 清楚的聯絡資訊
✅ 隱私政策/合規標章
```

### 降低摩擦
```
✅ 表單欄位精簡（越少越好）
✅ 明確的 CTA 文字
✅ 快速回應時間承諾
✅ "No obligation" 強調
✅ 免費評估/諮詢
```

### 緊迫感
```
✅ 限時優惠（如有）
✅ 強調問題嚴重性
✅ "Downtime costs money" 類型標題
```

### 多重 CTA
```
✅ Hero 區域 CTA
✅ 每個頁面底部表單
✅ 導航欄 CTA 按鈕
✅ 優惠券彈窗（選用）
✅ Footer 快速連結
```

---

## 🚀 開發流程（標準）

### 第一階段：基礎架構（Day 1）
```bash
1. 建立 Next.js 專案
   npx create-next-app@latest project-name --typescript --tailwind --app

2. 設定 Git
   git init
   git remote add origin [repo-url]

3. 基礎設定
   - tailwind.config.ts (顏色、字體)
   - package.json (專案資訊)
   - .gitignore 確認

4. 建立核心組件
   - Header.tsx
   - Footer.tsx
   - Layout.tsx

5. 測試本地運行
   npm run dev
```

### 第二階段：頁面開發（Day 1-2）
```bash
1. 首頁 (app/page.tsx)
   - Hero Section
   - Services Section
   - CTA + Form

2. 隱私政策 (app/privacy/page.tsx)

3. 服務/產品子頁面（3-5 個）

4. 測試響應式設計
```

### 第三階段：功能整合（Day 2）
```bash
1. GDPR Cookie 系統
   - ConsentProvider
   - CookieBanner
   - Privacy Policy

2. Email 表單整合
   - Formspree 註冊
   - AssessmentForm 組件
   - 測試提交

3. SEO 優化
   - Metadata 設定
   - Sitemap 確認
```

### 第四階段：內容與資源（Day 2-3）
```bash
1. 文案撰寫/優化
2. 圖片準備（壓縮、匿名化）
3. 測試所有連結
4. 跨瀏覽器測試
```

### 第五階段：部署（Day 3）
```bash
1. GitHub 推送
   git add .
   git commit -m "Initial commit"
   git push origin main

2. Vercel 部署
   - 連接 GitHub repo
   - 自動部署設定
   - 環境變數（如需要）

3. DNS 設定（自訂域名）
   - A records 或 CNAME
   - 等待 DNS 傳播

4. 最終測試
   - 表單提交
   - Cookie 同意
   - 載入速度
   - SEO 檢查
```

---

## ✅ 部署檢查清單

### 部署前
- [ ] 所有連結正常
- [ ] 表單提交測試通過
- [ ] Email 通知正常接收
- [ ] 圖片正常載入
- [ ] 響應式設計正常
- [ ] Cookie 系統正常運作
- [ ] 無 console 錯誤
- [ ] 無 TypeScript 錯誤
- [ ] 無 ESLint 警告
- [ ] npm run build 成功

### 部署後
- [ ] 網站正常訪問
- [ ] HTTPS 正常
- [ ] 表單提交實際測試
- [ ] Email 實際收到
- [ ] Google Search Console 提交
- [ ] Google Analytics 設定（如需要）
- [ ] 載入速度檢測 (PageSpeed Insights)
- [ ] 跨裝置測試

---

## 📋 提供給 AI 的資訊清單

### 當你要新建專案時，提供以下資訊：

```markdown
**專案類型：** [B2B 服務/電商/部落格/其他]

**業務資訊：**
- 公司名稱：
- 核心服務/產品：
- 目標客戶：
- 地區市場：
- 主要語言：

**必須功能：**
- [ ] 基礎網站（Header, Footer, 首頁）
- [ ] GDPR Cookie 系統
- [ ] Email 表單通知
- [ ] 隱私政策頁面

**選用功能：**
- [ ] 優惠券彈窗
- [ ] 圖片畫廊/輪播
- [ ] 多個服務子頁面
- [ ] FAQ Section
- [ ] 客戶評價
- [ ] 部落格/案例研究

**設計偏好：**
- 主色調：
- 強調色：
- 參考網站：

**SEO 關鍵字：**
- 主要關鍵字 1：
- 主要關鍵字 2：
- 主要關鍵字 3：

**聯絡資訊：**
- Email：
- 電話：
- 地址：

**特殊需求：**
[任何特殊功能或限制]
```

---

## 🎯 給 AI 助手的指令範本

將以下內容複製到新的對話視窗：

```
我要建立一個專業的靜態行銷網站，請參考附件 WEBSITE_BLUEPRINT.md 作為技術架構基準。

**專案資訊：**
[貼上上面的資訊清單]

**技術要求：**
- 使用 Next.js 15 + App Router
- TypeScript + Tailwind CSS
- 部署到 Vercel
- 必須包含 GDPR Cookie 系統
- 必須整合 Email 表單通知

**開始步驟：**
1. 建立專案結構
2. 設定基礎配置
3. 開發核心組件（Header, Footer）
4. 開發首頁（Hero + Services + Contact）
5. 整合 GDPR 系統
6. 整合 Email 通知（Formspree）
7. SEO 優化
8. 準備部署

請開始第一步：建立專案結構。
```

---

## 🔧 常見調整點

### 調整主題顏色
```typescript
// tailwind.config.ts
colors: {
  primary: {
    50: '#eff6ff',
    600: '#2563eb',  // 主色調
    ...
  },
  secondary: { ... },
  accent: { ... },    // CTA 按鈕顏色
}
```

### 調整 Email 通知
```typescript
// components/Form.tsx
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
const recipientEmail = 'your@email.com';
```

### 調整彈窗延遲
```typescript
// components/DiscountPopup.tsx
setTimeout(() => setIsOpen(true), 10000); // 10 秒
```

### 調整圖片輪播速度
```typescript
// components/ImageCarousel.tsx
<ImageCarousel images={photos} interval={5000} /> // 5 秒
```

---

## 📚 參考資源

### 官方文檔
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel 部署: https://vercel.com/docs

### 工具服務
- Formspree (Email): https://formspree.io
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev

### 設計靈感
- Dribbble: B2B landing pages
- Awwwards: Professional websites
- Land-book: Landing page gallery

---

## 🎉 成功指標

### 技術指標
- ✅ 首屏載入 < 3 秒
- ✅ Lighthouse 分數 > 90
- ✅ Mobile-friendly 測試通過
- ✅ 0 console 錯誤

### 業務指標
- ✅ 表單提交正常運作
- ✅ Email 通知即時送達
- ✅ 訪客能清楚了解服務
- ✅ CTA 按鈕明顯可見
- ✅ 專業、可信賴的視覺呈現

---

## 📝 版本記錄

- **v1.0** - 2026-02-05 - 基於 cytecrepair 專案建立
- 基準專案：5 Axis Head Repair (https://5axisheadrepair.com)
- Commit: 725dd1f

---

**使用此藍圖的優勢：**
✅ 快速啟動（2-3 天完成）  
✅ 技術棧成熟穩定  
✅ SEO 優化內建  
✅ GDPR 合規  
✅ 零成本部署  
✅ 易於維護

**將此文檔提供給 AI，即可快速複製同等級的專業網站！** 🚀
