// src/components/Glossary.tsx

import React, { useState, useMemo } from 'react';
import { glossaryTerms } from '../data/glossary';
import { GlossaryTerm } from '../types/glossary';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'term' | 'category'>('term');
  const [highlightMatches, setHighlightMatches] = useState(true);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(glossaryTerms.map(term => term.category)));
    const cats = ['All', ...uniqueCategories];
    return cats.sort();
  }, []);

  // Filter and sort terms
  const filteredAndSortedTerms = useMemo(() => {
    let filtered = glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort terms
    filtered.sort((a, b) => {
      if (sortBy === 'term') {
        return a.term.localeCompare(b.term);
      } else {
        return a.category.localeCompare(b.category) || a.term.localeCompare(b.term);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Highlight search matches
  const highlightText = (text: string) => {
    if (!highlightMatches || !searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? <mark key={index} className="bg-yellow-200 px-1 rounded">{part}</mark> : part
    );
  };

  // Group terms by first letter for navigation
  const termsByLetter = useMemo(() => {
    const groups: { [key: string]: GlossaryTerm[] } = {};
    filteredAndSortedTerms.forEach(term => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    return groups;
  }, [filteredAndSortedTerms]);

  // Get statistics
  const stats = useMemo(() => {
    const categoryCount = categories.length - 1; // Exclude 'All'
    const totalTerms = glossaryTerms.length;
    const displayedTerms = filteredAndSortedTerms.length;
    
    return { categoryCount, totalTerms, displayedTerms };
  }, [categories, glossaryTerms.length, filteredAndSortedTerms.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Glossary</h1>
              <p className="text-gray-600 mt-1">
                Comprehensive bioinformatics terminology reference
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{stats.totalTerms} terms</span>
              <span>•</span>
              <span>{stats.categoryCount} categories</span>
              <span>•</span>
              <span>{stats.displayedTerms} displayed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search terms
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search terms (DNA, RNA, Gene...)"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'term' | 'category')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="term">Term (A-Z)</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {/* Highlight Toggle */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="highlight"
              checked={highlightMatches}
              onChange={(e) => setHighlightMatches(e.target.checked)}
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label htmlFor="highlight" className="ml-2 text-sm text-gray-700">
              Highlight search matches
            </label>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      {Object.keys(termsByLetter).length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.keys(termsByLetter).sort().map(letter => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Terms Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredAndSortedTerms.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No terms found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filters
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(termsByLetter).map(([letter, terms]) => (
              <div key={letter} id={letter} className="scroll-mt-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                    {letter}
                  </span>
                  {letter}
                </h2>
                <div className="space-y-4">
                  {terms.map((term, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {highlightText(term.term)}
                        </h3>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                          {term.category}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {highlightText(term.definition)}
                      </p>
                      {term.related && term.related.length > 0 && (
                        <div className="border-t border-gray-100 pt-3">
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="font-medium">Related terms:</span>
                            <div className="flex flex-wrap gap-2 ml-2">
                              {term.related.map((relatedTerm, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 cursor-pointer transition-colors"
                                  onClick={() => setSearchTerm(relatedTerm)}
                                >
                                  {relatedTerm}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;