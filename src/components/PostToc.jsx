import { useEffect, useState } from 'react';

// vertical rail beside the post: one bar per heading, the active one follows the scroll
export default function PostToc({ bodyRef, slug }) {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const headings = Array.from(el.querySelectorAll('h2, h3'));
    headings.forEach((h, i) => {
      h.id = `s-${i}`;
    });
    setItems(headings.map((h, i) => ({ id: `s-${i}`, text: h.innerText, level: h.tagName })));

    const onScroll = () => {
      let current = 0;
      headings.forEach((h, i) => {
        if (h.getBoundingClientRect().top <= 120) current = i;
      });
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
