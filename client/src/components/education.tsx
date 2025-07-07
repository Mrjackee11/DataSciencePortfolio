import { MapPin, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-white animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            My <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto text-lg font-medium">
            Academic Journey & Qualifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-8">
                <div className="flex-1">
                  <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 relative animate-float" 
                       style={{animationDelay: `${index * 0.5}s`}}>
                    
                    {/* Animated indicator */}
                    <div className={`absolute -left-4 top-8 w-8 h-8 rounded-full border-4 border-white shadow-lg ${
                      edu.degree.includes('Bachelor of Science') 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-blue-500'
                    }`}></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 animate-pulse-slow"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-30 animate-bounce-gentle"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-xl text-blue-600 font-medium mb-2">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-gray-600 mb-2 md:justify-end">
                            <Calendar size={18} className="mr-2" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                          {edu.location && (
                            <div className="flex items-center text-gray-600 md:justify-end">
                              <MapPin size={18} className="mr-2" />
                              <span>{edu.location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {edu.details && (
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {edu.details}
                        </p>
                      )}

                      {edu.subjects && (
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject, subIndex) => (
                            <span
                              key={subIndex}
                              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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