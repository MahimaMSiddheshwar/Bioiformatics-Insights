// src/pages/LearningsPage.tsx

import React from 'react';
import LearningSection from '../components/LearningSection';
import { useScrollToTop } from '../hooks/useScrollToTop';

const LearningsPage = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="pt-20">
        <LearningSection />
      </div>
    </div>
  );
};

export default LearningsPage;
