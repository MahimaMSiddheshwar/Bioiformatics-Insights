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
];
