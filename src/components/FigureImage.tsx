// src/components/FigureImage.tsx
import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface FigureImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FigureImage: React.FC<FigureImageProps> = ({ src, alt, className = '' }) => {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`rounded-lg border-2 border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50 to-slate-50 flex flex-col items-center justify-center text-center px-6 py-12 ${className}`}
      >
        <ImageOff className="w-8 h-8 mb-3 text-emerald-400" aria-hidden="true" />
        <p className="font-semibold text-neutral-700">{alt}</p>
        <p className="text-sm text-neutral-500 mt-1">Illustration coming soon</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`rounded-lg shadow-md ${className}`}
      onError={() => setErrored(true)}
    />
  );
};

export default FigureImage;
