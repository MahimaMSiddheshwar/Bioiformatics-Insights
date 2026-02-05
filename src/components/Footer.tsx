import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Microscope, Building, GraduationCap, Github, Linkedin, Database, BookOpen, Zap, TrendingUp, Users, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Learning Paths',
      icon: GraduationCap,
      items: [
        { name: 'Bioinformatics Fundamentals', href: '/category/bioinformatics/overview' },
        { name: 'Data Analysis Tools', href: '/category/bioinformatics/techniques' },
        { name: 'Genomic Applications', href: '/category/bioinformatics/applications' }
      ]
    },
    {
      title: 'Research Tools',
      icon: Database,
      items: [
        { name: 'BLAST Tutorial', href: '#' },
        { name: 'Sequence Analysis', href: '#' },
        { name: 'Protein Structure', href: '#' }
      ]
    },
    {
      title: 'Community',
      icon: Users,
      items: [
        { name: 'Research Papers', href: '#' },
        { name: 'Forums', href: '#' },
        { name: 'Webinars', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      description: 'View source code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      description: 'Professional network'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Scientific Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(14, 165, 233, 0.1) 50px,
            rgba(14, 165, 233, 0.05) 100px
          )`
        }}></div>
        
        {/* Floating Molecular Elements */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/3 w-40 h-40 bg-accent-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/5 w-36 h-36 bg-primary-700/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">BI</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">Bioinformatics<span className="text-primary-400">Insights</span></h3>
                  <p className="text-neutral-300 mb-4 leading-relaxed">Advanced scientific learning platform for computational biology and data-driven research</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">BI</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">Bioinformatics<span className="text-primary-400">Insights</span></h3>
                  <p className="text-neutral-300 mb-4 leading-relaxed">Advanced scientific learning platform for computational biology and data-driven research</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-400">50+</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">Expert Articles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-400">12+</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">Glossary Terms</div>
                 </div>
             </div>
           </div>
                  
                  {/* CTA */}
                  <Link to="/category/bioinformatics" className="group inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105 font-semibold">
                    Explore Learning Paths
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary-100/20 rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-bold text-white text-lg">{section.title}</h4>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.href}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-primary-600/20 transition-all duration-200"
                    >
                      <span className="text-neutral-300 group-hover:text-white font-medium">{item.name}</span>
                      <Zap className="w-4 h-4 text-neutral-400 group-hover:text-primary-400 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-8 h-8 text-primary-400" />
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Stay Updated</h4>
                  <p className="text-neutral-300 text-sm">Latest research and insights delivered weekly</p>
                </div>
              </div>
              
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold hover:scale-105"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-neutral-400 mb-2">Join our community of researchers and students</p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-primary-600/20 transition-all duration-200 group"
                      title={social.description}
                    >
                      <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-primary-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-neutral-400 text-sm">
              <p>© {currentYear} BioinformaticsInsights. Advanced scientific learning platform.</p>
              <p className="text-xs mt-1">Empowering the next generation of computational biologists</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-xs text-neutral-400">
                <TrendingUp className="w-4 h-4 mr-1 text-primary-400" />
                <span className="font-medium">Built with cutting-edge technology</span>
              </div>
              <div className="flex items-center text-xs text-neutral-400">
                <Database className="w-4 h-4 mr-1 text-accent-400" />
                <span className="font-medium">Powered by research data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;