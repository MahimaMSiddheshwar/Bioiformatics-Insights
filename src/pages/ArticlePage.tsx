import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/mockData';
import { Clock, User, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Article Not Found</h1>
          <p className="text-neutral-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-8">
        {/* Navigation */}
        <Link 
          to={`/category/${article.category}`}
          className="inline-flex items-center text-neutral-600 hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${getDifficultyColor(article.difficulty)}`}>
                  {article.difficulty}
                </span>
                <span className="text-sm text-neutral-500">{article.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center text-neutral-600 mb-6 space-x-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.publishDate}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center flex-wrap gap-2 mb-8">
              <Tag className="w-4 h-4 text-neutral-400 mr-2" />
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Summary */}
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
              <p className="text-lg text-neutral-700 italic">{article.summary}</p>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap">
              {article.content}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-neutral-600">
                Category: <span className="font-medium capitalize">{article.category}</span> • 
                Section: <span className="font-medium capitalize">{article.section}</span>
              </div>
              <Link 
                to={`/category/${article.category}`}
                className="btn btn-secondary"
              >
                More in {article.category}
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;