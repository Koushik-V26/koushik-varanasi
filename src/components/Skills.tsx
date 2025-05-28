
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data',
      color: 'accent-blue',
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
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Git', level: 75 },
      ]
    },
    {
      title: 'Tools & Platforms',
      color: 'accent-yellow',
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
        return { bg: 'bg-accent-blue', text: 'text-accent-blue' };
      case 'accent-green':
        return { bg: 'bg-accent-green', text: 'text-accent-green' };
      case 'accent-yellow':
        return { bg: 'bg-accent-yellow', text: 'text-accent-yellow' };
      default:
        return { bg: 'bg-accent-blue', text: 'text-accent-blue' };
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-dark-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 font-poppins">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <Card 
                key={category.title} 
                className="bg-dark-card border-gray-700 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-6 ${colors.text}`}>
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`${colors.bg} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
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
