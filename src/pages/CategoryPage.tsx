import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { articles } from '../data/articles';
import { topicsByCategory, categoryMeta, isCategoryKey } from '../data/topics';

const CategoryPage: React.FC = () => {
  const { category, section } = useParams<{ category: string; section?: string }>();

  const c = (category || '').toLowerCase();
  const validCategory = isCategoryKey(c);

  const meta = validCategory ? categoryMeta[c] : null;
  const topics = validCategory ? topicsByCategory[c] : [];

  const sectionMeta = useMemo(() => {
    if (!section) return null;
    return topics.find(t => t.slug.toLowerCase() === section.toLowerCase()) || null;
  }, [section, topics]);

  const sectionArticles = useMemo(() => {
    if (!section) return [];
    return articles.filter(a =>
      a.category.toLowerCase() === c &&
      (a.section || '').toLowerCase() === section.toLowerCase()
    );
  }, [c, section]);

  if (!validCategory || !meta) {
    return (
      <div className="container-custom py-10">
        <h1 className="text-3xl font-extrabold text-neutral-900">Category not found</h1>
        <p className="mt-2 text-neutral-600">Go back and choose a valid category.</p>
        <Link to="/" className="mt-6 inline-block text-blue-600 hover:text-blue-800">
          ← Back to Home
        </Link>
      </div>
    );
  }

  // ✅ VIEW 1: /category/:category  → show topics list
  if (!section) {
    return (
      <main className="bg-neutral-50">
        <section className="container-custom py-10">
          <h1 className="text-4xl font-extrabold text-neutral-900">{meta.title}</h1>
          <p className="mt-2 text-neutral-600 max-w-2xl">{meta.subtitle}</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map(t => (
              <Link
                key={t.slug}
                to={`/category/${c}/${t.slug}`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{t.icon}</div>
                  <div>
                    <div className="text-xl font-bold text-neutral-900 group-hover:text-neutral-950">
                      {t.title}
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">{t.description}</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-blue-600 group-hover:text-blue-800">
                  View topic →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    );
  }

  // ✅ VIEW 2: /category/:category/:section → list articles for that section
  return (
    <main className="bg-neutral-50">
      <section className="container-custom py-10">
        <Link to={`/category/${c}`} className="text-sm text-neutral-500 hover:text-neutral-800">
          ← Back to {meta.title}
        </Link>

        <h1 className="mt-3 text-4xl font-extrabold text-neutral-900">
          {sectionMeta ? sectionMeta.title : section.replace(/-/g, ' ')}
        </h1>

        <p className="mt-2 text-neutral-600 max-w-2xl">
          {sectionMeta ? sectionMeta.description : 'Articles in this topic.'}
        </p>

        <div className="mt-8 grid gap-5">
          {sectionArticles.map(a => (
            <Link
              key={a.id}
              to={`/article/${a.slug}`}
              className="rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-md transition"
            >
              <div className="text-xs text-neutral-500">
                {a.readTime} • {a.difficulty} • {a.publishDate}
              </div>
              <div className="mt-2 text-xl font-bold text-neutral-900">{a.title}</div>
              <div className="mt-2 text-neutral-600">{a.summary}</div>
            </Link>
          ))}

          {sectionArticles.length === 0 && (
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-neutral-700">
              No articles yet in this topic.
              <div className="mt-2 text-sm text-neutral-600">
                Add articles by setting:
                <span className="ml-2 font-mono text-neutral-800">
                  category: "{c}", section: "{section.toLowerCase()}"
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
