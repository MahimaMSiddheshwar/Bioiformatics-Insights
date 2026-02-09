// src/data/topics.ts

export type CategoryKey = 'bioinformatics' | 'biotechnology' | 'biopharma' | 'qc';
export type GroupKey = 'A' | 'B' | 'C' | 'D' | 'E';

export type Topic = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: CategoryKey;
  groupKey: GroupKey;
  groupTitle: string;
};

/* ---------------- CATEGORY HEADERS ---------------- */

export const categoryMeta: Record<CategoryKey, { title: string; subtitle: string }> = {
  bioinformatics: {
    title: 'Bioinformatics',
    subtitle: 'Computation, omics, pipelines, and biological interpretation.',
  },
  biotechnology: {
    title: 'Biotechnology',
    subtitle: 'Molecular biology, biochemistry, cell culture, and immunology.',
  },
  biopharma: {
    title: 'Biopharma',
    subtitle: 'Drug discovery, development, regulation, and translation.',
  },
  qc: {
    title: 'QC & Compliance',
    subtitle: 'Quality systems, audits, data integrity, and GxP.',
  },
};

export const isCategoryKey = (v: string): v is CategoryKey =>
  ['bioinformatics', 'biotechnology', 'biopharma', 'qc'].includes(v);

/* ---------------- ALL TOPICS ---------------- */

