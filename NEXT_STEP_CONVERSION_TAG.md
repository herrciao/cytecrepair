# ✅ 第一步已完成！接下來做這個

> **狀態：** 全站代碼已安裝 ✅  
> **下一步：** 取得並安裝轉換追蹤代碼  
> **時間：** 3 分鐘

---

## ✅ 已完成的部分

### 全站代碼（Global Tag）已安裝 ✓

```javascript
// 已安裝在 app/layout.tsx
Conversion ID: AW-17933655916

作用：追蹤所有訪客
位置：所有頁面
狀態：✅ 已部署到網站
```

**驗證方式：**
```
部署完成後（2-3 分鐘）：
1. 前往你的網站首頁
2. 按 F12 打開開發者工具
3. 切到 Network 標籤
4. 重新載入頁面
5. 搜尋 "gtag" 或 "17933655916"
6. 應該看到請求 ✓
```

---

## 🔥 現在需要做的（第二步）

### 取得「轉換追蹤代碼」（Conversion Event Snippet）

這是用來追蹤「表單提交成功」的代碼。

---

## 📋 詳細步驟

### 步驟 1：回到 Google Ads 後台

你剛才在的那個頁面，**不要關閉**！

---

### 步驟 2：找到「轉換動作」設定

在 Google Ads 介面上，應該有這些選項：

```
可能的位置 A：
工具與設定 → 評估 → 轉換 → 選擇你的轉換動作

可能的位置 B：
在你剛才的代碼頁面，往下滾動
應該會看到「事件代碼片段」或「Event snippet」

可能的位置 C：
點擊「設定詳細資料」或「查看代碼」
```

---

### 步驟 3：找到這段代碼

你需要找到類似這樣的代碼：

```html
<!-- Event snippet for 表單提交 conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-17933655916/XXXXXXXXXXXXX',  ← 注意這裡有額外的斜線和代碼
      'value': 1.0,
      'currency': 'USD'
  });
</script>
```

**關鍵特徵：**
- ✅ 包含 `gtag('event', 'conversion', ...)`
- ✅ `send_to` 後面有 `AW-17933655916/` 加上一串新的代碼
- ✅ 這段代碼**比全站代碼短很多**

---

### 步驟 4：複製那段代碼

**重要：**
- 只需要複製 `<script>` 到 `</script>` 之間的 JavaScript 代碼
- 不需要 `<script>` 標籤本身（我會幫你加）

**範例（你需要的部分）：**
```javascript
gtag('event', 'conversion', {
    'send_to': 'AW-17933655916/XXXXXXXXXXXXX',
    'value': 1.0,
    'currency': 'USD'
});
```

---

### 步驟 5：把代碼傳給我

**方式 A：直接貼給我**
```
複製那段代碼，直接貼在對話中
```

**方式 B：截圖**
```
截圖那個代碼區塊，我會幫你打出來
```

---

## 🎯 我拿到代碼後會做什麼

### 我會把它安裝到感謝頁面

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
            'send_to': 'AW-17933655916/你提供的代碼',
            'value': 100.0,
            'currency': 'USD'
          });
        `}
      </Script>

      {/* 頁面內容 */}
      <div>...</div>
    </>
  );
}
```

---

## 📸 如果找不到轉換代碼

### 可能的原因：

**原因 1：還沒建立「轉換動作」**

需要先建立：
```
1. Google Ads → 工具與設定 → 轉換
2. 點擊「+ 新增轉換動作」
3. 選擇「網站」
4. 類別：提交潛在客戶表單
5. 轉換名稱：Form Submission - Assessment Request
6. 計數方式：一次
7. 點擊窗口：30 天
8. 完成設定
9. 然後就會看到「轉換追蹤代碼」
```

**原因 2：在不同的地方**

截圖給我看你的 Google Ads 介面，我幫你找！

---

## ⚡ 快速參考

### 兩段代碼的差異

**全站代碼（已安裝）✅：**
```javascript
// 比較長，包含 gtag 函數定義
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17933655916');  ← 只有 config
```

**轉換代碼（需要取得）⏳：**
```javascript
// 比較短，只有一個 event 呼叫
gtag('event', 'conversion', {  ← 注意是 event + conversion
    'send_to': 'AW-17933655916/XXXXX',  ← 有斜線加代碼
    'value': 1.0,
    'currency': 'USD'
});
```

---

## 🎓 為什麼需要兩段代碼？

```
全站代碼（Global Tag）
    ↓
在所有頁面載入
追蹤所有訪客行為
    ↓
當訪客填寫表單
    ↓
跳轉到 /contact-success
    ↓
轉換代碼（Event Snippet）觸發
    ↓
Google Ads 記錄：這個廣告產生了一個轉換！💰
    ↓
Google 自動優化廣告投放
```

**缺了轉換代碼會怎樣？**
```
❌ Google 知道有人訪問網站
❌ 但不知道有人填表單
❌ 無法計算轉換率
❌ 無法優化廣告
❌ 浪費廣告預算
```

---

## 📚 相關文檔

- **GOOGLE_ADS_SETUP.md** - 完整的 Google Ads 設定指南
- **CONVERSION_TRACKING_SUMMARY.md** - 轉換追蹤快速參考

---

## ✅ 檢查清單

**已完成：**
- [x] 全站代碼已安裝到 app/layout.tsx
- [x] 代碼已推送到 GitHub
- [x] Vercel 正在自動部署

**待辦（你現在要做）：**
- [ ] 回到 Google Ads 後台
- [ ] 找到「轉換追蹤代碼」或「Event snippet」
- [ ] 複製那段代碼
- [ ] 傳給我（貼在對話中或截圖）

**待辦（我會幫你）：**
- [ ] 安裝轉換代碼到 /contact-success 頁面
- [ ] 測試驗證
- [ ] 部署上線

---

## 🚀 完成後的效果

### 安裝完整後，當有人填表單：

```
1. 訪客點擊 Google 廣告 → 全站代碼記錄
2. 瀏覽網站 → 全站代碼追蹤行為
3. 填寫表單 → 提交
4. 跳轉到 /contact-success → 轉換代碼觸發 🎯
5. Google Ads 記錄：1 次轉換
6. 你在後台看到：成本、轉換率、ROI
7. Google 自動優化：投放給更可能填表的人
```

---

**現在：回到 Google Ads，找到轉換追蹤代碼，傳給我！** 🚀

有任何問題隨時問我！😊
