import { Code, Brain, BarChart3, PieChart } from 'lucide-react';
import { skills, additionalTechnologies } from '@/data/portfolio';

const categoryConfig = {
  programming: {
    title: 'Programming',
    icon: Code,
    color: 'blue'
  },
  ml: {
    title: 'Machine Learning',
    icon: Brain,
    color: 'green'
  },
  analysis: {
    title: 'Data Analysis',
    icon: BarChart3,
    color: 'purple'
  },
  visualization: {
    title: 'Visualization',
    icon: PieChart,
    color: 'orange'
  }
};

const colorClasses = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600',
    progress: 'bg-blue-600'
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600',
    progress: 'bg-green-600'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600',
    progress: 'bg-purple-600'
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-600',
    progress: 'bg-orange-600'
  }
};

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical expertise spans across various domains of data science and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const colors = colorClasses[config.color as keyof typeof colorClasses];
            const IconComponent = config.icon;

            return (
              <div key={category} className="text-center">
                <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`${colors.text} text-2xl`} size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {config.title}
                </h3>
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="portfolio-skill-bar">
                        <div
                          className={`portfolio-skill-progress ${colors.progress}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalTechnologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
