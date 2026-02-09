// src/pages/TopicPage.tsx

import { useParams } from 'react-router-dom';
import { bioinformaticsDetails, biotechnologyDetails, biopharmaDetails, qcDetails } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';
import { useScrollToTop } from '../hooks/useScrollToTop';

const TopicPage = () => {
  const params = useParams<{ slug?: string }>();
  const slug = params.slug;
  useScrollToTop();

  if (!slug) return <p>Invalid topic</p>;

  const allDetails = [...bioinformaticsDetails, ...biotechnologyDetails, ...biopharmaDetails, ...qcDetails];
  const detail = allDetails.find(d => d.slug === slug);
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
          {slug.replace(/-/g, ' ')}
        </h1>

        <p className="mt-3 text-base md:text-lg text-neutral-600 leading-relaxed">
          {detail.summary}
        </p>

        <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
          {detail.content.map((p, idx) => (
            <p key={idx} className="text-base md:text-lg leading-relaxed text-gray-700">
              {p}
            </p>
          ))}
        </div>

        {detail.figures && detail.figures.length > 0 && (
          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Figures & Diagrams
            </h2>
            {detail.figures.map((figure, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-center text-sm text-gray-500 mb-2">
                  Loading: {figure.src}
                </div>
                <img 
                  src={figure.src} 
                  alt={figure.alt}
                  className="w-full max-w-2xl md:max-w-3xl mx-auto rounded-lg shadow-md"
                  loading="lazy"
                  onLoad={() => {
                    console.log(`Successfully loaded image: ${figure.src}`);
                  }}
                  onError={(e) => {
                    console.error(`Failed to load image: ${figure.src}`);
                    e.currentTarget.style.display = 'none';
                    const errorDiv = e.currentTarget.parentElement?.querySelector('.error-message') as HTMLElement;
                    if (errorDiv) {
                      errorDiv.style.display = 'block';
                    }
                  }}
                />
                <div className="error-message text-center text-red-500 text-sm" style={{display: 'none'}}>
                  Failed to load image: {figure.src}
                </div>
                <p className="text-sm text-gray-600 text-center italic mt-2">
                  {figure.caption}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TopicPage;
