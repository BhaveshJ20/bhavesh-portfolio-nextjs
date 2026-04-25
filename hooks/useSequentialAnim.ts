import { useEffect, useRef } from 'react';

// Custom sequential animation hook with IntersectionObserver
// Animations trigger when section comes into view (only once per view)
// Each element animates sequentially with customizable delay between elements
export default function useSequentialAnim(ref: React.RefObject<HTMLElement>, initialDelay: number = 0, triggerImmediately: boolean = false, elementDelay: number = 300) {
  useEffect(() => {
    if (!ref.current) return;

    let hasAnimated = false;

    const triggerAnimation = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const children = ref.current?.querySelectorAll('.ac');
      if (!children) return;

      // Sequential animation with customizable delay between elements
      children.forEach((child, index) => {
        const htmlChild = child as HTMLElement;
        const delay = initialDelay + (index * elementDelay);
        setTimeout(() => {
          htmlChild.style.opacity = '1';
          htmlChild.style.transform = 'translateY(0)';
        }, delay);
      });
    };

    if (triggerImmediately) {
      triggerAnimation();
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerAnimation();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref, initialDelay, triggerImmediately, elementDelay]);
}
