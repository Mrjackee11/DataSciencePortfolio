import { Code2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto text-lg font-medium">
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
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 animate-float">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Mission</h4>
                  <p className="text-gray-700">
                    Transforming complex data into actionable insights and building AI solutions that make a positive impact on society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
