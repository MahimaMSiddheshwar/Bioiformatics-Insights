// src/pages/SectionPage.tsx

import { useParams, Link } from 'react-router-dom';
import { topics, Topic } from '../data/topics';
import { useScrollToTop } from '../hooks/useScrollToTop';

const SectionPage = () => {
  const { category, section } = useParams<{
    category: string;
    section: string;
  }>();
  
  useScrollToTop();

  // section === groupKey (A, B, C, D, E)
  const filtered = topics.filter(
    (t: Topic) =>
      t.category === category && t.groupKey === section
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">
        {filtered[0]?.groupTitle || 'Topics'}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t: Topic) => (
          <Link
            key={t.slug}
            to={`/category/${t.category}/${t.groupKey}/${t.slug}`}
            className="
              block rounded-xl border border-neutral-200 bg-white p-6
              no-underline hover:no-underline
              text-neutral-900
              hover:shadow-md transition
            "
          >
            <div className="text-2xl mb-3">{t.icon}</div>

            <h2 className="text-lg font-semibold">
              {t.title}
            </h2>

            <p className="mt-1 text-sm text-neutral-600">
              {t.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionPage;
