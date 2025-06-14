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
          <div className="grid lg:grid-cols-1 gap-12 items-start">
            <div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                I'm a passionate data science student with expertise in machine learning and statistical analysis. I love creating data-driven solutions that solve real-world problems and provide valuable insights. My journey in data science started with curiosity about patterns in data and has evolved into a deep passion for building intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
