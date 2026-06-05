import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects">
      <h2>projects</h2>
      {projects.map((proj) => (
        <div key={proj.id} className="proj-item">
          <p style={{ marginBottom: 2 }}>
            <span className="title">{proj.title}.</span>{' '}
            <span style={{ fontSize: 14 }}>{proj.desc}</span>
          </p>
        </div>
      ))}
    </section>
  );
}
