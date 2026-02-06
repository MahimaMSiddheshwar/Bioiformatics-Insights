export type CategoryKey = 'bioinformatics' | 'biotechnology' | 'biopharma' | 'qc';

export type Topic = {
  slug: string;       // /category/:category/:section
  title: string;
  description: string;
  icon: string;       // emoji for now

  // OPTIONAL styling (used for colored cards)
  accent?: string;    // e.g., "text-emerald-700"
  bg?: string;        // e.g., "bg-emerald-50/60"
  border?: string;    // e.g., "border-emerald-200"
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
    subtitle: 'Working of QC department in pharma, GxP, documentation, deviations, CAPA, and quality systems.',
  },
};

export const topicsByCategory: Record<CategoryKey, Topic[]> = {
  bioinformatics: [
    { slug: 'overview', title: 'Overview', description: 'Basics: what bioinformatics is and why it matters.', icon: '🧬', accent: 'text-emerald-800', bg: 'bg-emerald-50/60', border: 'border-emerald-200' },
    { slug: 'rna-seq', title: 'RNA-seq', description: 'Bulk RNA-seq workflow from FASTQ → DEG → pathways.', icon: '🧫', accent: 'text-sky-800', bg: 'bg-sky-50/60', border: 'border-sky-200' },
    { slug: 'scrna-seq', title: 'scRNA-seq', description: 'QC, clustering, annotation, DE, and integration.', icon: '🔬', accent: 'text-violet-800', bg: 'bg-violet-50/60', border: 'border-violet-200' },
    { slug: 'variant-calling', title: 'Variant Calling', description: 'Reads → BAM/VCF, filtering, annotation, interpretation.', icon: '🧩', accent: 'text-amber-800', bg: 'bg-amber-50/60', border: 'border-amber-200' },
    { slug: 'gsea-pathways', title: 'GSEA & Pathways', description: 'GO/KEGG/Reactome enrichment and interpretation.', icon: '🧠', accent: 'text-pink-800', bg: 'bg-pink-50/60', border: 'border-pink-200' },
    { slug: 'pipelines', title: 'Pipelines', description: 'Reproducible workflows: Nextflow/Snakemake, HPC, containers.', icon: '⚙️', accent: 'text-slate-800', bg: 'bg-slate-50/60', border: 'border-slate-200' },
  ],
  biotechnology: [
    { slug: 'ngs-library-prep', title: 'NGS Library Prep', description: 'Fragmentation, adapters, PCR, QC, pitfalls.', icon: '🧪', accent: 'text-purple-800', bg: 'bg-purple-50/60', border: 'border-purple-200' },
    { slug: 'pcr-qpcr', title: 'PCR & qPCR', description: 'Ct values, standard curves, troubleshooting.', icon: '🧫', accent: 'text-fuchsia-800', bg: 'bg-fuchsia-50/60', border: 'border-fuchsia-200' },
    { slug: 'cell-culture', title: 'Cell Culture', description: 'Passaging, contamination control, viability.', icon: '🧬', accent: 'text-emerald-800', bg: 'bg-emerald-50/60', border: 'border-emerald-200' },
    { slug: 'assays', title: 'Assays', description: 'ELISA, Western, flow basics, assay QC mindset.', icon: '📋', accent: 'text-indigo-800', bg: 'bg-indigo-50/60', border: 'border-indigo-200' },
  ],
  biopharma: [
    { slug: 'drug-discovery', title: 'Drug Discovery', description: 'Targets → leads → optimization → preclinical.', icon: '💊', accent: 'text-rose-800', bg: 'bg-rose-50/60', border: 'border-rose-200' },
    { slug: 'clinical-basics', title: 'Clinical Basics', description: 'Phases, endpoints, safety vs efficacy.', icon: '🏥', accent: 'text-red-800', bg: 'bg-red-50/60', border: 'border-red-200' },
    { slug: 'biologics', title: 'Biologics', description: 'mAbs, immunogenicity, characterization.', icon: '🧫', accent: 'text-orange-800', bg: 'bg-orange-50/60', border: 'border-orange-200' },
    { slug: 'biomarkers', title: 'Biomarkers', description: 'Discovery to validation and use cases.', icon: '🎯', accent: 'text-teal-800', bg: 'bg-teal-50/60', border: 'border-teal-200' },
  ],
  qc: [
    { slug: 'gmp-glp', title: 'GMP / GLP', description: 'Core principles + why compliance matters.', icon: '✅', accent: 'text-emerald-800', bg: 'bg-emerald-50/60', border: 'border-emerald-200' },
    { slug: 'documentation', title: 'Documentation & SOPs', description: 'Good documentation practices and controlled docs.', icon: '📄', accent: 'text-slate-800', bg: 'bg-slate-50/60', border: 'border-slate-200' },
    { slug: 'deviations-capa', title: 'Deviations & CAPA', description: 'RCA, CAPA, effectiveness checks.', icon: '🛠️', accent: 'text-amber-800', bg: 'bg-amber-50/60', border: 'border-amber-200' },
    { slug: 'stability', title: 'Stability Testing', description: 'Study design, pulls, trending, reporting.', icon: '⏳', accent: 'text-indigo-800', bg: 'bg-indigo-50/60', border: 'border-indigo-200' },
  ],
};
