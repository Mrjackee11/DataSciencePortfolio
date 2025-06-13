import { GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { education, experience } from '@/data/portfolio';

export function About() {
  const interests = ['Machine Learning', 'Statistical Analysis', 'Data Visualization', 'Python'];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about my background, education, and journey in data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I&apos;m a dedicated data science student with a passion for uncovering patterns in complex datasets.
              My journey began with a background in mathematics and computer science, which led me to discover
              the fascinating world of machine learning and statistical analysis.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Through various projects and internships, I&apos;ve developed expertise in Python, R, SQL, and
              modern ML frameworks. I&apos;m particularly interested in predictive modeling, natural language
              processing, and data visualization.
            </p>

            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-600 text-xl mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Education
                  </h4>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-gray-900 dark:text-gray-100">
                        {edu.degree}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.institution} • {edu.period}
                        {edu.details && ` • ${edu.details}`}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-green-600 text-xl mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Experience
                  </h4>
                </div>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
