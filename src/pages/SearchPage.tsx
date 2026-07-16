import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { articles } from '../data/articles';
import { Article } from '../types/article';
import { topics, categoryMeta, Topic } from '../data/topics';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  useDocumentTitle('Search', 'Search topics and articles across bioinformatics, biotechnology, biopharma, and quality control.');

  const filteredTopics = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();

    return topics.filter((topic: Topic) =>
      topic.title.toLowerCase().includes(lowerQuery) ||
      topic.description.toLowerCase().includes(lowerQuery) ||
      topic.groupTitle.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();

    return articles.filter((article: Article) => {
      const matchesTitle = article.title
        .toLowerCase()
        .includes(lowerQuery);

      const matchesSummary = article.summary
        .toLowerCase()
        .includes(lowerQuery);

      const matchesSections = article.sections.some(section =>
        section.text.toLowerCase().includes(lowerQuery) ||
        section.heading.toLowerCase().includes(lowerQuery)
      );

      return matchesTitle || matchesSummary || matchesSections;
    });
  }, [query]);

  const totalResults = filteredTopics.length + filteredArticles.length;

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-10">
        <h1 className="text-3xl font-bold mb-6">Search</h1>

        {/* Search Input */}
        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search biology topics, DNA, RNA, genomics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Results */}
        {query && (
          <>
            <p className="text-sm text-neutral-600 mb-6">
              {totalResults} result(s) found
            </p>

            {totalResults === 0 && (
              <p className="text-neutral-500">
                No matching topics or articles found.
              </p>
            )}
          </>
        )}

        {filteredTopics.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTopics.map(topic => (
                <Link
                  key={topic.slug}
                  to={`/category/${topic.category}/${topic.groupKey}/${topic.slug}`}
                  className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-3">
                        {topic.description}
                      </p>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                        {categoryMeta[topic.category].title}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {filteredArticles.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map(article => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-3">
                    {article.summary}
                  </p>

                  <div className="text-xs text-neutral-500 flex gap-4">
                    <span>{article.category}</span>
                    <span>{article.readTime}</span>
                    <span className="capitalize">{article.difficulty}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
