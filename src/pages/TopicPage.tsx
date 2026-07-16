// src/pages/TopicPage.tsx

import { useParams } from 'react-router-dom';
import { bioinformaticsDetails, biotechnologyDetails, biopharmaDetails, qcDetails, topics } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';
import FigureImage from '../components/FigureImage';
import TopicContent from '../components/TopicContent';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const TopicPage = () => {
  const params = useParams<{ slug?: string }>();
  const slug = params.slug;
  useScrollToTop();

  const allDetails = [...bioinformaticsDetails, ...biotechnologyDetails, ...biopharmaDetails, ...qcDetails];
  const detail = slug ? allDetails.find(d => d.slug === slug) : undefined;
  const topic = slug ? topics.find(t => t.slug === slug) : undefined;

  useDocumentTitle(topic?.title, detail?.summary);

  if (!slug) return <p>Invalid topic</p>;
  if (!detail) return <p>Topic not found</p>;

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12" id="main-content">
        <Breadcrumbs />

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 md:mt-6">
          {topic?.title ?? slug.replace(/-/g, ' ')}
        </h1>

        <p className="mt-3 text-base md:text-lg text-neutral-600 leading-relaxed">
          {detail.summary}
        </p>

        <div className="prose max-w-none mt-6 md:mt-8 space-y-4 md:space-y-6">
          <TopicContent content={detail.content} />
        </div>

        {detail.figures && detail.figures.length > 0 && (
          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Figures & Diagrams
            </h2>
            {detail.figures.map((figure, idx) => (
              <div key={idx} className="space-y-4">
                <FigureImage
                  src={figure.src}
                  alt={figure.alt}
                  className="w-full max-w-2xl md:max-w-3xl mx-auto"
                />
                {figure.caption && (
                  <p className="text-sm text-gray-600 text-center italic mt-2">
                    {figure.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TopicPage;
