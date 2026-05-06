export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Hi, I'm <span className="text-accent">Bipin Gurung</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-medium mb-3">
          BIT Student | Full Stack Developer
        </p>
        <p className="text-gray-500 text-lg mb-10">
          I build web apps and love learning new tech
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            View Projects
          </button>
          <a
            href="#"
            className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
