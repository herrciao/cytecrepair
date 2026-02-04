# 🚀 黃金部署指令（通用模板）

> **最後更新：2026-02-04**  
> **用途：任何 Next.js / React 專案的完整部署流程**  
> **平台：Vercel / Netlify / 其他**

---

## 📍 **部署節點快照管理**

### **如何建立部署節點**

每次成功部署後，記錄一個穩定版本快照：

```markdown
### **部署 [節點名稱] 節點** ⭐
> **[專案簡述]**  
> 當說「回到部署 [節點名稱]」時，Git 會回退到這個狀態  
> 
> **快照資訊：**
> - 🏷️ 專案：[專案名稱]
> - 📍 Commit：`[短 hash]` (完整：[完整 hash])
> - 💬 訊息：[commit 訊息]
> - 📅 時間：[YYYY-MM-DD HH:MM:SS]
> - 📦 版本：Next.js [版本]、React [版本]、TypeScript [版本]
> - 🔒 安全：0 vulnerabilities
> - ✅ 狀態：[平台] 部署成功
> - 🎯 功能：[主要功能列表]
>
> **建立日期：[YYYY-MM-DD]**
```

**範例：**
```markdown
### **部署 A 節點** ⭐
> **基礎功能版本**  
> 初始成功部署的版本  
> 
> **快照資訊：**
> - 🏷️ 專案：my-awesome-app
> - 📍 Commit：`abc1234` (完整：abc1234567890def...)
> - 💬 訊息：feat: 完成基礎功能開發
> - 📅 時間：2026-02-04 10:30:00
> - 📦 版本：Next.js 16.1.6、React 19.0.0、TypeScript 5.x
> - 🔒 安全：0 vulnerabilities
> - ✅ 狀態：Vercel 部署成功
> - 🎯 功能：首頁、登入、基礎 API
>
> **建立日期：2026-02-04**
```

---

## 🔄 如何回到某個部署節點

### **方式 1：完全回退（丟棄所有改動）**
```bash
# 回到指定節點
git reset --hard [commit-hash]
git push origin main --force  # ⚠️ 需要確認！
```
⚠️ **警告：這會永久刪除所有未提交的改動！**

### **方式 2：保留改動（軟回退）**
```bash
# 回到指定節點，但保留改動
git reset --soft [commit-hash]

# 查看保留的改動
git status

# 如果需要，可以重新提交
git commit -m "新的修改"
git push origin main
```

### **方式 3：建立新分支備份（最安全）**
```bash
# 先備份當前狀態
git branch backup-$(date +%Y%m%d-%H%M%S)

# 再回到穩定版本
git reset --hard [commit-hash]
git push origin main --force

# 如果後悔了，可以回到備份
git checkout backup-[日期時間]
```

### **快速指令給 AI 助手**
```
回到部署 [節點名稱]（或說：回到 [commit-hash]）
```

---

## 使用時機
本地原型開發完成，看起來不錯，準備部署時使用。

---

## 📋 黃金指令（複製後貼給 AI 助手）

```
【準備部署】
本地原型已完成，準備部署。請執行完整檢查流程：

第一階段：當前狀態掃描
1. 顯示當前 Git 狀態和最新 3 筆 commit
2. 顯示所有未提交的變更（git status + git diff）
3. 顯示關鍵依賴版本（package.json 中的 next, react, typescript 等）
4. 執行 npm audit 安全檢查

第二階段：版本和安全驗證
5. 確認所有依賴無安全漏洞（0 vulnerabilities）
6. 如有漏洞，升級到安全版本並說明變更
7. 執行本地構建測試（npm run build）
8. 確認構建成功無錯誤

第三階段：Git 同步準備
9. 顯示需要提交的檔案清單
10. 生成建議的 commit 訊息
11. 提交所有變更並推送到 GitHub
12. 確認遠端已同步（對比本地和 origin/main）

第四階段：部署檢查清單
13. 生成部署環境檢查清單（環境變數、API keys 等）
14. 顯示部署平台建議配置（Vercel/Netlify）
15. 給我最終確認摘要（包含版本號、commit hash、安全狀態）

完成後告訴我：「✅ 已就緒，可以部署」或「⚠️ 發現問題需要修復」
```

