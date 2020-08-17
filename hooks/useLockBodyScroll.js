import { useEffect } from 'react';

const useLockBodyScroll = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalStyle; };
  }, []);
};

export default useLockBodyScroll;
