import { useEffect } from 'react';

const SITE_NAME = 'BioinformaticsInsights';
const DEFAULT_TITLE = `${SITE_NAME} — Scientific Learning Platform`;
const DEFAULT_DESCRIPTION =
  'BioinformaticsInsights is a scientific learning platform covering bioinformatics, biotechnology, biopharma, and quality control through interactive learning paths, expert insights, and comprehensive reference resources.';

export const useDocumentTitle = (title?: string, description?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }
  }, [title, description]);
};
