import React, { useMemo, useState } from 'react';
import { glossaryTerms } from '../data/glossary';
import { GlossaryTerm } from '../types/glossary';
import { useScrollToTop } from '../hooks/useScrollToTop';

const GlossaryPage: React.FC = () => {
  const [search, setSearch] = useState('');
  useScrollToTop();

  const filteredTerms = useMemo(() => {
    const q = search.toLowerCase();
    return glossaryTerms.filter((term: GlossaryTerm) =>
      term.term.toLowerCase().includes(q) ||
      term.definition.toLowerCase().includes(q)
    );
  }, [search]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};

    filteredTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(term);
    });

    return groups;
  }, [filteredTerms]);

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-10">
        <h1 className="text-3xl font-bold mb-6">Glossary</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search terms (DNA, RNA, Gene...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mb-8 px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
        />

        {/* Glossary */}
        {sortedLetters.length === 0 ? (
          <p className="text-neutral-500">No terms found.</p>
        ) : (
          sortedLetters.map((letter) => (
            <div key={letter} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">{letter}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {groupedTerms[letter]
                  .sort((a, b) => a.term.localeCompare(b.term))
                  .map((term, index) => (
                    <div
                      key={`${term.term}-${index}`}
                      className="bg-white border border-neutral-200 rounded-lg p-5 hover:shadow-sm transition"
                    >
                      <h3 className="font-semibold text-lg mb-2">
                        {term.term}
                      </h3>
                      <p className="text-sm text-neutral-700">
                        {term.definition}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GlossaryPage;
