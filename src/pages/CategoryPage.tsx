import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { topicsByCategory, categoryMeta, isCategoryKey, Topic } from '../data/topics';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const c = (category || '').toLowerCase();
  const validCategory = isCategoryKey(c);

  const meta = validCategory ? categoryMeta[c] : null;
  const topics = validCategory ? topicsByCategory[c] : [];

  if (!validCategory || !meta) {
    return (
      <div className="container-custom py-10">
        <h1 className="text-3xl font-extrabold text-neutral-900">Category not found</h1>
        <p className="mt-2 text-neutral-600">Go back and choose a valid category.</p>
        <Link to="/" className="mt-6 inline-block text-blue-600 hover:text-blue-800 no-underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-neutral-50">
      <section className="container-custom py-10">
        <h1 className="text-4xl font-extrabold text-neutral-900">{meta.title}</h1>
        <p className="mt-2 text-neutral-600 max-w-2xl">{meta.subtitle}</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t: Topic) => {
            const accent = t.accent || 'text-neutral-900';
            const bg = t.bg || 'bg-white';
            const border = t.border || 'border-neutral-200';

            return (
              <Link
                key={t.slug}
                to={`/category/${c}/${t.slug}`}
                className={[
                  'group rounded-2xl border p-6 shadow-sm transition',
                  'hover:shadow-md hover:-translate-y-[1px]',
                  'no-underline hover:no-underline',
                  bg,
                  border,
                ].join(' ')}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{t.icon}</div>

                  <div>
                    <div className={`text-xl font-extrabold ${accent}`}>
                      {t.title}
                    </div>
                    <div className="mt-1 text-sm text-neutral-700">
                      {t.description}
                    </div>
                  </div>
                </div>

                <div className={`mt-4 text-sm font-semibold ${accent}`}>
                  View topic →
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
