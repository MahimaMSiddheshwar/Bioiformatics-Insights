import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: '🧬',
      title: 'Bioinformatics',
      description: 'Master computational analysis of biological data with our comprehensive learning resources.',
      link: '/category/bioinformatics',
      gradient: 'from-emerald-50 to-white',
      borderColor: 'border-emerald-200',
      iconBg: 'bg-emerald-100'
    },
    {
      icon: '🔬',
      title: 'Biotechnology',
      description: 'Explore the intersection of biology and technology through hands-on tutorials.',
      link: '/category/biotechnology',
      gradient: 'from-purple-50 to-white',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-100'
    },
    {
      icon: '💊',
      title: 'Biopharma',
      description: 'Understand drug discovery, clinical trials, and pharmaceutical development.',
      link: '/category/biopharma',
      gradient: 'from-pink-50 to-white',
      borderColor: 'border-pink-200',
      iconBg: 'bg-pink-100'
    },
    {
      icon: '✅',
      title: 'Quality Control',
      description: 'Learn quality assurance, validation, and compliance in life sciences.',
      link: '/category/qc',
      gradient: 'from-slate-50 to-white',
      borderColor: 'border-slate-200',
      iconBg: 'bg-slate-100'
    }
  ];

  const stats = [
    { number: '65+', label: 'Glossary Terms', icon: '📚' },
    { number: '25+', label: 'Learning Resources', icon: '🎓' },
    { number: '12+', label: 'Expert Blogs', icon: '👥' },
    { number: '6', label: 'Learning Paths', icon: '🛤️' }
  ];

  const quickLinks = [
    { title: 'Start Learning', description: 'Begin your bioinformatics journey', icon: '🚀', link: '/learnings' },
    { title: 'Browse Glossary', description: 'Explore 65+ scientific terms', icon: '📖', link: '/glossary' },
    { title: 'Expert Insights', description: 'Read industry-leading blogs', icon: '🌟', link: '/learnings#expert-blogs' },
    { title: 'Learning Paths', description: 'Follow structured curriculum', icon: '🎯', link: '/learnings#learning-paths' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-emerald-50 to-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-20 -right-40 w-60 h-60 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
              🧬 Scientific Learning Platform
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            <span className="block">Decode Life,</span>
            <span className="block text-emerald-600">One Insight at a Time</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master bioinformatics, biotechnology, and biopharma through 
            <span className="font-semibold text-emerald-600"> interactive learning paths</span>, 
            <span className="font-semibold text-purple-600"> expert insights</span>, and 
            <span className="font-semibold text-pink-600"> comprehensive resources</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/learnings"
              className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Learning 🚀
            </Link>
            <Link
              to="/glossary"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 border-2 border-emerald-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Browse Glossary 📚
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Explore Core Disciplines</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive coverage of bioinformatics, biotechnology, biopharma, and quality control
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group block p-8 bg-gradient-to-br border-2 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} ${feature.borderColor} ${feature.iconBg} w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                  Explore
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Learning Hub at a Glance</h2>
            <p className="text-xl text-neutral-600">
              Comprehensive resources designed for your learning success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-neutral-200">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.number}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Quick Start</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Get started immediately with these curated learning pathways
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300"
              >
                <div className="text-center">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{link.icon}</div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Insights Preview */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">🌟 Expert Insights</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Learn from industry leaders and stay updated with the latest trends
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-indigo-600 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5c0 1.146 1.646 2.085 3 1.085 1.465 1.295 2.085 2.085 0 1.925-2.665 3-3 0 .804 1.065 1.539 2.531 2.531 0 1.638-1.336-3-3 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 8.75l-3-3.5m3.5 0l-3 3.5M8.25 5.25l-3-3.5m3.5 0l-3 3.5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 7.5l-6.375-6.937m6.375 0l-6.375 6.937M20.25 4l-6.375-6.937m6.375 0l-6.375 6.937" />
              </svg>
              Expert Blogs Available
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master Bioinformatics?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners exploring the intersection of biology and computation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/learnings"
              className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Learning Now
            </Link>
            <Link
              to="/glossary"
              className="px-8 py-4 bg-emerald-800 text-white font-semibold rounded-xl hover:bg-emerald-900 transition-all duration-300 border-2 border-emerald-600"
            >
              Browse Glossary
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;