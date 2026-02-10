import { GlossaryTerm } from '../types/glossary';

export const glossaryTerms: GlossaryTerm[] = [
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
    term: "Gene",
    definition: "A discrete unit of heredity consisting of a specific sequence of DNA that encodes the functional product of a gene. Genes are the basic physical and functional units of heredity.",
    category: "Genetics",
    related: ["DNA", "RNA", "Chromosome"]
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
    term: "Mutation",
    definition: "A change in the DNA sequence that can be caused by errors during DNA replication or by exposure to mutagens. Mutations can be beneficial, harmful, or neutral to organisms.",
    category: "Genetics",
    related: ["DNA", "Polymorphism", "SNP"]
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
    term: "Protein",
    definition: "Large biomolecules composed of amino acids that perform a wide variety of functions in living organisms. Enzymes, antibodies, and structural proteins are examples.",
    category: "Molecular Biology",
    related: ["Amino Acid", "Peptide", "Protein Folding"]
  },
  {
    term: "CRISPR",
    definition: "Clustered Regularly Interspaced Short Palindromic Repeats - a revolutionary gene-editing technology that allows scientists to make precise changes to DNA sequences.",
    category: "Genetic Engineering",
    related: ["Gene Editing", "Cas9", "Genome Editing"]
  },
  {
    term: "Gene Editing",
    definition: "The direct manipulation of genetic material in an organism's genome. Technologies include CRISPR-Cas9, TALENs, and zinc finger nucleases.",
    category: "Genetic Engineering",
    related: ["CRISPR", "Vector", "Genome Editing"]
  },
  {
    term: "Stem Cell",
    definition: "An undifferentiated cell capable of giving rise to more cells of the same type. Stem cells have the potential to develop into different cell types and are important for tissue repair and regeneration.",
    category: "Biotechnology",
    related: ["Differentiation", "iPSC", "ESC"]
  },
  {
    term: "Clinical Trial",
    definition: "A research study involving human participants to evaluate the safety and efficacy of new drugs, medical devices, or treatment strategies.",
    category: "Clinical Research",
    related: ["FDA", "Phase I", "Phase II", "Phase III", "IRB"]
  },
  {
    term: "FDA",
    definition: "Food and Drug Administration - the U.S. regulatory agency responsible for protecting public health by ensuring the safety, efficacy, and security of drugs and medical devices.",
    category: "Regulatory",
    related: ["Clinical Trial", "Approval", "Regulation"]
  },
  {
    term: "Pharmacokinetics",
    definition: "The study of how a drug is absorbed, distributed, metabolized, and eliminated by the body. Essential for determining dosage and dosing schedules.",
    category: "Pharmaceutical",
    related: ["Bioavailability", "Half-Life", "Clearance"]
  },
  {
    term: "Vaccine",
    definition: "A biological preparation that provides active acquired immunity to a particular infectious disease. Stimulates the immune system to produce antibodies.",
    category: "Immunology",
    related: ["Immunization", "Immune Response", "Antigen"]
  }
];
