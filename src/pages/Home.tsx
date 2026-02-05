import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Beaker, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
      <section className="relative min-h-screen">
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              Master <span className="text-gradient-primary">Computational Biology</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-medium max-w-4xl">
              Enterprise-grade bioinformatics platform for next-generation scientists and researchers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link to="/category/bioinformatics" className="glass-morphism group p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="font-bold text-slate-900">Explore Genomics</h3>
              <p className="text-sm text-slate-600">Sequence analysis & interpretation</p>
            </Link>
            
            <Link to="/category/biotechnology" className="glass-morphism group p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-bold text-slate-900">Discover Biotechnology</h3>
              <p className="text-sm text-slate-600">Molecular techniques & applications</p>
            </Link>
            
            <Link to="/category/biopharma" className="glass-morphism group p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="font-bold text-slate-900">Master Biopharma</h3>
              <p className="text-sm text-slate-600">Drug development & quality control</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Trusted by Researchers Worldwide
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Advanced platform with enterprise-grade security and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-morphism rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
              <Database className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">50+ Articles</h3>
              <p className="text-slate-600">Expert-curated content</p>
            </div>
            
            <div className="glass-morphism rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
              <Beaker className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">6 Categories</h3>
              <p className="text-slate-600">Comprehensive coverage</p>
            </div>
            
            <div className="glass-morphism rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">12+ Glossary</h3>
              <p className="text-slate-600">Key concepts defined</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;