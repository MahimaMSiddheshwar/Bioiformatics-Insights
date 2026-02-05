export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: 'bioinformatics' | 'biotechnology' | 'biopharma';
  section: 'overview' | 'fundamentals' | 'techniques' | 'applications' | 'industry' | 'future';
  tags: string[];
  author: string;
  publishDate: string;
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  sections: Section[];
}

export interface Section {
  id: string;
  name: string;
  description: string;
  order: number;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

export interface SearchResult {
  article: Article;
  relevance: number;
  matchedFields: string[];
}