---

## ⚡ 快速版（給急用時）

```
【快速部署檢查】
本地完成，準備部署。執行：
1. git status + diff
2. npm audit（必須 0 漏洞）
3. npm run build（必須成功）
4. commit + push
5. 確認 GitHub 同步
6. 給我部署清單

通過後說「可部署」。
```

---

## 🎯 使用範例

### 新專案首次部署
```
【準備部署】
本地原型已完成，準備部署到 [平台名稱]。請執行完整檢查流程：
[貼上黃金指令]

專案類型：[專案類型，例如：電商網站、部落格、SaaS 平台]
目標平台：[Vercel / Netlify / 其他]
需要的環境變數：[列出環境變數]
```

### 更新現有專案
```
【準備部署】
本地完成新功能開發，準備更新部署。請執行完整檢查流程：
[貼上黃金指令]

新增功能：[功能描述]
專案名稱：[專案名稱]
```

---

## 📌 關鍵經驗提醒

### ✅ 這個流程會避免的問題：
- ❌ package.json 版本不一致
- ❌ 安全漏洞未修復
- ❌ Git 本地和遠端不同步
- ❌ 本地可以跑但部署失敗
- ❌ 環境變數遺漏

### ⚠️ 如果 AI 助手說「發現問題」：
1. **不要跳過** - 一定要先修復
2. **不要重複嘗試** - 了解根本原因
3. **不要手動改** - 讓 AI 助手按流程處理

### ✨ 成功標誌：
當 AI 助手說「✅ 已就緒，可以部署」時，你會看到：
- Git 狀態：乾淨且已同步
- 安全檢查：0 vulnerabilities
- 構建測試：成功
- 環境變數：已列出清單

---

## 💡 進階技巧

### 如果想要更謹慎：
在黃金指令後加上：
```
部署前先讓我看一遍摘要，等我確認後再執行 Git push。
```

### 如果想要自動化：
在黃金指令後加上：
```
所有檢查通過後，自動執行 Git push 和生成 [平台] 部署指令。
```

---

## 🗂️ 專案記錄範本

| 日期 | 專案名稱 | 平台 | 狀態 | 版本 | 關鍵功能 |
|------|---------|------|------|------|----------|
| YYYY-MM-DD | [專案名稱] | [平台] | ✅ 成功 | `[commit]` | [功能描述] |
| YYYY-MM-DD | [專案名稱] | [平台] | ✅ 成功 | `[commit]` | [功能描述] |
|  |  |  |  |  |  |

**使用說明：**
- 每次成功部署後，填寫一行記錄
- 版本欄位填入 commit 短 hash（前 7 碼）
- 可用於追蹤專案歷史和回退參考

---

## 🔥 常見部署陷阱與解決方案

### ⚠️ Next.js App Router 特有問題（重點！）

#### 問題 A：ESLint 錯誤 - `react/no-unescaped-entities`
**症狀：** 部署失敗，錯誤訊息 "Failed to compile" + "react/no-unescaped-entities"  
**原因：** JSX 中使用未轉義的引號（`'` 或 `"`）  
**解決：**
- 將所有單引號 `'` 替換為 `&apos;`
- 將所有雙引號 `"` 替換為 `&quot;`
- 移除未使用的變數（如 `error` 未使用）

**範例：**
```typescript
// ❌ 錯誤
<p>We can't help you.</p>

// ✅ 正確
<p>We can&apos;t help you.</p>
```

---

#### 問題 B：`'use client'` 指令位置錯誤
**症狀：** 部署失敗，錯誤訊息 "The 'use client' directive must be placed before other expressions"  
**原因：** `'use client'` 必須是檔案的**第一行**，甚至在 `import` 之前  
**解決：**
```typescript
// ❌ 錯誤
import Link from 'next/link';
'use client';

// ✅ 正確
'use client';

import Link from 'next/link';
```

---

