import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-slide-up transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Education & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Learning</span>
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-6 mt-1 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg flex-shrink-0">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">{edu.degree}</h3>
                      {edu.period.includes('Present') && (
                        <div className="relative flex items-center">
                          <div className="w-5 h-5 bg-green-500 rounded-full animate-ping"></div>
                          <div className="absolute top-0 left-0 w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="ml-3 text-green-600 dark:text-green-400 font-medium text-sm animate-bounce bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full border border-green-200 dark:border-green-700">Currently Studying</div>
                        </div>
                      )}
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">{edu.institution}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        <Calendar size={16} className="mr-2 text-blue-500" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          <MapPin size={16} className="mr-2 text-blue-500" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      )}
                    </div>

                    {edu.details && (
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">{edu.details}</p>
                    )}

                    {edu.subjects && (
                      <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                        <div className="flex items-center mb-4">
                          <BookOpen size={18} className="mr-2 text-blue-500" />
                          <span className="text-lg font-semibold text-gray-800 dark:text-white">Key Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {edu.subjects.map((subject, subIndex) => (
                            <span
                              key={subIndex}
                              className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
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
