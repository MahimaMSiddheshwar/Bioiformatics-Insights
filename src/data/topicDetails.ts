// src/data/topicDetails.ts

export type TopicFigure = {
  src: string;
  alt: string;
  caption?: string;
};

export type TopicDetail = {
  slug: string;
  summary: string;
  content: string[];
  figures?: TopicFigure[];
};

export const topicDetails: TopicDetail[] = [
  {
    slug: 'python-for-bioinformatics',
    summary:
      'Python is widely used in bioinformatics for data processing, automation, and analysis.',
    content: [
      'Python enables scalable genomic data analysis.',
      'Libraries such as NumPy, Pandas, and Biopython are widely used.',
      'Python integrates well with pipelines and cloud systems.',
    ],
    figures: [
      {
        src: '/images/python-bioinformatics.png',
        alt: 'Python bioinformatics workflow',
        caption: 'Typical Python-based genomics workflow',
      },
    ],
  },

  {
    slug: 'dna-sequencing-technologies',
    summary:
      'Modern sequencing platforms differ in accuracy, read length, and throughput.',
    content: [
      'Illumina produces short but accurate reads.',
      'Oxford Nanopore enables long-read sequencing.',
      'PacBio offers high-fidelity long reads.',
    ],
  },
];
