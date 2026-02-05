import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/mockData';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <div className="pt-28 text-center">Article not found</div>;
  }

  return (
    <main className="pt-28 container-custom max-w-4xl">
      <Link to={`/category/${article.category}`} className="text-sm text-neutral-500">
        ← Back to {article.category}
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-6">{article.title}</h1>

      <div className="prose prose-lg">
        {article.content}
      </div>
    </main>
  );
};

export default ArticlePage;
