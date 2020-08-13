import { useRef } from 'react';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  const aboutRef = useRef(null);

  return (
    <>
      <Intro onScrollClick={() => scrollToRef(aboutRef)} />
      <About ref={aboutRef} />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
