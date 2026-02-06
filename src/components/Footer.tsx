import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 mt-10">
      {/* subtle thin line (not thick) */}
      <div className="h-px bg-sky-500/40" />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          <div>
            <div className="text-xl font-extrabold tracking-tight">
              Bioinformatics<span className="text-emerald-400">Insights</span>
            </div>
            <p className="mt-2 text-sm text-slate-400 max-w-sm">
              A learning-first platform for genomics, bioinformatics, and computational biology.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold text-slate-200">Explore</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a className="hover:text-white no-underline" href="/category/bioinformatics">Bioinformatics</a></li>
              <li><a className="hover:text-white no-underline" href="/category/biotechnology">Biotechnology</a></li>
              <li><a className="hover:text-white no-underline" href="/category/biopharma">Biopharma</a></li>
              <li><a className="hover:text-white no-underline" href="/category/qc">QC</a></li>
              <li><a className="hover:text-white no-underline" href="/glossary">Glossary</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold text-slate-200">Connect</div>
            <div className="mt-2 flex items-center gap-4 text-sm">
              <a
                className="text-slate-300 hover:text-white no-underline"
                href="https://github.com/MahimaMSiddheshwar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="text-slate-300 hover:text-white no-underline"
                href="https://www.linkedin.com/in/mahima-siddheshwar-98a585196/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
          © 2026 BioinformaticsInsights
        </div>
      </div>
    </footer>
  );
};

export default Footer;
