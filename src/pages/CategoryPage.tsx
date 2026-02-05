import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/mockData';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const filtered = articles.filter(a => a.category === category);

  return (
    <main className="pt-28 container-custom">
      <Link to="/" className="text-sm text-neutral-500">← Back</Link>

      <h1 className="text-4xl font-bold capitalize mt-4 mb-8">{category}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(article => (
          <Link key={article.id} to={`/article/${article.slug}`} className="card p-6">
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-neutral-600">{article.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
