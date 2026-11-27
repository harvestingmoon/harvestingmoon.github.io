import { useEffect, useRef, useState } from 'react';
import { posts, renderBody } from '../blog';
import PostToc from './PostToc';
import PostReactions from './PostReactions';

export default function Blog({ path }) {
  const slug = path.replace(/^#\/blog\/?/, '');
  const post = slug ? posts.find((p) => p.slug === slug) : null;
  const bodyRef = useRef(null);
  const [zoom, setZoom] = useState(null);

  // math lives in the post markdown as $inline$ / $$display$$; render it after the HTML lands.
  // katex is ~190KB, loaded only when someone opens a post.
  useEffect(() => {
    if (!bodyRef.current) return;
    let cancelled = false;
    import('katex/contrib/auto-render').then(({ default: renderMathInElement }) => {
      if (cancelled || !bodyRef.current) return;
      renderMathInElement(bodyRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    });
    return () => {
      cancelled = true;
    };
  }, [post]);

  // Esc closes the zoomed image and stops the page scrolling behind it
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setZoom(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [zoom]);

  const onBodyClick = (e) => {
    const img = e.target.closest?.('.post-body img');
    if (img) {
      setZoom({ src: img.currentSrc || img.src, alt: img.alt });
      return;
    }
    // a link like [RNN](#rnn) inside the post must scroll, not replace the hash route
    const a = e.target.closest?.('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href.startsWith('#/')) return; // in-app route, let it through
    const anchor = href.slice(1);
    // a bare #anchor must never reach the router, even if the id has drifted
    e.preventDefault();
    const target =
      document.getElementById(anchor) ||
      Array.from(document.querySelectorAll('.post-body [id]')).find((el) => el.id.startsWith(anchor));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (slug && !post) {
    return (
      <section style={{ marginTop: 32 }}>
        <p style={{ marginBottom: 12 }}>No post called “{slug}”.</p>
        <p style={{ fontSize: 13 }}>
          <a href="#/blog">← all writing</a>
        </p>
      </section>
    );
  }

  if (post) {
    return (
      <article style={{ marginTop: 32 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>{post.title}</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>{post.date}</p>
        <div
          className="post-body"
          ref={bodyRef}
          onClick={onBodyClick}
          dangerouslySetInnerHTML={{ __html: renderBody(post) }}
        />
        <PostReactions slug={post.slug} />
        <PostToc bodyRef={bodyRef} slug={post.slug} />
        {zoom && (
          <div
            className="lightbox"
            onClick={() => setZoom(null)}
            onKeyDown={(e) => e.key === 'Escape' && setZoom(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview, click or press Escape to close"
          >
            <img src={zoom.src} alt={zoom.alt} />
          </div>
        )}
      </article>
    );
  }

  return (
    <section style={{ marginTop: 32 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>writing</h1>
      {posts.length === 0 && <p>Nothing here yet.</p>}
      {posts.map((p) => (
        <div key={p.slug} className="post-item">
          <p style={{ marginBottom: 2 }}>
            <a href={`#/blog/${p.slug}`} style={{ fontWeight: 600 }}>
              {p.title}
            </a>
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 2 }}>{p.date}</p>
          {p.summary && <p style={{ fontSize: 14, color: 'var(--muted)' }}>{p.summary}</p>}
        </div>
      ))}
    </section>
  );
}