export const topics: Topic[] = [
  /* =====================================================
     1️⃣ BIOINFORMATICS
  ===================================================== */

  /* A. Programming & Foundations */
  {
    category: 'bioinformatics',
    groupKey: 'A',
    groupTitle: 'Programming & Foundations',
    slug: 'Python-for-bioinformatics',
    title: 'Python for Bioinformatics',
    description: 'Python fundamentals for genomics and data analysis.',
    icon: '🐍',
  },
  {
    category: 'bioinformatics',
    groupKey: 'A',
    groupTitle: 'Programming & Foundations',
    slug: 'R-for-bioinformatics',
    title: 'R for Bioinformatics',
    description: 'Statistical analysis and visualization using R.',
    icon: '📊',
  },
  {
    category: 'bioinformatics',
    groupKey: 'A',
    groupTitle: 'Programming & Foundations',
    slug: 'Linux-command-line-genomics',
    title: 'Linux & Command Line for Genomics',
    description: 'Working with FASTQ, BAM, VCF files.',
    icon: '💻',
  },
  {
    category: 'bioinformatics',
    groupKey: 'A',
    groupTitle: 'Programming & Foundations',
    slug: 'Git-reproducible-research',
    title: 'Git & Reproducible Research',
    description: 'Version control and clean research workflows.',
    icon: '🔁',
  },
  {
    category: 'bioinformatics',
    groupKey: 'A',
    groupTitle: 'Programming & Foundations',
    slug: 'Statistics-for-bioinformatics',
    title: 'Statistics for Bioinformatics',
    description: 'P-values, FDR, models, and assumptions.',
    icon: '📐',
  },

  /* B. Sequencing & Omics */
  {
    category: 'bioinformatics',
    groupKey: 'B',
    groupTitle: 'Sequencing & Omics',
    slug: 'DNA-sequencing-technologies',
    title: 'DNA Sequencing Technologies',
    description: 'Illumina, ONT, PacBio fundamentals.',
    icon: '🧬',
  },
  {
    category: 'bioinformatics',
    groupKey: 'B',
    groupTitle: 'Sequencing & Omics',
    slug: 'Bulk-rna-seq',
    title: 'Transcriptomics (Bulk RNA-seq)',
    description: 'Expression quantification and DE analysis.',
    icon: '🧪',
  },
  {
    category: 'bioinformatics',
    groupKey: 'B',
    groupTitle: 'Sequencing & Omics',
    slug: 'Single-cell-rna-seq',
    title: 'Single-cell RNA-seq',
    description: 'QC, clustering, annotation.',
    icon: '🔬',
  },
  {
    category: 'bioinformatics',
    groupKey: 'B',
    groupTitle: 'Sequencing & Omics',
    slug: 'Spatial-transcriptomics',
    title: 'Spatial Transcriptomics',
    description: 'Gene expression with spatial context.',
    icon: '🗺️',
  },
  {
    category: 'bioinformatics',
    groupKey: 'B',
    groupTitle: 'Sequencing & Omics',
    slug: 'Epigenomics',
    title: 'Epigenomics (ChIP-seq, ATAC-seq)',
    description: 'Chromatin accessibility and regulation.',
    icon: '🧠',
  },
  {
    category: 'bioinformatics',
    groupKey: 'B',
    groupTitle: 'Sequencing & Omics',
    slug: 'Proteomics',
    title: 'Proteomics',
    description: 'Protein identification and quantification.',
    icon: '🧩',
  },
  {
    category: 'bioinformatics',
    groupKey: 'B',
    groupTitle: 'Sequencing & Omics',
    slug: 'Metabolomics',
    title: 'Metabolomics',
    description: 'Small-molecule profiling and pathways.',
    icon: '⚗️',
  },

  /* C. Analysis & Interpretation */
  {
    category: 'bioinformatics',
    groupKey: 'C',
    groupTitle: 'Analysis & Interpretation',
    slug: 'Differential-expression-analysis',
    title: 'Differential Expression Analysis',
    description: 'Statistical comparison of gene expression.',
    icon: '📈',
  },
  {
    category: 'bioinformatics',
    groupKey: 'C',
    groupTitle: 'Analysis & Interpretation',
    slug: 'Clustering-dimensionality-reduction',
    title: 'Clustering & Dimensionality Reduction',
    description: 'PCA, UMAP, t-SNE.',
    icon: '🧭',
  },
  {
    category: 'bioinformatics',
    groupKey: 'C',
    groupTitle: 'Analysis & Interpretation',
    slug: 'Pathway-network-analysis',
    title: 'Pathway & Network Analysis',
    description: 'Biological interpretation of gene sets.',
    icon: '🕸️',
  },
  {
    category: 'bioinformatics',
    groupKey: 'C',
    groupTitle: 'Analysis & Interpretation',
    slug: 'Machine-learning-bioinformatics',
    title: 'Machine Learning in Bioinformatics',
    description: 'Supervised and unsupervised models.',
    icon: '🤖',
  },
  {
    category: 'bioinformatics',
    groupKey: 'C',
    groupTitle: 'Analysis & Interpretation',
    slug: 'Multi-omics-integration',
    title: 'Multi-omics Integration',
    description: 'Integrating genomics, transcriptomics, proteomics.',
    icon: '🧬',
  },

  /* D. Pipelines & Infrastructure */
  {
    category: 'bioinformatics',
    groupKey: 'D',
    groupTitle: 'Pipelines & Infrastructure',
    slug: 'NGS-preprocessing',
    title: 'NGS Data Preprocessing',
    description: 'QC, trimming, alignment.',
    icon: '🛠️',
  },
  {
    category: 'bioinformatics',
    groupKey: 'D',
    groupTitle: 'Pipelines & Infrastructure',
    slug: 'Workflow-managers',
    title: 'Workflow Managers',
    description: 'Nextflow and Snakemake.',
    icon: '🔗',
  },
  {
    category: 'bioinformatics',
    groupKey: 'D',
    groupTitle: 'Pipelines & Infrastructure',
    slug: 'HPC-cloud-bioinformatics',
    title: 'HPC & Cloud for Bioinformatics',
    description: 'Scalable compute environments.',
    icon: '☁️',
  },
  {
    category: 'bioinformatics',
    groupKey: 'D',
    groupTitle: 'Pipelines & Infrastructure',
    slug: 'Containers',
    title: 'Containers',
    description: 'Docker and Singularity.',
    icon: '📦',
  },
  {
    category: 'bioinformatics',
    groupKey: 'D',
    groupTitle: 'Pipelines & Infrastructure',
    slug: 'Data-standards-metadata',
    title: 'Data Standards & Metadata',
    description: 'GEO, TCGA, FAIR principles.',
    icon: '📚',
  },

  /* E. AI in Bioinformatics */
  {
    category: 'bioinformatics',
    groupKey: 'E',
    groupTitle: 'AI in Bioinformatics',
    slug: 'ML-basics',
    title: 'ML Basics',
    description: 'Foundations of machine learning.',
    icon: '🧠',
  },
  {
    category: 'bioinformatics',
    groupKey: 'E',
    groupTitle: 'AI in Bioinformatics',
    slug: 'AI-agents-biomed',
    title: 'AI Agents in Biomed',
    description: 'Autonomous reasoning systems.',
    icon: '🤝',
  },
  {
    category: 'bioinformatics',
    groupKey: 'E',
    groupTitle: 'AI in Bioinformatics',
    slug: 'LLMs',
    title: 'Large Language Models',
    description: 'LLMs for biology and research.',
    icon: '📜',
  },
  {
    category: 'bioinformatics',
    groupKey: 'E',
    groupTitle: 'AI in Bioinformatics',
    slug: 'NLP-for-papers',
    title: 'NLP for Papers & Notes',
    description: 'Text mining and literature analysis.',
    icon: '📝',
  },

  /* =====================================================
     2️⃣ BIOTECHNOLOGY (ALL INCLUDED)
  ===================================================== */

  /* A. Molecular Biology */
  {
    category: 'biotechnology',
    groupKey: 'A',
    groupTitle: 'Molecular Biology',
    slug: 'DNA-RNA-protein-structure',
    title: 'DNA, RNA, and Protein Structure',
    description: 'Structure-function relationships.',
    icon: '🧬',
  },
  {
    category: 'biotechnology',
    groupKey: 'A',
    groupTitle: 'Molecular Biology',
    slug: 'Transcription-translation',
    title: 'Transcription & Translation',
    description: 'Gene to protein mechanisms.',
    icon: '🧾',
  },
  {
    category: 'biotechnology',
    groupKey: 'A',
    groupTitle: 'Molecular Biology',
    slug: 'Gene-regulation',
    title: 'Gene Regulation',
    description: 'Control of gene expression.',
    icon: '🎛️',
  },
  {
    category: 'biotechnology',
    groupKey: 'A',
    groupTitle: 'Molecular Biology',
    slug: 'CRISPR-genome-editing',
    title: 'CRISPR & Genome Editing',
    description: 'Targeted genome modification.',
    icon: '✂️',
  },

  /* B. Biochemistry */
  {
    category: 'biotechnology',
    groupKey: 'B',
    groupTitle: 'Biochemistry',
    slug: 'Enzyme-kinetics',
    title: 'Enzymes & Kinetics',
    description: 'Reaction rates and mechanisms.',
    icon: '⚙️',
  },
  {
    category: 'biotechnology',
    groupKey: 'B',
    groupTitle: 'Biochemistry',
    slug: 'Metabolic-pathways',
    title: 'Metabolic Pathways',
    description: 'Cellular metabolism.',
    icon: '🔄',
  },
  {
    category: 'biotechnology',
    groupKey: 'B',
    groupTitle: 'Biochemistry',
    slug: 'Protein-folding',
    title: 'Protein Folding & Stability',
    description: 'Structure and thermodynamics.',
    icon: '🧵',
  },
  {
    category: 'biotechnology',
    groupKey: 'B',
    groupTitle: 'Biochemistry',
    slug: 'Buffers-pH-reactions',
    title: 'Buffers, pH, and Reaction Conditions',
    description: 'Experimental optimization.',
    icon: '🧪',
  },

  /* C. Cell & Tissue Culture */
  {
    category: 'biotechnology',
    groupKey: 'C',
    groupTitle: 'Cell & Tissue Culture',
    slug: 'Mammalian-cell-culture',
    title: 'Mammalian Cell Culture',
    description: 'In vitro cell maintenance.',
    icon: '🧫',
  },
  {
    category: 'biotechnology',
    groupKey: 'C',
    groupTitle: 'Cell & Tissue Culture',
    slug: 'Stem-cells',
    title: 'Stem Cells & Differentiation',
    description: 'Pluripotency and lineage commitment.',
    icon: '🌱',
  },
  {
    category: 'biotechnology',
    groupKey: 'C',
    groupTitle: 'Cell & Tissue Culture',
    slug: 'Plant-tissue-culture',
    title: 'Plant Tissue Culture',
    description: 'Callus and regeneration.',
    icon: '🌿',
  },
  {
    category: 'biotechnology',
    groupKey: 'C',
    groupTitle: 'Cell & Tissue Culture',
    slug: 'Primary-vs-cell-lines',
    title: 'Primary vs Cell Lines',
    description: 'Advantages and limitations.',
    icon: '🔍',
  },

  /* D. Immunology */
  {
    category: 'biotechnology',
    groupKey: 'D',
    groupTitle: 'Immunology',
    slug: 'Innate-adaptive-immunity',
    title: 'Innate vs Adaptive Immunity',
    description: 'Immune system overview.',
    icon: '🛡️',
  },
  {
    category: 'biotechnology',
    groupKey: 'D',
    groupTitle: 'Immunology',
    slug: 'Antibodies-antigens',
    title: 'Antibodies & Antigens',
    description: 'Recognition and specificity.',
    icon: '🧬',
  },
  {
    category: 'biotechnology',
    groupKey: 'D',
    groupTitle: 'Immunology',
    slug: 'Immune-cell-types',
    title: 'Immune Cell Types',
    description: 'T cells, B cells, macrophages.',
    icon: '🧫',
  },
  {
    category: 'biotechnology',
    groupKey: 'D',
    groupTitle: 'Immunology',
    slug: 'Immunoassays',
    title: 'Immunoassays (ELISA, Flow)',
    description: 'Immune-based detection methods.',
    icon: '📊',
  },

  /* E. Lab Skills & QA Mindset */
  {
    category: 'biotechnology',
    groupKey: 'E',
    groupTitle: 'Lab Skills & QA Mindset',
    slug: 'GLP',
    title: 'Good Laboratory Practices (GLP)',
    description: 'Laboratory compliance standards.',
    icon: '✅',
  },
  {
    category: 'biotechnology',
    groupKey: 'E',
    groupTitle: 'Lab Skills & QA Mindset',
    slug: 'Experimental-design',
    title: 'Experimental Design',
    description: 'Planning reproducible experiments.',
    icon: '🧠',
  },
  {
    category: 'biotechnology',
    groupKey: 'E',
    groupTitle: 'Lab Skills & QA Mindset',
    slug: 'Wet-lab-troubleshooting',
    title: 'Troubleshooting Wet-lab Experiments',
    description: 'Identifying and fixing failures.',
    icon: '🛠️',
  },
  {
    category: 'biotechnology',
    groupKey: 'E',
    groupTitle: 'Lab Skills & QA Mindset',
    slug: 'Data-integrity-biotech',
    title: 'Data Integrity in Biotech Labs',
    description: 'Accuracy, traceability, and trust.',
    icon: '📁',
  },
  {
    category: 'biopharma',
    groupKey: 'C',
    groupTitle: 'Translational Science',
    slug: 'Pharmacogenomics',
    title: 'Pharmacogenomics',
    description: 'Genetics influencing drug response.',
    icon: '🧬',
  },

  /* D. Regulatory & Quality */
  {
    category: 'biopharma',
    groupKey: 'D',
    groupTitle: 'Regulatory & Quality',
    slug: 'FDA-EMA-basics',
    title: 'FDA / EMA Basics',
    description: 'Global regulatory agencies and approvals.',
    icon: '🏛️',
  },
  {
    category: 'biopharma',
    groupKey: 'D',
    groupTitle: 'Regulatory & Quality',
    slug: 'CMC',
    title: 'CMC (Chemistry, Manufacturing, Controls)',
    description: 'Manufacturing and quality documentation.',
    icon: '📦',
  },
  {
    category: 'biopharma',
    groupKey: 'D',
    groupTitle: 'Regulatory & Quality',
    slug: 'Stability-studies',
    title: 'Stability Studies',
    description: 'Shelf-life and degradation testing.',
    icon: '⏳',
  },
  {
    category: 'biopharma',
    groupKey: 'D',
    groupTitle: 'Regulatory & Quality',
    slug: 'Post-market-surveillance',
    title: 'Post-market Surveillance',
    description: 'Safety monitoring after approval.',
    icon: '🔍',
  },

  /* =====================================================
     4️⃣ QC / COMPLIANCE — FULL
  ===================================================== */

  {
    category: 'qc',
    groupKey: 'A',
    groupTitle: 'Quality Systems',
    slug: 'GMP-GLP-GCP',
    title: 'GMP, GLP, GCP',
    description: 'Comparison of regulated quality systems.',
    icon: '✅',
  },
  {
    category: 'qc',
    groupKey: 'A',
    groupTitle: 'Quality Systems',
    slug: 'Deviations-CAPA',
    title: 'Deviations & CAPA',
    description: 'Root cause analysis and corrective actions.',
    icon: '🧩',
  },
  {
    category: 'qc',
    groupKey: 'A',
    groupTitle: 'Quality Systems',
    slug: 'Change-control',
    title: 'Change Control',
    description: 'Managing controlled changes.',
    icon: '🔁',
  },
  {
    category: 'qc',
    groupKey: 'A',
    groupTitle: 'Quality Systems',
    slug: 'Audit-readiness',
    title: 'Audit Readiness',
    description: 'Preparing for internal and external audits.',
    icon: '📋',
  },
  {
    category: 'qc',
    groupKey: 'A',
    groupTitle: 'Quality Systems',
    slug: 'Batch-records',
    title: 'Batch Records',
    description: 'Manufacturing documentation.',
    icon: '📄',
  },
  {
    category: 'qc',
    groupKey: 'A',
    groupTitle: 'Quality Systems',
    slug: 'Data-integrity-ALCOA',
    title: 'Data Integrity (ALCOA+)',
    description: 'Accurate, complete, and traceable data.',
    icon: '🔐',
  },
];
