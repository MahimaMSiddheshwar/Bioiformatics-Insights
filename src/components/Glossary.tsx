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
    term: "Artificial Intelligence",
    definition: "The simulation of human intelligence in machines programmed to think and learn. In bioinformatics, AI is used for drug discovery, protein structure prediction, and disease diagnosis.",
    category: "Computing",
    related: ["Machine Learning", "Deep Learning", "Neural Networks"]
  },
  {
    term: "Big Data",
    definition: "Extremely large datasets that cannot be processed using traditional data processing applications. Common in genomics and healthcare research.",
    category: "Computing",
    related: ["Genomics", "Data Science", "Cloud Computing"]
  },
  {
    term: "Bioinformatics Pipeline",
    definition: "A series of computational steps that process and analyze biological data. Common in NGS data analysis, from raw reads to final results.",
    category: "Computing",
    related: ["Workflow", "NGS", "Data Analysis"]
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
  },
  {
    term: "Base Pair",
    definition: "Two nucleobases on opposite complementary strands of DNA that pair with each other through hydrogen bonding. Adenine pairs with thymine (A-T) and cytosine pairs with guanine (C-G).",
    category: "Molecular Biology",
    related: ["DNA", "Nucleotide", "Double Helix"]
  },
  {
    term: "Coding Sequence",
    definition: "The correspondence between nucleotide triplets in DNA/RNA and amino acids in proteins. Essential for understanding how genetic information is translated into functional proteins.",
    category: "Molecular Biology",
    related: ["Translation", "Amino Acid", "Protein Synthesis"]
  },
  {
    term: "DNA Methylation",
    definition: "The addition of methyl groups to DNA molecules, which can affect gene expression without changing the DNA sequence. Important in epigenetics and development.",
    category: "Epigenetics",
    related: ["Epigenomics", "Histone Modification", "Gene Regulation"]
  },
  {
    term: "Double Helix",
    definition: "The twisted ladder structure of DNA, with two strands wound around each other. Discovered by Watson and Crick in 1953.",
    category: "Molecular Biology",
    related: ["DNA", "Base Pair", "Nucleotide"]
  },
  {
    term: "Exon",
    definition: "Coding sequence of a gene that is retained in the final messenger RNA molecule after splicing. Contains the information to be translated into protein.",
    category: "Molecular Biology",
    related: ["Intron", "Splicing", "Alternative Splicing"]
  },
  {
    term: "Gene Expression",
    definition: "The process by which information from a gene is used to synthesize functional gene products. Gene expression is regulated at multiple levels.",
    category: "Molecular Biology",
    related: ["Transcription", "Translation", "Regulation"]
  },
  {
    term: "Gene Regulation",
    definition: "The control of gene expression, determining when, where, and how much genes are active. Essential for development, cellular differentiation, and responses to environmental changes.",
    category: "Molecular Biology",
    related: ["Promoter", "Enhancer", "Repressor"]
  },
  {
    term: "Genetic Code",
    definition: "The set of rules by which information encoded within genetic material is translated into proteins by living cells. Nearly universal across all organisms.",
    category: "Molecular Biology",
    related: ["Codon", "Translation", "Amino Acid"]
  },
  {
    term: "Histone",
    definition: "Proteins around which DNA is wrapped to form nucleosomes. Histone modifications play important roles in gene regulation and epigenetic inheritance.",
    category: "Molecular Biology",
    related: ["Chromatin", "DNA Methylation", "Gene Regulation"]
  },
  {
    term: "Intron",
    definition: "Non-coding sequences within a gene that are removed during RNA splicing. Introns are separated from coding sequences (exons) and typically do not code for proteins.",
    category: "Molecular Biology",
    related: ["Exon", "Splicing", "Alternative Splicing"]
  },
  {
    term: "mRNA",
    definition: "Messenger RNA - a single-stranded RNA molecule that carries genetic information from DNA to the ribosome for protein synthesis.",
    category: "Molecular Biology",
    related: ["Transcription", "Translation", "RNA Processing"]
  },
  {
    term: "Promoter",
    definition: "A DNA sequence where RNA polymerase binds to initiate transcription of a gene. Controls when and where a gene is expressed.",
    category: "Molecular Biology",
    related: ["Enhancer", "Gene Regulation", "Transcription"]
  },
  {
    term: "Protein",
    definition: "Large biomolecules composed of amino acids that perform a wide variety of functions in living organisms. Enzymes, antibodies, and structural proteins are examples.",
    category: "Molecular Biology",
    related: ["Amino Acid", "Peptide", "Protein Folding"]
  },
  {
    term: "Regulatory Sequence",
    definition: "DNA sequence involved in controlling the expression of genes, typically binding transcription factors and influencing transcription rates.",
    category: "Molecular Biology",
    related: ["Promoter", "Enhancer", "Gene Regulation"]
  },
  {
    term: "rRNA",
    definition: "Ribosomal RNA - a type of RNA that forms part of ribosomes, the cellular machinery for protein synthesis.",
    category: "Molecular Biology",
    related: ["mRNA", "tRNA", "Ribosome"]
  },
  {
    term: "tRNA",
    definition: "Transfer RNA - a type of RNA that delivers specific amino acids to the ribosome during protein synthesis according to the genetic code.",
    category: "Molecular Biology",
    related: ["mRNA", "rRNA", "Amino Acid"]
  },
  {
    term: "Transcription",
    definition: "The process of copying DNA into RNA. The first step in gene expression, where DNA sequence is used as a template to synthesize complementary RNA.",
    category: "Molecular Biology",
    related: ["DNA", "RNA Polymerase", "Gene Regulation"]
  },
  {
    term: "Translation",
    definition: "The process by which mRNA is decoded by ribosomes to synthesize proteins. Occurs in cytoplasm and follows the genetic code.",
    category: "Molecular Biology",
    related: ["mRNA", "Ribosome", "tRNA"]
  },
  {
    term: "3D Genome",
    definition: "A 3D model of an organism's genome that captures spatial relationships between genes and their regulatory elements.",
    category: "Genomics",
    related: ["Hi-C", "Chromosome Structure", "Spatial Genomics"]
  },
  {
    term: "Allele",
    definition: "Alternative forms of a gene that arise by mutation and are found at the same place on a chromosome. Different alleles can result in different traits.",
    category: "Genetics",
    related: ["Polymorphism", "Genotype", "Phenotype"]
  },
  {
    term: "Amino Acid",
    definition: "Organic compounds that serve as the building blocks of proteins. 20 different amino acids are commonly found in biological systems.",
    category: "Molecular Biology",
    related: ["Protein", "Peptide", "Polypeptide"]
  },
  {
    term: "Chromatin",
    definition: "The complex of DNA and proteins (histones) that forms chromosomes within the nucleus of eukaryotic cells. Plays key roles in gene regulation and epigenetic modifications.",
    category: "Molecular Biology",
    related: ["DNA", "Histone", "Gene Regulation"]
  },
  {
    term: "Codon",
    definition: "A sequence of three consecutive nucleotides in mRNA that corresponds to a specific amino acid or stop signal during protein synthesis.",
    category: "Molecular Biology",
    related: ["Genetic Code", "Translation", "Amino Acid"]
  },
  {
    term: "Dominant",
    definition: "A genetic trait that appears in an individual when only one copy of a gene is present. Dominant traits mask recessive traits.",
    category: "Genetics",
    related: ["Recessive", "Allele", "Phenotype"]
  },
  {
    term: "Evolution",
    definition: "The process of change in all forms of life over generations. The fundamental concept that unifies all of biology.",
    category: "Evolution",
    related: ["Natural Selection", "Adaptation", "Common Ancestry"]
  },
  {
    term: "Gene Therapy",
    definition: "A medical approach that treats or prevents disease by correcting the underlying genetic problem. Uses viral vectors or other delivery systems.",
    category: "Molecular Biology",
    related: ["CRISPR", "Vector", "Genome Editing"]
  },
  {
    term: "Genotype",
    definition: "The genetic makeup of an organism. The complete set of genes inherited from parents, determining potential traits.",
    category: "Genetics",
    related: ["Phenotype", "Allele", "DNA"]
  },
  {
    term: "Haplogroup",
    definition: "A group of genes that are inherited together from a single parent. Used in population genetics and genealogical DNA testing.",
    category: "Genetics",
    related: ["Genotype", "Ancestry", "Population Genetics"]
  },
  {
    term: "Heterozygous",
    definition: "Having two different alleles at a genetic locus. One allele inherited from each parent.",
    category: "Genetics",
    related: ["Homozygous", "Allele", "Genotype"]
  },
  {
    term: "Homozygous",
    definition: "Having two identical alleles at a genetic locus. Both alleles are the same, either both dominant or both recessive.",
    category: "Genetics",
    related: ["Heterozygous", "Allele", "Genotype"]
  },
  {
    term: "Natural Selection",
    definition: "The process by which organisms better adapted to their environment tend to survive and produce more offspring. Key mechanism of evolution.",
    category: "Evolution",
    related: ["Evolution", "Adaptation", "Fitness"]
  },
  {
    term: "Phenotype",
    definition: "The observable physical or biochemical characteristics of an organism. Determined by both genotype and environmental factors.",
    category: "Genetics",
    related: ["Genotype", "Allele", "Environment"]
  },
  {
    term: "Population Genetics",
    definition: "The study of genetic variation within and between populations. Examines how genetic composition changes over time.",
    category: "Genetics",
    related: ["Allele Frequency", "Evolution", "Gene Pool"]
  },
  {
    term: "Proteome",
    definition: "The entire set of proteins expressed by a genome, cell, or organism at a certain time under specific conditions.",
    category: "Proteomics",
    related: ["Genomics", "Transcriptomics", "Protein Expression"]
  },
  {
    term: "Recessive",
    definition: "A genetic trait that appears only when two copies of the gene are present. Hidden by dominant traits in heterozygous individuals.",
    category: "Genetics",
    related: ["Dominant", "Allele", "Homozygous"]
  },
  {
    term: "Species",
    definition: "A group of organisms that can interbreed in nature and produce fertile offspring. The fundamental unit of biological classification.",
    category: "Evolution",
    related: ["Genus", "Classification", "Taxonomy"]
  },
  {
    term: "Adaptation",
    definition: "The process by which organisms become better suited to their environment through genetic changes. Enhances survival and reproductive success.",
    category: "Evolution",
    related: ["Natural Selection", "Evolution", "Fitness"]
  },
  {
    term: "Biodiversity",
    definition: "The variety and variability of life on Earth. Includes diversity within species, between species, and of ecosystems.",
    category: "Evolution",
    related: ["Conservation", "Ecosystem", "Species Richness"]
  },
  {
    term: "Ecology",
    definition: "The study of interactions between organisms and their environment. Examines the distribution and abundance of organisms.",
    category: "Evolution",
    related: ["Ecosystem", "Habitat", "Food Web"]
  },
  {
    term: "Ecosystem",
    definition: "A biological community of interacting organisms and their physical environment. Energy flows and nutrients are recycled.",
    category: "Evolution",
    related: ["Food Web", "Habitat", "Biodiversity"]
  },
  {
    term: "Extinction",
    definition: "The complete disappearance of a species from Earth. Caused by environmental changes, human activities, or natural causes.",
    category: "Evolution",
    related: ["Conservation", "Biodiversity", "Fossil Record"]
  },
  {
    term: "Fossil Record",
    definition: "The history of life as documented by fossils found in sedimentary rock. Provides evidence for evolution and past life forms.",
    category: "Evolution",
    related: ["Evolution", "Paleontology", "Geological Time"]
  },
  {
    term: "Fossil",
    definition: "The preserved remains or traces of organisms from past geological ages. Critical evidence for understanding evolution.",
    category: "Evolution",
    related: ["Fossil Record", "Paleontology", "Sedimentary Rock"]
  },
  {
    term: "Genetic Drift",
    definition: "The change in the frequency of an existing gene variant in a population due to random chance. Important in small populations.",
    category: "Evolution",
    related: ["Evolution", "Population Genetics", "Allele Frequency"]
  },
  {
    term: "Habitat",
    definition: "The natural home or environment of an organism. Provides food, shelter, and conditions for survival.",
    category: "Evolution",
    related: ["Ecosystem", "Niche", "Adaptation"]
  },
  {
    term: "Mass Extinction",
    definition: "The extinction of a large number of species in a relatively short period of geological time. Often associated with environmental changes.",
    category: "Evolution",
    related: ["Extinction", "Fossil Record", "Adaptation"]
  },
  {
    term: "Natural Selection",
    definition: "The process by which organisms with traits better suited to their environment tend to survive and reproduce more successfully.",
    category: "Evolution",
    related: ["Evolution", "Adaptation", "Fitness"]
  },
  {
    term: "Speciation",
    definition: "The formation of new and distinct species in the course of evolution. Occurs through reproductive isolation and genetic divergence.",
    category: "Evolution",
    related: ["Evolution", "Genetic Drift", "Natural Selection"]
  },
  {
    term: "Taxonomy",
    definition: "The science of classification of living organisms. Arranges species in hierarchical categories based on shared characteristics.",
    category: "Evolution",
    related: ["Classification", "Species", "Phylogeny"]
  },
  {
    term: "Antigen",
    definition: "A substance that can trigger an immune response in the body. Recognized by antibodies and immune cells.",
    category: "Immunology",
    related: ["Antibody", "Immune Response", "Vaccination"]
  },
  {
    term: "Antibody",
    definition: "A protein produced by the immune system that recognizes and binds to specific foreign substances (antigens). Key component of adaptive immunity.",
    category: "Immunology",
    related: ["Antigen", "Immune System", "Vaccine"]
  },
  {
    term: "Immune System",
    definition: "The body's defense system against foreign invaders. Includes innate and adaptive immunity with specialized cells and proteins.",
    category: "Immunology",
    related: ["Antibody", "Antigen", "Lymphocytes"]
  },
  {
    term: "Immunization",
    definition: "The process of making someone immune to an infectious disease, typically through vaccination. Stimulates antibody production.",
    category: "Immunology",
    related: ["Vaccine", "Immune Response", "Herd Immunity"]
  },
  {
    term: "Inflammation",
    definition: "The body's response to injury or infection, characterized by redness, swelling, heat, and pain. Part of the immune response.",
    category: "Immunology",
    related: ["Immune Response", "Cytokines", "Acute Phase"]
  },
  {
    term: "Lymphocytes",
    definition: "White blood cells that are key components of the adaptive immune system. Include B cells (antibody production) and T cells (cell-mediated immunity).",
    category: "Immunology",
    related: ["Antibody", "T Cells", "Immune Response"]
  },
  {
    term: "Macrophages",
    definition: "Large immune cells that engulf and destroy pathogens and cellular debris. Important in innate immunity and antigen presentation.",
    category: "Immunology",
    related: ["Phagocytosis", "Antigen Presentation", "Innate Immunity"]
  },
  {
    term: "T Cells",
    definition: "T lymphocytes that coordinate the immune response and directly kill infected or cancerous cells. Essential for cell-mediated immunity.",
    category: "Immunology",
    related: ["Lymphocytes", "Immune Response", "Cell-Mediated Immunity"]
  },
  {
    term: "Vaccine",
    definition: "A biological preparation that provides active acquired immunity to a particular infectious disease. Stimulates the immune system to produce antibodies.",
    category: "Immunology",
    related: ["Immunization", "Immune Response", "Antigen"]
  },
  {
    term: "Virus",
    definition: "A microscopic infectious agent that replicates only inside living cells. Causes various diseases in humans, animals, and plants.",
    category: "Immunology",
    related: ["Bacteria", "Infection", "Replication"]
  },
  {
    term: "Active Site",
    definition: "Specific region of an enzyme where the catalytic reaction occurs. Determines the enzyme's specificity and function.",
    category: "Biochemistry",
    related: ["Substrate", "Enzyme-Substrate Complex", "Catalysis"]
  },
  {
    term: "Adenosine Triphosphate",
    definition: "ATP - the main energy currency of cells. Stores and transfers energy for metabolic processes throughout the body.",
    category: "Biochemistry",
    related: ["Energy Metabolism", "ADP", "Phosphorylation"]
  },
  {
    term: "Carbohydrate",
    definition: "Biomolecule consisting of carbon, hydrogen, and oxygen atoms. Primary source of energy for many organisms through cellular respiration.",
    category: "Biochemistry",
    related: ["Glucose", "Glycolysis", "Metabolism"]
  },
  {
    term: "Catalyst",
    definition: "A substance that increases the rate of a chemical reaction without being consumed in the reaction. Enzymes are biological catalysts.",
    category: "Biochemistry",
    related: ["Enzyme", "Activation Energy", "Reaction Rate"]
  },
  {
    term: "Coenzyme",
    definition: "A non-protein organic compound that works with an enzyme to facilitate catalysis. Often contains vitamins or derivatives.",
    category: "Biochemistry",
    related: ["Enzyme", "Cofactor", "Vitamin"]
  },
  
  
  {
    term: "Enzyme",
    definition: "A protein that acts as a biological catalyst, accelerating chemical reactions in living organisms. Essential for metabolism, DNA replication, and many other biological processes.",
    category: "Biochemistry",
    related: ["Catalyst", "Kinetics", "Active Site"]
  },
  {
    term: "Glycolysis",
    definition: "The metabolic pathway that breaks down glucose into pyruvate, producing ATP and NADH. First step in cellular respiration.",
    category: "Biochemistry",
    related: ["Cellular Respiration", "ATP", "Glucose"]
  },
  {
    term: "Metabolism",
    definition: "The chemical processes that occur within a living organism to maintain life. Metabolism includes catabolism (breaking down molecules) and anabolism (building up molecules).",
    category: "Biochemistry",
    related: ["Enzyme", "Catabolism", "Anabolism"]
  },
  {
    term: "pH",
    definition: "A measure of acidity or alkalinity of a solution. Important for enzyme activity and biochemical reactions in the body.",
    category: "Biochemistry",
    related: ["Acid", "Base", "Buffer"]
  },
  {
    term: "Protein",
    definition: "Large biomolecules composed of amino acids that perform a wide variety of functions in living organisms. Enzymes, antibodies, and structural proteins are examples.",
    category: "Biochemistry",
    related: ["Amino Acid", "Peptide", "Protein Folding"]
  },
  {
    term: "Substrate",
    definition: "The molecule on which an enzyme acts. The substrate binds to the enzyme's active site and is transformed during the reaction.",
    category: "Biochemistry",
    related: ["Enzyme", "Active Site", "Product"]
  },
  
  // Biotechnology Terms
  {
    term: "Bioreactor",
    definition: "A manufactured device or system that supports a biologically active environment. Used for cell culture, fermentation, and waste treatment.",
    category: "Biotechnology",
    related: ["Cell Culture", "Fermentation", "Upstream Processing"]
  },
  {
    term: "Cell Culture",
    definition: "The process of growing cells under controlled conditions outside their natural environment. Essential for biotechnology research and production.",
    category: "Biotechnology",
    related: ["Bioreactor", "Stem Cells", "Primary Cells"]
  },
  {
    term: "Cloning",
    definition: "The process of creating genetically identical copies of DNA fragments, cells, or organisms. Fundamental technique in genetic engineering.",
    category: "Biotechnology",
    related: ["Vector", "Plasmid", "Transformation"]
  },
  {
    term: "CRISPR",
    definition: "Clustered Regularly Interspaced Short Palindromic Repeats - a revolutionary gene-editing technology that allows scientists to make precise changes to DNA sequences.",
    category: "Genetic Engineering",
    related: ["Gene Editing", "Cas9", "Genome Editing"]
  },
  {
    term: "Fermentation",
    definition: "The metabolic process that produces chemical changes in organic substrates through the action of enzymes. Used in food production and biotechnology.",
    category: "Biotechnology",
    related: ["Bioreactor", "Probiotics", "Yeast"]
  },
  {
    term: "Gene Editing",
    definition: "The direct manipulation of genetic material in an organism's genome. Technologies include CRISPR-Cas9, TALENs, and zinc finger nucleases.",
    category: "Genetic Engineering",
    related: ["CRISPR", "Vector", "Genome Editing"]
  },
  {
    term: "Genetic Engineering",
    definition: "The direct manipulation of an organism's genes using biotechnology. Involves adding, removing, or modifying genetic information.",
    category: "Genetic Engineering",
    related: ["Gene Editing", "Transgenesis", "Molecular Cloning"]
  },
  {
    term: "Immunotherapy",
    definition: "Treatment that uses certain parts of a person's immune system to fight diseases. Includes checkpoint inhibitors, CAR T-cells, and therapeutic antibodies.",
    category: "Biotechnology",
    related: ["Antibody", "T Cells", "Cancer Therapy"]
  },
  {
    term: "Plasmid",
    definition: "A small, circular DNA molecule separate from the main chromosome in bacteria. Used as a vector in genetic engineering.",
    category: "Genetic Engineering",
    related: ["Cloning", "Vector", "Transformation"]
  },
  {
    term: "Recombinant DNA",
    definition: "DNA molecules formed by laboratory methods of genetic recombination to bring together genetic material from multiple sources.",
    category: "Genetic Engineering",
    related: ["Gene Cloning", "Vector", "Plasmid"]
  },
  {
    term: "Stem Cell",
    definition: "An undifferentiated cell capable of giving rise to more cells of the same type. Stem cells have the potential to develop into different cell types and are important for tissue repair and regeneration.",
    category: "Biotechnology",
    related: ["Differentiation", "iPSC", "ESC"]
  },
  {
    term: "Transgenesis",
    definition: "The process of introducing a foreign gene into an organism's genome. Creates transgenic organisms with new traits.",
    category: "Genetic Engineering",
    related: ["Genetic Engineering", "Vector", "Promoter"]
  },
  {
    term: "Vector",
    definition: "A DNA molecule used to carry foreign genetic material into a cell. Plasmids and viruses are common vectors in genetic engineering.",
    category: "Genetic Engineering",
    related: ["Plasmid", "Virus", "Transformation"]
  },
  
  // Biopharma Terms
  {
    term: "Active Pharmaceutical Ingredient",
    definition: "The component of a drug that produces the biological effect. Essential for drug safety and regulatory approval.",
    category: "Pharmaceutical",
    related: ["Excipient", "Bioavailability", "Pharmacokinetics"]
  },
  {
    term: "Bioavailability",
    definition: "The fraction of an administered dose of unchanged drug that reaches the systemic circulation. Critical for determining drug dosage and efficacy.",
    category: "Pharmaceutical",
    related: ["Pharmacokinetics", "Absorption", "First-Pass Metabolism"]
  },
  {
    term: "Clinical Trial",
    definition: "A research study involving human participants to evaluate the safety and efficacy of new drugs, medical devices, or treatment strategies.",
    category: "Clinical Research",
    related: ["FDA", "Phase I", "Phase II", "Phase III", "IRB"]
  },
  {
    term: "Double-Blind Study",
    definition: "A clinical trial design where neither participants nor researchers know who receives the treatment. Prevents bias in results interpretation.",
    category: "Pharmaceutical",
    related: ["Clinical Trial", "Placebo", "Randomized Controlled Trial"]
  },
  {
    term: "Drug Discovery",
    definition: "The process of identifying and developing new medications through research, screening, and optimization of chemical compounds.",
    category: "Pharmaceutical",
    related: ["Lead Compound", "Preclinical", "Clinical Development"]
  },
  {
    term: "Excipient",
    definition: "Inactive ingredients in a drug formulation that enhance stability, delivery, or patient acceptance. Does not contribute to therapeutic effect.",
    category: "Pharmaceutical",
    related: ["Active Pharmaceutical Ingredient", "Formulation", "Bioavailability"]
  },
  {
    term: "FDA",
    definition: "Food and Drug Administration - the U.S. regulatory agency responsible for protecting public health by ensuring the safety, efficacy, and security of drugs and medical devices.",
    category: "Regulatory",
    related: ["Clinical Trial", "Approval", "Regulation"]
  },
  {
    term: "Generic Drug",
    definition: "A pharmaceutical drug that contains the same active ingredients as the brand-name version but is typically less expensive. Must demonstrate bioequivalence.",
    category: "Pharmaceutical",
    related: ["Bioequivalence", "Brand Name Drug", "Pharmacokinetics"]
  },
  {
    term: "Good Manufacturing Practice",
    definition: "Regulations ensuring that products are consistently produced and controlled according to quality standards. Essential for pharmaceutical and medical device manufacturing.",
    category: "Regulatory",
    related: ["Quality Control", "Validation", "ISO Standards"]
  },
  {
    term: "IND",
    definition: "Investigational New Drug - a request for FDA permission to administer an investigational drug to humans. Required before clinical trials can begin.",
    category: "Regulatory",
    related: ["FDA", "Clinical Trial", "Drug Development"]
  },
  {
    term: "Lead Compound",
    definition: "A chemical compound that shows promise as a potential drug candidate and is selected for further development in drug discovery.",
    category: "Pharmaceutical",
    related: ["Drug Discovery", "Optimization", "Preclinical"]
  },
  {
    term: "NDA",
    definition: "New Drug Application - a request for FDA approval to market a new drug. Includes comprehensive data on safety and efficacy.",
    category: "Regulatory",
    related: ["FDA", "Clinical Trial", "Drug Approval"]
  },
  {
    term: "Pharmacodynamics",
    definition: "The study of the biochemical and physiological effects of drugs on the body or on microorganisms. Complements pharmacokinetics.",
    category: "Pharmaceutical",
    related: ["Pharmacokinetics", "Mechanism of Action", "Drug Response"]
  },
  {
    term: "Pharmacokinetics",
    definition: "The study of how a drug is absorbed, distributed, metabolized, and eliminated by the body. Essential for determining dosage and dosing schedules.",
    category: "Pharmaceutical",
    related: ["Bioavailability", "Half-Life", "Clearance"]
  },
  {
    term: "Phase I",
    definition: "The first phase of clinical testing in humans, typically involving a small group of healthy volunteers to evaluate safety, dosage, and side effects.",
    category: "Clinical Research",
    related: ["Clinical Trial", "Phase II", "Phase III", "Safety"]
  },
  {
    term: "Phase II",
    definition: "The second phase of clinical testing, involving a larger group of patients to evaluate efficacy and further assess safety.",
    category: "Clinical Research",
    related: ["Clinical Trial", "Phase I", "Phase III", "Efficacy"]
  },
  {
    term: "Phase III",
    definition: "The third phase of clinical testing, involving large patient populations to confirm efficacy, monitor side effects, and compare to existing treatments.",
    category: "Clinical Research",
    related: ["Clinical Trial", "Phase I", "Phase II", "Regulatory Approval"]
  },
  {
    term: "Placebo",
    definition: "An inactive substance or procedure designed to control for the psychological effects of active treatments in clinical trials.",
    category: "Clinical Research",
    related: ["Double-Blind Study", "Randomized Controlled Trial", "Clinical Trial"]
  },
  {
    term: "Preclinical",
    definition: "Stage of drug development before human trials, involving laboratory and animal testing to assess safety and biological activity.",
    category: "Clinical Research",
    related: ["Drug Discovery", "Lead Optimization", "Toxicity"]
  },
  {
    term: "Therapeutic Index",
    definition: "A comparison of the amount of a therapeutic agent that causes the therapeutic effect to the amount that causes toxicity. Important for drug safety assessment.",
    category: "Pharmaceutical",
    related: ["Toxicity", "Safety", "Drug Development"]
  },
  {
    term: "Validation",
    definition: "The process of establishing documented evidence that a system, process, or procedure performs as intended. Critical in regulated industries.",
    category: "Quality Systems",
    related: ["Quality Control", "GMP", "Compliance"]
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