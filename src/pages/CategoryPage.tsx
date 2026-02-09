import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { topics, categoryMeta, isCategoryKey, Topic, GroupKey } from '../data/topics';
import { useScrollToTop } from '../hooks/useScrollToTop';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  useScrollToTop();

  if (!category || !isCategoryKey(category)) {
    return <div className="p-8">Invalid category</div>;
  }

  const categoryTopics = topics.filter(t => t.category === category);

  const grouped = categoryTopics.reduce<Record<GroupKey, Topic[]>>(
    (acc, t) => {
      acc[t.groupKey] = acc[t.groupKey] || [];
      acc[t.groupKey].push(t);
      return acc;
    },
    {} as Record<GroupKey, Topic[]>
  );

  const orderedGroups: GroupKey[] = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">{categoryMeta[category].title}</h1>
        <p className="mt-2 text-neutral-600">
          {categoryMeta[category].subtitle}
        </p>
      </header>

      {orderedGroups.map(groupKey => {
        const items = grouped[groupKey];
        if (!items || items.length === 0) return null;

        return (
          <section key={groupKey} className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">
              {items[0].groupTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(t => (
                <Link
                  key={t.slug}
                  to={`/category/${t.category}/${t.groupKey}/${t.slug}`}
                  className="rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-md transition"
                >
                  <div className="text-2xl">{t.icon}</div>
                  <h3 className="mt-3 font-semibold text-lg">{t.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {t.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default CategoryPage;
