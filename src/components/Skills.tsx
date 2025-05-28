
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data',
      color: 'accent-blue',
      icon: Code,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'NumPy', level: 75 },
        { name: 'Pandas', level: 80 },
        { name: 'Excel', level: 90 },
      ]
    },
    {
      title: 'Web Development',
      color: 'accent-green',
      icon: Database,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Git', level: 75 },
      ]
    },
    {
      title: 'Tools & Platforms',
      color: 'accent-yellow',
      icon: Wrench,
      skills: [
        { name: 'Power BI', level: 70 },
        { name: 'Automation Anywhere', level: 75 },
        { name: 'Data Visualization', level: 85 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent-blue':
        return { bg: 'bg-accent-blue', text: 'text-accent-blue', glow: 'shadow-accent-blue/25' };
      case 'accent-green':
        return { bg: 'bg-accent-green', text: 'text-accent-green', glow: 'shadow-accent-green/25' };
      case 'accent-yellow':
        return { bg: 'bg-accent-yellow', text: 'text-accent-yellow', glow: 'shadow-accent-yellow/25' };
      default:
        return { bg: 'bg-accent-blue', text: 'text-accent-blue', glow: 'shadow-accent-blue/25' };
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-dark-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-72 h-72 bg-accent-yellow rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-blue rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-accent-blue text-sm font-medium backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4" />
            My Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center font-poppins">
            Technical <span className="text-gradient bg-gradient-to-r from-accent-blue via-accent-green to-accent-yellow bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`group bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-${category.color}/50 card-hover animate-fade-in hover:${colors.glow} hover:shadow-2xl backdrop-blur-sm`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${category.color}/10 rounded-full blur-xl group-hover:bg-${category.color}/20 transition-colors`}></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 bg-${category.color}/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className={`text-xl font-semibold ${colors.text}`}>
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group/skill">
                          <div className="flex justify-between mb-3">
                            <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">{skill.name}</span>
                            <span className={`text-sm font-semibold ${colors.text}`}>{skill.level}%</span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                              <div 
                                className={`${colors.bg} h-2.5 rounded-full transition-all duration-1000 ease-out relative`}
                                style={{ width: `${skill.level}%` }}
                              >
                                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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

export default Skills;
