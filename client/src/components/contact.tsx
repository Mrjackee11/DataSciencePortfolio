import { Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 animate-slide-up transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-blue-600 dark:text-blue-400 max-w-2xl mx-auto text-lg font-medium">
            Let's discuss opportunities and collaborations
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center p-4 bg-blue-50/30 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50/60 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4 border border-blue-200/30">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center p-4 bg-blue-50/20 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50/40 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 border border-blue-200/30">
                    <Phone className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-blue-500 dark:text-blue-400 font-medium">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-blue-50/25 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center mr-4 border border-blue-200/30">
                    <MapPin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-blue-700 dark:text-blue-400 font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
