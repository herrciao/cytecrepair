# Google Ads 轉換追蹤設定指南
# Google Ads Conversion Tracking Setup Guide

> **專案：** 5 Axis Head Repair  
> **轉換頁面：** https://www.5axisheadrepair.com/contact-success  
> **建立日期：** 2026-02-05

---

## 📋 目錄

1. [為什麼需要轉換追蹤？](#為什麼需要轉換追蹤)
2. [已完成的技術準備](#已完成的技術準備)
3. [Google Ads 轉換設定步驟](#google-ads-轉換設定步驟)
4. [驗證轉換追蹤](#驗證轉換追蹤)
5. [常見問題](#常見問題)

---

## 🎯 為什麼需要轉換追蹤？

### 問題：沒有轉換追蹤的後果
```
❌ 不知道哪些廣告帶來真實詢單
❌ 浪費預算在無效的關鍵字上
❌ 無法優化廣告投放策略
❌ 無法計算真實的投資回報率（ROI）
```

### 解決方案：正確的轉換追蹤
```
✅ 只計算「真的填完表單」的人
✅ 知道哪些關鍵字帶來詢單
✅ Google 自動優化廣告投放
✅ 清楚知道每個詢單的成本
```

---

## ✅ 已完成的技術準備

### 1. Thank You Page（感謝頁面）已建立
```
網址：https://www.5axisheadrepair.com/contact-success
用途：只有填完表單的人才會到這一頁
特點：乾淨、專業、包含完整的後續步驟說明
```

### 2. 表單自動重定向已設定
```typescript
// AssessmentForm (一般評估表單)
提交成功 → 0.5 秒後 → /contact-success

// DiscountPopup (優惠券彈窗表單)
提交成功 → 顯示優惠碼 8 秒 → /contact-success
```

### 3. Email 通知正常運作
```
表單提交 → Formspree 處理 → 發送到 yschao@elixirfb.com
同時 → 使用者被重定向到感謝頁面 → Google Ads 記錄轉換
```

---

## 🚀 Google Ads 轉換設定步驟

### 步驟 1：登入 Google Ads

1. 前往 https://ads.google.com
2. 選擇你的廣告帳戶
3. 點擊右上角「工具與設定」圖示 🔧

---

### 步驟 2：建立轉換動作

#### 2.1 進入轉換頁面
```
工具與設定 → 評估 → 轉換
點擊「+ 新增轉換動作」
```

#### 2.2 選擇轉換類型
```
選擇：「網站」
（不是應用程式、電話、或匯入）
```

#### 2.3 設定轉換詳細資訊

**轉換名稱：**
```
建議名稱：Form Submission - Assessment Request
或
中文：表單提交 - 評估請求
```

**類別：**
```
選擇：「提交潛在客戶表單」(Submit lead form)
```

**轉換價值：**
```
選項 A（推薦）：使用相同的價值
- 輸入一個預估的詢單價值
- 例如：100 美元（代表一個詢單的平均價值）

選項 B：不使用價值
- 如果不確定價值，選擇「不使用價值」
```

**計數方式：**
```
選擇：「一次」(One)
解釋：同一個人多次點擊只算一次轉換
（避免重複計算）
```

---

### 步驟 3：設定追蹤方式

#### 3.1 選擇追蹤方法
```
選擇：「使用 Google 代碼管理工具」
或
選擇：「使用網頁代碼」（手動安裝）
```

#### 3.2 取得轉換追蹤代碼

**如果使用「網頁代碼」：**

Google 會提供兩段代碼：

**A. 全站代碼（Google tag）：**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXXX');
</script>
```

**B. 轉換追蹤代碼：**
```html
<!-- Event snippet for Form submission conversion page -->
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYYYYYY',
    'value': 100.0,
    'currency': 'USD'
  });
</script>
```

---

### 步驟 4：安裝追蹤代碼到網站

#### 4.1 安裝全站代碼（Google tag）

**位置：** 放在所有頁面的 `<head>` 區塊

**檔案：** `app/layout.tsx`

**程式碼範例：**
```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Conversion Tracking - Global Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        {/* ... 其他內容 ... */}
        {children}
      </body>
    </html>
  );
}
```

⚠️ **重要：** 替換 `AW-XXXXXXXXXX` 為你的實際 Conversion ID

---

#### 4.2 安裝轉換追蹤代碼（Event Snippet）

**位置：** 只放在感謝頁面（`/contact-success`）

**檔案：** `app/contact-success/page.tsx`

**程式碼範例：**

**選項 A：使用 Script 組件（推薦）**
```typescript
// app/contact-success/page.tsx
import Script from 'next/script';

export default function ContactSuccessPage() {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYYYYYY',
            'value': 100.0,
            'currency': 'USD'
          });
        `}
      </Script>

      {/* 頁面內容 */}
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* ... 其他內容 ... */}
      </div>
    </>
  );
}
```

