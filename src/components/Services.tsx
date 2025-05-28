
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Data Analysis with Excel',
      description: 'Comprehensive data cleaning, visualization, and dashboard creation using advanced Excel techniques.',
      features: [
        'Data cleaning & preprocessing',
        'Advanced formulas & functions',
        'Interactive dashboards',
        'Pivot tables & charts',
        'Statistical analysis',
        'Report automation'
      ],
      color: 'accent-blue',
      icon: '📊'
    },
    {
      title: 'Web Design & Development',
      description: 'Clean, responsive websites using modern HTML, CSS, and design principles for optimal user experience.',
      features: [
        'Responsive web design',
        'Modern UI/UX principles',
        'Cross-browser compatibility',
        'Performance optimization',
        'SEO-friendly structure',
        'Mobile-first approach'
      ],
      color: 'accent-green',
      icon: '🌐'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent-blue':
        return { 
          border: 'border-accent-blue/30', 
          accent: 'text-accent-blue', 
          bg: 'bg-accent-blue/10',
          button: 'bg-accent-blue hover:bg-accent-blue/80'
        };
      case 'accent-green':
        return { 
          border: 'border-accent-green/30', 
          accent: 'text-accent-green', 
          bg: 'bg-accent-green/10',
          button: 'bg-accent-green hover:bg-accent-green/80'
        };
      default:
        return { 
          border: 'border-accent-blue/30', 
          accent: 'text-accent-blue', 
          bg: 'bg-accent-blue/10',
          button: 'bg-accent-blue hover:bg-accent-blue/80'
        };
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-dark-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 font-poppins">
          My <span className="text-gradient">Services</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Card 
                key={service.title}
                className={`bg-dark-card ${colors.border} border-2 card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className={`${colors.bg} rounded-t-lg`}>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{service.icon}</div>
                    <CardTitle className={`text-2xl font-semibold ${colors.accent}`}>
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">
                      What I Offer
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <span className={`w-2 h-2 ${colors.bg} rounded-full mr-3 flex-shrink-0`}></span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`${colors.button} text-white w-full py-3 rounded-full font-medium transition-all duration-300`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
