# GDPR Cookie Consent 實作筆記

> **建立時間：** 2026-02-04  
> **專案：** 5 Axis Head Repair  
> **技術棧：** Next.js 15.1.6 (App Router) + TypeScript + Tailwind CSS

---

## 📋 功能需求

### **法規合規要求**
- ✅ GDPR（歐盟通用資料保護規則）
- ✅ ePrivacy Directive（電子隱私指令）
- ✅ Cookie Law（Cookie 法規）

### **技術實作要求**
1. **兩種同意類別：**
   - `necessary` - 必要 Cookie（永遠為 true）
   - `analytics` - 分析 Cookie（預設為 false）

2. **資料持久化：**
   - 第一優先：Cookie (`cookie_consent`)
   - 第二備份：localStorage (`cookie_consent`)
   - Cookie 屬性：`SameSite=Lax`, `Secure` (生產環境), `Path=/`, `Max-Age: 180 days`

3. **使用者介面：**
   - 首次訪問顯示底部橫幅
   - 提供偏好設定彈窗
   - 接受/拒絕按鈕同等顯著
   - Footer 提供「Cookie Settings」連結

4. **分析腳本載入：**
   - 僅在 `analytics` 同意為 `true` 時載入
   - 使用 `next/script` 的 `strategy="afterInteractive"`
   - IP 匿名化（`anonymize_ip: true`）

5. **隱私政策頁面：**
   - `/privacy` 路由
   - 包含資料收集、使用、保留、使用者權利等內容
   - 提供「Cookie Settings」按鈕

---

## 🏗️ 架構設計

### **檔案結構**
```
lib/
  └─ consent.ts                    # 核心同意管理邏輯（純函數）

components/
  ├─ ConsentProvider.tsx           # React Context + 全局狀態
  ├─ CookieBanner.tsx              # 首次訪問橫幅
  ├─ CookiePreferences.tsx         # 偏好設定彈窗（已整合進 ConsentProvider）
  ├─ AnalyticsScripts.tsx          # 條件式載入 GA 腳本
  ├─ CookieSettingsButton.tsx      # 獨立按鈕組件（Client）
  ├─ Header.tsx                    # 網站導航
  └─ Footer.tsx                    # 網站頁腳（含 Cookie Settings 連結）

app/
  ├─ layout.tsx                    # 根 Layout（引入 ConsentProvider）
  └─ privacy/
      └─ page.tsx                  # 隱私政策頁面（Server Component）
```

### **資料流程**
```
1. 使用者首次訪問
   └─> ConsentProvider 檢查 localStorage/Cookie
       └─> 無同意紀錄
           └─> 顯示 CookieBanner

2. 使用者點擊「Accept analytics」
   └─> CookieBanner 呼叫 setConsent(true)
       └─> ConsentProvider 呼叫 saveConsent({ necessary: true, analytics: true })
           └─> lib/consent.ts 寫入 Cookie + localStorage
               └─> AnalyticsScripts 偵測到同意 → 載入 GA

3. 使用者再次訪問
   └─> ConsentProvider 讀取到同意紀錄
       └─> 不顯示 CookieBanner
       └─> AnalyticsScripts 自動載入 GA

4. 使用者點擊「Cookie Settings」
   └─> Footer/Privacy 觸發 Custom Event 'openCookiePreferences'
       └─> ConsentProvider 監聽事件 → 開啟偏好彈窗
```

---

## 💻 核心程式碼解析

### **1. `lib/consent.ts` - 同意管理核心**

```typescript
export interface ConsentPreferences {
  v: 1;                    // 資料模型版本
  necessary: boolean;       // 必要 Cookie
  analytics: boolean;       // 分析 Cookie
  updatedAt: string;        // ISO 8601 時間戳
}

export function getConsent(): ConsentPreferences | null {
  // 先嘗試讀取 Cookie
  const cookies = parse(document.cookie);
  const consentCookie = cookies[CONSENT_COOKIE_NAME];
  if (consentCookie) {
    return JSON.parse(consentCookie);
  }
  
  // 再嘗試 localStorage（備份）
  const localStorageConsent = localStorage.getItem(CONSENT_COOKIE_NAME);
  if (localStorageConsent) {
    return JSON.parse(localStorageConsent);
  }
  
  return null;
}

export function saveConsent(preferences: Omit<ConsentPreferences, 'v' | 'updatedAt'>) {
  const consent: ConsentPreferences = {
    v: 1,
    necessary: true,         // 永遠為 true
    ...preferences,
    updatedAt: new Date().toISOString(),
  };
  
  // 寫入 Cookie
  document.cookie = serialize(CONSENT_COOKIE_NAME, JSON.stringify(consent), {
    maxAge: 60 * 60 * 24 * 180,  // 180 天
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  
  // 鏡像到 localStorage
  localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(consent));
}
```

