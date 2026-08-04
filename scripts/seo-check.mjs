import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const registryPath = path.join(root, 'content', 'knowledge-articles.json');
const requiredFields = [
  'slug',
  'title',
  'description',
  'category',
  'publishedAt',
  'modifiedAt',
  'targetKeyword',
  'secondaryKeywords',
  'searchIntent',
  'summary',
  'relatedSlugs',
  'cta',
  'published',
];

const errors = [];
const articles = JSON.parse(await readFile(registryPath, 'utf8'));
const slugs = new Set();

for (const article of articles) {
  for (const field of requiredFields) {
    if (!(field in article) || article[field] === '') {
      errors.push(`${article.slug || '(missing slug)'}: missing ${field}`);
    }
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug || '')) {
    errors.push(`${article.slug || '(missing slug)'}: invalid slug format`);
  }

  if (slugs.has(article.slug)) {
    errors.push(`${article.slug}: duplicate registry entry`);
  }
  slugs.add(article.slug);

  if (Number.isNaN(Date.parse(article.publishedAt)) || Number.isNaN(Date.parse(article.modifiedAt))) {
    errors.push(`${article.slug}: invalid publishedAt or modifiedAt date`);
  }

  if (Date.parse(article.modifiedAt) < Date.parse(article.publishedAt)) {
    errors.push(`${article.slug}: modifiedAt is earlier than publishedAt`);
  }

  if (article.relatedSlugs.includes(article.slug)) {
    errors.push(`${article.slug}: cannot relate to itself`);
  }

  if (new Set(article.relatedSlugs).size !== article.relatedSlugs.length) {
    errors.push(`${article.slug}: duplicate relatedSlugs`);
  }
}

for (const article of articles) {
  for (const relatedSlug of article.relatedSlugs) {
    if (!slugs.has(relatedSlug)) {
      errors.push(`${article.slug}: related slug is not registered: ${relatedSlug}`);
    }
  }

  if (!article.published) continue;

  const pagePath = path.join(root, 'app', 'knowledge', 'cytec-m21', article.slug, 'page.tsx');
  try {
    await access(pagePath);
    const page = await readFile(pagePath, 'utf8');
    const canonical = `https://5axisheadrepair.com/knowledge/cytec-m21/${article.slug}`;

    if (!page.includes(`canonical: '${canonical}'`)) {
      errors.push(`${article.slug}: page canonical does not match registry slug`);
    }
    if (!page.includes(`articleSlug="${article.slug}"`)) {
      errors.push(`${article.slug}: page does not bind SpokePageTemplate to registry entry`);
    }
  } catch {
    errors.push(`${article.slug}: published registry entry has no page.tsx`);
  }
}

if (errors.length) {
  console.error('SEO consistency check failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO consistency check passed for ${articles.filter((article) => article.published).length} published knowledge articles.`);
