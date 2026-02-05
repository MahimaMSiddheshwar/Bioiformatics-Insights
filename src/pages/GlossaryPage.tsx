import React, { useState, useMemo } from 'react';
import { glossaryTerms } from '../data/mockData';
import { Search, BookOpen, GraduationCap, Beaker } from 'lucide-react';

const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: '', name: 'All Categories', icon: BookOpen },
    { id: 'General', name: 'General', icon: BookOpen },
    { id: 'Sequence Analysis', name: 'Sequence Analysis', icon: Beaker },
    { id: 'Molecular Biology', name: 'Molecular Biology', icon: GraduationCap },
    { id: 'Algorithms', name: 'Algorithms', icon: BookOpen },
    { id: 'Statistics', name: 'Statistics', icon: BookOpen },
    { id: 'Genomics', name: 'Genomics', icon: Beaker }
  ];

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = !searchTerm || 
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || term.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const termsByLetter = useMemo(() => {
    const grouped: { [key: string]: typeof glossaryTerms } = {};
    
    filteredTerms.forEach(term => {
      const firstLetter = term.term[0].toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(term);
    });
    
    return grouped;
  }, [filteredTerms]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Bioinformatics Glossary
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Comprehensive definitions of key terms and concepts in bioinformatics, biotechnology, and computational biology.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search terms and definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-neutral-600">
            Found {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Terms List */}
        {filteredTerms.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            {Object.entries(termsByLetter)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([letter, terms]) => (
                <div key={letter} className="mb-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                    {letter}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {terms
                      .sort((a, b) => a.term.localeCompare(b.term))
                      .map((term, index) => (
                        <div key={`${term.term}-${index}`} className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg text-neutral-900">{term.term}</h3>
                            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                              {term.category}
                            </span>
                          </div>
                          <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                            {term.definition}
                          </p>
                          {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="flex items-center text-xs text-neutral-500">
                <BookOpen className="w-3 h-3 mr-1" />
                              Related: {term.relatedTerms.join(', ')}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-neutral-400" />
              </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">No terms found</h3>
            <p className="text-neutral-600 mb-4">
              Try adjusting your search or category filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              className="btn btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Quick Navigation */}
        {Object.keys(termsByLetter).length > 0 && (
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="font-semibold text-neutral-900 mb-4">Quick Navigation</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(termsByLetter)
                  .sort()
                  .map((letter) => (
                    <a
                      key={letter}
                      href={`#${letter}`}
                      className="w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-semibold hover:bg-primary-200 transition-colors"
                    >
                      {letter}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlossaryPage;