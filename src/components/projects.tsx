import { useState } from 'react';
import { Github, ExternalLink, TrendingUp, Users, Clock, Eye, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { projects } from '../data/portfolio';
import Image from 'next/image';

const metricIcons = {
  'Accuracy': TrendingUp,
  'F1-Score': Heart,
  'Global': Globe,
  '10K+': Users,
  'Real-time': Clock,
  'Accuracy:': Eye
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getMetricIcon = (metric: string) => {
    const key = Object.keys(metricIcons).find(k => metric.includes(k));
    const IconComponent = key ? metricIcons[key as keyof typeof metricIcons] : TrendingUp;
    return <IconComponent className="mr-1 h-3 w-3" />;
  };

  return (
    <section id="projects" className="py-20 bg-white animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto text-lg font-medium">
            A showcase of my data science projects demonstrating various skills and techniques
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            onClick={() => setActiveFilter('all')}
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            className={activeFilter === 'all' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' : 'border-blue-300 text-blue-600 hover:bg-blue-50'}
          >
            All
          </Button>
          <Button
            onClick={() => setActiveFilter('ml')}
            variant={activeFilter === 'ml' ? 'default' : 'outline'}
            className={activeFilter === 'ml' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' : 'border-blue-300 text-blue-600 hover:bg-blue-50'}
          >
            Machine Learning
          </Button>
          <Button
            onClick={() => setActiveFilter('viz')}
            variant={activeFilter === 'viz' ? 'default' : 'outline'}
            className={activeFilter === 'viz' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' : 'border-blue-300 text-blue-600 hover:bg-blue-50'}
          >
            Data Viz
          </Button>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="portfolio-card overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={48}
                height={48}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded text-xs ${index % 3 === 0
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                        : index % 3 === 1
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                          : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.metrics && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    {getMetricIcon(project.metrics)}
                    {project.metrics}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
