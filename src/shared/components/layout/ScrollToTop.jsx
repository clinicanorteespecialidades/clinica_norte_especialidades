import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ behavior = 'auto' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll for accessibility; smooth can be used if preferred
    if (typeof window !== 'undefined' && window.scrollTo) {
      // try smooth scroll; if browser doesn't support options it will ignore
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop;
