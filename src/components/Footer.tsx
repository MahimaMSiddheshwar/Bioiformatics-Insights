import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Microscope, Building, GraduationCap, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-semibold text-xl">
                Bioinformatics<span className="text-primary-400">Insights</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm">
              Bridging biology and data science to make bioinformatics accessible to students and professionals.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/bioinformatics" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Bioinformatics
                </Link>
              </li>
              <li>
                <Link to="/category/biotechnology" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Biotechnology
                </Link>
              </li>
              <li>
                <Link to="/category/biopharma" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Biopharma
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/glossary" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Glossary
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Learning Path
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  External Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Tools & Software
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Stay updated with the latest insights in bioinformatics and biotechnology.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2025 BioinformaticsInsights. Educational content for the bioinformatics community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;