import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (delay: number = 100) => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, delay]);
};