import React from 'react';
import { Link } from 'react-router-dom';
import DNAHelix from '../components/DNAHelix';
import DNASequenceTranslator from '../components/DNASequenceTranslator';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import {
  Dna,
  Microscope,
  Pill,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Users,
  Route,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react';

const Home: React.FC = () => {
  useDocumentTitle();

  const features = [
    {
      icon: Dna,
      title: 'Bioinformatics',
      description: 'Master computational analysis of biological data with our comprehensive learning resources.',
      link: '/category/bioinformatics',
      gradient: 'from-emerald-50 to-white',
      borderColor: 'border-emerald-200',
      iconBg: 'bg-emerald-100'
    },
    {
      icon: Microscope,
      title: 'Biotechnology',
      description: 'Explore the intersection of biology and technology through hands-on tutorials.',
      link: '/category/biotechnology',
      gradient: 'from-purple-50 to-white',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-100'
    },
    {
      icon: Pill,
      title: 'Biopharma',
      description: 'Understand drug discovery, clinical trials, and pharmaceutical development.',
      link: '/category/biopharma',
      gradient: 'from-pink-50 to-white',
      borderColor: 'border-pink-200',
      iconBg: 'bg-pink-100'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Control',
      description: 'Learn quality assurance, validation, and compliance in life sciences.',
      link: '/category/qc',
      gradient: 'from-slate-50 to-white',
      borderColor: 'border-slate-200',
      iconBg: 'bg-slate-100'
    }
  ];

  const stats = [
    { number: '30+', label: 'Glossary Terms', icon: BookOpen },
    { number: '16+', label: 'Learning Resources', icon: GraduationCap },
    { number: '3', label: 'Expert Blogs', icon: Users },
    { number: '3', label: 'Learning Paths', icon: Route }
  ];

  const quickLinks = [
    { title: 'Start Learning', description: 'Begin your bioinformatics journey', icon: Rocket, link: '/learnings' },
    { title: 'Browse Glossary', description: 'Explore 30+ scientific terms', icon: BookOpen, link: '/glossary' },
    { title: 'Expert Insights', description: 'Read industry-leading blogs', icon: Sparkles, link: '/learnings#expert-blogs' },
    { title: 'Learning Paths', description: 'Follow structured curriculum', icon: Target, link: '/learnings#learning-paths' }
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
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
              <Dna size={16} /> Scientific Learning Platform
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

          <div className="flex justify-center mb-12">
            <Link
              to="/learnings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Learning <Rocket size={18} />
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
                  <feature.icon className="w-8 h-8 text-neutral-700" />
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
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
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
                  <link.icon className="w-8 h-8 mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
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
            <h2 className="inline-flex items-center gap-2 text-3xl font-bold text-neutral-900 mb-4">
              <Sparkles className="text-indigo-500" /> Expert Insights
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Learn from industry leaders and stay updated with the latest trends
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-indigo-600 shadow-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Expert Blogs Available
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Bioinformatics Lab */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Ready to Master Bioinformatics?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              Experience the power of computational biology with our interactive tools
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* DNA Helix Animation */}
            <div className="text-center">
              <div className="inline-block mb-6">
                <DNAHelix />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">3D DNA Visualization</h3>
              <p className="text-neutral-600 max-w-md mx-auto">
                Watch the elegant double helix structure rotate in real-time, representing the fundamental building block of life
              </p>
            </div>

            {/* DNA Sequence Translator */}
            <div>
              <DNASequenceTranslator />
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-neutral-600">Live Translation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-neutral-600">Real-time Animation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-neutral-600">Interactive Learning</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              {/* Start Learning Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer">
                <Rocket className="w-6 h-6 text-white" />
              </div>

              {/* Browse Glossary Link */}
              <Link
                to="/glossary"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 border-2 border-emerald-200"
              >
                Browse Glossary <BookOpen size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;