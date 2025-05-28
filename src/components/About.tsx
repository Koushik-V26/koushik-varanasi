
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, BookOpen, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-green rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 border border-accent-green/20 rounded-full text-accent-green text-sm font-medium backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Get to Know Me
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins">
              About <span className="text-gradient bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent-blue to-accent-green rounded-full"></div>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  I'm a passionate data science student currently in my 2nd year of B.Tech at ANITS College, 
                  Visakhapatnam. My journey in technology is driven by curiosity and the desire to solve 
                  real-world problems through data analytics and AI automation.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent-green to-accent-yellow rounded-full"></div>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  I'm excited to use AI tools and data science methodologies to uncover insights that can 
                  make a meaningful impact. Currently gaining hands-on experience through internships and 
                  self-driven projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="group px-6 py-3 bg-gradient-to-r from-accent-blue/20 to-accent-blue/10 text-accent-blue rounded-full text-sm font-medium border border-accent-blue/30 hover:scale-105 transition-transform duration-300 cursor-default">
                  <Target className="w-4 h-4 inline mr-2 group-hover:rotate-12 transition-transform" />
                  Problem Solver
                </span>
                <span className="group px-6 py-3 bg-gradient-to-r from-accent-green/20 to-accent-green/10 text-accent-green rounded-full text-sm font-medium border border-accent-green/30 hover:scale-105 transition-transform duration-300 cursor-default">
                  <BookOpen className="w-4 h-4 inline mr-2 group-hover:rotate-12 transition-transform" />
                  Quick Learner
                </span>
                <span className="group px-6 py-3 bg-gradient-to-r from-accent-yellow/20 to-accent-yellow/10 text-accent-yellow rounded-full text-sm font-medium border border-accent-yellow/30 hover:scale-105 transition-transform duration-300 cursor-default">
                  <Sparkles className="w-4 h-4 inline mr-2 group-hover:rotate-12 transition-transform" />
                  Team Player
                </span>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <Card className="group bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-accent-blue/50 card-hover backdrop-blur-sm">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent-blue/10 rounded-full blur-xl group-hover:bg-accent-blue/20 transition-colors"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-accent-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-accent-blue">Education</h3>
                    </div>
                    <p className="text-gray-300 font-medium">B.Tech in Progress (2nd Year)</p>
                    <p className="text-gray-400 text-sm">ANITS College, Visakhapatnam</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-accent-green/50 card-hover backdrop-blur-sm">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent-green/10 rounded-full blur-xl group-hover:bg-accent-green/20 transition-colors"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent-green/20 rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 text-accent-green" />
                      </div>
                      <h3 className="text-xl font-semibold text-accent-green">Current Role</h3>
                    </div>
                    <p className="text-gray-300 font-medium">Data Visualization & Data Analyst Intern</p>
                    <p className="text-gray-400 text-sm">Inspire Tech Solutions</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-accent-yellow/50 card-hover backdrop-blur-sm">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent-yellow/10 rounded-full blur-xl group-hover:bg-accent-yellow/20 transition-colors"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent-yellow/20 rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-accent-yellow" />
                      </div>
                      <h3 className="text-xl font-semibold text-accent-yellow">Interests</h3>
                    </div>
                    <p className="text-gray-300 font-medium">AI Tools, Data Analytics, Web Development</p>
                    <p className="text-gray-400 text-sm">Automation & Real-world Problem Solving</p>
                  </div>
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
