# Formspree Email 問題疑難排解指南
# Formspree Email Troubleshooting Guide

> **問題：** Formspree 收到表單，但 Email 沒有轉發到最終信箱  
> **收件信箱：** yschao@elixirfb.com (Google Workspace)  
> **建立日期：** 2026-02-06

---

## 🔍 問題分析

### 目前狀況（根據截圖）
```
✅ 網站表單提交成功
✅ Formspree 後台收到提交（3 筆在 Spam）
✅ 數據完整（name, email, company, issue 等）
❌ yschao@elixirfb.com 沒收到 Email
```

### 問題根源
**Formspree 預設只「儲存」表單資料，不會自動「轉發」Email！**

你需要在 Formspree 設定中**手動開啟 Email 通知**。

---

## 🚀 解決方案（完整步驟）

### 方法 1：Formspree 後台設定 Email 通知（推薦）⭐

#### 步驟 1：登入 Formspree
```
1. 前往 https://formspree.io/login
2. 使用你的帳號登入
```

#### 步驟 2：找到你的表單
```
1. 點擊左側 "Forms"
2. 找到 Form ID: mvzbpkbz
   (或名稱：可能叫 "5 Axis Head Repair" 或類似)
```

#### 步驟 3：設定 Email 通知
```
1. 點擊該表單進入設定頁面
2. 找到左側選單：「Settings」或「Integration」
3. 找到 "Email Notifications" 或 "Notifications" 區塊
```

#### 步驟 4：新增收件人
```
位置：Email Notifications → Add Email

需要填寫的資訊：
┌─────────────────────────────────────────┐
│ Notification Email                      │
│ ┌─────────────────────────────────────┐ │
│ │ yschao@elixirfb.com                 │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [✓] Send email on new submission       │
│                                         │
│ [Save] [Cancel]                         │
└─────────────────────────────────────────┘
```

**勾選選項：**
- ✅ Send email on new submission（每次提交都發送）
- ✅ Include submission data（包含表單資料）

#### 步驟 5：確認 Email 地址
```
⚠️ 重要！Formspree 會發送確認信到 yschao@elixirfb.com

1. 檢查 yschao@elixirfb.com 的收件匣
2. 找到來自 Formspree 的確認信
   主旨可能是：「Confirm your email notification」
3. 點擊確認連結
4. 看到「Email confirmed!」才算完成
```

#### 步驟 6：測試
```
1. 回到網站，重新提交一次表單
2. 等待 1-2 分鐘
3. 檢查 yschao@elixirfb.com
   - 收件匣
   - 垃圾郵件
   - 所有郵件
4. 應該會收到來自 Formspree 的通知信
```

---

### 方法 2：使用 Formspree 的 Email 欄位設定

如果上面的方法找不到設定，試試這個：

#### 在 Formspree 後台
```
1. Forms → mvzbpkbz → Settings
2. 找到 "Form Settings" 或 "General"
3. 找到 "Reply-to email" 或 "Notification email"
4. 輸入：yschao@elixirfb.com
5. Save Changes
```

---

### 方法 3：檢查 Formspree 計畫限制

#### 免費版限制
```
Formspree Free Plan:
- 50 次提交/月 ✓
- Email 通知：需手動設定 ⚠️
- Spam 過濾：有 ✓
```

#### 檢查你的計畫
```
1. Formspree Dashboard → Settings → Billing
2. 查看 "Current Plan"
3. 確認 "Email Notifications" 是否可用
```

**如果顯示需要升級：**
```
選項 A：升級到付費版（$10/月）
選項 B：使用替代方案（見下方）
```

---

## 🔧 Google Workspace 設定檢查

### 檢查 1：垃圾郵件設定

#### 步驟：
```
1. 登入 Gmail (yschao@elixirfb.com)
2. 點擊右上角齒輪 → "查看所有設定"
3. 切換到 "篩選器和封鎖的地址" 標籤
4. 檢查是否有封鎖 formspree.io 的規則
```

#### 如果有封鎖，移除它：
```
1. 找到相關篩選器
2. 點擊 "刪除"
3. 確認刪除
```

---

### 檢查 2：新增安全寄件者

#### 將 Formspree 加入白名單：
```
1. Gmail → 設定 → 篩選器和封鎖的地址
2. 點擊 "建立新篩選器"
3. 填寫：
   From: *@formspree.io
4. 點擊 "建立篩選器"
5. 勾選：
   [✓] 永不傳送到垃圾郵件
   [✓] 一律標示為重要郵件
6. 點擊 "建立篩選器"
```

---

### 檢查 3：管理員後台設定（如果你是管理員）

#### 如果你有 Google Workspace 管理權限：
```
1. 前往 admin.google.com
2. 應用程式 → Google Workspace → Gmail → 垃圾郵件
3. 找到 "已核准的寄件者" 或 "白名單"
4. 新增：formspree.io
5. 儲存變更
```

---

## 🔍 診斷步驟（現在就做）

### 測試 1：檢查 Formspree 後台設定

```
□ 登入 Formspree
□ 找到 Form mvzbpkbz
□ 查看 Settings → Notifications
□ 確認有沒有設定 yschao@elixirfb.com
□ 如果沒有 → 新增
□ 如果有 → 檢查是否已確認（綠色勾勾）
```

---

### 測試 2：手動觸發 Email

```
□ 在 Formspree 後台
□ 找到任一筆提交（Submissions）
□ 點擊 "Resend notification" 或類似選項
□ 選擇發送到 yschao@elixirfb.com
□ 檢查信箱（包括垃圾郵件）
```

