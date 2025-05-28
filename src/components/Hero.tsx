
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-poppins">
              <span className="block text-white">Koushik</span>
              <span className="block text-gradient">Kumar Varanasi</span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-gray-300 mb-8 space-y-2">
              <div>Data Science Enthusiast</div>
              <div className="text-accent-blue">Future Analyst</div>
              <div>Passionate about AI & Automation</div>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              B.Tech student passionate about transforming data into insights and building 
              innovative solutions with AI and automation technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToAbout}
                className="bg-accent-blue hover:bg-accent-blue/80 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 glow-effect"
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-accent-blue to-accent-green p-1">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl font-bold text-white">
                    KV
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent-yellow rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
