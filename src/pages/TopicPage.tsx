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
    </div>
  );
};

export default TopicPage;
