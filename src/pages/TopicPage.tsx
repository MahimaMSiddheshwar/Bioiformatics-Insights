import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { topicsByCategory, categoryMeta, CategoryKey } from '../data/topics';

const isCategoryKey = (v: string): v is CategoryKey =>
  ['bioinformatics', 'biotechnology', 'biopharma', 'qc'].includes(v);

const TopicPage: React.FC = () => {
  const { category, topic } = useParams<{ category: string; topic: string }>();

  const c = (category || '').toLowerCase();
  const t = (topic || '').toLowerCase();

  const validCategory = isCategoryKey(c);
  const topicMeta = useMemo(() => {
    if (!validCategory) return null;
    return topicsByCategory[c].find(x => x.slug.toLowerCase() === t) || null;
  }, [validCategory, c, t]);

  const filtered = useMemo(() => {
    return articles.filter(a =>
      a.category.toLowerCase() === c &&
      (a.section || '').toLowerCase() === t
    );
  }, [c, t]);

  if (!validCategory) {
    return (
      <div className="pt-24">
        <div className="container-custom">
          <h1 className="text-3xl font-extrabold text-neutral-900">Topic not found</h1>
          <Link to="/" className="mt-6 inline-block text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const catTitle = categoryMeta[c].title;

  return (
    <main className="pt-24 bg-neutral-50">
      <section className="container-custom py-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <Link to={`/category/${c}`} className="text-sm text-neutral-500 hover:text-neutral-800">
              ← Back to {catTitle}
            </Link>

            <h1 className="mt-3 text-4xl font-extrabold text-neutral-900">
              {topicMeta ? topicMeta.title : t.replace(/-/g, ' ')}
            </h1>

            <p className="mt-2 text-neutral-600 max-w-2xl">
              {topicMeta ? topicMeta.description : 'Articles in this topic.'}
            </p>
          </div>

          <Link
            to="/search"
            className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 hover:shadow-sm"
          >
            Search →
          </Link>
        </div>

        <div className="mt-10 grid gap-5">
          {filtered.map(a => (
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

          {filtered.length === 0 && (
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-neutral-600">
              No articles yet for this topic. Add articles by setting:
              <div className="mt-2 font-mono text-sm text-neutral-700">
                category: "{c}", section: "{t}"
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default TopicPage;
