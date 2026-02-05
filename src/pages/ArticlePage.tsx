import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleSection from '../components/ArticleSection';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <div className="p-8">Article not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Link to="/" className="text-sm text-blue-600 mb-6 inline-block">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-neutral-600 mb-8">{article.summary}</p>

      {article.sections.map((section, index) => (
        <ArticleSection key={index} section={section} />
      ))}
    </main>
  );
};

export default ArticlePage;
