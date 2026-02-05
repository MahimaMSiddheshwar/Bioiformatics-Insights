import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { articles } from '../data/mockData';
import { Clock, User, Tag, X } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');

  const categories = [
    { id: '', name: 'All Categories' },
    { id: 'bioinformatics', name: 'Bioinformatics' },
    { id: 'biotechnology', name: 'Biotechnology' },
    { id: 'biopharma', name: 'Biopharma' }
  ];

  const difficulties = [
    { id: '', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesQuery = !query || 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.summary.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));

      const matchesCategory = !selectedCategory || article.category === selectedCategory;
      const matchesDifficulty = !selectedDifficulty || article.difficulty === selectedDifficulty;

      return matchesQuery && matchesCategory && matchesDifficulty;
    });
  }, [query, selectedCategory, selectedDifficulty]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    setSearchParams(params.toString());
  };

  const clearFilters = () => {
    setQuery('');
    setSelectedCategory('');
    setSelectedDifficulty('');
    setSearchParams('');
  };

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

  const hasActiveFilters = query || selectedCategory || selectedDifficulty;

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Search Articles
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Find articles by title, content, tags, or use filters to narrow down your search.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-neutral-500 hover:text-primary-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {difficulties.map(diff => (
                  <option key={diff.id} value={diff.id}>{diff.name}</option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-4 py-2 border border-neutral-300 rounded-lg text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 flex items-center justify-center"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto">
          {/* Results Count */}
          <div className="mb-6">
            {hasActiveFilters && (
              <p className="text-neutral-600">
                Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                {query && ` for "${query}"`}
              </p>
            )}
          </div>

          {/* Results Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <a
                  key={article.id}
                  href={`/article/${article.slug}`}
                  className="card p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                    <span className="text-sm text-neutral-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mb-3 line-clamp-3">{article.summary}</p>
                  
                  <div className="flex items-center text-xs text-neutral-500 mb-3">
                    <User className="w-3 h-3 mr-1" />
                    {article.author} • {article.publishDate}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded capitalize">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-neutral-400">
                      <Tag className="w-3 h-3 mr-1" />
                      {article.tags.length} tags
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">No articles found</h3>
              <p className="text-neutral-600 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={clearFilters}
                className="btn btn-primary"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;