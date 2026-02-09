// src/components/Glossary.tsx

import React, { useState, useMemo } from 'react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  related?: string[];
}

const glossaryData: GlossaryTerm[] = [
  // Bioinformatics Terms
  {
    term: "Algorithm",
    definition: "A step-by-step procedure for calculations, problem-solving, and decision-making. In bioinformatics, algorithms are used for sequence alignment, phylogenetic analysis, and pattern recognition.",
    category: "Computing",
    related: ["Heuristic", "Machine Learning", "Optimization"]
  },
  {
    term: "Alignment",
    definition: "The process of arranging sequences to identify regions of similarity. In bioinformatics, sequence alignment is used to compare DNA, RNA, or protein sequences to find functional or evolutionary relationships.",
    category: "Sequence Analysis",
    related: ["BLAST", "FASTA", "Multiple Sequence Alignment"]
  },
  {
    term: "Annotation",
    definition: "The process of adding descriptive information to genomic sequences, including gene locations, functional elements, and regulatory regions. Annotation helps interpret the biological significance of DNA sequences.",
    category: "Genomics",
    related: ["Gene Prediction", "Functional Genomics", "ENCODE"]
  },
  {
    term: "Bioinformatics",
    definition: "An interdisciplinary field that develops methods and software tools for understanding biological data. It combines computer science, statistics, and biology to analyze and interpret large-scale biological information.",
    category: "General",
    related: ["Computational Biology", "Genomics", "Proteomics"]
  },
  {
    term: "BLAST",
    definition: "Basic Local Alignment Search Tool - a widely used algorithm for comparing primary biological sequence information. BLAST finds regions of similarity between sequences and is essential for database searching.",
    category: "Sequence Analysis",
    related: ["FASTA", "Alignment", "Database"]
  },
  {
    term: "Chromosome",
    definition: "A structure containing genetic information in the form of genes. In eukaryotes, chromosomes are linear DNA molecules associated with histone proteins, while prokaryotes have circular chromosomes.",
    category: "Genetics",
    related: ["DNA", "Gene", "Karyotype"]
  },
  {
    term: "DNA",
    definition: "Deoxyribonucleic acid - the molecule that carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms and many viruses.",
    category: "Molecular Biology",
    related: ["RNA", "Gene", "Nucleotide"]
  },
  {
    term: "Epigenomics",
    definition: "The study of epigenetic modifications on the genetic material of a cell. Epigenomics examines how environmental factors influence gene expression without changing the DNA sequence.",
    category: "Epigenetics",
    related: ["DNA Methylation", "Histone Modification", "Chromatin"]
  },
  {
    term: "FASTA",
    definition: "A text-based format for representing nucleotide or amino acid sequences using single-letter codes. FASTA format includes a description line starting with '>' followed by sequence data.",
    category: "Sequence Analysis",
    related: ["FASTQ", "BLAST", "Alignment"]
  },
  {
    term: "FASTQ",
    definition: "A text-based format for storing both nucleotide sequences and their quality scores. FASTQ files are widely used in next-generation sequencing workflows.",
    category: "Sequence Analysis",
    related: ["FASTA", "Quality Score", "NGS"]
  },
  {
    term: "Gene",
    definition: "A discrete unit of heredity consisting of a specific sequence of DNA that encodes the functional product of a gene. Genes are the basic physical and functional units of heredity.",
    category: "Genetics",
    related: ["DNA", "RNA", "Chromosome"]
  },
  {
    term: "Gene Expression",
    definition: "The process by which information from a gene is used to synthesize functional gene products, typically proteins. Gene expression is regulated at multiple levels.",
    category: "Molecular Biology",
    related: ["RNA", "Transcription", "Translation"]
  },
  {
    term: "Genome",
    definition: "The complete set of genetic material in an organism. In humans, the genome consists of approximately 3 billion base pairs of DNA organized into 23 pairs of chromosomes.",
    category: "Genomics",
    related: ["Chromosome", "DNA", "Gene"]
  },
  {
    term: "Genomics",
    definition: "The study of the structure, function, evolution, mapping, and editing of genomes. Genomics involves the sequencing and analysis of entire genomes rather than individual genes.",
    category: "Genomics",
    related: ["Bioinformatics", "Proteomics", "Transcriptomics"]
  },
  {
    term: "Heuristic",
    definition: "A practical approach to problem-solving that is not guaranteed to be optimal but is sufficient for the immediate goals. In bioinformatics, heuristics are often used when exact solutions are computationally expensive.",
    category: "Computing",
    related: ["Algorithm", "Optimization", "Machine Learning"]
  },
  {
    term: "Machine Learning",
    definition: "A subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. In bioinformatics, machine learning is used for pattern recognition and prediction.",
    category: "Computing",
    related: ["Algorithm", "Artificial Intelligence", "Deep Learning"]
  },
  {
    term: "Metagenomics",
    definition: "The study of genetic material recovered directly from environmental samples. Metagenomics allows the study of microbial communities without the need for culturing.",
    category: "Genomics",
    related: ["Microbiome", "16S rRNA", "Environmental DNA"]
  },
  {
    term: "Multiple Sequence Alignment",
    definition: "The alignment of three or more biological sequences to identify regions of similarity that may indicate functional, structural, or evolutionary relationships.",
    category: "Sequence Analysis",
    related: ["Alignment", "ClustalW", "Phylogenetics"]
  },
  {
    term: "Mutation",
    definition: "A change in the DNA sequence that can be caused by errors during DNA replication or by exposure to mutagens. Mutations can be beneficial, harmful, or neutral to organisms.",
    category: "Genetics",
    related: ["DNA", "Polymorphism", "SNP"]
  },
  {
    term: "Next-Generation Sequencing",
    definition: "High-throughput DNA sequencing technologies that allow millions of DNA fragments to be sequenced in parallel. NGS has revolutionized genomics research.",
    category: "Genomics",
    related: ["Sequencing", "Illumina", "Ion Torrent"]
  },
  {
    term: "Nucleotide",
    definition: "The basic building block of DNA and RNA, consisting of a nitrogenous base, a five-carbon sugar, and one or more phosphate groups. The four nucleotides in DNA are adenine (A), cytosine (C), guanine (G), and thymine (T).",
    category: "Molecular Biology",
    related: ["DNA", "RNA", "Base Pair"]
  },
  {
    term: "Phylogenetics",
    definition: "The study of evolutionary relationships among groups of organisms. In bioinformatics, phylogenetics uses sequence data to construct evolutionary trees and understand species relationships.",
    category: "Evolution",
    related: ["Cladogram", "Phylogenetic Tree", "Evolutionary Biology"]
  },
  {
    term: "Proteomics",
    definition: "The large-scale study of proteins, particularly their structures and functions. Proteomics involves protein expression analysis, post-translational modifications, and protein-protein interactions.",
    category: "Proteomics",
    related: ["Genomics", "Transcriptomics", "Metabolomics"]
  },
  {
    term: "RNA",
    definition: "Ribonucleic acid - a nucleic acid present in all living cells that acts as a messenger carrying instructions from DNA for controlling the synthesis of proteins.",
    category: "Molecular Biology",
    related: ["DNA", "mRNA", "tRNA", "rRNA"]
  },
  {
    term: "Sequence",
    definition: "The order of nucleotides in a DNA or RNA molecule or the order of amino acids in a protein. Sequence information is fundamental to understanding biological function and evolution.",
    category: "Sequence Analysis",
    related: ["Alignment", "FASTA", "BLAST"]
  },
  {
    term: "Sequencing",
    definition: "The process of determining the precise order of nucleotides in a DNA or RNA molecule. Modern sequencing technologies can sequence entire genomes quickly and affordably.",
    category: "Genomics",
    related: ["Sanger Sequencing", "NGS", "DNA"]
  },
  {
    term: "SNP",
    definition: "Single Nucleotide Polymorphism - a variation at a single position in DNA sequence among individuals. SNPs are the most common type of genetic variation in humans.",
    category: "Genetics",
    related: ["Mutation", "Polymorphism", "Genetic Variation"]
  },
  {
    term: "Transcriptome",
    definition: "The complete set of RNA transcripts produced by the genome under specific circumstances or in a specific cell type. Transcriptomics studies gene expression patterns and regulation.",
    category: "Transcriptomics",
    related: ["RNA", "Gene Expression", "Proteomics"]
  },
  {
    term: "Variant Calling",
    definition: "The process of identifying genetic variants (differences) from sequencing data compared to a reference genome. Essential for understanding genetic variation and disease.",
    category: "Genomics",
    related: ["SNP", "Structural Variation", "Sequencing"]
  },

  // Biotechnology Terms
  {
    term: "Antibody",
    definition: "A protein produced by the immune system that recognizes and binds to specific foreign substances (antigens). Antibodies are used in research, diagnostics, and therapeutics.",
    category: "Immunology",
    related: ["Antigen", "Immune System", "ELISA"]
  },
  {
    term: "CRISPR",
    definition: "Clustered Regularly Interspaced Short Palindromic Repeats - a revolutionary gene-editing technology that allows scientists to make precise changes to DNA sequences.",
    category: "Genetic Engineering",
    related: ["Gene Editing", "Cas9", "Genome Editing"]
  },
  {
    term: "DNA Methylation",
    definition: "The addition of methyl groups to DNA molecules, which can affect gene expression without changing the DNA sequence. Important in epigenetics and development.",
    category: "Epigenetics",
    related: ["Epigenomics", "Gene Expression", "Chromatin"]
  },
  {
    term: "ELISA",
    definition: "Enzyme-Linked Immunosorbent Assay - a plate-based assay technique designed for detecting and quantifying substances such as peptides, proteins, antibodies, and hormones.",
    category: "Immunology",
    related: ["Antibody", "Antigen", "Immunoassay"]
  },
  {
    term: "Enzyme",
    definition: "A protein that acts as a biological catalyst, accelerating chemical reactions in living organisms. Enzymes are essential for metabolism, DNA replication, and many other biological processes.",
    category: "Biochemistry",
    related: ["Catalyst", "Kinetics", "Active Site"]
  },
  {
    term: "Gene Editing",
    definition: "The precise modification of an organism's DNA using engineered nucleases. Technologies include CRISPR-Cas9, TALENs, and zinc finger nucleases.",
    category: "Genetic Engineering",
    related: ["CRISPR", "Cas9", "Genome Editing"]
  },
  {
    term: "Immunotherapy",
    definition: "Treatment that uses certain parts of a person's immune system to fight diseases such as cancer. Includes checkpoint inhibitors, CAR T-cells, and therapeutic antibodies.",
    category: "Immunology",
    related: ["Antibody", "Immune System", "Cancer Therapy"]
  },
  {
    term: "Metabolism",
    definition: "The chemical processes that occur within a living organism to maintain life. Metabolism includes catabolism (breaking down molecules) and anabolism (building up molecules).",
    category: "Biochemistry",
    related: ["Enzyme", "Catabolism", "Anabolism"]
  },
  {
    term: "PCR",
    definition: "Polymerase Chain Reaction - a laboratory technique used to amplify DNA sequences, generating millions of copies of a particular DNA sequence.",
    category: "Molecular Biology",
    related: ["DNA", "Amplification", "Thermal Cycler"]
  },
  {
    term: "Recombinant DNA",
    definition: "DNA molecules formed by laboratory methods of genetic recombination to bring together genetic material from multiple sources, creating sequences that would not otherwise be found in the genome.",
    category: "Genetic Engineering",
    related: ["Gene Cloning", "Vector", "Plasmid"]
  },
  {
    term: "Stem Cell",
    definition: "An undifferentiated cell capable of giving rise to more cells of the same type. Stem cells have the potential to develop into different cell types and are important for tissue repair and regeneration.",
    category: "Cell Biology",
    related: ["Differentiation", "iPSC", "ESC"]
  },
  {
    term: "Transfection",
    definition: "The process of deliberately introducing naked or purified nucleic acids into eukaryotic cells. Used for genetic engineering and gene therapy research.",
    category: "Molecular Biology",
    related: ["Transformation", "Gene Transfer", "Plasmid"]
  },

  // Biopharma Terms
  {
    term: "Biologics",
    definition: "Products derived from living organisms or their components, including vaccines, blood components, antibodies, and therapeutic proteins. Regulated as biological products.",
    category: "Pharmaceutical",
    related: ["Antibody", "Vaccine", "FDA"]
  },
  {
    term: "Biosimilar",
    definition: "A biological product that is highly similar to an existing approved reference product with no clinically meaningful differences in terms of safety, purity, or potency.",
    category: "Pharmaceutical",
    related: ["Biologics", "Generic", "FDA"]
  },
  {
    term: "Clinical Trial",
    definition: "A research study involving human participants to evaluate the safety and efficacy of new drugs, medical devices, or treatment strategies.",
    category: "Clinical Research",
    related: ["FDA", "Phase I", "Phase II", "Phase III"]
  },
  {
    term: "Drug Discovery",
    definition: "The process of identifying and developing new medications through research, screening, and optimization of chemical compounds.",
    category: "Pharmaceutical",
    related: ["Lead Compound", "Preclinical", "Clinical Development"]
  },
  {
    term: "FDA",
    definition: "Food and Drug Administration - the U.S. regulatory agency responsible for protecting public health by ensuring the safety, efficacy, and security of drugs and medical devices.",
    category: "Regulatory",
    related: ["Clinical Trial", "Approval", "Regulation"]
  },
  {
    term: "Phase I",
    definition: "The first phase of clinical testing in humans, typically involving a small group of healthy volunteers to evaluate safety, dosage, and side effects.",
    category: "Clinical Research",
    related: ["Clinical Trial", "Phase II", "Phase III"]
  },
  {
    term: "Phase II",
    definition: "The second phase of clinical testing, involving a larger group of patients to evaluate efficacy and further assess safety.",
    category: "Clinical Research",
    related: ["Clinical Trial", "Phase I", "Phase III"]
  },
  {
    term: "Phase III",
    definition: "The third phase of clinical testing, involving large patient populations to confirm efficacy, monitor side effects, and compare to existing treatments.",
    category: "Clinical Research",
    related: ["Clinical Trial", "Phase I", "Phase II"]
  },
  {
    term: "Pharmacokinetics",
    definition: "The study of how a drug is absorbed, distributed, metabolized, and eliminated by the body. Essential for understanding drug dosing and safety.",
    category: "Pharmaceutical",
    related: ["Pharmacodynamics", "Drug Metabolism", "ADME"]
  },
  {
    term: "Pharmacodynamics",
    definition: "The study of the biochemical and physiological effects of drugs on the body or on microorganisms within the body. Complements pharmacokinetics.",
    category: "Pharmaceutical",
    related: ["Pharmacokinetics", "Mechanism of Action", "Drug Response"]
  },
  {
    term: "Therapeutic Index",
    definition: "A comparison of the amount of a therapeutic agent that causes the therapeutic effect to the amount that causes toxicity. Important for drug safety assessment.",
    category: "Pharmaceutical",
    related: ["Toxicity", "Safety", "Drug Development"]
  },
  {
    term: "Vaccine",
    definition: "A biological preparation that provides active acquired immunity to a particular infectious disease. Contains agents resembling a disease-causing microorganism.",
    category: "Pharmaceutical",
    related: ["Immunology", "Antibody", "Immunity"]
  },

  // QC & Compliance Terms
  {
    term: "21 CFR Part 11",
    definition: "FDA regulations that establish criteria for electronic records and electronic signatures to be considered trustworthy, reliable, and equivalent to paper records.",
    category: "Regulatory",
    related: ["FDA", "Electronic Records", "Validation"]
  },
  {
    term: "GCP",
    definition: "Good Clinical Practice - international ethical and scientific quality standards for designing, conducting, recording, and reporting clinical trials.",
    category: "Quality Systems",
    related: ["Clinical Trial", "GMP", "GLP"]
  },
  {
    term: "GLP",
    definition: "Good Laboratory Practice - regulations ensuring the consistency and reliability of laboratory studies, particularly in non-clinical safety testing.",
    category: "Quality Systems",
    related: ["GCP", "GMP", "Laboratory Testing"]
  },
  {
    term: "GMP",
    definition: "Good Manufacturing Practice - regulations ensuring that products are consistently produced and controlled according to quality standards.",
    category: "Quality Systems",
    related: ["Quality Control", "Regulatory Compliance", "Validation"]
  },
  {
    term: "Quality Assurance",
    definition: "The systematic processes and procedures implemented to ensure that products or services meet specified quality standards and requirements.",
    category: "Quality Systems",
    related: ["Quality Control", "GMP", "Compliance"]
  },
  {
    term: "Quality Control",
    definition: "The process of maintaining standards in manufactured products by testing samples and ensuring they meet specifications.",
    category: "Quality Systems",
    related: ["GMP", "Quality Assurance", "Validation"]
  },
  {
    term: "Validation",
    definition: "The process of establishing documented evidence that a system, process, or procedure performs as intended. Critical in regulated industries.",
    category: "Quality Systems",
    related: ["GMP", "Quality Assurance", "Compliance"]
  },

  // Additional Advanced Terms
  {
    term: "Artificial Intelligence",
    definition: "The simulation of human intelligence in machines programmed to think and learn. In bioinformatics, AI is used for drug discovery, protein structure prediction, and disease diagnosis.",
    category: "Computing",
    related: ["Machine Learning", "Deep Learning", "Neural Networks"]
  },
  {
    term: "Bioinformatics Pipeline",
    definition: "A series of computational steps that process and analyze biological data. Common in NGS data analysis, from raw reads to final results.",
    category: "Computing",
    related: ["Workflow", "NGS", "Data Analysis"]
  },
  {
    term: "Big Data",
    definition: "Extremely large datasets that cannot be processed using traditional data processing applications. Common in genomics and healthcare research.",
    category: "Computing",
    related: ["Genomics", "Data Science", "Cloud Computing"]
  },
  {
    term: "Cloud Computing",
    definition: "The delivery of computing services over the internet, including storage, processing power, and specialized bioinformatics tools and databases.",
    category: "Computing",
    related: ["Big Data", "AWS", "Google Cloud"]
  },
  {
    term: "Computational Biology",
    definition: "The development and application of data-analytical and theoretical methods, mathematical modeling, and computational simulation techniques to study biological systems.",
    category: "General",
    related: ["Bioinformatics", "Systems Biology", "Modeling"]
  },
  {
    term: "Data Science",
    definition: "An interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
    category: "Computing",
    related: ["Big Data", "Machine Learning", "Statistics"]
  },
  {
    term: "Deep Learning",
    definition: "A subset of machine learning using neural networks with multiple layers to progressively extract higher-level features from raw input.",
    category: "Computing",
    related: ["Machine Learning", "Neural Networks", "AI"]
  },
  {
    term: "Docker",
    definition: "A platform for developing, shipping, and running applications in containers. In bioinformatics, used for reproducible research environments.",
    category: "Computing",
    related: ["Container", "Reproducibility", "Bioinformatics Pipeline"]
  },
  {
    term: "GitHub",
    definition: "A web-based platform for version control and collaboration, allowing multiple people to work on projects and track changes in source code.",
    category: "Computing",
    related: ["Version Control", "Git", "Open Source"]
  },
  {
    term: "High-Performance Computing",
    definition: "The use of supercomputers and parallel processing techniques to solve complex computational problems. Essential for large-scale bioinformatics analyses.",
    category: "Computing",
    related: ["Supercomputing", "Parallel Computing", "Big Data"]
  },
  {
    term: "Neural Networks",
    definition: "Computing systems inspired by biological neural networks that constitute animal brains. Used in bioinformatics for pattern recognition and prediction tasks.",
    category: "Computing",
    related: ["Deep Learning", "Machine Learning", "AI"]
  },
  {
    term: "Python",
    definition: "A high-level programming language widely used in bioinformatics for data analysis, automation, and scientific computing. Extensive libraries for biological data analysis.",
    category: "Computing",
    related: ["R", "BioPython", "Programming"]
  },
  {
    term: "R",
    definition: "A programming language and environment for statistical computing and graphics. Popular in bioinformatics for data visualization and statistical analysis.",
    category: "Computing",
    related: ["Python", "Bioconductor", "Statistics"]
  },
  {
    term: "Single-Cell Analysis",
    definition: "The study of individual cells within a population to understand cellular heterogeneity. Uses advanced sequencing technologies to analyze single cells.",
    category: "Genomics",
    related: ["Transcriptomics", "Single-Cell RNA-Seq", "Cell Heterogeneity"]
  },
  {
    term: "Systems Biology",
    definition: "The computational and mathematical modeling of complex biological systems. Focuses on the interactions between components of biological systems.",
    category: "General",
    related: ["Computational Biology", "Network Biology", "Modeling"]
  },
  {
    term: "Workflow",
    definition: "A sequence of connected steps for data processing and analysis. In bioinformatics, workflows automate complex analysis pipelines.",
    category: "Computing",
    related: ["Bioinformatics Pipeline", "Automation", "Data Processing"]
  }
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'term' | 'category'>('term');
  const [highlightMatches, setHighlightMatches] = useState(true);

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(glossaryData.map(item => item.category)))];
    return cats.sort();
  }, []);

  const filteredTerms = useMemo(() => {
    let filtered = glossaryData.filter(term => {
      const matchesSearch = searchTerm === '' || 
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (term.related && term.related.some(related => related.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort terms
    filtered.sort((a, b) => {
      if (sortBy === 'term') {
        return a.term.localeCompare(b.term);
      } else {
        return a.category.localeCompare(b.category) || a.term.localeCompare(b.term);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const highlightText = (text: string) => {
    if (!highlightMatches || !searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 text-black font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bioinformatics Glossary
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive dictionary of terms and concepts in bioinformatics, biotechnology, and related fields
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search terms, definitions, or related concepts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="w-full md:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Additional Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'term' | 'category')}
              className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="term">Term (A-Z)</option>
              <option value="category">Category</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="highlight"
              checked={highlightMatches}
              onChange={(e) => setHighlightMatches(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="highlight" className="text-sm text-gray-700">
              Highlight search matches
            </label>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{glossaryData.length}</div>
            <div className="text-sm text-gray-600">Total Terms</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">{categories.length}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">{filteredTerms.length}</div>
            <div className="text-sm text-gray-600">Filtered Results</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {searchTerm ? '🔍' : '📚'}
            </div>
            <div className="text-sm text-gray-600">
              {searchTerm ? 'Searching' : 'Ready'}
            </div>
          </div>
        </div>
        
        {/* Category Distribution */}
        <div className="mt-4 pt-4 border-t border-blue-200">
          <div className="text-sm font-semibold text-gray-700 mb-2">Category Distribution:</div>
          <div className="flex flex-wrap gap-2">
            {categories.filter(cat => cat !== 'All').map(category => {
              const count = glossaryData.filter(t => t.category === category).length;
              const percentage = (count / glossaryData.length * 100).toFixed(1);
              return (
                <span key={category} className="text-xs bg-white px-2 py-1 rounded border border-blue-200">
                  {category}: {count} ({percentage}%)
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Glossary Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTerms.map((term, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
          >
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                {term.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {highlightText(term.term)}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {highlightText(term.definition)}
            </p>
            {term.related && term.related.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-gray-500">Related:</span>
                {term.related.map((related, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => setSearchTerm(related)}
                  >
                    {highlightText(related)}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Reference */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Most Common</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• DNA</li>
              <li>• RNA</li>
              <li>• Gene</li>
              <li>• Protein</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Bioinformatics</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Algorithm</li>
              <li>• Alignment</li>
              <li>• BLAST</li>
              <li>• Genomics</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Computing</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Machine Learning</li>
              <li>• Python</li>
              <li>• Docker</li>
              <li>• GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Advanced Topics</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Single-Cell Analysis</li>
              <li>• Epigenomics</li>
              <li>• Metagenomics</li>
              <li>• Systems Biology</li>
            </ul>
          </div>
        </div>
        
        {/* Search Tips */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-2">💡 Search Tips</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Search includes term names, definitions, and related concepts</li>
            <li>• Click on related terms to instantly search for them</li>
            <li>• Use category filters to focus on specific areas</li>
            <li>• Enable highlighting to see search matches clearly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Glossary;