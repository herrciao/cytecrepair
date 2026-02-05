# 如何添加維修實例圖片

## 📁 資料夾結構

```
public/case-studies/
├── rotary-union/         # 旋轉接頭漏油維修案例圖片
├── spindle-repair/       # 主軸維修與重建案例圖片
└── hydraulic-aggregate/  # 液壓總成壓力問題案例圖片
```

## 📸 添加圖片步驟

### 1. 準備圖片
- ✅ **必須**：移除所有客戶名稱、序列號、識別資訊
- ✅ **建議**：圖片格式為 `.jpg` 或 `.webp`（更小的檔案大小）
- ✅ **建議**：圖片寬度 1200-1920px（適合網頁顯示）
- ✅ **建議**：檔案大小 < 500KB（加快載入速度）

### 2. 放置圖片
將圖片放入對應的資料夾：

```bash
# 範例：
public/case-studies/rotary-union/repair-01.jpg
public/case-studies/rotary-union/repair-02.jpg
public/case-studies/spindle-repair/rebuild-01.jpg
public/case-studies/spindle-repair/rebuild-02.jpg
public/case-studies/hydraulic-aggregate/pressure-fix-01.jpg
```

### 3. 更新程式碼
編輯以下檔案，將圖片路徑加入陣列：

#### 📄 `app/page.tsx`（首頁輪播）
```typescript
<ImageCarousel 
  images={[
    '/case-studies/rotary-union/repair-01.jpg',
    '/case-studies/spindle-repair/rebuild-01.jpg',
    '/case-studies/hydraulic-aggregate/pressure-fix-01.jpg',
  ]} 
  interval={3000}
  category="M21 & G30 Repair Cases"
/>
```

#### 📄 `app/repair-gallery/page.tsx`（維修實例頁面）
找到 `repairCategories` 陣列，更新對應的 `images` 欄位：

```typescript
const repairCategories = [
  {
    id: 'rotary-union',
    title: 'Spindle Rotary Union Leakage',
    description: '...',
    images: [
      '/case-studies/rotary-union/repair-01.jpg',
      '/case-studies/rotary-union/repair-02.jpg',
      '/case-studies/rotary-union/repair-03.jpg',
    ],
    link: '/spindle-rotary-union-leakage',
  },
  // ... 其他類別
];
```

### 4. 測試本地預覽
```bash
npm run dev
```

訪問 http://localhost:3000 查看首頁輪播
訪問 http://localhost:3000/repair-gallery 查看完整畫廊

### 5. 部署到線上
```bash
git add public/case-studies/
git commit -m "feat: Add repair case study images"
git push origin main
```

Vercel 會自動偵測並重新部署。

---

## 🎨 圖片命名建議

使用描述性名稱，方便未來管理：

✅ **好的命名：**
- `rotary-union-leak-repair-before.jpg`
- `spindle-bearing-replacement-progress.jpg`
- `hydraulic-valve-component-closeup.jpg`

❌ **不好的命名：**
- `IMG_1234.jpg`
- `photo.jpg`
- `20240205.jpg`

---

## ⚠️ 重要提醒

### 隱私與合規
- **絕對禁止**：客戶公司名稱、Logo
- **絕對禁止**：機器序列號、銘牌
- **絕對禁止**：員工姓名或面孔
- **絕對禁止**：任何可識別的文件或標籤

### 圖片品質
- 清晰對焦（避免模糊）
- 充足光線（避免過暗）
- 突出重點（維修部位清楚可見）
- 避免雜亂背景

---

## 🔧 常見問題

### Q: 圖片沒有顯示？
**A:** 檢查：
1. 圖片路徑是否正確（必須以 `/case-studies/` 開頭）
2. 檔案副檔名是否匹配（區分大小寫）
3. 圖片是否確實放在 `public/` 資料夾中
4. 重新啟動開發伺服器（`npm run dev`）

### Q: 可以放影片嗎？
**A:** 目前只支援圖片（.jpg, .png, .webp）。如需影片，建議上傳到 YouTube 並嵌入連結。

### Q: 一個類別最多放幾張圖？
**A:** 建議 3-6 張為佳。太多圖片會影響載入速度。

### Q: 圖片會自動優化嗎？
**A:** 是的！Next.js 的 `<Image>` 組件會自動優化圖片大小和格式。

---

**最後更新：2026-02-05**
