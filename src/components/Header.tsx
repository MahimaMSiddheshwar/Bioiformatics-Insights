import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  BookOpen,
  Beaker,
  Microscope,
  Building,
  GraduationCap,
  Database
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Bioinformatics', href: '/category/bioinformatics', icon: Beaker },
    { label: 'Biotechnology', href: '/category/biotechnology', icon: Microscope },
    { label: 'Biopharma', href: '/category/biopharma', icon: Building },
    { label: 'Learning Paths', href: '/category/bioinformatics', icon: GraduationCap },
    { label: 'Glossary', href: '/glossary', icon: BookOpen }
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-biotech flex items-center justify-center text-white font-bold">
              BI
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold text-neutral-900">
                Bioinformatics<span className="font-light">Insights</span>
              </div>
              <div className="text-xs text-neutral-500">Scientific Learning Platform</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                to={href}
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-primary-600"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center relative"
          >
            <Search className="absolute left-3 w-4 h-4 text-neutral-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts, tools, biology..."
              className="pl-9 pr-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
          </form>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-neutral-200 bg-white">
            <form onSubmit={handleSearch} className="px-2">
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 rounded-md"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
