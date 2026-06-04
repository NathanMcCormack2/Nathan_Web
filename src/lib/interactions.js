import { useEffect, useRef, useState } from 'react';

/**
 * IntersectionObserver-based reveal. Adds `is-in` to the element when it
 * enters the viewport. Pair with CSS that transitions from a hidden state.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (shown) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            el.classList.add('is-in');
            obs.unobserve(el);
          }
        });
      },
      { threshold: options.threshold ?? 0.18, rootMargin: options.rootMargin ?? '0px 0px -8% 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [shown, options.threshold, options.rootMargin]);

  return ref;
}

/**
 * Magnetic pull effect — element drifts toward the cursor while hovered.
 * Returns a ref to attach to the target element.
 */
export function useMagnetic(strength = 0.32) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = null;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const animate = () => {
      curX += (targetX - curX) * 0.18;
      curY += (targetY - curY) * 0.18;
      el.style.transform = `translate(${curX}px, ${curY}px)`;
      if (Math.abs(targetX - curX) > 0.1 || Math.abs(targetY - curY) > 0.1) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = null;
      }
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      targetX = relX * strength;
      targetY = relY * strength;
      if (!raf) raf = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!raf) raf = requestAnimationFrame(animate);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}

/**
 * Parallax: translates the element on Y as the page scrolls, driven by the
 * shared Lenis loop (falls back to scroll events).
 */
export function useParallax(speed = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = (scroll) => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${center * -speed}px, 0)`;
    };

    if (window.__lenis) {
      const handler = ({ scroll }) => apply(scroll);
      window.__lenis.on('scroll', handler);
      apply(window.scrollY);
      return () => window.__lenis && window.__lenis.off('scroll', handler);
    }

    const onScroll = () => apply(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    apply(window.scrollY);
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}
