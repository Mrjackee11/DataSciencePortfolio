import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-black dark:bg-black animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text-gradient">
            Education & Learning
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and continuous learning in data science and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-white mr-3">{edu.degree}</h3>
                      {edu.degree.includes('BSc') && (
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                      )}
                    </div>
                    <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                      {edu.location && (
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                      )}
                    </div>

                    {edu.details && (
                      <p className="text-gray-300 mb-4">{edu.details}</p>
                    )}

                    {edu.subjects && (
                      <div>
                        <div className="flex items-center mb-2">
                          <BookOpen size={16} className="mr-2 text-gray-400" />
                          <span className="text-sm font-medium text-gray-300">Key Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject, subIndex) => (
                            <span 
                              key={subIndex}
                              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}