**設計原則：**
- ✅ 純函數，無副作用
- ✅ Cookie 為主，localStorage 為備份
- ✅ 版本化資料結構（`v: 1`）方便未來擴充
- ✅ 自動添加時間戳

---

### **2. `ConsentProvider.tsx` - 全局狀態管理**

```typescript
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getConsent, saveConsent, ConsentPreferences } from '@/lib/consent';

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export default function ConsentProvider({ children }: { children: ReactNode }) {
  const [consentState, setConsentState] = useState<ConsentPreferences | null>(null);
  const [hasDecision, setHasDecision] = useState(false);

  useEffect(() => {
    // 初始化：從 Cookie/localStorage 讀取
    const initialConsent = getConsent();
    setConsentState(initialConsent);
    setHasDecision(!!initialConsent);

    // 監聽 Custom Event（從 Footer/Privacy 觸發）
    const handleOpenPreferences = () => setIsPreferencesOpen(true);
    window.addEventListener('openCookiePreferences', handleOpenPreferences);

    return () => {
      window.removeEventListener('openCookiePreferences', handleOpenPreferences);
    };
  }, []);

  const setConsent = (analytics: boolean) => {
    saveConsent({ necessary: true, analytics });  // ⚠️ 必須傳 necessary: true
    const updated = getConsent();
    setConsentState(updated);
    setHasDecision(true);

    // 如果接受分析，重新載入頁面以初始化 GA
    if (analytics) {
      window.location.reload();
    }
  };

  return (
    <ConsentContext.Provider value={{ consent: consentState, setConsent, hasDecision, openPreferences }}>
      {children}
      {/* 偏好彈窗整合在這裡 */}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}
```

**關鍵點：**
- ✅ Client Component（需要 `useState`、`useEffect`）
- ✅ 使用 Custom Event 跨組件通訊（避免 prop drilling）
- ✅ 接受分析後重新載入（確保 GA 初始化）

---

### **3. `CookieBanner.tsx` - 首次訪問橫幅**

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useConsent } from './ConsentProvider';

export default function CookieBanner() {
  const { hasDecision, setConsent, openPreferences } = useConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 只在無同意記錄時顯示
    setIsVisible(!hasDecision);
  }, [hasDecision]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <p>We use cookies to enhance your browsing experience...</p>
        <div className="flex space-x-2">
          <button onClick={() => setConsent(true)} className="btn-primary">
            Accept analytics
          </button>
          <button onClick={() => setConsent(false)} className="btn-secondary">
            Reject non-essential
          </button>
          <button onClick={openPreferences} className="btn-tertiary">
            Manage preferences
          </button>
        </div>
      </div>
    </div>
  );
}
```

**GDPR 合規點：**
- ✅ 接受/拒絕按鈕同等顯著（不能「拒絕」按鈕很小）
- ✅ 提供「Manage preferences」選項
- ✅ 文案清楚說明用途

---

### **4. `AnalyticsScripts.tsx` - 條件式載入 GA**

```typescript
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { hasAnalyticsConsent } from '@/lib/consent';

export default function AnalyticsScripts() {
  const [consentGiven, setConsentGiven] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    setConsentGiven(hasAnalyticsConsent());
  }, []);

  if (!gaId || !consentGiven) {
    return null;  // 無同意 → 不載入
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,  // ⚠️ GDPR 必須！
          });
        `}
      </Script>
    </>
  );
}
```

**GDPR 合規點：**
- ✅ `anonymize_ip: true` - IP 匿名化
- ✅ 僅在同意後載入
- ✅ 使用 `next/script` 優化載入時機

---

### **5. `CookieSettingsButton.tsx` - 獨立按鈕組件**

