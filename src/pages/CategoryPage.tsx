import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Article } from '../types/article';
import { ArrowLeft } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { category, section } = useParams<{
    category?: string;
    section?: string;
  }>();

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Category not found</p>
      </div>
    );
  }

  const filteredArticles = articles.filter((article: Article) => {
    const matchCategory = article.category === category;
    const matchSection = section ? article.section === section : true;
    return matchCategory && matchSection;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-10">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center text-sm text-neutral-600 hover:text-primary-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-bold capitalize mb-2">
          {category}
        </h1>

        {section && (
          <p className="text-neutral-600 mb-8 capitalize">
            Section: {section}
          </p>
        )}

        {/* Articles */}
        {filteredArticles.length === 0 ? (
          <p className="text-neutral-500">
            No articles available.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold mb-2">
                  {article.title}
                </h2>

                <p className="text-sm text-neutral-600 mb-3">
                  {article.summary}
                </p>

                <div className="text-xs text-neutral-500 flex gap-4">
                  <span className="capitalize">{article.difficulty}</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
