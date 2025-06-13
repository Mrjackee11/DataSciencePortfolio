import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400">
              Full Stack Developer <br />
              passionate about creating <br />
              amazing digital experiences.
            </p>
          </div>
          
          <div className="text-right">
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
