import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: 'LinkedIn' },
    { icon: Github, href: `https://${personalInfo.github}`, label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 {personalInfo.name}. Built with passion for data science.
          </p>
        </div>
      </div>
    </footer>
  );
}
