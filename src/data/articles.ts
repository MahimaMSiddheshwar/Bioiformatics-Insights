import { Article } from '../types/article';

export const articles: Article[] = [
  {
    id: 'bio-001',
    slug: 'what-is-bioinformatics-introduction',
    title: 'What is Bioinformatics? An Introduction to the Field',
    category: 'bioinformatics',
    section: 'overview',
    difficulty: 'beginner',
    readTime: '6 min',
    author: 'Bioinformatics Insights',
    publishDate: 'Feb 2026',
    summary:
      'An introductory overview of bioinformatics and its role in modern biological research.',
    sections: [
      {
        heading: 'What is Bioinformatics?',
        text:
          'Bioinformatics is an interdisciplinary field that combines biology, computer science, and statistics to analyze and interpret biological data.',
      },
      {
        heading: 'DNA, RNA, and Proteins',
        text:
          'DNA stores genetic information, RNA acts as a messenger, and proteins perform essential cellular functions.',
        image: '/images/biology/dna.png',
      },
      {
        heading: 'RNA and Gene Expression',
        text:
          'RNA sequencing generates large datasets that require computational analysis.',
        image: '/images/biology/rna.png',
      },
      {
        heading: 'Proteins and Function',
        text:
          'Proteins determine cellular behavior and biological outcomes.',
        image: '/images/biology/protein.png',
      },
    ],
  },

  {
    id: 'bio-002',
    slug: 'rna-seq-fastq-to-deg',
    title: 'RNA-seq: FASTQ to Differential Expression',
    category: 'bioinformatics',
    section: 'rna-seq',
    difficulty: 'beginner',
    readTime: '8 min',
    author: 'Bioinformatics Insights',
    publishDate: 'Feb 2026',
    summary: 'Step-by-step RNA-seq pipeline explained clearly.',
    sections: [
      {
        heading: 'Overview',
        text:
          'This article explains the RNA-seq workflow from raw FASTQ files to differential gene expression analysis.',
      },
    ],
  },
];
