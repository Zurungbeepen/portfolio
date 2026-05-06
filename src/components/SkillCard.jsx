export default function SkillCard({ name, icon }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-surface rounded-xl border border-white/5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-default group">
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
        onError={(e) => { e.target.style.display = 'none' }}
      />
      <span className="text-gray-400 text-xs font-medium group-hover:text-accent transition-colors duration-300">
        {name}
      </span>
    </div>
  )
}
