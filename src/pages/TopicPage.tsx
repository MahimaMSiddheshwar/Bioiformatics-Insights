import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { topicDetails } from '../data/topicDetails';
import { articles } from '../data/articles';
import { categoryMeta, isCategoryKey, topicsByCategory } from '../data/topics';

const TopicPage: React.FC = () => {
  const { category, section } = useParams<{ category: string; section: string }>();

  const c = (category || '').toLowerCase();
  const s = (section || '').toLowerCase();

  const validCategory = isCategoryKey(c);
  const meta = validCategory ? categoryMeta[c] : null;

  const topicMeta = validCategory
    ? (topicsByCategory[c] || []).find(t => t.slug.toLowerCase() === s) || null
    : null;

  const detail = useMemo(() => {
    return topicDetails.find(
      d => d.category.toLowerCase() === c && d.slug.toLowerCase() === s
    );
  }, [c, s]);

  const relatedArticles = useMemo(() => {
    return articles.filter(a =>
      a.category.toLowerCase() === c &&
      (a.section || '').toLowerCase() === s
    );
  }, [c, s]);

  if (!validCategory || !meta) {
    return (
      <div className="container-custom py-10">
        <h1 className="text-3xl font-extrabold text-neutral-900">Not found</h1>
        <Link to="/" className="mt-6 inline-block text-blue-600 no-underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-neutral-50">
      <section className="container-custom py-10">
        <Link
          to={`/category/${c}`}
          className="text-sm text-neutral-600 hover:text-neutral-900 no-underline"
        >
          ← Back to {meta.title}
        </Link>

        <h1 className="mt-3 text-4xl font-extrabold text-neutral-900">
          {detail?.title || topicMeta?.title || section}
        </h1>

        {(detail?.intro || topicMeta?.description) && (
          <p className="mt-2 text-neutral-700 max-w-3xl">
            {detail?.intro || topicMeta?.description}
          </p>
        )}

        {/* TOPIC LONG CONTENT */}
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-7">
          {detail ? (
            <>
              <div className="space-y-4 leading-relaxed text-neutral-800">
                {detail.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {detail.figures && detail.figures.length > 0 && (
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {detail.figures.map((f, idx) => (
                    <figure key={idx} className="rounded-xl border border-neutral-200 p-3">
                      <img
                        src={f.src}
                        alt={f.alt}
                        className="w-full rounded-lg"
                      />
                      {f.caption && (
                        <figcaption className="mt-2 text-sm text-neutral-600">
                          {f.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-neutral-700">
              <div className="font-semibold">No topic write-up yet.</div>
              <div className="mt-2 text-sm text-neutral-600">
                Add it in <span className="font-mono">src/data/topicDetails.ts</span> for:
                <span className="ml-2 font-mono text-neutral-800">
                  category: "{c}", slug: "{s}"
                </span>
              </div>
            </div>
          )}
        </div>

        {/* RELATED ARTICLES */}
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-neutral-900">Articles</h2>
          <p className="mt-1 text-neutral-600">Deeper reads for this topic.</p>

          <div className="mt-5 grid gap-5">
            {relatedArticles.map(a => (
              <Link
                key={a.id}
                to={`/article/${a.slug}`}
                className="rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-md transition no-underline"
              >
                <div className="text-xs text-neutral-500">
                  {a.readTime} • {a.difficulty} • {a.publishDate}
                </div>
                <div className="mt-2 text-xl font-bold text-neutral-900">{a.title}</div>
                <div className="mt-2 text-neutral-600">{a.summary}</div>
              </Link>
            ))}

            {relatedArticles.length === 0 && (
              <div className="rounded-xl border border-neutral-200 bg-white p-6 text-neutral-700">
                No articles yet for this topic.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TopicPage;
