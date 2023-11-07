import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();
  // scroll to top when re-render or url changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
};

export default useScrollToTop;
