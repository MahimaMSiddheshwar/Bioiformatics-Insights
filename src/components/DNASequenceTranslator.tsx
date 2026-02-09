import React, { useState, useEffect } from 'react';

interface TranslationResult {
  rna: string;
  protein: string;
  codons: string[];
  aminoAcids: string[];
}

// Genetic code mapping - moved outside component to prevent re-creation
const codonToAminoAcid: { [key: string]: string } = {
    'UUU': 'Phe', 'UUC': 'Phe', 'UUA': 'Leu', 'UUG': 'Leu',
    'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser',
    'UAU': 'Tyr', 'UAC': 'Tyr', 'UAA': 'STOP', 'UAG': 'STOP',
    'UGU': 'Cys', 'UGC': 'Cys', 'UGA': 'STOP', 'UGG': 'Trp',
    'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu', 'CUG': 'Leu',
    'CCU': 'Pro', 'CCC': 'Pro', 'CCA': 'Pro', 'CCG': 'Pro',
    'CAU': 'His', 'CAC': 'His', 'CAA': 'Gln', 'CAG': 'Gln',
    'CGU': 'Arg', 'CGC': 'Arg', 'CGA': 'Arg', 'CGG': 'Arg',
    'AUU': 'Ile', 'AUC': 'Ile', 'AUA': 'Ile', 'AUG': 'Met',
    'ACU': 'Thr', 'ACC': 'Thr', 'ACA': 'Thr', 'ACG': 'Thr',
    'AAU': 'Asn', 'AAC': 'Asn', 'AAA': 'Lys', 'AAG': 'Lys',
    'AGU': 'Ser', 'AGC': 'Ser', 'AGA': 'Arg', 'AGG': 'Arg',
    'GUU': 'Val', 'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val',
    'GCU': 'Ala', 'GCC': 'Ala', 'GCA': 'Ala', 'GCG': 'Ala',
    'GAU': 'Asp', 'GAC': 'Asp', 'GAA': 'Glu', 'GAG': 'Glu',
    'GGU': 'Gly', 'GGC': 'Gly', 'GGA': 'Gly', 'GGG': 'Gly'
  };

const DNASequenceTranslator: React.FC = () => {
  const [dnaSequence, setDnaSequence] = useState('');
  const [translation, setTranslation] = useState<TranslationResult | null>(null);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (dnaSequence.length === 0) {
      setTranslation(null);
      return;
    }

    // Validate DNA sequence
    const validSequence = /^[ATGCatgc]*$/.test(dnaSequence);
    setIsValid(validSequence);

    if (!validSequence) {
      setTranslation(null);
      return;
    }

    // Translate DNA to RNA
    const rna = dnaSequence.toUpperCase().replace(/T/g, 'U');
    
    // Split into codons
    const codons: string[] = [];
    for (let i = 0; i < rna.length; i += 3) {
      const codon = rna.substring(i, i + 3);
      if (codon.length === 3) {
        codons.push(codon);
      }
    }

    // Translate codons to amino acids
    const aminoAcids: string[] = [];
    for (const codon of codons) {
      const aminoAcid = codonToAminoAcid[codon] || 'Unknown';
      aminoAcids.push(aminoAcid);
      if (aminoAcid === 'STOP') break;
    }

    // Create protein sequence
    const protein = aminoAcids
      .filter(aa => aa !== 'STOP' && aa !== 'Unknown')
      .map(aa => aa.charAt(0))
      .join('');

    setTranslation({
      rna,
      protein,
      codons,
      aminoAcids
    });
  }, [dnaSequence]);

  const handleSequenceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDnaSequence(e.target.value);
  };

  const loadExample = () => {
    setDnaSequence('ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG');
  };

  const clearSequence = () => {
    setDnaSequence('');
    setTranslation(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">DNA Sequence Translator</h3>
        <p className="text-slate-600">Convert DNA sequences to RNA and protein chains in real-time</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            DNA Sequence (ATGC)
          </label>
          <textarea
            value={dnaSequence}
            onChange={handleSequenceChange}
            placeholder="Enter DNA sequence (e.g., ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG)"
            className={`w-full h-32 p-3 border rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
              !isValid ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          />
          
          <div className="mt-3 flex gap-2">
            <button
              onClick={loadExample}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
            >
              Load Example
            </button>
            <button
              onClick={clearSequence}
              className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm"
            >
              Clear
            </button>
          </div>

          {!isValid && (
            <div className="mt-2 text-sm text-red-600">
              Please enter a valid DNA sequence using only A, T, G, C characters
            </div>
          )}

          <div className="mt-3 text-xs text-slate-500">
            Length: {dnaSequence.length} bases
          </div>
        </div>

        {/* Results Section */}
        <div>
          {translation ? (
            <div className="space-y-4">
              {/* RNA Sequence */}
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="font-semibold text-blue-800 mb-1">RNA Sequence</h4>
                <div className="font-mono text-sm text-blue-700 break-all">
                  {translation.rna}
                </div>
              </div>

              {/* Codons */}
              <div className="bg-purple-50 rounded-lg p-3">
                <h4 className="font-semibold text-purple-800 mb-2">Codons & Amino Acids</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {translation.codons.map((codon, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="font-mono text-purple-700">{codon}</span>
                      <span className="text-purple-500">→</span>
                      <span className={`font-medium ${
                        translation.aminoAcids[index] === 'STOP' ? 'text-red-600' :
                        translation.aminoAcids[index] === 'Unknown' ? 'text-gray-500' :
                        'text-green-700'
                      }`}>
                        {translation.aminoAcids[index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protein */}
              {translation.protein && (
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800 mb-1">Protein Sequence</h4>
                  <div className="font-mono text-sm text-green-700">
                    {translation.protein}
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    {translation.protein.length} amino acids
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
              <div className="text-4xl mb-2">🧬</div>
              <p>Enter a DNA sequence to see the translation</p>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-sm text-slate-600">
          <h4 className="font-semibold mb-2">How it works:</h4>
          <ul className="space-y-1 text-xs">
            <li>• <strong>Transcription:</strong> DNA (ATGC) → RNA (AUGC)</li>
            <li>• <strong>Translation:</strong> RNA codons (3 bases) → Amino acids</li>
            <li>• <strong>Protein:</strong> Chain of amino acids forms protein</li>
            <li>• <strong>STOP codons:</strong> Signal end of protein synthesis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DNASequenceTranslator;