import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-24">
      <div className="container-custom py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-2">
            Bioinformatics<span className="text-primary-400">Insights</span>
          </h3>
          <p className="text-sm">
            A learning-first platform for genomics, bioinformatics, and
            computational biology.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/category/bioinformatics">Bioinformatics</Link></li>
            <li><Link to="/category/biotechnology">Biotechnology</Link></li>
            <li><Link to="/category/biopharma">Biopharma</Link></li>
            <li><Link to="/glossary">Glossary</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-700 text-center py-4 text-xs">
        © {new Date().getFullYear()} BioinformaticsInsights
      </div>
    </footer>
  );
};

export default Footer;
