import { Code2, Target, Zap, Brain, Database, TrendingUp, Code } from 'lucide-react';

export function About() {
  return (
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
                  I'm a passionate data science student with expertise in machine learning and statistical analysis. My journey began with curiosity about patterns in data and has evolved into building intelligent systems that solve real-world problems.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Currently pursuing my Bachelor's in Data Science at DG Vaishnav College, I've gained hands-on experience through internships and personal projects, focusing on predictive modeling, data visualization, and machine learning applications.
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
                  <div className="w-64 h-64 mx-auto relative animate-3d-globe">
                    {/* Globe Container */}
                    <div className="w-full h-full relative rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-3d overflow-hidden">
                      {/* Metal Skeleton Grid */}
                      <div className="absolute inset-0 opacity-30">
                        {/* Longitude lines */}
                        <div className="absolute top-0 left-1/2 w-px h-full bg-gray-300 transform -translate-x-1/2 animate-skeleton-rotate"></div>
                        <div className="absolute top-0 left-1/4 w-px h-full bg-gray-300 transform animate-skeleton-rotate"></div>
                        <div className="absolute top-0 right-1/4 w-px h-full bg-gray-300 transform animate-skeleton-rotate"></div>
                        
                        {/* Latitude lines */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 transform -translate-y-1/2"></div>
                        <div className="absolute top-1/4 left-0 w-full h-px bg-gray-300 transform animate-latitude-pulse"></div>
                        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gray-300 transform animate-latitude-pulse"></div>
                      </div>
                      
                      {/* Country Impressions */}
                      <div className="absolute inset-0 animate-countries-rotate">
                        {/* North America */}
                        <div className="absolute top-6 left-8 w-8 h-6 bg-green-400/60 rounded-sm transform rotate-12 animate-pulse"></div>
                        {/* Europe */}
                        <div className="absolute top-8 right-12 w-6 h-4 bg-yellow-400/60 rounded-sm transform -rotate-6 animate-pulse"></div>
                        {/* Asia */}
                        <div className="absolute top-12 right-6 w-12 h-8 bg-red-400/60 rounded-sm transform rotate-3 animate-pulse"></div>
                        {/* Africa */}
                        <div className="absolute top-16 left-16 w-6 h-10 bg-orange-400/60 rounded-sm transform -rotate-12 animate-pulse"></div>
                        {/* Australia */}
                        <div className="absolute bottom-12 right-10 w-6 h-4 bg-purple-400/60 rounded-sm transform rotate-45 animate-pulse"></div>
                        {/* South America */}
                        <div className="absolute bottom-6 left-12 w-5 h-8 bg-pink-400/60 rounded-sm transform -rotate-24 animate-pulse"></div>
                      </div>
                      
                      {/* Atmosphere Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-atmosphere"></div>
                    </div>
                    
                    {/* Floating Data Points */}
                    <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full animate-orbit-1 shadow-lg"></div>
                    <div className="absolute top-8 -left-6 w-3 h-3 bg-green-400 rounded-full animate-orbit-2 shadow-lg"></div>
                    <div className="absolute -bottom-2 left-8 w-5 h-5 bg-purple-400 rounded-full animate-orbit-3 shadow-lg"></div>
                    <div className="absolute bottom-12 -right-8 w-3 h-3 bg-red-400 rounded-full animate-orbit-4 shadow-lg"></div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Global Impact</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Building data science solutions with worldwide reach, connecting insights across continents to drive innovation and positive change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
