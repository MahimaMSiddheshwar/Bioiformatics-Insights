// src/pages/LearningsPage.tsx

import React from 'react';
import LearningSection from '../components/LearningSection';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const LearningsPage = () => {
  useScrollToTop();
  useDocumentTitle('Learning Resources', 'Curated courses, tutorials, videos, books, tools, and learning paths for bioinformatics and related fields.');

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="pt-20">
        <LearningSection />
      </div>
    </div>
  );
};

export default LearningsPage;