**選項 B：使用客戶端組件**
```typescript
// components/GoogleAdsConversion.tsx
'use client';

import { useEffect } from 'react';

export default function GoogleAdsConversion() {
  useEffect(() => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYYYYYY',
        'value': 100.0,
        'currency': 'USD'
      });
    }
  }, []);

  return null; // This component doesn't render anything
}

// app/contact-success/page.tsx
import GoogleAdsConversion from '@/components/GoogleAdsConversion';

export default function ContactSuccessPage() {
  return (
    <>
      <GoogleAdsConversion />
      {/* 頁面內容 */}
    </>
  );
}
```

⚠️ **重要：** 
- 替換 `AW-XXXXXXXXXX/YYYYYYYYYYYYYY` 為你的實際 Conversion Label
- 調整 `value` 為你的實際詢單價值

---

### 步驟 5：設定轉換窗口

**點擊後轉換窗口：**
```
建議：30 天
意思：用戶點擊廣告後 30 天內提交表單，都算這個廣告的轉換
```

**瀏覽後轉換窗口：**
```
建議：1 天
意思：用戶看到廣告但沒點擊，1 天內提交表單，算這個廣告的轉換
```

---

### 步驟 6：完成設定

點擊「完成」或「儲存並繼續」

✅ 轉換動作已建立！

---

## ✅ 驗證轉換追蹤

### 方法 1：使用 Google Ads 測試工具

#### 1.1 安裝 Google Tag Assistant
```
1. 前往 Chrome 線上應用程式商店
2. 搜尋「Tag Assistant Legacy」
3. 安裝擴充功能
```

#### 1.2 測試轉換追蹤
```
1. 打開你的網站首頁
2. 點擊 Tag Assistant 圖示
3. 啟用「Record」
4. 填寫表單並提交
5. 應該會被重定向到 /contact-success
6. 檢查 Tag Assistant：
   ✓ Google Ads Conversion Tag 應該顯示為「綠色」
   ✓ 標籤名稱：AW-XXXXXXXXXX/YYYYYYYYYYYYYY
```

---

### 方法 2：直接測試轉換

#### 2.1 提交測試表單
```
1. 前往你的網站
2. 填寫評估表單（使用真實資訊）
3. 提交表單
4. 確認被重定向到：
   https://www.5axisheadrepair.com/contact-success
```

#### 2.2 檢查 Google Ads 後台
```
1. 前往 Google Ads → 工具與設定 → 轉換
2. 找到剛才建立的轉換動作
3. 查看「狀態」欄位：
   - 「最近未記錄到轉換」→ 等待（可能需要幾小時）
   - 「1 次轉換」→ ✅ 成功！
```

⏱️ **注意：** 轉換數據可能需要 **3-24 小時** 才會在 Google Ads 後台顯示

---

### 方法 3：使用瀏覽器開發者工具

#### 3.1 打開開發者工具
```
1. 前往 /contact-success 頁面
2. 按 F12 或右鍵 → 檢查
3. 切換到「Network」標籤
4. 篩選：輸入 "collect" 或 "google"
```

#### 3.2 重新載入頁面
```
1. 按 F5 重新載入
2. 在 Network 標籤中找到：
   - URL 包含 "google-analytics.com/collect" 或
   - URL 包含 "googleadservices.com/pagead/conversion"
3. 如果看到 → ✅ 轉換追蹤代碼正常運作
```

---

## 📊 轉換追蹤數據解讀

### 在 Google Ads 後台查看

**位置：**
```
Google Ads → 報表 → 預先定義的報表 → 轉換
```

**重要指標：**

| 指標 | 說明 | 如何使用 |
|-----|------|---------|
| **轉換次數** | 有多少人填寫表單 | 追蹤總詢單數 |
| **轉換率** | 點擊廣告後，有多少％的人填表 | 優化廣告文案 |
| **單次轉換出價** | 每個詢單花了多少錢 | 控制廣告預算 |
| **轉換價值** | 所有詢單的總價值 | 計算 ROI |
| **轉換動作** | 哪個表單被填寫（如果有多個） | 優化表單設計 |

