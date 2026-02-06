import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-slate-900 text-slate-300">

      {/* Thin blue top line */}
      <div className="h-[1px] bg-blue-500/40" />

      <div className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-3 gap-6 text-sm">

        {/* Brand */}
        <div>
          <h3 className="text-white font-semibold mb-2">
            BioinformaticsInsights
          </h3>
          <p className="text-slate-400">
            A learning-first platform for genomics, bioinformatics,
            and computational biology.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-slate-400">
            <li>Bioinformatics</li>
            <li>Biotechnology</li>
            <li>Biopharma</li>
            <li>Glossary</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/MahimaMSiddheshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahima-siddheshwar-98a585196"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-slate-500 py-3">
        © 2026 BioinformaticsInsights
      </div>
    </footer>
  );
};

export default Footer;
