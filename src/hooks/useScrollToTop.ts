import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (delay: number = 100) => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.hash, delay]);
};