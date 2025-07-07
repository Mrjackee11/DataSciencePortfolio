import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-white animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Education & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and continuous learning in data science and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border border-blue-100"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-6 mt-1 transform hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 mr-3">{edu.degree}</h3>
                      {edu.degree.includes('BSc') && (
                        <div className="relative flex items-center">
                          <div className="w-5 h-5 bg-green-500 rounded-full animate-ping"></div>
                          <div className="absolute top-0 left-0 w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="ml-2 text-green-600 font-medium text-sm animate-bounce">Currently Studying</div>
                        </div>
                      )}
                    </div>
                    <p className="text-blue-600 font-semibold text-lg mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-blue-500" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-blue-500" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      )}
                    </div>

                    {edu.details && (
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">{edu.details}</p>
                    )}

                    {edu.subjects && (
                      <div>
                        <div className="flex items-center mb-4">
                          <BookOpen size={18} className="mr-2 text-blue-500" />
                          <span className="text-lg font-semibold text-gray-900">Key Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {edu.subjects.map((subject, subIndex) => (
                            <span 
                              key={subIndex}
                              className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors duration-200 shadow-sm"
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