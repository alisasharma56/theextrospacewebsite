import { useEffect, useRef, useState } from 'react';

export function useScrollProgress(tunnelHeight: number): number {
  const [smoothed, setSmoothed] = useState(0);
  const rawRef      = useRef(0);
  const smoothedRef = useRef(0);
  const rafRef      = useRef<number | null>(null);

  useEffect(() => {
    const SPRING = 0.08; // gentle spring — feels cinematic

    const tick = () => {
      const diff = rawRef.current - smoothedRef.current;
      if (Math.abs(diff) > 0.00005) {
        smoothedRef.current += diff * SPRING;
        setSmoothed(smoothedRef.current);
        rafRef.current = requestAnimationFrame(tick);
      } else {
        smoothedRef.current = rawRef.current;
        setSmoothed(rawRef.current);
        rafRef.current = null;
      }
    };

    const onScroll = () => {
      rawRef.current = Math.min(Math.max(window.scrollY / tunnelHeight, 0), 1);
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [tunnelHeight]);

  return smoothed;
}