---

### 解讀範例

**情境 A：高轉換率（10%+）**
```
✅ 廣告文案精準
✅ 關鍵字選擇正確
✅ 目標客戶精準
→ 行動：增加預算，擴大投放
```

**情境 B：低轉換率（<2%）**
```
❌ 廣告與網站內容不符
❌ 關鍵字太廣泛
❌ 網站載入太慢或表單太複雜
→ 行動：優化著陸頁，調整關鍵字
```

**情境 C：單次轉換出價太高（>$100）**
```
⚠️ 廣告成本過高
⚠️ 競爭太激烈
⚠️ 關鍵字出價過高
→ 行動：調整關鍵字策略，降低出價
```

---

## 🎯 優化建議

### 1. 設定轉換目標
```
Google Ads → 工具與設定 → 轉換 → 設定
選擇：「將此轉換動作納入『轉換次數』欄」
```
✅ 這樣 Google 才會用這個轉換優化你的廣告

---

### 2. 使用智慧出價策略

**推薦策略：**

**A. 目標單次轉換出價（Target CPA）**
```
適合：知道每個詢單願意花多少錢
設定：例如「每個詢單不超過 $50」
優點：自動控制成本
```

**B. 盡量爭取轉換（Maximize Conversions）**
```
適合：預算有限，想要最多詢單
設定：設定每日預算，Google 自動優化
優點：在預算內獲得最多轉換
```

**C. 目標廣告投資報酬率（Target ROAS）**
```
適合：知道每個詢單的平均價值
設定：例如「每花 $1 要賺回 $5」
優點：自動優化投資回報率
```

---

### 3. 設定轉換價值

**如果你知道：**
- 平均每個詢單的成交率：例如 30%
- 平均每筆訂單的金額：例如 $2000

**計算：**
```
轉換價值 = 成交率 × 平均訂單金額
         = 30% × $2000
         = $600

→ 在轉換設定中，將「價值」設為 $600
```

✅ 這樣 Google 可以幫你計算實際的 ROI

---

### 4. 建立多個轉換動作（進階）

**為什麼？**
```
不同的表單可能有不同的價值
```

**範例：**
```
1. 一般評估表單 → 價值 $100
2. 優惠券彈窗表單 → 價值 $150（更高轉換意願）
3. 維修畫廊頁表單 → 價值 $120（已看過案例）
```

**如何設定：**
```
方法 A：使用不同的感謝頁面
- /contact-success-assessment
- /contact-success-discount
- /contact-success-gallery

方法 B：使用 URL 參數
- /contact-success?source=assessment
- /contact-success?source=discount
- /contact-success?source=gallery
```

---

## ⚠️ 常見問題

### Q1: 為什麼我看不到轉換數據？

**可能原因：**

**A. 轉換追蹤代碼未正確安裝**
```
檢查方法：
1. 查看網站原始碼（右鍵 → 檢視原始碼）
2. 搜尋 "AW-" 應該能找到你的 Conversion ID
3. 如果找不到 → 代碼未安裝
```

**B. 轉換 ID 或 Label 錯誤**
```
檢查方法：
1. Google Ads 後台 → 轉換 → 選擇轉換動作 → 標籤設定
2. 複製正確的 Conversion ID 和 Label
3. 確認網站上的代碼完全相同
```

**C. 使用了廣告攔截工具**
```
解決方法：
1. 暫時關閉廣告攔截器（AdBlock、uBlock 等）
2. 重新測試表單提交
```

**D. 需要等待數據更新**
```
轉換數據延遲：3-24 小時
解決方法：耐心等待
```

---

### Q2: 表單提交了，但沒有跳轉到感謝頁面？

**可能原因：**

**A. JavaScript 錯誤**
```
檢查方法：
1. 打開瀏覽器開發者工具（F12）
2. 切換到「Console」標籤
3. 提交表單
4. 查看是否有紅色錯誤訊息
```

**B. Formspree 回應失敗**
```
檢查方法：
1. 打開開發者工具 → Network 標籤
2. 提交表單
3. 找到 "mvzbpkbz" 請求
4. 檢查 Status Code：
   - 200 → ✅ 成功
   - 4xx/5xx → ❌ 失敗
```

**C. 網路連線問題**
```
解決方法：
1. 檢查網路連線
2. 重試提交
```

---

### Q3: 感謝頁面的 robots 設定會影響轉換追蹤嗎？

**答案：不會！**

```typescript
// app/contact-success/page.tsx
export const metadata = {
  robots: 'noindex, nofollow', // ✅ 正確
};
```

