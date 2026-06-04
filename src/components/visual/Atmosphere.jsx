import { useEffect, useRef, useState } from 'react';

/**
 * A bespoke cursor: a small dot + a trailing ring that grows on
 * interactive elements. Disabled on touch devices. Also renders a
 * thin scroll-progress line pinned to the top of the viewport.
 */
export default function Atmosphere() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const barRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (dot) dot.style.transform = `translate(${mx}px, ${my}px)`;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onOver = (e) => {
      const t = e.target.closest('a, button, [data-cursor="grow"]');
      if (ring) ring.classList.toggle('is-grow', !!t);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    if (window.__lenis) {
      window.__lenis.on('scroll', update);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      if (window.__lenis) window.__lenis.off('scroll', update);
    };
  }, []);

  return (
    <>
      <div className="nx-progress" ref={barRef} aria-hidden="true" />
      {enabled && (
        <>
          <div className="nx-cursor-dot" ref={dotRef} aria-hidden="true" />
          <div className="nx-cursor-ring" ref={ringRef} aria-hidden="true" />
        </>
      )}
    </>
  );
}
