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
    <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
          Hi, I'm <span className="portfolio-text-gradient">Anu Sarangh</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
          {personalInfo.title}
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="portfolio-gradient text-white hover:opacity-90 transition-opacity"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
