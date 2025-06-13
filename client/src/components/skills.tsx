import { skills } from '@/data/portfolio';

export function Skills() {
  const groupedSkills = {
    'Frontend Development': skills.filter(skill => skill.category === 'frontend'),
    'Backend Development': skills.filter(skill => skill.category === 'backend'),
    'DevOps & Tools': skills.filter(skill => skill.category === 'data-science')
  };

  return (
    <section id="skills" className="py-20 bg-black dark:bg-black animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I leverage for solving problems and building impactful applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([categoryTitle, categorySkills]) => (
            <div key={categoryTitle} className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-white text-center">
                {categoryTitle}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-white rounded-full h-2 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
