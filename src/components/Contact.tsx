
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin } from 'lucide-react';

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
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 font-poppins">
          Get In <span className="text-gradient">Touch</span>
        </h2>

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
              <Card className="bg-dark-card border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📧</span>
                    <div>
                      <p className="text-accent-green font-medium">Email</p>
                      <p className="text-gray-300 text-sm">varanasikoushikkumar@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark-card border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📱</span>
                    <div>
                      <p className="text-accent-blue font-medium">Phone</p>
                      <p className="text-gray-300 text-sm">+91 8897628461</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark-card border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Linkedin className="w-8 h-8 mr-4 text-accent-blue" />
                    <div>
                      <p className="text-accent-yellow font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/koushik-varanasi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm hover:text-accent-blue transition-colors"
                      >
                        linkedin.com/in/koushik-varanasi
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-dark-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-accent-green">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
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
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-accent-blue"
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
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-accent-blue"
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
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-accent-blue resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent-green hover:bg-accent-green/80 text-white py-3 rounded-full font-medium transition-all duration-300 glow-effect"
                  >
                    Send Message
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
