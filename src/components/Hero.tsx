
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Database, TrendingUp, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-green rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-32 left-1/4 w-6 h-6 text-accent-blue/30 animate-bounce delay-300" />
        <Database className="absolute top-40 right-1/3 w-5 h-5 text-accent-green/30 animate-bounce delay-700" />
        <TrendingUp className="absolute bottom-40 left-1/3 w-7 h-7 text-accent-yellow/30 animate-bounce delay-500" />
        <Sparkles className="absolute top-1/2 right-1/4 w-4 h-4 text-accent-blue/40 animate-bounce delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-slide-in-left order-2 lg:order-1">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-accent-blue text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
                Available for Opportunities
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold font-poppins leading-tight">
                <span className="block text-white tracking-tight">Koushik</span>
                <span className="block text-gradient bg-gradient-to-r from-accent-blue via-accent-green to-accent-yellow bg-clip-text text-transparent animate-pulse"> Varanasi</span>
              </h1>
              
              {/* Animated Typewriter Effect */}
              <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-medium space-y-3">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-1 h-6 sm:h-8 bg-accent-blue animate-pulse"></div>
                  <span>Data Science Enthusiast</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-1 h-6 sm:h-8 bg-accent-green animate-pulse delay-300"></div>
                  <span className="text-accent-blue">Future Analyst</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-1 h-6 sm:h-8 bg-accent-yellow animate-pulse delay-500"></div>
                  <span>Passionate about AI & Automation</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              B.Tech student passionate about transforming data into insights and building 
              innovative solutions with <span className="text-accent-blue font-medium">AI</span> and 
              <span className="text-accent-green font-medium"> automation</span> technologies.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-8 justify-center lg:justify-start text-center">
              <div className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold text-accent-blue">2+</div>
                <div className="text-gray-400 text-sm">Years Learning</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold text-accent-green">5+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold text-accent-yellow">1</div>
                <div className="text-gray-400 text-sm">Active Internship</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button onClick={scrollToAbout} className="group bg-gradient-to-r from-accent-blue to-accent-green hover:from-accent-blue/80 hover:to-accent-green/80 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-accent-blue/25 hover:scale-105">
                <span>Explore My Work</span>
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="border-2 border-accent-green/50 text-accent-green hover:bg-accent-green hover:text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="flex justify-center animate-slide-in-right order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-accent-blue via-accent-green to-accent-yellow rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main Profile Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-accent-blue via-accent-green to-accent-yellow p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center relative overflow-hidden">
                  {/* Inner Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full"></div>
                  
                  {/* Profile Picture */}
                  <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden border-4 border-white/10">
                    <img src="https://i.postimg.cc/9Fz52zcs/IMG-20241026-WA0002.jpg" alt="Koushik Kumar Varanasi" className="w-full h-full object-cover object-center" />
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 right-8 w-8 h-8 bg-accent-blue/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce">
                      <Code className="w-4 h-4 text-accent-blue" />
                    </div>
                    <div className="absolute bottom-8 left-4 w-8 h-8 bg-accent-green/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce delay-300">
                      <Database className="w-4 h-4 text-accent-green" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status Badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-accent-yellow to-accent-green rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 border-4 border-dark-bg">
                <span className="text-2xl sm:text-3xl animate-bounce">🚀</span>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-accent-blue rounded-full shadow-lg"></div>
                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-accent-green rounded-full shadow-lg"></div>
                <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-accent-yellow rounded-full shadow-lg"></div>
                <div className="absolute top-1/2 -left-2 w-3 h-3 bg-accent-blue rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator - Centered for all screen sizes */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce w-full">
          <div className="text-gray-400 text-sm font-medium text-center">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-accent-blue rounded-full mt-2 animate-pulse"></div>
          </div>
          <ArrowDown className="w-4 h-4 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
