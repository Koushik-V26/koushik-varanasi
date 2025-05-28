
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Stock Market Prediction Web App',
      description: 'ML model using intraday Alpha Vantage data with real-time visualization and trend analysis.',
      tech: ['Python', 'Machine Learning', 'API Integration', 'Data Science'],
      color: 'accent-blue',
      features: [
        'Real-time data visualization',
        'Trend analysis algorithms',
        'Interactive web interface',
        'Alpha Vantage API integration'
      ]
    },
    {
      title: 'Automation Bot for Bill Payments',
      description: 'RPA-driven solution using BotsDNA for automated data extraction and transaction processing.',
      tech: ['Automation Anywhere', 'RPA', 'PDF Processing', 'BotsDNA'],
      color: 'accent-green',
      features: [
        'Automated data extraction',
        'Transaction processing',
        'PDF data handling',
        'Error handling & logging'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Clean, responsive portfolio website showcasing projects and skills using modern web technologies.',
      tech: ['HTML', 'CSS', 'Responsive Design', 'Modern UI'],
      color: 'accent-yellow',
      features: [
        'Responsive design',
        'Modern animations',
        'Clean user interface',
        'Cross-browser compatibility'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent-blue':
        return { border: 'border-accent-blue/30', accent: 'text-accent-blue', bg: 'bg-accent-blue/10' };
      case 'accent-green':
        return { border: 'border-accent-green/30', accent: 'text-accent-green', bg: 'bg-accent-green/10' };
      case 'accent-yellow':
        return { border: 'border-accent-yellow/30', accent: 'text-accent-yellow', bg: 'bg-accent-yellow/10' };
      default:
        return { border: 'border-accent-blue/30', accent: 'text-accent-blue', bg: 'bg-accent-blue/10' };
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 font-poppins">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <Card 
                key={project.title}
                className={`bg-dark-card ${colors.border} border-2 card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className={`${colors.bg} rounded-t-lg`}>
                  <CardTitle className={`text-xl font-semibold ${colors.accent}`}>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className={`w-1.5 h-1.5 ${colors.bg} rounded-full mr-3`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1 ${colors.bg} ${colors.accent} rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`border-current ${colors.accent} hover:${colors.bg} flex-1`}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`border-current ${colors.accent} hover:${colors.bg} flex-1`}
                    >
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