```typescript
'use client';

export default function CookieSettingsButton({ className, children }) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('openCookiePreferences');
      window.dispatchEvent(event);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
```

**為何需要這個組件？**
- ❌ Server Component 不能有 `onClick`
- ✅ 提取成獨立 Client Component
- ✅ 使用 Custom Event 跨組件通訊

---

## 🐛 部署問題排查

### **問題 1：ESLint 錯誤 - `react/no-unescaped-entities`**

**錯誤訊息：**
```
./app/privacy/page.tsx
Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.
```

**根本原因：**
- Vercel 部署時啟用更嚴格的 ESLint 檢查
- JSX 中的特殊字符（`'`, `"`, `<`, `>`）必須轉義

**解決方案：**
```typescript
// ❌ 錯誤
<p>We can't help you.</p>

// ✅ 正確
<p>We can&apos;t help you.</p>
```

**批量修復指令：**
```bash
# 搜索所有未轉義引號
grep -r "'" app/ components/

# 使用 search_replace 工具逐一修復
```

---

### **問題 2：`'use client'` 指令位置錯誤**

**錯誤訊息：**
```
Error: The "use client" directive must be placed before other expressions.
  > 1 | import Link from 'next/link';
    2 | 'use client';
```

**根本原因：**
- Next.js 15 要求 `'use client'` 必須是檔案**第一行**
- 甚至註解都不能在前面

**解決方案：**
```typescript
// ❌ 錯誤
import Link from 'next/link';
'use client';

export default function Footer() { ... }

// ✅ 正確
'use client';

import Link from 'next/link';

export default function Footer() { ... }
```

---

### **問題 3：TypeScript 類型錯誤**

**錯誤訊息：**
```
Type error: Argument of type '{ analytics: boolean; }' is not assignable to parameter of type 'Omit<ConsentPreferences, "v" | "updatedAt">'.
  Property 'necessary' is missing in type '{ analytics: boolean; }'.
```

**根本原因：**
- `saveConsent` 函數要求傳入 `{ necessary, analytics }`
- 呼叫時只傳了 `{ analytics }`

**解決方案：**
```typescript
// ❌ 錯誤
saveConsent({ analytics: true });

// ✅ 正確
saveConsent({ necessary: true, analytics: true });
```

---

### **問題 4：Server/Client Component 預渲染錯誤（最難！）**

**錯誤訊息：**
```
Error occurred prerendering page "/privacy".
Error: Event handlers cannot be passed to Client Component props.
  <button onClick={function} ... children=...>
             ^^^^^^^^^^^^^^^^^^
```

**根本原因：**
- Next.js 15 App Router 預設所有 `page.tsx` 都是 Server Component
- Server Component 在**構建時**預渲染成靜態 HTML
- 無法序列化 JavaScript 函數（如 `onClick` 處理器）

**為什麼會發生？**
```typescript
// app/privacy/page.tsx (預設是 Server Component)
export default function PrivacyPage() {
  return (
    <button onClick={() => console.log('click')}>  {/* ❌ 這裡有問題！ */}
      Cookie Settings
    </button>
  );
}
```

**構建過程發生什麼？**
1. Next.js 嘗試將 `PrivacyPage` 預渲染成 HTML
2. 遇到 `onClick={() => ...}` - 這是一個 JavaScript 函數
3. 函數無法被序列化成 HTML 字串
4. **構建失敗！**

**解決方案：提取獨立 Client Component**
```typescript
// ✅ Step 1: 創建 CookieSettingsButton.tsx
'use client';

export default function CookieSettingsButton({ children }) {
  const handleClick = () => {
    const event = new CustomEvent('openCookiePreferences');
    window.dispatchEvent(event);
  };
  
  return <button onClick={handleClick}>{children}</button>;
}

// ✅ Step 2: 在 Server Component 中使用
// app/privacy/page.tsx (Server Component)
import CookieSettingsButton from '@/components/CookieSettingsButton';

export default function PrivacyPage() {
  return (
    <CookieSettingsButton>
      Cookie Settings
    </CookieSettingsButton>
  );
}
```

