import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

        {/* LOGO */}
        <Link to="/" className="flex flex-col leading-tight no-underline">
          <span className="text-lg font-bold text-neutral-900">
            Bioinformatics<span className="text-emerald-600">Insights</span>
          </span>
          <span className="text-xs text-neutral-500">
            Scientific Learning Platform
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/category/bioinformatics" className="hover:text-emerald-600">🧬 Bioinformatics</Link>
          <Link to="/category/biotechnology" className="hover:text-purple-600">🔬 Biotechnology</Link>
          <Link to="/category/biopharma" className="hover:text-pink-600">💊 Biopharma</Link>
          <Link to="/learning-paths" className="hover:text-blue-600">🎓 Learning Paths</Link>
          <Link to="/glossary" className="hover:text-indigo-600">📘 Glossary</Link>
        </nav>

        {/* SEARCH */}
        <form
          onSubmit={handleSearch}
          className="relative hidden md:block"
        >
          <Search className="absolute left-3 top-2.5 text-neutral-400" size={16} />
          <input
            type="text"
            placeholder="Search concepts, tools, biology…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
          />
        </form>

      </div>
    </header>
  );
};

export default Header;
