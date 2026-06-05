import { research } from '../data';

export default function Research() {
  return (
    <section id="research">
      <h2>research</h2>
      {research.map((r) => (
        <div key={r.id} className="research-item">
          <p style={{ marginBottom: 2 }}>
            <a href={r.link} target="_blank" rel="noopener noreferrer" className="title">
              {r.title}
            </a>
          </p>
          <p className="meta">{r.authors}</p>
          <p className="meta" style={{ fontStyle: 'italic' }}>{r.venue}</p>
        </div>
      ))}
    </section>
  );
}
