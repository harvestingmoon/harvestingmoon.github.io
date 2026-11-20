import { marked } from 'marked';

// Markdown posts live in /posts at the repo root. Vite inlines them into the
// bundle at build time and GitHub Pages still serves the raw .md files.
const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

function splitFrontMatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return [{}, raw];
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  return [meta, raw.slice(m[0].length)];
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const [meta, body] = splitFrontMatter(raw);
    const slug = path.split('/').pop().replace(/\.md$/, '');
    return { slug, body, title: meta.title || slug, date: meta.date || '', summary: meta.summary || '' };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const renderBody = (post) => marked.parse(post.body);
