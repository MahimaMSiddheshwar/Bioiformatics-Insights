import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-semibold text-xl text-neutral-900">
              Bioinformatics<span className="text-primary-600">Insights</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/category/bioinformatics" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Bioinformatics
            </Link>
            <Link to="/category/biotechnology" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Biotechnology
            </Link>
            <Link to="/category/biopharma" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Biopharma
            </Link>
            <Link to="/glossary" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Glossary
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <div className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400">
                <Search />
              </div>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <div className="space-y-3">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <div className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400">
                  <Search />
                </div>
              </form>
              
              <Link 
                to="/category/bioinformatics" 
                className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Bioinformatics
              </Link>
              <Link 
                to="/category/biotechnology" 
                className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Biotechnology
              </Link>
              <Link 
                to="/category/biopharma" 
                className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Biopharma
              </Link>
              <Link 
                to="/glossary" 
                className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Glossary
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;