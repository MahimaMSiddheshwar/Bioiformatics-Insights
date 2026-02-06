export type CategoryKey = 'bioinformatics' | 'biotechnology' | 'biopharma' | 'qc';

export type Topic = {
  slug: string;       // used in URL: /category/:category/:section
  title: string;
  description: string;
  icon: string;       // emoji for now
};

export const isCategoryKey = (v: string): v is CategoryKey =>
  ['bioinformatics', 'biotechnology', 'biopharma', 'qc'].includes(v);

export const categoryMeta: Record<CategoryKey, { title: string; subtitle: string }> = {
  bioinformatics: {
    title: 'Bioinformatics',
    subtitle: 'Genomics, transcriptomics, pipelines, and interpretation.',
  },
  biotechnology: {
    title: 'Biotechnology',
    subtitle: 'Core biotech concepts (lab + applied) explained clearly.',
  },
  biopharma: {
    title: 'Biopharma',
    subtitle: 'Drug discovery, development, and translational concepts.',
  },
  qc: {
    title: 'QC & Compliance',
    subtitle: 'GxP, documentation, deviations, CAPA, and quality systems.',
  },
};

export const topicsByCategory: Record<CategoryKey, Topic[]> = {
  bioinformatics: [
    { slug: 'overview', title: 'Overview', description: 'Basics: what bioinformatics is and why it matters.', icon: '🧬' },
    { slug: 'rna-seq', title: 'RNA-seq', description: 'Bulk RNA-seq workflow from FASTQ → DEG → pathways.', icon: '🧫' },
    { slug: 'scrna-seq', title: 'scRNA-seq', description: 'QC, clustering, annotation, DE, and integration.', icon: '🔬' },
    { slug: 'variant-calling', title: 'Variant Calling', description: 'Reads → BAM/VCF, filtering, annotation, interpretation.', icon: '🧩' },
    { slug: 'gsea-pathways', title: 'GSEA & Pathways', description: 'GO/KEGG/Reactome enrichment and interpretation.', icon: '🧠' },
    { slug: 'pipelines', title: 'Pipelines', description: 'Reproducible workflows: Nextflow/Snakemake, HPC, containers.', icon: '⚙️' },
  ],
  biotechnology: [
    { slug: 'ngs-library-prep', title: 'NGS Library Prep', description: 'Fragmentation, adapters, PCR, QC, pitfalls.', icon: '🧪' },
    { slug: 'pcr-qpcr', title: 'PCR & qPCR', description: 'Ct values, standard curves, troubleshooting.', icon: '🧫' },
    { slug: 'cell-culture', title: 'Cell Culture', description: 'Passaging, contamination control, viability.', icon: '🧬' },
    { slug: 'assays', title: 'Assays', description: 'ELISA, Western, flow basics, assay QC mindset.', icon: '📋' },
  ],
  biopharma: [
    { slug: 'drug-discovery', title: 'Drug Discovery', description: 'Targets → leads → optimization → preclinical.', icon: '💊' },
    { slug: 'clinical-basics', title: 'Clinical Basics', description: 'Phases, endpoints, safety vs efficacy.', icon: '🏥' },
    { slug: 'biologics', title: 'Biologics', description: 'mAbs, immunogenicity, characterization.', icon: '🧫' },
    { slug: 'biomarkers', title: 'Biomarkers', description: 'Discovery to validation and use cases.', icon: '🎯' },
  ],
  qc: [
    { slug: 'gmp-glp', title: 'GMP / GLP', description: 'Core principles + why compliance matters.', icon: '✅' },
    { slug: 'documentation', title: 'Documentation & SOPs', description: 'Good documentation practices and controlled docs.', icon: '📄' },
    { slug: 'deviations-capa', title: 'Deviations & CAPA', description: 'RCA, CAPA, effectiveness checks.', icon: '🛠️' },
    { slug: 'stability', title: 'Stability Testing', description: 'Study design, pulls, trending, reporting.', icon: '⏳' },
  ],
};
