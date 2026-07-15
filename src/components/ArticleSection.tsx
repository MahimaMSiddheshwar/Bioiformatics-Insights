import React from 'react';
import { ArticleSection as Section } from '../types/article';
import FigureImage from './FigureImage';

const ArticleSection: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
      <p className="text-neutral-700 leading-relaxed mb-4">{section.text}</p>
      {section.image && (
        <FigureImage
          src={section.image}
          alt={section.heading}
          className="max-w-xl"
        />
      )}
    </section>
  );
};

export default ArticleSection;
