/**
 * Knowledge Center 文章登錄系統
 * 
 * 所有 Knowledge Center 的文章都在這裡登記
 * Hub 頁面和 Sitemap 會自動從這裡讀取
 */

export interface KnowledgeArticle {
  slug: string;
  title: string;
  category: 'symptom' | 'component' | 'case' | 'maintenance' | 'guide';
  date: string;
  summary: string;
  thumbnail?: string;
  // 是否已發布（未來可用於草稿功能）
  published: boolean;
}

/**
 * M21 Knowledge Center 文章列表
 * 
 * 新增文章步驟：
 * 1. 在這個陣列加入新文章的 metadata
 * 2. 建立對應的 app/knowledge/cytec-m21/[slug]/page.tsx
 * 3. 把照片放到 public/knowledge/cytec-m21/[slug]/
 * 4. Hub 和 Sitemap 會自動更新
 */
export const m21Articles: KnowledgeArticle[] = [
  // 初始 Spoke 頁面（Phase 1）
  {
    slug: 'tool-clamping-unstable',
    title: 'Tool Clamping Unstable: Symptoms & Diagnosis',
    category: 'symptom',
    date: '2026-02-16',
    summary: 'Intermittent or weak tool clamping force, how to diagnose the root cause, and what data to collect for assessment.',
    published: true,
  },
  {
    slug: 'hydraulic-alarm-reset',
    title: 'Hydraulic Alarm Won\'t Reset: Quick Diagnosis Checklist',
    category: 'symptom',
    date: '2026-02-16',
    summary: 'When hydraulic alarms persist after reset attempts, systematic troubleshooting steps to identify the underlying issue.',
    published: true,
  },
  // Rotary Union 預防性維護系列（Phase 2）
  {
    slug: 'rotary-union-daily-checks',
    title: 'M21 Rotary Union: Simple Daily Checks That Prevent Costly Failures',
    category: 'maintenance',
    date: '2026-02-16',
    summary: 'After 10+ years servicing M21 units worldwide, the 2-minute daily checks that catch seal problems before they become emergency shutdowns.',
    published: true,
  },
  {
    slug: 'rotary-union-costly-mistakes',
    title: 'M21 Rotary Union: 5 Costly Mistakes We See Repeatedly',
    category: 'maintenance',
    date: '2026-02-16',
    summary: 'Field data from hundreds of repairs — the preventable errors that destroy rotary union seals and escalate repair costs.',
    published: true,
  },
  // 主軸端面漏油診斷（Phase 3）
  {
    slug: 'spindle-face-oil-leak',
    title: 'Spindle Face Oil Leak: Identify the Source & Fix It Fast',
    category: 'symptom',
    date: '2026-02-25',
    summary: 'Oil on the spindle face can come from multiple sources. Step-by-step diagnosis to identify the fluid, locate the leak path, and confirm the root cause.',
    published: true,
  },
];

/**
 * 取得所有已發布的 M21 文章
 */
export function getPublishedM21Articles(): KnowledgeArticle[] {
  return m21Articles.filter(article => article.published);
}

/**
 * 取得特定分類的文章
 */
export function getM21ArticlesByCategory(
  category: KnowledgeArticle['category']
): KnowledgeArticle[] {
  return m21Articles.filter(
    article => article.published && article.category === category
  );
}

/**
 * 取得單篇文章（用於 Related Articles）
 */
export function getM21ArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return m21Articles.find(article => article.slug === slug && article.published);
}

/**
 * 取得除了當前文章外的相關文章（用於 Related Issues）
 */
export function getRelatedM21Articles(
  currentSlug: string,
  limit: number = 3
): KnowledgeArticle[] {
  return m21Articles
    .filter(article => article.published && article.slug !== currentSlug)
    .slice(0, limit);
}
