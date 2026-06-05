import { mentors } from '../data';

export default function Mentors() {
  return (
    <section id="mentors">
      <h2>previous mentors who guided me (thank you) </h2>
      {mentors.map((m) => (
        <div key={m.id} className="mentor-item">
          <p style={{ marginBottom: 2 }}>
            <span className="name">{m.name}</span>{' '}
            <span style={{ color: '#666', fontSize: 13 }}>({m.org})</span>
          </p>
          <p style={{ fontSize: 14 }}>{m.note}</p>
        </div>
      ))}
    </section>
  );
}
