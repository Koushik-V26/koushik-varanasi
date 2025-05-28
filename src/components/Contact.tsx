import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Mail, Phone, Send, MessageCircle, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would send this data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent-green rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-accent-blue text-sm font-medium backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center font-poppins">
            Get In <span className="text-gradient bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-accent-blue">
              Let's Work Together
            </h3>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm always excited to collaborate on interesting projects and discuss 
              opportunities in data science, web development, and automation. Feel free 
              to reach out!
            </p>

            <div className="space-y-6">
              <Card className="group bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-accent-green/50 card-hover backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center relative">
                    <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-accent-green" />
                    </div>
                    <div>
                      <p className="text-accent-green font-medium">Email</p>
                      <p className="text-gray-300 text-sm">varanasikoushikkumar@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-accent-blue/50 card-hover backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center relative">
                    <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-accent-blue" />
                    </div>
                    <div>
                      <p className="text-accent-blue font-medium">Phone</p>
                      <p className="text-gray-300 text-sm">+91 8897628461</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-accent-yellow/50 card-hover backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center relative">
                    <div className="w-12 h-12 bg-accent-yellow/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-accent-yellow" />
                    </div>
                    <div>
                      <p className="text-accent-yellow font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/koushik-varanasi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm hover:text-accent-yellow transition-colors"
                      >
                        linkedin.com/in/koushik-varanasi
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-gray-400/50 card-hover backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center relative">
                    <div className="w-12 h-12 bg-gray-400/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 font-medium">GitHub</p>
                      <a 
                        href="https://github.com/Koushik-V26" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm hover:text-gray-400 transition-colors"
                      >
                        github.com/Koushik-V26
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-gradient-to-br from-dark-card to-dark-card/80 border-gray-700 hover:border-accent-green/30 backdrop-blur-sm">
              <CardHeader className="bg-accent-green/10 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-green/30 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5 text-accent-green" />
                  </div>
                  <CardTitle className="text-2xl text-accent-green">Send a Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-accent-green focus:ring-accent-green/20 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-accent-green focus:ring-accent-green/20 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or just say hello..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-accent-green focus:ring-accent-green/20 resize-none backdrop-blur-sm"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-green to-accent-blue hover:from-accent-green/80 hover:to-accent-blue/80 text-white py-3 rounded-full font-medium transition-all duration-300 glow-effect group"
                  >
                    <span>Send Message</span>
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
