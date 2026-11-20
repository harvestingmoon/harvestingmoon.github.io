import { posts, renderBody } from '../blog';

export default function Blog({ path }) {
  const slug = path.replace(/^#\/blog\/?/, '');
  const post = slug ? posts.find((p) => p.slug === slug) : null;

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
        <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>{post.date}</p>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: renderBody(post) }} />
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
          <p style={{ fontSize: 13, color: '#666', marginBottom: 2 }}>{p.date}</p>
          {p.summary && <p style={{ fontSize: 14, color: '#444' }}>{p.summary}</p>}
        </div>
      ))}
    </section>
  );
}
