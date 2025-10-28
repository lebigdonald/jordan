import React, {useState} from 'react';
import {
    ArrowRight,
    Award,
    CheckCircle2,
    Clock,
    Code2,
    Globe,
    Mail,
    MapPin,
    Menu,
    Phone,
    Shield,
    Users,
    X,
    Zap
} from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'SaaS Microservices Platform',
        category: 'Enterprise SaaS',
        description: 'Microservice-based architecture powering SaaS products for 100K+ global users with 40% faster page loads through optimized React components.',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
        stats: {users: '100K+', performance: '40% faster'},
        client: 'TechNova Global'
    },
    {
        id: 2,
        title: 'Global CRM System',
        category: 'Enterprise Software',
        description: 'Large-scale CRM system serving clients across 12 countries with GraphQL API integration, reducing server load by 30%.',
        image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'GraphQL', 'Node.js', 'AWS Lambda', 'MongoDB'],
        stats: {countries: '12', efficiency: '30% less load'},
        client: 'CloudSync Solutions'
    },
    {
        id: 3,
        title: 'AI E-Commerce Chatbot',
        category: 'AI & E-commerce',
        description: 'Intelligent chatbot using OpenAI API for personalized shopping assistance, increasing customer retention by 25%.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['OpenAI API', 'Node.js', 'React', 'Stripe', 'WebSocket'],
        stats: {retention: '+25%', response: 'Real-time'},
        client: 'Open Source'
    },
    {
        id: 4,
        title: 'Remote Task Manager',
        category: 'Productivity',
        description: 'Cross-platform productivity tool with real-time collaboration and offline mode using IndexedDB. Featured on Product Hunt Top 10.',
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'IndexedDB', 'WebSocket', 'PWA'],
        stats: {featured: 'Product Hunt', mode: 'Offline'},
        client: 'Open Source'
    },
    {
        id: 5,
        title: 'Cloud Image Optimizer API',
        category: 'Cloud Infrastructure',
        description: 'Serverless API for compressing and caching images, reducing bandwidth usage by 50% using AWS Lambda and CloudFront.',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['AWS Lambda', 'CloudFront', 'Node.js', 'Sharp'],
        stats: {bandwidth: '-50%', speed: 'Instant'},
        client: 'Open Source'
    },
    {
        id: 6,
        title: 'Enterprise Analytics Dashboard',
        category: 'Business Intelligence',
        description: 'Internal dashboards and analytics tools with 95% test coverage for enterprise customers with automated testing.',
        image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Angular', 'Node.js', 'MySQL', 'Jenkins', 'Docker'],
        stats: {coverage: '95%', testing: 'Automated'},
        client: 'Innovatech Systems'
    }
];

const services = [
    {
        icon: Code2,
        title: 'Full Stack Development',
        description: 'End-to-end web applications using React, Node.js, TypeScript and modern cloud platforms.'
    },
    {
        icon: Zap,
        title: 'Cloud & DevOps',
        description: 'AWS, GCP, Azure deployment with Docker, Kubernetes, and CI/CD pipelines for scalability.'
    },
    {
        icon: Shield,
        title: 'API Development',
        description: 'RESTful and GraphQL APIs with microservices architecture for enterprise-grade applications.'
    },
    {
        icon: Users,
        title: 'Remote Team Support',
        description: 'Experienced remote collaboration across time zones with agile methodology and mentoring.'
    }
];

