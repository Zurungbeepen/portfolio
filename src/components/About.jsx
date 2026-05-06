export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">About <span className="text-accent">Me</span></h2>
        <div className="w-12 h-1 bg-accent rounded mb-12" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-56 h-56 rounded-2xl bg-surface border-2 border-accent/30 overflow-hidden flex items-center justify-center">
              <span className="text-muted text-sm">Photo coming soon</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Passionate about building things with code
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a Bachelor of Information Technology (BIT) student with hands-on experience across a wide range of technologies — from Python and Java to React and .NET. I enjoy turning ideas into real, working applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Throughout my studies, I've worked on group projects, academic modules, and my Final Year Project — an Apartment Management System built with the MERN stack. I'm always looking to learn and grow as a developer.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Full Stack'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-surface border border-accent/20 text-accent text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
