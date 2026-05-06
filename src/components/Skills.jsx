import { skills } from '../data/skills'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">My <span className="text-accent">Skills</span></h2>
        <div className="w-12 h-1 bg-accent rounded mb-12" />

        <div className="space-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-muted text-sm font-semibold uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {group.items.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
