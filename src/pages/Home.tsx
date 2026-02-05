import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/mockData';
import { Article } from '../types';
import { Clock, User, Tag, Sparkles, Beaker, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.filter(article => !article.featured).slice(0, 6);

  const categories = [
    {
      id: 'bioinformatics',
      name: 'Bioinformatics',
      description: 'Computational analysis of biological data, genomics, and proteomics',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'biotechnology',
      name: 'Biotechnology',
      description: 'Genetic engineering, molecular biology, and bioprocessing',
      icon: '🧬',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'biopharma',
      name: 'Biopharma',
      description: 'Pharmaceutical biotechnology, drug development, and quality control',
      icon: '💊',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        {/* Enhanced Background with Scientific Elements */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="h-full w-full opacity-5">
            <div className="grid grid-cols-12 grid-rows-12 h-full">
              {[...Array(144)].map((_, i) => (
                <div 
                  key={i}
                  className={`border ${
                    i % 4 === 0 ? 'border-primary-200/30' : 
                    i % 4 === 1 ? 'border-accent-200/30' : 
                    'border-neutral-200/20'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Floating Molecular Elements */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-56 h-56 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-primary-400/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-16 w-44 h-44 bg-accent-400/15 rounded-full blur-2xl"></div>
          
          {/* DNA Helix Pattern */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-48">
            <div className="relative w-full h-full opacity-30">
              <div className="absolute inset-0 flex flex-col justify-center space-y-4">
                <div className="h-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"></div>
                <div className="h-3 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full"></div>
                <div className="h-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"></div>
                <div className="h-3 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center space-y-4 rotate-12">
                <div className="h-3 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                <div className="h-3 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full"></div>
                <div className="h-3 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                <div className="h-3 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black text-neutral-900 mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Bioinformatics</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed font-medium">
                Advanced computational biology platform for next-generation scientists and researchers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Beaker className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Research-Led Learning</h3>
                  <p className="text-neutral-600 mb-6">Evidence-based content from industry experts and academic researchers</p>
                </div>
                <Link to="/category/bioinformatics" className="group w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-2xl">
                  🧬 Explore Research Areas
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </div>
              
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Interactive Glossary</h3>
                  <p className="text-neutral-600 mb-6">500+ defined terms with visual explanations and examples</p>
                </div>
                <Link to="/glossary" className="group w-full bg-gradient-to-r from-accent-600 to-primary-600 text-white py-4 rounded-xl hover:from-accent-700 hover:to-primary-700 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-2xl">
                  📚 Browse Knowledge Base
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </div>
            </div>
            
            {/* Stats/Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center border border-primary-200">
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-neutral-700 font-medium">Core Fields</div>
                <div className="text-sm text-neutral-600">Bioinformatics, Biotechnology, Biopharma</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center border border-accent-200">
                <div className="text-3xl font-bold text-accent-600 mb-2">50+</div>
                <div className="text-neutral-700 font-medium">Expert Articles</div>
                <div className="text-sm text-neutral-600">Comprehensive learning paths</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center border border-neutral-200">
                <div className="text-3xl font-bold text-neutral-800 mb-2">12+</div>
                <div className="text-neutral-700 font-medium">Glossary Terms</div>
                <div className="text-sm text-neutral-600">Key concepts explained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-12 h-full">
            {[...Array(144)].map((_, i) => (
              <div 
                key={i}
                className={`border ${i % 3 === 0 ? 'border-primary-200' : i % 3 === 1 ? 'border-accent-200' : 'border-neutral-200'}`}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              🧬 Explore Learning Areas
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose your path through the exciting world of computational biology, from DNA sequencing to drug discovery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="card p-8 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group relative overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-neutral-600 text-base leading-relaxed">{category.description}</p>
                  
                  {/* Learning Path Indicator */}
                  <div className="mt-6 flex items-center text-sm text-neutral-500">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                    <span>6 Learning Sections</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-neutral-50 relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(14, 165, 233, 0.1) 35px, rgba(14, 165, 233, 0.1) 70px)`,
            }}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="flex items-center justify-center mb-12">
              <Sparkles className="w-8 h-8 text-accent-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                ⭐ Featured Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="card p-8 hover:shadow-xl transition-all hover:scale-[1.02] group relative overflow-hidden"
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    FEATURED
                  </div>
                  
                  <div className="flex items-start justify-between mb-6 mt-8">
                    <span className={`text-sm font-bold px-3 py-2 rounded-full ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty.toUpperCase()}
                    </span>
                    <span className="text-sm font-medium text-neutral-600 bg-neutral-100 px-3 py-2 rounded-full">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 line-clamp-3 text-base leading-relaxed">{article.summary}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-neutral-600 space-x-4">
                      <div className="flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        <span className="font-medium">{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{article.publishDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-accent-600 font-medium group-hover:text-accent-700">
                      Read More →
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-neutral-200">
                    <Tag className="w-4 h-4 mr-2 text-neutral-400" />
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full border border-primary-200 font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* View All Articles Button */}
            <div className="text-center mt-12">
              <Link to="/search" className="btn btn-primary text-lg px-8 py-4">
                📖 View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <section className="py-16 bg-white relative">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                📚 Recent Articles
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Continue your learning journey with our latest insights and discoveries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="card p-6 hover:shadow-lg transition-all hover:scale-[1.02] group relative overflow-hidden"
                >
                  {/* Category Indicator */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                  
                  <div className="flex items-start justify-between mb-4 mt-2">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty.toUpperCase()}
                    </span>
                    <span className="text-sm font-medium text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3 leading-relaxed">{article.summary}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-neutral-600">
                      <User className="w-4 h-4 mr-2" />
                      <span className="font-medium">{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.publishDate}</span>
                    </div>
                  </div>
                  
                  {/* Reading Progress Bar */}
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <div className="flex items-center text-xs text-neutral-500">
                      <div className="flex-1 h-1 bg-neutral-200 rounded-full mr-2">
                        <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span>Quick Read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {recentArticles.length >= 6 && (
              <div className="text-center mt-12">
                <Link to="/search" className="btn btn-primary text-lg px-8 py-4">
                  🔍 Explore All Articles
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            🚀 Ready to Master Bioinformatics?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners exploring the intersection of biology, data science, and computational innovation. 
            Your journey into the future of biological research starts here.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-lg mb-2">Structured Learning</h3>
              <p className="text-primary-200 text-sm">Step-by-step paths from basics to advanced topics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-lg mb-2">Practical Tools</h3>
              <p className="text-primary-200 text-sm">Real software and techniques used in industry</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Career Ready</h3>
              <p className="text-primary-200 text-sm">Skills that employers actively seek</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/glossary" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4 font-bold hover:scale-105 transition-transform">
              📖 Browse Glossary
            </Link>
            <Link to="/category/bioinformatics" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4 font-bold hover:scale-105 transition-transform">
              🧬 Start Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;