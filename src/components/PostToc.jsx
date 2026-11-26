import { useEffect, useState } from 'react';

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// vertical rail beside the post: one bar per heading, the active one follows the scroll.
// Heading ids are readable slugs (#rnn, #lstm...) so links inside a post can jump to them.
export default function PostToc({ bodyRef, slug }) {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const headings = Array.from(el.querySelectorAll('h2, h3'));
    const used = new Set();
    const ids = headings.map((h, i) => {
      const base = slugify(h.innerText) || `section-${i}`;
      let id = base;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);
      h.id = id;
      return id;
    });
    setItems(headings.map((h, i) => ({ id: ids[i], text: h.innerText, level: h.tagName })));

    const onScroll = () => {
      let current = 0;
      headings.forEach((h, i) => {
        if (h.getBoundingClientRect().top <= 120) current = i;
      });
      // a short trailing section never reaches the top, so claim it at the page end
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = headings.length - 1;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [bodyRef, slug]);

  if (items.length < 2) return null;

  return (
    <nav className="post-toc" aria-label="Sections">
      {items.map((it, i) => (
        <button
          key={it.id}
          className={`toc-bar${i === active ? ' active' : ''}${it.level === 'H3' ? ' sub' : ''}`}
          onClick={() => document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          title={it.text}
          aria-label={it.text}
          aria-current={i === active ? 'true' : undefined}
        />
      ))}
    </nav>
  );
}
