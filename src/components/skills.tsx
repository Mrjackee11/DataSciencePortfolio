import { Brain, Database, Code, TrendingUp, BarChart3, Cpu, Zap } from 'lucide-react';
import { skills } from '../data/portfolio';

const skillIcons = {
  'Python': <div className="text-2xl">🐍</div>,
  'Machine Learning': <Brain className="w-6 h-6" />,
  'Statistical Analysis': <BarChart3 className="w-6 h-6" />,
  'Data Visualization': <TrendingUp className="w-6 h-6" />,
  'SQL': <Database className="w-6 h-6" />,
  'Scikit-learn': <Cpu className="w-6 h-6" />,
  'Pandas/NumPy': <div className="text-2xl">🐼</div>,
  'Computer Vision': <div className="text-2xl">👁️</div>
};

export function Skills() {
  const dataScientSkills = skills.filter(skill => skill.category === 'data-science');
  const otherSkills = skills.filter(skill => skill.category !== 'data-science');

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-white animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Technical <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        {/* Data Science Skills with Unique Animations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Data Science Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataScientSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 text-center hover:shadow-2xl transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4 animate-bounce-gentle">

                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{skill.name}</h4>
                <div className="relative w-full bg-blue-100 rounded-full h-3 mb-3">
                  <div
                    className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full animate-pulse-slow"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
                <span className="text-blue-600 font-bold text-lg">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
