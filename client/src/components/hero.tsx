import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Star } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200 dark:bg-blue-800/20 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-blue-300 dark:bg-blue-700/20 rounded-full opacity-15 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Data Science Student</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                {personalInfo.name}
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6 font-medium">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/Mahesh_R_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              download="Mahesh_R_Resume.html"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400 dark:bg-transparent w-full sm:w-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-blue-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-blue-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-blue-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:text-white transform hover:scale-110 transition-all duration-300"
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
