// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const navBase =
  'inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors ' +
  'no-underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500';

const Header: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    // setQuery(''); // optional: clear after search
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link to="/" className="flex flex-col leading-tight no-underline hover:no-underline">
          <span className="text-lg font-extrabold text-neutral-900 tracking-tight">
            Bioinformatics<span className="text-emerald-600">Insights</span>
          </span>
          <span className="text-xs font-medium text-neutral-500">Scientific Learning Platform</span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink
            to="/category/bioinformatics"
            className={({ isActive }) =>
              `${navBase} ${
                isActive ? 'text-emerald-700 bg-emerald-50' : 'text-neutral-700 hover:text-emerald-700'
              }`
            }
          >
            <span className="text-base">🧬</span>
            <span className="text-[15px] font-extrabold">Bioinformatics</span>
          </NavLink>

          <NavLink
            to="/category/biotechnology"
            className={({ isActive }) =>
              `${navBase} ${
                isActive ? 'text-purple-700 bg-purple-50' : 'text-neutral-700 hover:text-purple-700'
              }`
            }
          >
            <span className="text-base">🔬</span>
            <span className="text-[15px] font-extrabold">Biotechnology</span>
          </NavLink>

          <NavLink
            to="/category/biopharma"
            className={({ isActive }) =>
              `${navBase} ${
                isActive ? 'text-pink-700 bg-pink-50' : 'text-neutral-700 hover:text-pink-700'
              }`
            }
          >
            <span className="text-base">💊</span>
            <span className="text-[15px] font-extrabold">Biopharma</span>
          </NavLink>

          {/* QC tab (you already have category key "qc") */}
          <NavLink
            to="/category/qc"
            className={({ isActive }) =>
              `${navBase} ${
                isActive ? 'text-slate-800 bg-slate-100' : 'text-neutral-700 hover:text-slate-800'
              }`
            }
          >
            <span className="text-base">✅</span>
            <span className="text-[15px] font-extrabold"> QC</span>
          </NavLink>

          {/* Learning Paths: only keep if you actually have /learning-paths route */}
          <NavLink
            to="/learnings"
            className={({ isActive }) =>
              `${navBase} ${
                isActive ? 'text-blue-700 bg-blue-50' : 'text-neutral-700 hover:text-blue-700'
              }`
            }
          >
            <span className="text-base">🎓</span>
            <span className="text-[15px] font-extrabold">Learnings</span>
          </NavLink>

          <NavLink
            to="/glossary"
            className={({ isActive }) =>
              `${navBase} ${
                isActive ? 'text-indigo-700 bg-indigo-50' : 'text-neutral-700 hover:text-indigo-700'
              }`
            }
          >
            <span className="text-base">📘</span>
            <span className="text-[15px] font-extrabold">Glossary</span>
          </NavLink>
        </nav>

        {/* SEARCH */}
        <form onSubmit={handleSearch} className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 text-neutral-400" size={16} />
          <input
            type="text"
            placeholder="Search concepts, tools, biology…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm rounded-full border border-neutral-300 bg-white
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
