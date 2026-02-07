// src/data/learningPaths.ts

import { topics } from './topics';

export const learningPaths = {
  beginner: topics.slice(0, 3),
  intermediate: topics.slice(3, 6),
  advanced: topics.slice(6),
};
