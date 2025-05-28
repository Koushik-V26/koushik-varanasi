
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 font-poppins">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate data science student currently in my 2nd year of B.Tech at ANITS College, 
                Visakhapatnam. My journey in technology is driven by curiosity and the desire to solve 
                real-world problems through data analytics and AI automation.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm excited to use AI tools and data science methodologies to uncover insights that can 
                make a meaningful impact. Currently gaining hands-on experience through internships and 
                self-driven projects.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-accent-green/20 text-accent-green rounded-full text-sm font-medium">
                  Quick Learner
                </span>
                <span className="px-4 py-2 bg-accent-yellow/20 text-accent-yellow rounded-full text-sm font-medium">
                  Team Player
                </span>
              </div>
            </div>

            <div className="space-y-6 animate-scale-in">
              <Card className="bg-dark-card border-gray-700 card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-accent-blue">Education</h3>
                  <p className="text-gray-300">B.Tech in Progress (2nd Year)</p>
                  <p className="text-gray-400 text-sm">ANITS College, Visakhapatnam</p>
                </CardContent>
              </Card>

              <Card className="bg-dark-card border-gray-700 card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-accent-green">Current Role</h3>
                  <p className="text-gray-300">Data Visualization & Data Analyst Intern</p>
                  <p className="text-gray-400 text-sm">Inspire Tech Solutions</p>
                </CardContent>
              </Card>

              <Card className="bg-dark-card border-gray-700 card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-accent-yellow">Interests</h3>
                  <p className="text-gray-300">AI Tools, Data Analytics, Web Development</p>
                  <p className="text-gray-400 text-sm">Automation & Real-world Problem Solving</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
