import { GraduationCap, Calendar, MapPin, BookOpen, Star } from 'lucide-react';
import { education } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Educational <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent max-w-2xl mx-auto text-lg font-medium">
            Academic achievements and learning milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="relative group animate-float"
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl text-white mr-4 shadow-lg">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-3 text-purple-500" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    )}
                  </div>

                  {edu.details && (
                    <p className="text-gray-700 mb-6 leading-relaxed">{edu.details}</p>
                  )}

                  {edu.subjects && (
                    <div>
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-5 h-5 mr-2 text-indigo-500" />
                        <span className="font-bold text-gray-800">Key Subjects</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, subIndex) => (
                          <span 
                            key={subIndex}
                            className="px-4 py-2 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 text-gray-800 rounded-full text-sm font-medium border border-blue-200 hover:shadow-md transition-shadow duration-300"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special indicator for BSc */}
                  {edu.degree.includes('BSc') && (
                    <div className="absolute -top-3 -right-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg animate-pulse">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full p-1 shadow-xl">
              <div className="bg-white rounded-full px-8 py-4">
                <div className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">Continuous Learning Journey</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}