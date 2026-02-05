import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, BookOpen, Beaker, Microscope, Building, GraduationCap, Database, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const navigationItems = [
    {
      title: 'Bioinformatics',
      href: '/category/bioinformatics',
      icon: Beaker,
      description: 'Computational analysis'
    },
    {
      title: 'Biotechnology',
      href: '/category/biotechnology',
      icon: Microscope,
      description: 'Molecular techniques'
    },
    {
      title: 'Biopharma',
      href: '/category/biopharma',
      icon: Building,
      description: 'Drug development'
    },
    {
      title: 'Learning Paths',
      href: '/category/bioinformatics',
      icon: GraduationCap,
      description: 'Structured courses'
    },
    {
      title: 'Glossary',
      href: '/glossary',
      icon: BookOpen,
      description: 'Key concepts'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo with Scientific Identity */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">BI</span>
              </div>
              {/* Molecular ornament */}
              <div className="absolute -top-1 -right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-full bg-gradient-to-br from-accent-400 to-primary-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-neutral-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                Bioinformatics<span className="font-light">Insights</span>
              </span>
              <span className="text-xs text-neutral-500 uppercase tracking-wider opacity-75">Scientific Learning Platform</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group relative px-4 py-2 rounded-lg transition-all duration-200 hover:bg-primary-50 hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4 text-neutral-600 group-hover:text-primary-600 transition-colors" />
                  <div className="flex flex-col">
                    <span className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">{item.title}</span>
                    <span className="text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">{item.description}</span>
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Premium Search Bar */}
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
              <input
                type="text"
                placeholder="Search research, tools, concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="relative w-72 pl-12 pr-12 py-3 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-300 focus:bg-white transition-all duration-200 text-sm font-medium"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400">
                <Search />
              </div>
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Database className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Premium Mobile Menu with Glassmorphism */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-neutral-200/50">
            <div className="container-custom py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl opacity-10"></div>
                <input
                  type="text"
                  placeholder="Search research, tools, concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="relative w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all text-sm font-medium"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400">
                  <Search />
                </div>
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors text-sm font-medium"
                >
                  <Database className="w-4 h-4" />
                </button>
              </form>
              
              {/* Mobile Navigation Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-xl p-4 hover:bg-primary-50 hover:shadow-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                        <item.icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">{item.title}</div>
                        <div className="text-xs text-neutral-500">{item.description}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;