import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Mounts a single Lenis smooth-scroll instance for the whole app.
 * Exposes the instance via a ref and on window so other modules
 * (scroll-reveal, parallax) can subscribe to the same RAF loop.
 */
export default function useLenis(disabled = false) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (disabled) return undefined;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      lerp: 0.09,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [disabled]);

  return lenisRef;
}

/** Scroll helper that routes through Lenis when present. */
export function scrollToTop() {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { immediate: false, duration: 0.9 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
