import { FolderOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={personalInfo.image}
              alt={`${personalInfo.name} professional headshot`}
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="portfolio-text-gradient">{personalInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <FolderOpen className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
