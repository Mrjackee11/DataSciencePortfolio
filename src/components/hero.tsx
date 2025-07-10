import { Button } from '../components/ui/button';
import { Github, Linkedin, Mail, Download, Star } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export function Hero() {

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-blue-300 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Data Science Student</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900">
              Hello, I&apos;m <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                {personalInfo.name}
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-blue-600 mb-6 font-medium">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
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
      </div>



    </section>
  );
}