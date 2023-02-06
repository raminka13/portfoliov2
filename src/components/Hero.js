import React from 'react';
import useElementOnScreen from '../useElementOnScreen';

const Hero = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  return (
    <div className="container">
      <h1 className={isVisible ? 'title reveal' : 'title'}>Raul Ospina</h1>
      <h2 className={isVisible ? 'subtitle reveal2' : 'subtitle'} ref={containerRef}>Full Stack Developer</h2>
    </div>
  );
};

export default Hero;
