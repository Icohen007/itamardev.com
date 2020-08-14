import React, { useMemo, useRef } from 'react';

export const ScrollContext = React.createContext({});
export const scrollToRef = (ref) => {
  if (ref.current) {
    window.scrollTo(0, ref.current.offsetTop);
  }
};

const ScrollProvider = ({ children }) => {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRefs = useMemo(() => ({
    introRef, aboutRef, projectsRef, contactRef,
  }), [introRef, aboutRef, projectsRef, contactRef]);

  return (
    <ScrollContext.Provider value={scrollRefs}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
