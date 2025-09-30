import { useEffect } from 'react';

export function useReveal(selector = '.reveal', threshold = 0.15) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const io = new IntersectionObserver((ents) => {
      for (const e of ents) {
        if (e.isIntersecting) {
          e.target.classList.add('in'); 
          io.unobserve(e.target);       
        }
      }
    }, { threshold });

    document.querySelectorAll(selector).forEach((el) => io.observe(el));

    return () => io.disconnect();

  }, []); // <- 처음 한 번만
}