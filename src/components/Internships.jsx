import { internships } from '../data';

export default function Internships() {
  return (
    <section id="internships">
      <h2>internships</h2>
      {internships.map((exp) => (
        <div key={exp.id} className="exp-item">
          <p className="meta">
            <span className="org">{exp.org}</span> &middot; {exp.period}
          </p>
          <p style={{ fontWeight: 600, marginBottom: 2 }}>{exp.role}</p>
          <p style={{ fontSize: 14 }}>{exp.desc}</p>
        </div>
      ))}
    </section>
  );
}