#### 問題 C：TypeScript 類型錯誤 - 函數參數缺失
**症狀：** 部署失敗，錯誤訊息 "Property 'necessary' is missing in type..."  
**原因：** 呼叫 `saveConsent()` 時沒有傳入必要參數  
**解決：**
```typescript
// ❌ 錯誤
saveConsent({ analytics: true });

// ✅ 正確
saveConsent({ necessary: true, analytics: true });
```

---

#### 問題 D：Server/Client Component 預渲染錯誤（最難！）
**症狀：** 部署失敗，錯誤訊息 "Error occurred prerendering page. Event handlers cannot be passed to Client Component props"  
**原因：** Next.js App Router 中，Server Component 不能直接傳遞事件處理器（`onClick`）給 Client Component  
**解決方案：提取獨立的 Client Component**

**錯誤示範：**
```typescript
// app/privacy/page.tsx (Server Component)
export default function PrivacyPage() {
  return (
    <button onClick={() => console.log('click')}>
      Settings
    </button>
  );
}
// ❌ Server Component 不能有 onClick
```

**正確做法：**
```typescript
// components/CookieSettingsButton.tsx (Client Component)
'use client';

export default function CookieSettingsButton({ children }) {
  const handleClick = () => {
    // 事件邏輯
  };
  
  return <button onClick={handleClick}>{children}</button>;
}

// app/privacy/page.tsx (Server Component)
import CookieSettingsButton from '@/components/CookieSettingsButton';

export default function PrivacyPage() {
  return (
    <CookieSettingsButton>
      Settings
    </CookieSettingsButton>
  );
}
// ✅ 事件處理器封裝在 Client Component 內
```

**關鍵原則：**
- Server Component = 靜態內容、無互動
- Client Component = 互動功能、狀態管理、事件處理
- **不要**在 Server Component 中直接使用 `onClick`、`useState`、`useEffect`
- **要**將互動邏輯提取到獨立的 Client Component

---

#### 問題 E：Cookie 相關組件架構建議
**最佳實踐：**
1. **核心邏輯層** (`lib/consent.ts`) - 純函數，無 UI
2. **Context Provider** (`ConsentProvider.tsx`) - 全局狀態管理
3. **UI 組件** (`CookieBanner.tsx`, `CookiePreferences.tsx`) - 獨立 Client Component
4. **頁面使用** - Server Component 引入 Client Component

```
app/layout.tsx (Server)
  └─> ConsentProvider (Client)
       ├─> CookieBanner (Client)
       ├─> CookiePreferences (Client)
       └─> AnalyticsScripts (Client)

app/privacy/page.tsx (Server)
  └─> CookieSettingsButton (Client) ← 提取事件處理
```

---

#### 📊 Next.js App Router 組件規則速查表

| 特性 | Server Component | Client Component |
|------|-----------------|------------------|
| **預設** | ✅ `page.tsx` 預設 | ❌ 需明確標記 `'use client'` |
| **互動事件** | ❌ 不能用 `onClick` 等 | ✅ 可以用所有事件 |
| **React Hooks** | ❌ 不能用 `useState`、`useEffect` | ✅ 可以用所有 Hooks |
| **瀏覽器 API** | ❌ 無 `window`、`localStorage` | ✅ 可以使用 |
| **資料獲取** | ✅ 可直接 `async/await` | ❌ 需用 `useEffect` |
| **SEO** | ✅ 完全可被爬取 | ⚠️ 需水合後才完整 |
| **渲染時機** | 🏗️ 構建時預渲染 | 🌐 客戶端渲染 |
| **檔案位置** | `app/**/*.tsx` | 任何標記 `'use client'` 的檔案 |

**判斷原則：**
- 需要互動 → Client Component
- 純展示內容 → Server Component
- 需要讀取 Cookie/localStorage → Client Component
- 需要 SEO → Server Component（然後引入 Client Component 處理互動）

---

### 問題 1：部署平台 Root Directory 設定錯誤
**症狀：** 平台顯示舊版本，無法自動拉取新 commit  
**原因：** Root Directory 設定不符合 Git repo 結構  
**解決：**
- 如果專案在 repo 根目錄 → Root Directory 留空白
- 如果專案在子目錄（如 `app/`）→ Root Directory 填子目錄名稱
- 修改後需要推送新 commit 才會生效

