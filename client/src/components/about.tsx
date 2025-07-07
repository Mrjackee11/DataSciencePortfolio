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
                  <div className="w-72 h-72 mx-auto relative">
                    {/* Outer Ring - Slowest rotation */}
                    <div className="absolute inset-0 rounded-full border-4 border-blue-300/30 animate-globe-outer-slow"></div>
                    
                    {/* Middle Ring - Medium rotation */}
                    <div className="absolute inset-4 rounded-full border-2 border-blue-400/40 animate-globe-middle-medium"></div>
                    
                    {/* Core Globe - Slow rotation */}
                    <div className="absolute inset-8 w-56 h-56 relative animate-globe-core-slow">
                      {/* Main Globe Body */}
                      <div className="w-full h-full relative rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 shadow-3d overflow-hidden">
                        {/* Metal Wireframe Grid */}
                        <div className="absolute inset-0 opacity-40">
                          {/* Longitude Lines */}
                          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>
                          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gray-200 transform rotate-12"></div>
                          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gray-200 transform -rotate-12"></div>
                          <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gray-200 transform rotate-6"></div>
                          
                          {/* Latitude Lines */}
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gray-200 rounded-full transform scale-x-75"></div>
                          <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gray-200 rounded-full transform scale-x-75"></div>
                          <div className="absolute top-1/6 left-0 w-full h-0.5 bg-gray-200 rounded-full transform scale-x-50"></div>
                          <div className="absolute bottom-1/6 left-0 w-full h-0.5 bg-gray-200 rounded-full transform scale-x-50"></div>
                        </div>
                        
                        {/* Continent Shapes - Rotating independently */}
                        <div className="absolute inset-0 animate-continents-rotate">
                          {/* North America */}
                          <div className="absolute top-8 left-12 w-10 h-8 bg-green-500/70 rounded-lg transform rotate-12 shadow-md"></div>
                          {/* Europe */}
                          <div className="absolute top-10 right-16 w-6 h-5 bg-yellow-500/70 rounded transform -rotate-6 shadow-md"></div>
                          {/* Asia */}
                          <div className="absolute top-14 right-8 w-14 h-10 bg-red-500/70 rounded-xl transform rotate-3 shadow-md"></div>
                          {/* Africa */}
                          <div className="absolute top-20 left-18 w-7 h-12 bg-orange-500/70 rounded-2xl transform -rotate-15 shadow-md"></div>
                          {/* Australia */}
                          <div className="absolute bottom-14 right-12 w-7 h-5 bg-purple-500/70 rounded-lg transform rotate-45 shadow-md"></div>
                          {/* South America */}
                          <div className="absolute bottom-8 left-14 w-6 h-10 bg-pink-500/70 rounded-xl transform -rotate-24 shadow-md"></div>
                        </div>
                        
                        {/* Atmospheric Glow Layer */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-blue-300/30 animate-atmosphere-glow"></div>
                        
                        {/* Surface Shine Effect */}
                        <div className="absolute top-4 left-4 w-16 h-16 bg-white/30 rounded-full blur-md animate-surface-shine"></div>
                      </div>
                    </div>
                    
                    {/* Orbiting Data Points */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-data-orbit-1 shadow-lg"></div>
                      <div className="absolute top-1/2 left-0 w-4 h-4 bg-green-400 rounded-full animate-data-orbit-2 shadow-lg"></div>
                      <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-data-orbit-3 shadow-lg"></div>
                      <div className="absolute top-1/2 right-0 w-4 h-4 bg-red-400 rounded-full animate-data-orbit-4 shadow-lg"></div>
                    </div>
                    
                    {/* Energy Rings */}
                    <div className="absolute inset-2 rounded-full border border-blue-400/20 animate-energy-ring-1"></div>
                    <div className="absolute inset-6 rounded-full border border-blue-500/30 animate-energy-ring-2"></div>
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