const certifications = [
    'AWS Certified Developer - Associate',
    'Microsoft Azure Developer Associate',
    'Scrum Alliance Certified ScrumMaster'
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
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Code2 className="w-8 h-8 text-emerald-600"/>
                            <span
                                className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                SouraTech
              </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home"
                               className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
                            <a href="#services"
                               className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
                            <a href="#projects"
                               className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Projects</a>
                            <a href="#contact"
                               className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                                <span><a href="#contact">Get Started</a></span>
                            </button>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-200">
                        <div className="px-4 py-4 space-y-3">
                            <a href="#home"
                               className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
                            <a href="#services"
                               className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
                            <a href="#projects"
                               className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">Projects</a>
                            <a href="#contact"
                               className="block text-slate-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
                            <button
                                className="w-full px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg">
                                <span><a href="#contact">Get Started</a></span>
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <section id="home" className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                  Based in France • Serving Global Clients
                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                                World-Class Software,
                                <span
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Built in Europe</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Senior Full Stack Developer with 7+ years building scalable web and cloud applications
                                for international companies. From San Francisco to London to Berlin, delivering
                                excellence remotely from France.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                                    <span className="font-semibold">
                                        <a href="#projects">View Portfolio</a></span>
                                    <ArrowRight className="w-5 h-5"/>
                                </button>
                                <button
                                    className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 font-semibold">
                                    <span><a href="#contact">Schedule Consultation</a></span>
                                </button>
                            </div>
                            <div className="grid grid-cols-3 gap-6 pt-4">
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">7+</div>
                                    <div className="text-sm text-slate-600">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">100K+</div>
                                    <div className="text-sm text-slate-600">Active Users</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">12</div>
                                    <div className="text-sm text-slate-600">Countries Served</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-3xl opacity-20"></div>
                            <img
                                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt="Software development in France"
                                className="relative rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span
                            className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Core Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">What I Specialize In</h2>
                        <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
                            Full stack development with modern technologies and cloud platforms
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
                            >
                                <div
                                    className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-white"/>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span
                            className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Featured Projects</h2>
                        <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
                            Real applications built for international clients and open source community
                        </p>
                    </div>

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
                    <span
                        className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                    <span
                        className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {project.client}
                    </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx}
                                                  className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
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

            <section id="proves" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Why Work With Me</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
                                Proven Track Record of Excellence
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                7+ years of experience building scalable applications for companies across USA, UK, and
                                Europe. Combining technical expertise with remote-first collaboration practices.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    'Reduced page load time by 40% through React optimization',
                                    'Built microservices serving 100K+ global users',
                                    'Cut server load by 30% with GraphQL migration',
                                    'Mentored teams and improved code quality',
                                    'Available across major time zones with 1 Gbps fiber'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"/>
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Award className="w-6 h-6 text-emerald-600"/>
                                    <h3 className="font-bold text-slate-900">Certifications</h3>
                                </div>
                                <div className="space-y-2">
                                    {certifications.map((cert, idx) => (
                                        <div key={idx} className="text-sm text-slate-600 flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                                            <span>{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-3xl opacity-20"></div>
                            <img
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt="Remote development workspace"
                                className="relative rounded-2xl shadow-2xl"
                            />
                            <div
                                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                                <div className="flex items-center space-x-3">
                                    <Clock className="w-8 h-8 text-emerald-600"/>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">24/7</div>
                                        <div className="text-sm text-slate-600">Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great
                                    Together</h2>
                                <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                                    Ready to bring your project to life? Whether you need a full-stack developer, cloud
                                    architect, or technical consultant, I'm here to help.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Mail className="w-6 h-6"/>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Email</div>
                                            <div className="text-emerald-50">ibrasoura@yahoo.com</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Phone className="w-6 h-6"/>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Phone</div>
                                            <div className="text-emerald-50"><a href="tel:+33743647877">+33743647877</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <MapPin className="w-6 h-6"/>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Location</div>
                                            <div className="text-emerald-50">France, Europe</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div
                                            className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <Globe className="w-6 h-6"/>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Working Hours</div>
                                            <div className="text-emerald-50">Remote • All Time Zones</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8">
                                <form className="space-y-4" action="https://formspree.io/f/xovpenen" method="POST">
                                    <div>
                                        <input type="text" placeholder="Your Name" name="name" required
                                               className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900"/>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Your Email" name="_replyto" required
                                               className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900"/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Company Name" name="company"
                                               className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900"/>
                                    </div>
                                    <div>
                                        <textarea placeholder="Tell me about your project" rows={4} name="message" required
                                                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none text-slate-900"></textarea>
                                    </div>
                                    <input type="hidden" name="_subject" value="SouraTech Contact Form"/>
                                    <input type="hidden" name="_next" value="https://soura-tech.vercel.app"/>
                                    <button type="submit"
                                            className="w-full px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold">
                                        Send Message
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Code2 className="w-8 h-8 text-emerald-500"/>
                                <span className="text-xl font-bold">SouraTech</span>
                            </div>
                            <p className="text-slate-400">
                                World-class software development from France to the world.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Tech Stack</h3>
                            <div className="space-y-2 text-slate-400">
                                <div>React & Next.js</div>
                                <div>Node.js & TypeScript</div>
                                <div>PostgreSQL & MongoDB</div>
                                <div>AWS, GCP, Azure</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Services</h3>
                            <div className="space-y-2 text-slate-400">
                                <div>Full Stack Development</div>
                                <div>API & Microservices</div>
                                <div>Cloud Architecture</div>
                                <div>DevOps & CI/CD</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Quick Links</h3>
                            <div className="space-y-2 text-slate-400">
                                <div className="hover:text-emerald-400 transition-colors cursor-pointer">
                                    <a href="#projects">Portfolio</a>
                                </div>
                                <div className="hover:text-emerald-400 transition-colors cursor-pointer">
                                    <a href="#proves">Certifications</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                        <p>&copy; 2024 SouraTech - Ibrahima Sourabie. Senior Full Stack Developer based in France.</p>
                    </div>
                </div>
            </footer>
        </div>
);
}

export default App;