---

### 測試 3：檢查 Email 過濾器

```
□ 登入 Gmail (yschao@elixirfb.com)
□ 搜尋：from:formspree.io
□ 搜尋：subject:new submission
□ 搜尋：mvzbpkbz
□ 檢查「所有郵件」和「垃圾郵件」
```

---

## 🎯 最可能的原因

根據你的描述，**99% 是因為沒有在 Formspree 設定 Email 通知**。

### 證據：
```
✅ Formspree 收到提交（3 筆）
✅ 資料完整
❌ 但沒有 Email 通知

→ 結論：Email 通知功能沒開啟
```

---

## 🚨 如果以上都不行：替代方案

### 方案 A：使用 Formspree Webhook + Zapier/Make

#### 原理：
```
表單提交 → Formspree → Webhook → Zapier → Gmail
```

#### 設定：
```
1. Formspree → Settings → Integrations → Webhooks
2. 新增 Webhook URL（從 Zapier 取得）
3. Zapier 設定自動發送 Email
```

**缺點：** 需要另一個帳號（Zapier 免費版每月 100 次）

---

### 方案 B：改用其他服務

#### EmailJS（推薦）✅
```
優點：
- 完全免費（200 次/月）
- 直接發送 Email，不需中介
- 支援 Gmail SMTP
- 設定簡單

缺點：
- 需要修改網站代碼（我可以幫你）
```

#### Resend（新興服務）
```
優點：
- 專為開發者設計
- 免費版 3,000 次/月
- API 簡單
- 可自訂寄件者

缺點：
- 需要修改代碼
- 需要驗證域名（選用）
```

#### SendGrid
```
優點：
- 業界標準
- 免費版 100 次/天
- 穩定可靠

缺點：
- 設定較複雜
- 需要 API Key
```

---

## 📋 立即行動清單

### 🔥 現在立刻做（5 分鐘）

**步驟 1：檢查 Formspree Email 設定**
```bash
1. 登入 https://formspree.io
2. Forms → mvzbpkbz → Settings
3. 找到 "Email Notifications" 或 "Notifications"
4. 確認是否有 yschao@elixirfb.com
```

**步驟 2：如果沒有設定**
```bash
1. 點擊 "Add Email" 或 "Add Notification"
2. 輸入：yschao@elixirfb.com
3. 勾選：Send on new submission
4. Save
5. 檢查 Email 確認信
6. 點擊確認連結
```

**步驟 3：測試**
```bash
1. 重新提交網站表單
2. 等待 1-2 分鐘
3. 檢查 yschao@elixirfb.com
   - 收件匣
   - 垃圾郵件
   - 搜尋：from:formspree.io
```

---

### 📧 如果還是沒收到（備用方案）

**聯絡我，我幫你：**
```
選項 A：改用 EmailJS（免費，穩定）
選項 B：改用 Resend（免費額度更高）
選項 C：設定 Webhook + Zapier（自動化）
```

---

## 🔍 Debug 資訊收集

### 如果你需要我進一步幫忙，請提供：

**Formspree 後台截圖：**
```
□ Dashboard 主頁
□ Form mvzbpkbz → Settings 頁面
□ Notifications 或 Email 設定區塊
□ 目前的 Plan（Free/Paid）
```

**Gmail 截圖：**
```
□ 搜尋 "from:formspree.io" 的結果
□ 垃圾郵件資料夾
□ 篩選器設定頁面
```

**測試資訊：**
```
□ 提交表單的時間（精確到分鐘）
□ 提交時使用的 Email
□ Formspree 後台是否顯示該筆提交
```

---

## 📚 相關文檔連結

### Formspree 官方文檔
- [Email Notifications](https://help.formspree.io/hc/en-us/articles/360013580813-Email-Notifications)
- [Troubleshooting Email Delivery](https://help.formspree.io/hc/en-us/articles/360055644874)
- [Spam Filter](https://help.formspree.io/hc/en-us/articles/360052094933)

### Google Workspace
- [Gmail 篩選器設定](https://support.google.com/mail/answer/6579)
- [垃圾郵件設定](https://support.google.com/mail/answer/1366858)
- [管理員後台設定](https://support.google.com/a/answer/2368132)

---

## ✅ 預期結果

### 設定完成後，你會收到類似這樣的 Email：

```
From: Formspree <noreply@formspree.io>
To: yschao@elixirfb.com
Subject: New submission from 5 Axis Head Repair

───────────────────────────────────
Form: mvzbpkbz
Submitted: Feb 6, 2026 at 6:04 AM
───────────────────────────────────

Name: Hunag
Email: taiwan3810@gmail.com
Company: CNC
Location: 台灣
Issue Category: Spindle Rotary Union Leakage
Issue Description: 主軸漏水

Machine Model: M21
Has Photos: true
Has Videos: false
Has Alarms: false

───────────────────────────────────
View submission: https://formspree.io/forms/mvzbpkbz/...
───────────────────────────────────
```

---

## 🎯 總結

**問題：** Formspree 預設不會自動發送 Email 通知  
**解決：** 在後台手動設定 Email Notifications  
**關鍵：** 必須確認 Email（點擊確認信）  
**測試：** 重新提交表單驗證  

**如果還是不行：** 聯絡我，我幫你切換到其他 Email 服務 📧

---

**最後更新：** 2026-02-06  
**狀態：** 等待用戶檢查 Formspree 設定
