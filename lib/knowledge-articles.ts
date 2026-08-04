import articleData from '@/content/knowledge-articles.json';

export type KnowledgeCategory = 'symptom' | 'component' | 'case' | 'maintenance' | 'guide';
export type SearchIntent = 'diagnostic' | 'repair' | 'preventive' | 'case-evidence';
export type ArticleCta = 'assessment' | 'contact';

export interface KnowledgeArticle {
  slug: string;
  title: string;
  description: string;
  category: KnowledgeCategory;
  publishedAt: string;
  modifiedAt: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  searchIntent: SearchIntent;
  summary: string;
  relatedSlugs: string[];
  cta: ArticleCta;
  thumbnail?: string;
  published: boolean;
}

export const M21_KNOWLEDGE_BASE_PATH = '/knowledge/cytec-m21';
export const SITE_URL = 'https://5axisheadrepair.com';

// Canonical source: content/knowledge-articles.json
export const m21Articles = articleData as KnowledgeArticle[];

export function getPublishedM21Articles(): KnowledgeArticle[] {
  return m21Articles
    .filter((article) => article.published)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getM21ArticlesByCategory(category: KnowledgeCategory): KnowledgeArticle[] {
  return getPublishedM21Articles().filter((article) => article.category === category);
}

export function getM21ArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return m21Articles.find((article) => article.slug === slug && article.published);
}

export function getM21ArticlePath(slug: string): string {
  return `${M21_KNOWLEDGE_BASE_PATH}/${slug}`;
}

export function getM21ArticleUrl(slug: string): string {
  return `${SITE_URL}${getM21ArticlePath(slug)}`;
}

/**
 * Related content is editorially intentional and comes from relatedSlugs.
 * Missing or unpublished targets are omitted instead of being replaced with
 * arbitrary articles.
 */
export function getRelatedM21Articles(
  currentSlug: string,
  limit: number = 3,
): KnowledgeArticle[] {
  const current = getM21ArticleBySlug(currentSlug);

  if (!current) {
    return [];
  }

  return current.relatedSlugs
    .map((slug) => getM21ArticleBySlug(slug))
    .filter((article): article is KnowledgeArticle => Boolean(article))
    .slice(0, limit);
}
