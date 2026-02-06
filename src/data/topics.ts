export type CategoryKey = 'bioinformatics' | 'biotechnology' | 'biopharma' | 'qc';

export type Topic = {
  slug: string;       // used in URL: /category/:category/:section
  title: string;
  description: string;
  icon: string;       // emoji for now

  // ✅ NEW (for colored cards)
  accent?: string;    // text color for title + CTA
  bg?: string;        // background gradient
  border?: string;    // border color
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
    {
      slug: 'overview',
      title: 'Overview',
      description: 'Basics: what bioinformatics is and why it matters.',
      icon: '🧬',
      accent: 'text-emerald-700',
      bg: 'bg-gradient-to-br from-emerald-50 to-white',
      border: 'border-emerald-100',
    },
    {
      slug: 'rna-seq',
      title: 'RNA-seq',
      description: 'Bulk RNA-seq workflow from FASTQ → DEG → pathways.',
      icon: '🧫',
      accent: 'text-sky-700',
      bg: 'bg-gradient-to-br from-sky-50 to-white',
      border: 'border-sky-100',
    },
    {
      slug: 'scrna-seq',
      title: 'scRNA-seq',
      description: 'QC, clustering, annotation, DE, and integration.',
      icon: '🔬',
      accent: 'text-violet-700',
      bg: 'bg-gradient-to-br from-violet-50 to-white',
      border: 'border-violet-100',
    },
    {
      slug: 'variant-calling',
      title: 'Variant Calling',
      description: 'Reads → BAM/VCF, filtering, annotation, interpretation.',
      icon: '🧩',
      accent: 'text-lime-700',
      bg: 'bg-gradient-to-br from-lime-50 to-white',
      border: 'border-lime-100',
    },
    {
      slug: 'gsea-pathways',
      title: 'GSEA & Pathways',
      description: 'GO/KEGG/Reactome enrichment and interpretation.',
      icon: '🧠',
      accent: 'text-pink-700',
      bg: 'bg-gradient-to-br from-pink-50 to-white',
      border: 'border-pink-100',
    },
    {
      slug: 'pipelines',
      title: 'Pipelines',
      description: 'Reproducible workflows: Nextflow/Snakemake, HPC, containers.',
      icon: '⚙️',
      accent: 'text-slate-700',
      bg: 'bg-gradient-to-br from-slate-50 to-white',
      border: 'border-slate-200',
    },
  ],

  biotechnology: [
    {
      slug: 'ngs-library-prep',
      title: 'NGS Library Prep',
      description: 'Fragmentation, adapters, PCR, QC, pitfalls.',
      icon: '🧪',
      accent: 'text-amber-700',
      bg: 'bg-gradient-to-br from-amber-50 to-white',
      border: 'border-amber-100',
    },
    {
      slug: 'pcr-qpcr',
      title: 'PCR & qPCR',
      description: 'Ct values, standard curves, troubleshooting.',
      icon: '🧫',
      accent: 'text-rose-700',
      bg: 'bg-gradient-to-br from-rose-50 to-white',
      border: 'border-rose-100',
    },
    {
      slug: 'cell-culture',
      title: 'Cell Culture',
      description: 'Passaging, contamination control, viability.',
      icon: '🧬',
      accent: 'text-teal-700',
      bg: 'bg-gradient-to-br from-teal-50 to-white',
      border: 'border-teal-100',
    },
    {
      slug: 'assays',
      title: 'Assays',
      description: 'ELISA, Western, flow basics, assay QC mindset.',
      icon: '📋',
      accent: 'text-indigo-700',
      bg: 'bg-gradient-to-br from-indigo-50 to-white',
      border: 'border-indigo-100',
    },
  ],

  biopharma: [
    {
      slug: 'drug-discovery',
      title: 'Drug Discovery',
      description: 'Targets → leads → optimization → preclinical.',
      icon: '💊',
      accent: 'text-fuchsia-700',
      bg: 'bg-gradient-to-br from-fuchsia-50 to-white',
      border: 'border-fuchsia-100',
    },
    {
      slug: 'clinical-basics',
      title: 'Clinical Basics',
      description: 'Phases, endpoints, safety vs efficacy.',
      icon: '🏥',
      accent: 'text-cyan-700',
      bg: 'bg-gradient-to-br from-cyan-50 to-white',
      border: 'border-cyan-100',
    },
    {
      slug: 'biologics',
      title: 'Biologics',
      description: 'mAbs, immunogenicity, characterization.',
      icon: '🧫',
      accent: 'text-purple-700',
      bg: 'bg-gradient-to-br from-purple-50 to-white',
      border: 'border-purple-100',
    },
    {
      slug: 'biomarkers',
      title: 'Biomarkers',
      description: 'Discovery to validation and use cases.',
      icon: '🎯',
      accent: 'text-emerald-700',
      bg: 'bg-gradient-to-br from-emerald-50 to-white',
      border: 'border-emerald-100',
    },
  ],

  qc: [
    {
      slug: 'gmp-glp',
      title: 'GMP / GLP',
      description: 'Core principles + why compliance matters.',
      icon: '✅',
      accent: 'text-blue-700',
      bg: 'bg-gradient-to-br from-blue-50 to-white',
      border: 'border-blue-100',
    },
    {
      slug: 'documentation',
      title: 'Documentation & SOPs',
      description: 'Good documentation practices and controlled docs.',
      icon: '📄',
      accent: 'text-slate-700',
      bg: 'bg-gradient-to-br from-slate-50 to-white',
      border: 'border-slate-200',
    },
    {
      slug: 'deviations-capa',
      title: 'Deviations & CAPA',
      description: 'RCA, CAPA, effectiveness checks.',
      icon: '🛠️',
      accent: 'text-orange-700',
      bg: 'bg-gradient-to-br from-orange-50 to-white',
      border: 'border-orange-100',
    },
    {
      slug: 'stability',
      title: 'Stability Testing',
      description: 'Study design, pulls, trending, reporting.',
      icon: '⏳',
      accent: 'text-teal-700',
      bg: 'bg-gradient-to-br from-teal-50 to-white',
      border: 'border-teal-100',
    },
  ],
};
