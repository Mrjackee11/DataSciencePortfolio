
export function About() {
  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 perspective-1000 animate-slide-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-3d-text">
              About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-blue-600 max-w-2xl mx-auto text-lg font-medium animate-float-gentle">
              Passionate Data Science Student & AI Enthusiast
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    I&apos;m a passionate data science student with expertise in machine learning and statistical analysis. My journey began with curiosity about patterns in data and has evolved into building intelligent systems that solve real-world problems.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Currently pursuing my Bachelor&apos;s in Data Science at DG Vaishnav College, I&apos;ve gained hands-on experience through internships and personal projects, focusing on predictive modeling, data visualization, and machine learning applications.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Data Analysis</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Python</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">AI Research</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative perspective-1000">
                    <div className="w-80 h-80 mx-auto relative">
                      {/* Arc Reactor Base */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-2xl border-4 border-gray-600">
                        {/* Outer Metal Ring */}
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 shadow-inner">
                          {/* Ring Segments */}
                          <div className="absolute inset-0 rounded-full animate-spin duration-150">
                            <div className="absolute top-2 left-1/2 w-1 h-8 bg-blue-300 transform -translate-x-1/2 shadow-lg"></div>
                            <div className="absolute top-8 right-2 w-1 h-8 bg-blue-300 transform rotate-45 shadow-lg"></div>
                            <div className="absolute right-2 top-1/2 w-8 h-1 bg-blue-300 transform -translate-y-1/2 shadow-lg"></div>
                            <div className="absolute bottom-8 right-2 w-1 h-8 bg-blue-300 transform -rotate-45 shadow-lg"></div>
                            <div className="absolute bottom-2 left-1/2 w-1 h-8 bg-blue-300 transform -translate-x-1/2 shadow-lg"></div>
                            <div className="absolute bottom-8 left-2 w-1 h-8 bg-blue-300 transform rotate-45 shadow-lg"></div>
                            <div className="absolute left-2 top-1/2 w-8 h-1 bg-blue-300 transform -translate-y-1/2 shadow-lg"></div>
                            <div className="absolute top-8 left-2 w-1 h-8 bg-blue-300 transform -rotate-45 shadow-lg"></div>
                          </div>

                          {/* Middle Ring */}
                          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-500 via-gray-400 to-gray-600 shadow-inner animate-reactor-middle-ring">
                            {/* Inner Ring Segments */}
                            <div className="absolute top-1 left-1/2 w-0.5 h-6 bg-cyan-300 transform -translate-x-1/2 shadow-lg"></div>
                            <div className="absolute top-6 right-1 w-0.5 h-6 bg-cyan-300 transform rotate-45 shadow-lg"></div>
                            <div className="absolute right-1 top-1/2 w-6 h-0.5 bg-cyan-300 transform -translate-y-1/2 shadow-lg"></div>
                            <div className="absolute bottom-6 right-1 w-0.5 h-6 bg-cyan-300 transform -rotate-45 shadow-lg"></div>
                            <div className="absolute bottom-1 left-1/2 w-0.5 h-6 bg-cyan-300 transform -translate-x-1/2 shadow-lg"></div>
                            <div className="absolute bottom-6 left-1 w-0.5 h-6 bg-cyan-300 transform rotate-45 shadow-lg"></div>
                            <div className="absolute left-1 top-1/2 w-6 h-0.5 bg-cyan-300 transform -translate-y-1/2 shadow-lg"></div>
                            <div className="absolute top-6 left-1 w-0.5 h-6 bg-cyan-300 transform -rotate-45 shadow-lg"></div>
                          </div>

                          {/* Core Reactor */}
                          <div className="absolute inset-16 rounded-full bg-gradient-radial from-blue-400 via-blue-500 to-blue-700 shadow-2xl animate-reactor-core-glow">
                            {/* Inner Energy Core */}
                            <div className="absolute inset-4 rounded-full bg-gradient-radial from-cyan-300 via-blue-400 to-blue-600 animate-reactor-energy-pulse">
                              {/* Central Power Source */}
                              <div className="absolute inset-6 rounded-full bg-gradient-radial from-white via-cyan-200 to-blue-300 animate-reactor-power-core shadow-inner">
                                {/* Energy Particle Effects */}
                                <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-reactor-particle-1 shadow-lg"></div>
                                <div className="absolute top-6 right-3 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-reactor-particle-2 shadow-lg"></div>
                                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-200 rounded-full animate-reactor-particle-3 shadow-lg"></div>
                                <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-white rounded-full animate-reactor-particle-4 shadow-lg"></div>
                              </div>
                            </div>

                            {/* Energy Ripples */}
                            <div className="absolute inset-0 rounded-full border-2 border-cyan-300/30 animate-reactor-ripple-1"></div>
                            <div className="absolute inset-2 rounded-full border-2 border-blue-300/40 animate-reactor-ripple-2"></div>
                            <div className="absolute inset-4 rounded-full border-2 border-white/20 animate-reactor-ripple-3"></div>
                          </div>

                          {/* External Energy Arcs */}
                          <div className="absolute inset-0">
                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-reactor-arc-1 shadow-lg"></div>
                            <div className="absolute top-1/2 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-reactor-arc-2 shadow-lg"></div>
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-reactor-arc-3 shadow-lg"></div>
                            <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-reactor-arc-4 shadow-lg"></div>
                          </div>
                        </div>

                        {/* Reactor Housing Details */}
                        <div className="absolute inset-1 rounded-full border border-gray-400/50"></div>
                        <div className="absolute inset-3 rounded-full border border-gray-500/30"></div>
                      </div>

                      {/* Ambient Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl animate-reactor-ambient-glow"></div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Learning never Ends</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Fueling cutting-edge data science solutions with the power of innovation and technology, creating sustainable impact through intelligent systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
