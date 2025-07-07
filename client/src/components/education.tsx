import { GraduationCap, Calendar, MapPin, BookOpen, Star } from 'lucide-react';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Educational <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-purple-600 max-w-2xl mx-auto text-lg font-medium">
            Academic achievements and learning milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-pink-400 h-full rounded-full"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-float`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white mr-4">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-purple-600 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      )}
                    </div>

                    {edu.details && (
                      <p className="text-gray-700 mb-4 leading-relaxed">{edu.details}</p>
                    )}

                    {edu.subjects && (
                      <div>
                        <div className="flex items-center mb-3">
                          <BookOpen className="w-4 h-4 mr-2 text-purple-500" />
                          <span className="text-sm font-medium text-gray-700">Key Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject, subIndex) => (
                            <span 
                              key={subIndex}
                              className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Special indicator for BSc */}
                    {edu.degree.includes('BSc') && (
                      <div className="absolute -top-2 -right-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full animate-ping">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg">
            <GraduationCap className="w-5 h-5 mr-2" />
            <span className="font-medium">Continuous Learning Journey</span>
          </div>
        </div>
      </div>
    </section>
  );
}