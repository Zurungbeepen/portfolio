const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Websoft Technology Nepal',
    website: 'https://www.websoftnepal.com.np/',
    duration: '3 Months',
    description:
      'Worked on frontend development tasks, building and styling web pages using HTML, CSS, JavaScript, and Bootstrap. Gained hands-on experience in responsive design and real-world web development workflows.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">
          Work <span className="text-accent">Experience</span>
        </h2>
        <div className="w-12 h-1 bg-accent rounded mb-12" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-medium hover:underline"
                  >
                    {exp.company} ↗
                  </a>
                </div>
                <span className="text-muted text-sm border border-white/10 px-3 py-1 rounded-full w-fit">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