**說明：**
- `noindex, nofollow` 只是告訴搜尋引擎「不要索引這個頁面」
- Google Ads 的轉換追蹤是透過 JavaScript 代碼運作
- 兩者互不影響

**為什麼要 noindex？**
```
✓ 感謝頁面不應該被搜尋引擎索引
✓ 避免用戶直接從 Google 搜尋結果進入感謝頁面
✓ 確保只有「真的填完表單」的人才會到這一頁
```

---

### Q4: 可以追蹤電話號碼點擊嗎？

**答案：可以！**

**方法：**
```html
<!-- 使用 onclick 事件 -->
<a 
  href="tel:+1234567890"
  onclick="gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYYYYYY'});"
>
  Call Us: +1 (234) 567-890
</a>
```

**React/Next.js 版本：**
```typescript
'use client';

export default function PhoneButton() {
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXXX/PHONE_CONVERSION_LABEL'
      });
    }
  };

  return (
    <a 
      href="tel:+1234567890" 
      onClick={handlePhoneClick}
      className="btn-primary"
    >
      📞 Call Us Now
    </a>
  );
}
```

---

### Q5: 一個訪客提交多次表單，會算幾次轉換？

**答案：取決於你的設定**

**設定位置：**
```
Google Ads → 轉換 → 選擇轉換動作 → 編輯設定 → 計數方式
```

**選項 A：一次（One）** ⭐ 推薦
```
同一個訪客（相同 Cookie）多次提交 → 只算 1 次轉換
適合：潛在客戶表單、註冊、下載
```

**選項 B：每次（Every）**
```
同一個訪客多次提交 → 每次都算轉換
適合：電商購買、重複消費行為
```

**建議：**
```
B2B 服務網站（像你的）→ 選「一次」
避免重複計算同一個客戶
```

---

### Q6: 轉換追蹤會影響網站速度嗎？

**答案：影響極小**

**實測數據：**
```
Google Ads 全站代碼：~15KB（壓縮後）
載入時間：~100-200ms
對 Lighthouse 分數影響：1-3 分
```

**優化建議：**
```typescript
// 使用 strategy="afterInteractive" 延遲載入
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

✅ 這樣不會阻擋頁面首屏渲染

---

## 📚 相關資源

### Google 官方文檔
- [轉換追蹤說明](https://support.google.com/google-ads/answer/1722022)
- [設定網站轉換](https://support.google.com/google-ads/answer/6331314)
- [驗證轉換追蹤](https://support.google.com/google-ads/answer/6331304)

### 測試工具
- [Tag Assistant Legacy](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
- [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)

### Next.js 文檔
- [Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)
- [Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

## ✅ 檢查清單

部署前：
- [ ] 感謝頁面已上線（/contact-success）
- [ ] 表單提交後正確重定向
- [ ] Email 通知正常運作
- [ ] 本地測試通過

Google Ads 設定：
- [ ] 建立轉換動作
- [ ] 取得 Conversion ID 和 Label
- [ ] 安裝全站代碼（所有頁面）
- [ ] 安裝轉換追蹤代碼（感謝頁面）
- [ ] 設定轉換窗口（30 天）
- [ ] 選擇計數方式（一次）

驗證：
- [ ] Tag Assistant 顯示綠色
- [ ] 測試表單提交成功
- [ ] 24 小時後檢查 Google Ads 後台
- [ ] 轉換數據正常顯示

優化：
- [ ] 設定為主要轉換目標
- [ ] 啟用智慧出價策略
- [ ] 設定轉換價值（如適用）
- [ ] 定期檢查轉換數據

---

## 🎯 下一步行動

### 立即執行（今天）
1. ✅ 感謝頁面已上線
2. 📝 建立 Google Ads 轉換動作
3. 🔧 取得並安裝追蹤代碼
4. 🧪 提交測試表單驗證

### 短期（1-7 天）
1. 📊 檢查轉換數據是否顯示
2. 🎯 設定智慧出價策略
3. 📈 監控初步轉換表現
4. 🔍 調整關鍵字和廣告文案

### 長期（1-3 個月）
1. 📉 分析轉換率趨勢
2. 💰 優化單次轉換出價
3. 🎨 A/B 測試不同廣告文案
4. 🚀 擴大成功的廣告活動

---

**祝你的 Google Ads 廣告投放成功！🚀**

如有問題，請參考 Google Ads 說明中心或聘請專業的 Google Ads 顧問。
