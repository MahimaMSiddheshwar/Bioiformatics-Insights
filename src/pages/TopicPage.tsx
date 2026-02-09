// src/pages/TopicPage.tsx

import { useParams } from 'react-router-dom';
import { bioinformaticsDetails, biotechnologyDetails, biopharmaDetails, qcDetails } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';

const TopicPage = () => {
  const params = useParams<{ slug?: string }>();
  const slug = params.slug;

  if (!slug) return <p>Invalid topic</p>;

  const allDetails = [...bioinformaticsDetails, ...biotechnologyDetails, ...biopharmaDetails, ...qcDetails];
  const detail = allDetails.find(d => d.slug === slug);
  if (!detail) return <p>Topic not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6">
      <Breadcrumbs />

      <h1 className="text-3xl font-bold mt-4">
        {slug.replace(/-/g, ' ')}
      </h1>

      <p className="mt-3 text-lg text-neutral-600">
        {detail.summary}
      </p>

<div className="mt-6 space-y-4">
        {detail.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {detail.figures && detail.figures.length > 0 && (
        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold">Figures & Diagrams</h2>
          {detail.figures.map((figure, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-center text-sm text-gray-500 mb-2">
                Loading: {figure.src}
              </div>
              <img 
                src={figure.src} 
                alt={figure.alt}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
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
              <p className="text-sm text-gray-600 text-center italic">
                {figure.caption}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicPage;
