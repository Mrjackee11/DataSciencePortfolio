import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown, Star, Award, Trophy } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-blue-300 rounded-full opacity-15 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Data Science Student</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-blue-600 mb-6 font-medium">
              {personalInfo.title}
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg border border-blue-100 text-gray-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg border border-blue-100 text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white rounded-full shadow-lg border border-blue-100 text-gray-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Stats/Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow animate-float">
                <div className="flex items-center mb-3">
                  <Trophy className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Education</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">BSc</p>
                <p className="text-sm text-gray-600">Computer Science</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Focus</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">ML</p>
                <p className="text-sm text-gray-600">Machine Learning</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center mb-3">
                  <Star className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Skills</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">8+</p>
                <p className="text-sm text-gray-600">Technologies</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow animate-float" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center mb-3">
                  <ChevronDown className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Projects</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">5+</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3">Ready to Collaborate?</h3>
              <p className="text-blue-100 mb-4">
                I'm passionate about turning data into actionable insights and building intelligent solutions.
              </p>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore My Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-blue-100 text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}