### 問題 2：Git Commit Author Required
**症狀：** 手動部署時顯示 "A commit author is required"  
**原因：** Git 用戶資訊未配置  
**解決：**
```bash
git config user.name "你的名字"
git config user.email "你的郵箱"
git commit --amend --reset-author --no-edit
git push origin main
```

### 問題 3：平台環境變數遺漏
**症狀：** 部署失敗，錯誤訊息如 "[變數名] is required"  
**原因：** `.env.local` 不會自動上傳到部署平台  
**解決：**
- 在平台 → Settings → Environment Variables 手動添加
- 確保選擇所有環境（Production + Preview + Development）
- 添加後需要 Redeploy 才會生效

### 問題 4：Redeploy vs Deploy
**症狀：** 點擊 Redeploy 後仍是舊版本  
**原因：** Redeploy 只是重新部署同一個 commit  
**解決：**
- 推送新 commit 到 GitHub 會自動觸發新部署
- 或在 Deployments 頁面手動 Create Deployment 選擇最新 commit

### 問題 5：依賴套件缺失
**症狀：** 部署失敗，錯誤訊息 "Module not found: Can't resolve '[套件名]'"  
**原因：** 本地安裝套件時遇到權限問題，`package.json` 未更新  
**解決：**
```bash
# 在本地終端重新安裝
npm install [套件名]

# 提交並推送
git add package.json package-lock.json
git commit -m "chore: 添加 [套件名] 依賴"
git push origin main
```

---

## 📞 遇到問題時

如果黃金指令執行後仍有問題，使用這個診斷指令：

```
【部署失敗診斷】
部署失敗，錯誤訊息：[貼上完整錯誤]

請執行深度診斷：
1. 對比 GitHub 上的 package.json 和本地版本
2. 檢查部署平台構建日誌（我會貼給你）
3. 檢查環境變數是否完整
4. 分析根本原因（不要猜測）
5. 提供一次性修復方案

給我「問題根源」+「修復步驟」+「如何驗證」。
```

---

## 🎯 完整部署實戰流程範本

### **第一階段：基礎部署**
1. ✅ 檢查並修復安全漏洞（npm audit）
2. ✅ 確認 GitHub 同步
3. ✅ 首次部署成功
4. 📍 建立「部署 A 節點」作為回退點

### **第二階段：功能開發**
1. ✅ 開發新功能
2. ✅ 本地測試通過
3. ✅ 推送到 GitHub
4. ⚠️ **如遇問題：記錄問題和解決方案**

### **第三階段：問題診斷與修復**
**常見問題列表：**
- Root Directory 設定
- Git Commit Author
- 環境變數遺漏
- Redeploy vs Deploy 混淆
- 依賴套件缺失

### **第四階段：穩定版本建立**
1. ✅ 所有功能正常
2. ✅ 部署成功
3. ✅ 測試通過
4. 📍 建立新的部署節點快照

---

## 🚀 未來專案快速部署流程

### **⚡ 30 分鐘快速部署法**

#### **步驟 1：本地開發完成（5 分鐘）**
```bash
# 確認本地運行正常
npm run dev  # 測試 localhost:3000

# 檢查安全漏洞
npm audit  # 必須 0 vulnerabilities
```

#### **步驟 2：Git 同步（5 分鐘）**
```bash
# 查看變更
git status
git diff

# 提交變更
git add .
git commit -m "✨ [功能描述]"
git push origin main
```

#### **步驟 3：首次部署（10 分鐘）**
1. 前往部署平台（例如：https://vercel.com/new）
2. Import Git repository
3. 設定 Root Directory（根目錄留空白）
4. 設定環境變數（如有需要）
5. 點擊 Deploy

#### **步驟 4：驗證部署（5 分鐘）**
1. 等待部署完成（通常 2-3 分鐘）
2. 訪問部署網址驗證功能
3. 記錄 commit hash 作為穩定版本快照

#### **步驟 5：後續更新（5 分鐘）**
```bash
# 本地修改完成後
git add .
git commit -m "✨ [更新描述]"
git push origin main

# 部署平台會自動偵測並部署！
```

