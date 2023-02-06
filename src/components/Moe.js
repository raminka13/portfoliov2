import React from 'react';
import moe from '../Assets/moe.jpg';
import useElementOnScreen from '../useElementOnScreen';
import './moe.css';

function Moe() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  return (
    <div className="app">
      <div className="isVisible">{isVisible ? 'IN VIEWPORT' : 'NOT IN VIEWPORT'}</div>

      <div className="box" ref={containerRef}><img src={moe} alt="moe" /></div>
    </div>
  );
}

export default Moe;
