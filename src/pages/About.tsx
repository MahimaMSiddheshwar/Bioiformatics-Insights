// src/pages/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Dna, Microscope, Pill, CheckCircle2, Rocket } from 'lucide-react';

const pillars = [
  {
    icon: Dna,
    title: 'Bioinformatics',
    description: 'Computation, omics, pipelines, and biological interpretation.',
  },
  {
    icon: Microscope,
    title: 'Biotechnology',
    description: 'Molecular biology, biochemistry, cell culture, and immunology.',
  },
  {
    icon: Pill,
    title: 'Biopharma',
    description: 'Drug discovery, development, regulation, and translation.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Control',
    description: 'Quality systems, audits, data integrity, and GxP.',
  },
];

const About: React.FC = () => {
  useScrollToTop();
  useDocumentTitle(
    'About',
    'Learn about BioinformaticsInsights, a scientific learning platform covering bioinformatics, biotechnology, biopharma, and quality control.'
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-emerald-50 to-white">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
          <Dna size={16} /> About This Project
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-6 mb-6 tracking-tight">
          Decoding life, one concept at a time
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-6">
          BioinformaticsInsights is a scientific learning platform built to make computational biology,
          biotechnology, biopharma, and quality control approachable to anyone learning the field —
          from students taking their first steps into genomics, to lab scientists moving into
          data analysis, to industry professionals navigating regulated drug development.
        </p>

        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-6">
          The platform organizes its material into structured topic pages spanning four core
          disciplines, a searchable glossary of scientific terminology, curated learning paths
          and external resources, and long-form articles that go deeper into specific concepts.
          Rather than scattering explanations across dozens of unrelated sources, the goal is a
          single, consistent reference that connects the computational, biological, and regulatory
          sides of modern life sciences.
        </p>

        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-12">
          This is an independent, ongoing project — content is actively expanded and refined over
          time, and the interactive tools on the homepage (like the live DNA sequence translator)
          reflect an intent to make abstract biological concepts tangible rather than purely textual.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 mb-6">What the site covers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 bg-white border-2 border-neutral-200 rounded-2xl"
            >
              <pillar.icon className="w-8 h-8 mb-3 text-emerald-600" />
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{pillar.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/learnings"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all"
          >
            Start Learning <Rocket size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