---

## 💡 關鍵經驗總結

### ✅ **必做檢查清單：**
- [ ] package.json 無安全漏洞（npm audit）
- [ ] 本地構建成功（npm run build）
- [ ] Git 用戶資訊已配置
- [ ] GitHub 已同步最新 commit
- [ ] 部署平台 Root Directory 設定正確
- [ ] 環境變數完整（如有需要）
- [ ] 記錄穩定版本 commit hash

### ❌ **常見錯誤避免：**
1. **不要**在有安全漏洞時部署
2. **不要**假設平台會自動配置環境變數
3. **不要**用 Redeploy 期待拉取新程式碼
4. **不要**忘記配置 Git 用戶資訊
5. **不要**跳過本地構建測試

### 🚀 **效率提升技巧：**
1. 使用 `git commit -m "✨ emoji"` 讓 commit 更易讀
2. 每次成功部署記錄 commit hash 作為回退點
3. 環境變數統一管理（使用 `.env.example` 範本）
4. 建立部署配置檔案（如 `vercel.json`）
5. 善用平台的 Preview Deployments 測試

---

## 📝 環境變數範本

### **基礎 Next.js 專案**
```env
# 基礎設定
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

### **帶資料庫的專案（例如 Supabase）**
```env
# 資料庫
NEXT_PUBLIC_DATABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_DATABASE_ANON_KEY=eyJxxx...
DATABASE_SECRET_KEY=your-secret-here
```

### **帶認證的專案（例如 NextAuth.js）**
```env
# 認證系統
NEXTAUTH_SECRET=your-secret-here  # openssl rand -base64 32
NEXTAUTH_URL=https://your-domain.com

# OAuth Providers
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
```

### **帶 Email 功能的專案（例如 Resend）**
```env
# Email 服務
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=admin@your-domain.com
FROM_EMAIL=noreply@your-domain.com
```

### **帶付款功能的專案（例如 Stripe）**
```env
# 付款系統
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

---

## 🎉 成功標準

當看到以下所有綠燈時，表示部署成功：

1. ✅ 部署平台狀態：Ready / Success
2. ✅ 訪問網址正常顯示
3. ✅ 所有功能正常運作
4. ✅ 瀏覽器控制台無錯誤訊息
5. ✅ Git commit 已記錄到專案記錄表

**這時候就可以說：「這個版本穩定，做個快照！」** 📸

---

## 🔖 如何使用此模板

1. **複製此檔案** 到你的專案根目錄
2. **重新命名** 為 `DEPLOY.md`
3. **填入專案資訊** 取代所有 `[佔位符]`
4. **記錄部署節點** 每次成功部署後更新
5. **持續維護** 遇到新問題時補充解決方案

---

## 📌 快速參考

### **常用指令速查**
```bash
# 檢查狀態
git status
npm audit
npm run build

# 提交推送
git add .
git commit -m "✨ [描述]"
git push origin main

# 版本回退
git reset --hard [commit-hash]
git push origin main --force

# 建立備份
git branch backup-$(date +%Y%m%d-%H%M%S)
```

### **部署平台設定速查**
- Root Directory: （根目錄留空白）
- Build Command: `npm run build`
- Output Directory: `.next` (Next.js) / `dist` (Vite)
- Install Command: `npm install`

---

## 📚 實戰案例：GDPR Cookie Consent 系統部署

### **專案背景**
- 專案名稱：5 Axis Head Repair
- 新增功能：完整 GDPR 合規的 Cookie Consent 系統
- 技術棧：Next.js 15.1.6 (App Router) + TypeScript + Tailwind CSS

### **部署時間線**

| 時間 | 階段 | 問題 | 解決方案 | Commit |
|------|------|------|---------|--------|
| 14:49 | 首次部署 | ❌ ESLint 錯誤 - 未轉義引號 | 全面轉義 `&apos;` 和 `&quot;` | - |
| 15:12 | 第二次部署 | ❌ `'use client'` 位置錯誤 | 移動到檔案最頂部（第一行） | - |
| 15:25 | 第三次部署 | ❌ TypeScript 類型錯誤 | `saveConsent` 補上 `necessary: true` | - |
| 15:37 | 第四次部署 | ❌ Server Component 預渲染錯誤 | 提取 `CookieSettingsButton` 獨立組件 | `2d81702` |
| 15:45 | ✅ 成功部署 | 無錯誤 | 所有問題已修復 | `d117563` |

