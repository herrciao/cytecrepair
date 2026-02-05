# Google Ads 轉換追蹤 - 快速參考

> **完成日期：** 2026-02-05  
> **狀態：** ✅ 技術準備完成，等待 Google Ads 代碼安裝  
> **轉換頁面：** https://www.5axisheadrepair.com/contact-success

---

## ✅ 已完成

### 1. 感謝頁面（Thank You Page）
```
網址：/contact-success
用途：只有填完表單的人才會到達
特色：專業、清晰、包含完整後續步驟說明
SEO：設為 noindex（正確，不影響追蹤）
```

### 2. 表單自動重定向
```
AssessmentForm（評估表單）
提交成功 → 0.5 秒 → /contact-success

DiscountPopup（優惠券彈窗）
提交成功 → 顯示優惠碼 8 秒 → /contact-success
```

### 3. Email 通知
```
所有表單提交 → Formspree → yschao@elixirfb.com
同時 → 重定向到感謝頁面 → 觸發轉換追蹤
```

---

## 📝 接下來要做的事（你的任務）

### 第一步：建立 Google Ads 轉換動作

**在 Google Ads 後台：**
```
工具與設定 → 轉換 → + 新增轉換動作
選擇：網站
類別：提交潛在客戶表單
名稱：Form Submission - Assessment Request
計數：一次（One）
```

### 第二步：取得追蹤代碼

Google 會給你兩段代碼：
1. **全站代碼（Global Tag）** - AW-XXXXXXXXXX
2. **轉換代碼（Event Snippet）** - AW-XXXXXXXXXX/YYYYYYYYYYYYYY

### 第三步：安裝代碼

**詳細步驟請參考：**
- 📚 **GOOGLE_ADS_SETUP.md** - 完整安裝指南（775 行）

**或快速安裝：**

#### A. 全站代碼 → `app/layout.tsx`
```typescript
<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"/>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-XXXXXXXXXX');
    `
  }}/>
</head>
```

#### B. 轉換代碼 → `app/contact-success/page.tsx`
```typescript
import Script from 'next/script';

export default function ContactSuccessPage() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYYYYYY',
            'value': 100.0,
            'currency': 'USD'
          });
        `}
      </Script>
      {/* 其他內容 */}
    </>
  );
}
```

⚠️ **記得替換：**
- `AW-XXXXXXXXXX` → 你的 Conversion ID
- `AW-XXXXXXXXXX/YYYYYYYYYYYYYY` → 你的 Conversion Label

---

## 🧪 測試驗證

### 方法 1：實際測試（最簡單）
```
1. 前往你的網站
2. 填寫評估表單
3. 提交後應該跳轉到 /contact-success
4. 24 小時後檢查 Google Ads 後台 → 轉換
5. 應該看到「1 次轉換」
```

### 方法 2：使用 Tag Assistant
```
1. 安裝 Chrome 擴充功能：Tag Assistant Legacy
2. 啟用 Record
3. 提交表單
4. 檢查是否有綠色的 Google Ads Conversion Tag
```

---

## 📊 在 Google Ads 填寫的網址

**Google Ads 問你：「使用者填完表單會到達哪個網址？」**

**正確答案：**
```
https://www.5axisheadrepair.com/contact-success
```

**或（如果不含 https://）：**
```
5axisheadrepair.com/contact-success
```

⚠️ **不要填錯！**

❌ 錯誤：`5axisheadrepair.com/` （首頁）  
❌ 錯誤：`5axisheadrepair.com/#contact` （錨點）  
❌ 錯誤：`www.5axisheadrepair.com` （缺少路徑）  

✅ 正確：`5axisheadrepair.com/contact-success`

---

## 🎯 為什麼這樣設計？

### 傳統做法（不好）❌
```
表單提交 → 顯示「成功」訊息在同一頁
→ Google Ads 無法追蹤
→ 不知道哪些廣告有效
```

### 我們的做法（正確）✅
```
表單提交 → 重定向到獨立的感謝頁面
→ Google Ads 精確追蹤每次提交
→ 清楚知道廣告投資回報率
→ Google 自動優化廣告投放
```

---

## 💰 預期效果

### 安裝轉換追蹤後，你將能：

1. **知道成本**
   ```
   每個詢單花了多少錢？
   哪些關鍵字最划算？
   ```

2. **優化投放**
   ```
   Google 自動學習：哪些人更可能填表
   自動調整出價：在對的時間、對的人、對的關鍵字
   ```

3. **計算 ROI**
   ```
   廣告花費：$500
   獲得詢單：10 個
   成交：3 個（30%）
   平均訂單：$2000
   總收入：$6000
   ROI：1100%（花 $1 賺回 $11）
   ```

4. **持續改進**
   ```
   A/B 測試不同廣告文案
   找出高轉換率的關鍵字
   暫停低效廣告
   擴大成功的廣告活動
   ```

---

## 📚 相關文件

| 文件 | 用途 | 適合誰 |
|------|------|--------|
| **CONVERSION_TRACKING_SUMMARY.md** | 快速參考 | 你（現在） |
| **GOOGLE_ADS_SETUP.md** | 完整安裝指南 | 執行安裝時 |
| **WEBSITE_SUMMARY.md** | 網站完整文檔 | 技術維護 |
| **DEPLOY.md** | 部署疑難排解 | 遇到錯誤時 |

---

## ⚡ 快速行動清單

**今天（部署後立即）：**
- [ ] 確認感謝頁面正常訪問（https://5axisheadrepair.com/contact-success）
- [ ] 測試表單提交 → 自動跳轉

**本週（開始廣告前）：**
- [ ] 登入 Google Ads
- [ ] 建立轉換動作
- [ ] 安裝追蹤代碼（參考 GOOGLE_ADS_SETUP.md）
- [ ] 測試轉換追蹤
- [ ] 確認 Tag Assistant 顯示綠色

**下週（廣告上線後）：**
- [ ] 檢查轉換數據（24-48 小時後）
- [ ] 設定智慧出價策略（Target CPA 或 Maximize Conversions）
- [ ] 監控轉換率和單次轉換出價

**持續優化：**
- [ ] 每週檢查轉換數據
- [ ] 暫停低轉換率的關鍵字
- [ ] 增加預算給高 ROI 的廣告活動
- [ ] A/B 測試不同廣告文案

---

## ❓ 需要幫助？

### 技術問題
```
參考：GOOGLE_ADS_SETUP.md → FAQ 章節
涵蓋：代碼安裝、驗證、疑難排解
```

### Google Ads 設定問題
```
參考：GOOGLE_ADS_SETUP.md → 步驟 2-3
詳細截圖和說明（如需要）
```

### 轉換追蹤無效
```
參考：GOOGLE_ADS_SETUP.md → 驗證轉換追蹤
3 種驗證方法 + 疑難排解
```

---

## 🎉 總結

你現在擁有：
- ✅ 專業的感謝頁面（/contact-success）
- ✅ 自動重定向機制（兩個表單）
- ✅ Email 通知系統（Formspree）
- ✅ 完整的安裝指南（GOOGLE_ADS_SETUP.md）

**只差一步：安裝 Google Ads 追蹤代碼** 🚀

參考 `GOOGLE_ADS_SETUP.md` 完成最後的設定，你就準備好啟動 Google Ads 廣告活動了！

---

**祝廣告投放順利，詢單滿滿！** 💰📈
