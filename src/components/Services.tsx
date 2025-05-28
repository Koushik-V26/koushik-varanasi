
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Code2, Sparkles, ArrowRight } from 'lucide-react';

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
      icon: BarChart3
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
      icon: Code2
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent-blue':
        return { 
          border: 'border-accent-blue/30', 
          accent: 'text-accent-blue', 
          bg: 'bg-accent-blue/10',
          button: 'bg-accent-blue hover:bg-accent-blue/80',
          glow: 'shadow-accent-blue/25'
        };
      case 'accent-green':
        return { 
          border: 'border-accent-green/30', 
          accent: 'text-accent-green', 
          bg: 'bg-accent-green/10',
          button: 'bg-accent-green hover:bg-accent-green/80',
          glow: 'shadow-accent-green/25'
        };
      default:
        return { 
          border: 'border-accent-blue/30', 
          accent: 'text-accent-blue', 
          bg: 'bg-accent-blue/10',
          button: 'bg-accent-blue hover:bg-accent-blue/80',
          glow: 'shadow-accent-blue/25'
        };
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-dark-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-accent-green rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-blue rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/20 rounded-full text-accent-yellow text-sm font-medium backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4" />
            What I Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center font-poppins">
            My <span className="text-gradient bg-gradient-to-r from-accent-yellow via-accent-green to-accent-blue bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`group bg-gradient-to-br from-dark-card to-dark-card/80 ${colors.border} border-2 card-hover animate-fade-in hover:${colors.glow} hover:shadow-2xl backdrop-blur-sm`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className={`${colors.bg} rounded-t-lg relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${service.color}/20 rounded-full blur-xl group-hover:bg-${service.color}/30 transition-colors`}></div>
                  <div className="flex items-center gap-4 relative">
                    <div className={`w-14 h-14 bg-${service.color}/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-${service.color}/50`}>
                      <IconComponent className={`w-7 h-7 ${colors.accent}`} />
                    </div>
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
                    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide flex items-center gap-2">
                      <span className={`w-2 h-2 ${colors.bg} rounded-full`}></span>
                      What I Offer
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300 group/feature">
                          <span className={`w-2 h-2 ${colors.bg} rounded-full mr-3 flex-shrink-0 group-hover/feature:scale-125 transition-transform`}></span>
                          <span className="text-sm group-hover/feature:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`${colors.button} text-white w-full py-3 rounded-full font-medium transition-all duration-300 group/btn`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