**為什麼這樣可以？**
1. `CookieSettingsButton` 標記為 `'use client'` → 客戶端渲染
2. `PrivacyPage` 保持 Server Component → 構建時預渲染（但遇到 Client Component 會留空位）
3. 頁面載入時，Client Component 在瀏覽器端水合（hydration）
4. 事件處理器在客戶端正確綁定

---

## 📊 Next.js App Router 組件規則

| 特性 | Server Component | Client Component |
|------|-----------------|------------------|
| **預設** | ✅ `app/**/*.tsx` 預設 | ❌ 需明確標記 `'use client'` |
| **互動事件** | ❌ 不能用 `onClick`、`onChange` 等 | ✅ 可以用所有事件 |
| **React Hooks** | ❌ 不能用 `useState`、`useEffect` | ✅ 可以用所有 Hooks |
| **瀏覽器 API** | ❌ 無 `window`、`document`、`localStorage` | ✅ 可以使用（需檢查 `typeof window`） |
| **async/await** | ✅ 可以直接在組件中使用 | ❌ 需包在 `useEffect` 中 |
| **資料獲取** | ✅ 直接 `fetch` 或查詢資料庫 | ❌ 需用 `useEffect` + API 路由 |
| **SEO** | ✅ 完全可被搜索引擎爬取 | ⚠️ 需水合後才完整 |
| **渲染時機** | 🏗️ 構建時/請求時 | 🌐 客戶端（瀏覽器） |
| **Bundle 大小** | ✅ 不包含在客戶端 JS | ⚠️ 會增加客戶端 bundle |

**判斷原則：**
```
需要互動（onClick、onChange、useState、useEffect）？
  ├─ YES → Client Component ('use client')
  └─ NO  → Server Component (預設)

需要讀取 Cookie/localStorage？
  ├─ YES → Client Component
  └─ NO  → Server Component

需要 SEO 優化？
  ├─ YES → Server Component（然後引入 Client Component 處理互動）
  └─ NO  → Client Component
```

---

## ✅ 最終檢查清單

### **功能驗證**
- [x] 首次訪問顯示 Cookie 橫幅
- [x] 點擊「Accept analytics」後橫幅消失
- [x] 點擊「Reject non-essential」後橫幅消失
- [x] 同意記錄持久化（重新載入頁面不再顯示橫幅）
- [x] Footer「Cookie Settings」按鈕開啟偏好彈窗
- [x] Privacy 頁面「Cookie Settings」按鈕開啟偏好彈窗
- [x] Google Analytics 僅在同意後載入
- [x] Cookie 屬性正確（SameSite=Lax, Secure, 180天）

### **法規合規**
- [x] 接受/拒絕按鈕同等顯著
- [x] 提供「Manage preferences」選項
- [x] 隱私政策包含所有必要章節
- [x] IP 匿名化（`anonymize_ip: true`）
- [x] 使用者可隨時撤回同意

### **技術品質**
- [x] 無 ESLint 錯誤
- [x] 無 TypeScript 錯誤
- [x] 構建成功（`npm run build`）
- [x] Server/Client Component 架構正確
- [x] 無 console 錯誤

---

## 🚀 部署成功標準

```bash
✅ Build Successful
   Duration: 45s
   
✅ Pages Prerendered
   /                        (Server Component)
   /privacy                 (Server Component)
   /spindle-rotary-union-leakage
   /spindle-repair-rebuild
   /hydraulic-aggregate-pressure-issue

✅ Analytics
   Google Analytics ID: G-XXXXXXXXXX
   Status: Consent-gated (GDPR compliant)

✅ Cookie Compliance
   Cookie Name: cookie_consent
   Max-Age: 15552000 (180 days)
   SameSite: Lax
   Secure: true

✅ All Systems Operational
   Domain: https://5axisheadrepair.com
   Status: Live
```

---

## 📚 參考資源

### **官方文檔**
- [Next.js App Router - Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [GDPR Compliance Guide](https://gdpr.eu/cookies/)
- [Google Analytics GDPR](https://support.google.com/analytics/answer/9019185)

### **相關規範**
- GDPR Article 7 - Conditions for consent
- ePrivacy Directive Article 5(3) - Cookie consent
- PECR Regulation 6 - UK Cookie Law

---

**文件建立：2026-02-04**  
**最後更新：2026-02-04**  
**專案狀態：✅ 生產環境運行中**
