import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-title">Experience</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-accent border-[3px] border-white ring-[3px] ring-accent z-10" />

                {/* Content card */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'
                  }`}
                >
                  <div className="bg-white rounded-lg border border-gray-100 p-5 shadow-sm card-hover">
                    <span className="text-xs font-mono text-gray-400 tracking-wide">{exp.period}</span>
                    <h3 className="text-base font-semibold text-gray-900 mt-1">{exp.role}</h3>
                    <p className="text-sm text-accent font-medium">{exp.org}</p>
                    <p className="text-xs text-gray-500 mt-2 italic">{exp.focus}</p>
                    <ul className={`mt-3 space-y-1.5 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-xs text-gray-500 leading-relaxed flex items-start gap-2">
                          <span className="text-accent mt-0.5 shrink-0">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
