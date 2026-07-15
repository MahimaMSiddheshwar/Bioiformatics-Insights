// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-neutral-50 px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🧬</div>
        <h1 className="text-4xl font-bold text-neutral-900 mb-3">404</h1>
        <p className="text-lg text-neutral-600 mb-8">
          This page doesn't exist — it may have been moved or the link may be incorrect.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
