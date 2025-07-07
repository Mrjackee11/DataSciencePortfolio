import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-600 mb-8 max-w-3xl mx-auto font-medium">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
            >
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 animate-bounce-gentle"
            >
              <Github size={24} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 animate-bounce-gentle"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:text-white transition-all duration-300 animate-bounce-gentle"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
