export interface ArticleSection {
  heading: string;
  text: string;
  image?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  section: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: string;
  author: string;
  publishDate: string;
  summary: string;
  sections: ArticleSection[];
}
