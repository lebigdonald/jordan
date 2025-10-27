import React, { useState } from 'react';
import { Code2, Menu, X, ArrowRight, CheckCircle2, Users, Zap, Shield, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Application',
    description: 'Real-time financial analytics platform with advanced data visualization and reporting capabilities.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
    stats: { users: '50K+', uptime: '99.9%' }
  },
  {
    id: 2,
    title: 'Healthcare Portal',
    category: 'Enterprise Software',
    description: 'HIPAA-compliant patient management system with telemedicine integration and secure data handling.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Django', 'MongoDB', 'WebRTC'],
    stats: { clients: '200+', satisfaction: '98%' }
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Mobile & Web',
    description: 'Full-stack marketplace with AI-powered recommendations and seamless payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Next.js', 'Stripe', 'AWS'],
    stats: { transactions: '1M+', revenue: '$50M+' }
  },
  {
    id: 4,
    title: 'Smart IoT Hub',
    category: 'IoT Solution',
    description: 'Centralized platform for managing smart home devices with machine learning automation.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Go', 'MQTT', 'TensorFlow'],
    stats: { devices: '100K+', integrations: '50+' }
  },
  {
    id: 5,
    title: 'SaaS Analytics',
    category: 'Business Intelligence',
    description: 'Cloud-based analytics suite with predictive modeling and custom dashboard creation.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Angular', 'Python', 'Redis', 'Kubernetes'],
    stats: { dataPoints: '1B+', speed: '10ms' }
  },
  {
    id: 6,
    title: 'EdTech Learning',
    category: 'Education Platform',
    description: 'Interactive learning management system with AI tutoring and progress tracking.',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    stats: { students: '75K+', courses: '500+' }
  }
];

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your unique business requirements.'
  },
  {
    icon: Zap,
    title: 'Cloud Architecture',
    description: 'Scalable, secure cloud infrastructure designed for performance and reliability.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security audits and implementation of industry-leading protection measures.'
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Extend your team with our experienced developers and technical specialists.'
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-emerald-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                DevForge
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
              <a href="#projects" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
              <a href="#services" className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
              <a href="#projects" className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">Projects</a>
              <a href="#contact" className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                  Trusted by 200+ Companies
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Building the Future,
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> One Line at a Time</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We transform ideas into powerful digital solutions. From startups to enterprises, we deliver exceptional software that drives growth and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                  <span className="font-semibold">View Our Work</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 font-semibold">
                  Schedule a Call
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">Team Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-3xl opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">What We Do Best</h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Our Success Stories</h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              Explore the innovative solutions we've delivered for our clients
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-emerald-600">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
                Excellence in Every Line of Code
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but drive real business value.
              </p>
              <div className="space-y-4">
                {[
                  'Agile development methodology for faster delivery',
                  'Dedicated project managers and technical leads',
                  '24/7 support and maintenance services',
                  'Transparent communication and regular updates',
                  'Cutting-edge technology stack and best practices'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-3xl opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Development process"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing Together</h2>
                <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                  Ready to transform your ideas into reality? Get in touch with our team and let's discuss your project.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-emerald-50">hello@devforge.io</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-emerald-50">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div className="text-emerald-50">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your project"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none text-slate-900"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-8 h-8 text-emerald-500" />
                <span className="text-xl font-bold">DevForge</span>
              </div>
              <p className="text-slate-400">
                Crafting exceptional digital experiences since 2015.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <div className="space-y-2 text-slate-400">
                <div className="hover:text-emerald-400 transition-colors cursor-pointer">About Us</div>
                <div className="hover:text-emerald-400 transition-colors cursor-pointer">Careers</div>
                <div className="hover:text-emerald-400 transition-colors cursor-pointer">Blog</div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <div className="space-y-2 text-slate-400">
                <div className="hover:text-emerald-400 transition-colors cursor-pointer">Web Development</div>
                <div className="hover:text-emerald-400 transition-colors cursor-pointer">Mobile Apps</div>
                <div className="hover:text-emerald-400 transition-colors cursor-pointer">Cloud Solutions</div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Github className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DevForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
