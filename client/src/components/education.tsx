import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Education & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Learning</span>
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 transform hover:-translate-y-2 animate-fade-in-up animate-float-education"
              style={{
                animationDelay: `${index * 0.3}s`,
                animation: `slideInFromLeft 0.8s ease-out ${index * 0.3}s both, floatEducation ${4 + index}s ease-in-out infinite ${index * 0.5}s`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-6 mt-1 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 mr-3 group-hover:text-blue-700 transition-colors duration-300">{edu.degree}</h3>
                      {edu.degree.includes('BSc') && (
                        <div className="relative flex items-center">
                          <div className="w-5 h-5 bg-green-500 rounded-full animate-ping"></div>
                          <div className="absolute top-0 left-0 w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="ml-3 text-green-600 font-medium text-sm animate-bounce bg-green-50 px-3 py-1 rounded-full border border-green-200">Currently Studying</div>
                        </div>
                      )}
                    </div>
                    <p className="text-blue-600 font-semibold text-lg mb-3 group-hover:text-blue-700 transition-colors duration-300">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                        <Calendar size={16} className="mr-2 text-blue-500" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                          <MapPin size={16} className="mr-2 text-blue-500" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      )}
                    </div>

                    {edu.details && (
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">{edu.details}</p>
                    )}

                    {edu.subjects && (
                      <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                        <div className="flex items-center mb-4">
                          <BookOpen size={18} className="mr-2 text-blue-500" />
                          <span className="text-lg font-semibold text-gray-800">Key Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {edu.subjects.map((subject, subIndex) => (
                            <span 
                              key={subIndex}
                              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                              style={{
                                animationDelay: `${(index * 0.3) + (subIndex * 0.1)}s`
                              }}
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