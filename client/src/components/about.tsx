import { Code2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-black dark:bg-black animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text-gradient">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with 4+ years of experience creating digital solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                I'm a passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems. My journey in programming started with curiosity and has evolved into a deep passion for building amazing digital experiences.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Code2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Clean Code</h3>
                </div>
              </div>
              <p className="text-gray-400">
                Writing maintainable, scalable, and efficient code following best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
