// src/data/types.ts

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