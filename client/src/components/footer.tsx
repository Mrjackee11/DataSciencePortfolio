import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 text-sm">
              Data Science Student • AI Enthusiast • Problem Solver
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-50 text-gray-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-50 text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full bg-blue-50 text-gray-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="border-t border-blue-100 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. | Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