### **遇到的問題總結**

#### **1. ESLint 嚴格檢查（3 個檔案受影響）**
```bash
Error: Failed to compile
./app/spindle-repair-rebuild/page.tsx
  react/no-unescaped-entities
```
**修復：** 使用 `search_replace` 工具批量替換所有未轉義引號

---

#### **2. Next.js 15 的 `'use client'` 規則更嚴格**
```bash
Error: The "use client" directive must be placed before other expressions.
```
**修復：** 確保 `'use client'` 是檔案第一行（連註解都不能在前面）

---

#### **3. TypeScript 嚴格模式捕捉到參數缺失**
```bash
Type error: Property 'necessary' is missing in type...
```
**修復：** 顯式傳入所有必要參數（不依賴預設值）

---

#### **4. Server/Client Component 邊界問題（最複雜）**
```bash
Error occurred prerendering page "/privacy".
Event handlers cannot be passed to Client Component props.
```

**根本原因：**
- Next.js 15 的 App Router 預設所有 `page.tsx` 都是 Server Component
- Server Component 在構建時預渲染成靜態 HTML
- 無法序列化事件處理器（函數）傳遞給 Client Component

**修復流程：**
1. 識別問題：`/privacy` 頁面中的 `<button onClick={...}>` 
2. 提取邏輯：創建 `CookieSettingsButton.tsx` Client Component
3. 封裝事件：將 `onClick` 邏輯完全封裝在 Client Component 內
4. 頁面引入：Server Component 只引入並使用，不傳遞函數

**最終架構：**
```
Server Component (app/privacy/page.tsx)
  └─> Client Component (CookieSettingsButton.tsx)
       └─> Event Handler (onClick) ✓
```

---

### **關鍵學習點**

#### ✅ **成功經驗**
1. **系統化排查：** 每次只修一個問題，驗證後再推送
2. **工具優先：** 使用 `grep` 全面搜索，避免遺漏
3. **架構分層：** Client/Server Component 職責分明
4. **文檔記錄：** 每個問題都記錄到 DEPLOY.md

#### ⚠️ **避坑指南**
1. **不要**在 Server Component 中使用任何瀏覽器 API（`window`、`localStorage`）
2. **不要**在 Server Component 中使用 React Hooks（`useState`、`useEffect`）
3. **不要**在 Server Component 中傳遞事件處理器給子組件
4. **不要**假設 ESLint 在本地通過就能部署成功（Vercel 更嚴格）

#### 🎯 **快速檢查清單**
部署前必查：
- [ ] 所有引號已轉義（`grep` 搜索 `'` 和 `"`）
- [ ] `'use client'` 在檔案第一行
- [ ] TypeScript 編譯通過（`npm run build`）
- [ ] Server Component 無事件處理器
- [ ] Client Component 正確標記 `'use client'`

---

### **部署成功指標**
```bash
✅ Build completed successfully
✅ Deployment ready
✅ Domain: https://5axisheadrepair.com
✅ All pages prerendered correctly
✅ No ESLint errors
✅ No TypeScript errors
```

### **後續維護建議**
1. **新增 Client Component 時：** 立即加上 `'use client'`
2. **新增 Server Component 時：** 確保無互動邏輯
3. **修改 JSX 內容時：** 隨手轉義引號
4. **推送前檢查：** `npm run build` 必須通過

---

**本案例記錄時間：2026-02-04**  
**總部署次數：4 次**  
**總耗時：約 1 小時**  
**最終狀態：✅ 生產環境穩定運行**

---

**最後更新：2026-02-04**  
**版本：v2.0 - 新增 Next.js App Router 部署指南**  
**適用專案：Next.js, React, Vue, Nuxt 等 Node.js 專案**
