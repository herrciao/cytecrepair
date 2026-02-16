# M21 Knowledge Center — 文章撰寫指南

**版本**：1.0  
**最後更新**：2026 年 2 月 16 日

---

## 目的

本資料夾提供兩個中文文章模板，讓團隊成員可以用中文撰寫技術內容，再由 Cursor AI 翻譯成英文並建立網頁。

---

## 工作流程

```
1. 你（或下屬）:
   - 複製對應的模板檔案
   - 用中文填寫內容
   - 標注照片位置和說明
   - 完成後交給老闆審核

2. 老闆:
   - 審核內容
   - 把 .md 檔和照片丟給 Cursor

3. Cursor AI:
   - 翻譯成英文
   - 建立網頁 (app/knowledge/cytec-m21/[slug]/page.tsx)
   - 把照片放到 public/knowledge/cytec-m21/[slug]/
   - 更新 Hub 和 Sitemap

4. 自動部署:
   - git push 後 Vercel 自動上線
```

---

## 兩個模板

### 模板 A：`template-symptom-article.md`

**適用於**：故障症狀類、部件說明類、維護指南類

**範例主題**：
- 壓力循環問題
- 夾持不穩
- 警報無法復位
- 軸承過熱診斷
- 編碼器故障排查

---

### 模板 B：`template-case-study.md`

**適用於**：維修案例記錄

**範例主題**：
- 旋轉接頭延遲維修導致軸承損壞
- 液壓閥汙染造成壓力不穩
- 編碼器訊號線斷裂維修案例
- 主軸軸承更換全記錄

---

## 照片準備規則

### 1. 隱私保護（絕對必須）

❌ **不可出現**：
- 客戶公司名稱、Logo
- 機器序列號、銘牌
- 員工姓名或臉部
- 任何可識別的文件或標籤

✅ **可以出現**：
- 故障部件特寫
- 維修過程照片
- 測試結果數據（匿名）
- 診斷流程示意

### 2. 照片命名

用英文、小寫、短橫線連接，名字要有描述性：

**好的範例**：
- `symptom-overview.jpg` — 症狀外觀
- `damaged-seal-closeup.jpg` — 密封圈損壞特寫
- `pressure-test-result.jpg` — 壓力測試結果
- `before-repair.jpg` / `after-repair.jpg` — 維修前後對比

**不好的範例**：
- `IMG_1234.jpg`
- `photo.jpg`
- `20260216.jpg`

### 3. 照片規格

- **格式**：`.jpg` 或 `.webp`
- **解析度**：寬度 1200-1920px（適合網頁顯示）
- **檔案大小**：< 500KB（加快載入速度）
- **清晰度**：對焦清楚、光線充足、重點明確

---

## 照片存放位置

照片資料夾名稱必須與文章 slug 一致：

```
public/knowledge/cytec-m21/
├── tool-clamping-unstable/          ← 對應文章 slug
│   ├── symptom-overview.jpg
│   └── check-procedure.jpg
├── case-rotary-bearing-damage/      ← 對應文章 slug
│   ├── before-01.jpg
│   ├── finding-01.jpg
│   └── result-01.jpg
└── ...（每篇文章一個資料夾）
```

---

## 文章 Slug 命名規則

Slug 是文章的 URL 代碼，用英文、小寫、短橫線連接：

**範例**：
- `tool-clamping-unstable` → `/knowledge/cytec-m21/tool-clamping-unstable`
- `case-rotary-bearing-delayed-repair` → `/knowledge/cytec-m21/case-rotary-bearing-delayed-repair`
- `monthly-maintenance-checklist` → `/knowledge/cytec-m21/monthly-maintenance-checklist`

---

## 常見問題

### Q: 我不會英文，可以直接用中文寫嗎？

A: 完全可以！模板就是設計給中文使用的。Cursor AI 會自動翻譯成英文建立網頁。

### Q: 照片要先上傳到哪裡？

A: 先放在本機準備好，跟 .md 檔一起交給老闆或 Cursor。Cursor 會自動放到正確位置。

### Q: 如果照片很多怎麼辦？

A: 每篇文章建議 3-6 張為佳。太多會影響載入速度。如果真的有很多，可以分成多篇文章。

### Q: 可以放影片嗎？

A: 目前系統支援照片。如需影片，建議上傳到 YouTube 再嵌入連結。

### Q: 寫完文章後多久會上線？

A: Cursor 處理完（翻譯 + 建頁 + 放圖片）約 5-10 分鐘，git push 後 Vercel 自動部署約 2-3 分鐘。總共 10-15 分鐘左右。

---

## 注意事項

1. **先看模板再開始寫**：不要憑感覺寫，依照模板格式填寫效率最高
2. **照片說明要清楚**：每張照片都要寫清楚「這是什麼」和「放在哪個段落」
3. **技術內容要準確**：如果不確定，寧可寫保守一點，不要誇大或臆測
4. **保持工程手冊風格**：冷靜、精確、條列式，不要太口語化或情緒化

---

**需要協助？** 直接問 Cursor 或老闆。
