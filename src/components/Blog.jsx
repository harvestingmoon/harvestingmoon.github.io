import { useEffect, useRef } from 'react';
import { posts, renderBody } from '../blog';
import PostToc from './PostToc';
import PostReactions from './PostReactions';

export default function Blog({ path }) {
  const slug = path.replace(/^#\/blog\/?/, '');
  const post = slug ? posts.find((p) => p.slug === slug) : null;
  const bodyRef = useRef(null);

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
        <p style={{ fontSize: 13 }}>
          <a href="#/blog">← writing</a>
        </p>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: '18px 0 4px' }}>{post.title}</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>{post.date}</p>
        <div className="post-body" ref={bodyRef} dangerouslySetInnerHTML={{ __html: renderBody(post) }} />
        <PostReactions slug={post.slug} />
        <PostToc bodyRef={bodyRef} slug={post.slug} />
      </article>
    );
  }

  return (
    <section style={{ marginTop: 32 }}>
      <p style={{ fontSize: 13, marginBottom: 24 }}>
        <a href="#/">← home</a>
      </p>
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
          {p.summary && <p style={{ fontSize: 14, color: '#444' }}>{p.summary}</p>}
        </div>
      ))}
    </section>
  );
}
