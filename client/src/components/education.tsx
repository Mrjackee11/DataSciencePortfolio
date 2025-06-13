import { MapPin, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-black dark:bg-black animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text-gradient">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic qualifications and background
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-teal-500 pl-8 relative">
              <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2 top-2"></div>
              
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                    {edu.location && (
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                    )}
                  </div>
                </div>

                {edu.details && (
                  <p className="text-gray-400 mb-4">
                    {edu.details}
                  </p>
                )}

                {edu.subjects && (
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, subIndex) => (
                      <span
                        key={subIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}