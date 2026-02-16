# Knowledge Center 圖片管理說明

本資料夾用於存放 M21 Knowledge Center 文章使用的圖片。

---

## 資料夾結構

```
public/knowledge/cytec-m21/
├── tool-clamping-unstable/          ← 對應文章 slug
│   ├── symptom-overview.jpg
│   └── check-procedure.jpg
├── hydraulic-alarm-reset/           ← 對應文章 slug
│   ├── alarm-panel-example.jpg
│   └── reset-sequence.jpg
├── case-rotary-bearing-damage/      ← 對應文章 slug
│   ├── before-01.jpg
│   ├── finding-01.jpg
│   └── result-01.jpg
└── ...（每篇文章一個資料夾）
```

**規則**：資料夾名 = 文章 slug

---

## 照片準備

### 隱私保護（必須）

❌ **不可出現**：
- 客戶公司名稱、Logo
- 機器序列號、銘牌
- 員工姓名或臉部
- 任何可識別的文件或標籤

### 照片規格

- **格式**：`.jpg` 或 `.webp`
- **解析度**：寬度 1200-1920px
- **檔案大小**：< 500KB
- **命名**：用英文、小寫、短橫線連接，名字要有描述性

---

## 照片命名範例

✅ **好的命名**：
- `symptom-overview.jpg` — 症狀外觀
- `damaged-seal-closeup.jpg` — 密封圈損壞特寫
- `pressure-test-result.jpg` — 壓力測試結果
- `before-repair.jpg` / `after-repair.jpg` — 維修前後對比

❌ **不好的命名**：
- `IMG_1234.jpg`
- `photo.jpg`
- `20260216.jpg`

---

## 如何使用

1. 準備好照片（去除隱私資訊）
2. 放到對應文章的資料夾中
3. 在 .md 模板中標注照片檔名和說明
4. 交給 Cursor，系統會自動處理

---

**需要協助？** 參考 `templates/README.md` 或詢問 Cursor。
