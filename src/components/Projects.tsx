
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, TrendingUp, Bot, Globe, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Stock Market Prediction Web App',
      description: 'ML model using intraday Alpha Vantage data with real-time visualization and trend analysis.',
      tech: ['Python', 'Machine Learning', 'API Integration', 'Data Science'],
      color: 'accent-blue',
      icon: TrendingUp,
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
      icon: Bot,
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
      icon: Globe,
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
        return { border: 'border-accent-blue/30', accent: 'text-accent-blue', bg: 'bg-accent-blue/10', glow: 'shadow-accent-blue/25' };
      case 'accent-green':
        return { border: 'border-accent-green/30', accent: 'text-accent-green', bg: 'bg-accent-green/10', glow: 'shadow-accent-green/25' };
      case 'accent-yellow':
        return { border: 'border-accent-yellow/30', accent: 'text-accent-yellow', bg: 'bg-accent-yellow/10', glow: 'shadow-accent-yellow/25' };
      default:
        return { border: 'border-accent-blue/30', accent: 'text-accent-blue', bg: 'bg-accent-blue/10', glow: 'shadow-accent-blue/25' };
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-accent-green rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-accent-yellow rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 border border-accent-green/20 rounded-full text-accent-green text-sm font-medium backdrop-blur-sm mb-6">
            <Rocket className="w-4 h-4" />
            My Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center font-poppins">
            Featured <span className="text-gradient bg-gradient-to-r from-accent-green via-accent-blue to-accent-yellow bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`group bg-gradient-to-br from-dark-card to-dark-card/80 ${colors.border} border-2 card-hover animate-fade-in hover:${colors.glow} hover:shadow-2xl backdrop-blur-sm`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className={`${colors.bg} rounded-t-lg relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-${project.color}/20 rounded-full blur-xl`}></div>
                  <div className="flex items-center gap-3 relative">
                    <div className={`w-10 h-10 bg-${project.color}/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-5 h-5 ${colors.accent}`} />
                    </div>
                    <CardTitle className={`text-xl font-semibold ${colors.accent}`}>
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 relative">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <span className={`w-2 h-2 ${colors.bg} rounded-full`}></span>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center group/feature">
                          <span className={`w-1.5 h-1.5 ${colors.bg} rounded-full mr-3 group-hover/feature:scale-125 transition-transform`}></span>
                          <span className="group-hover/feature:text-white transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <span className={`w-2 h-2 ${colors.bg} rounded-full`}></span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1.5 ${colors.bg} ${colors.accent} rounded-full text-xs font-medium border border-${project.color}/30 hover:scale-105 transition-transform cursor-default`}
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
                      className={`border-current ${colors.accent} hover:${colors.bg} flex-1 group/btn`}
                    >
                      <ExternalLink className="mr-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      View Live
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`border-current ${colors.accent} hover:${colors.bg} flex-1 group/btn`}
                    >
                      <Github className="mr-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Source
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
