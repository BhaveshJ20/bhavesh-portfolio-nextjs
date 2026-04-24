import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [textSlide, setTextSlide] = useState(false);
  const [letterReveal, setLetterReveal] = useState<number[]>([]);

  useEffect(() => {
    // Text slides from top to center with low opacity
    const textTimer = setTimeout(() => {
      setTextSlide(true);
    }, 300);

    // Letter-by-letter opacity reveal starts after text stops
    const letterTimer = setTimeout(() => {
      const letters = ['B', 'h', 'a', 'v', 'e', 's', 'h'];
      letters.forEach((_, index) => {
        setTimeout(() => {
          setLetterReveal(prev => [...prev, index]);
        }, 100 * index); // 100ms delay between each letter
      });
    }, 1200); // Start letter reveal after text animation

    // Hide after 3 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(letterTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #050505 50%, #0a0a0a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          fontWeight: 700,
          overflow: 'hidden',
          display: 'flex',
          width: 'max-content',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          transform: textSlide ? 'translateY(0%)' : 'translateY(-50vh)',
          opacity: textSlide ? 0.3 : 0, // Low opacity when centered
          transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.2s ease-in-out',
          transitionDelay: '0.1s',
        }}
      >
        {/* Letter-by-letter opacity reveal */}
        <div
          style={{
            display: 'flex',
            width: 'max-content',
          }}
        >
          {'Bhavesh'.split('').map((letter, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                backfaceVisibility: 'hidden',
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                fontStyle: 'inherit',
                fontSize: 'inherit',
                letterSpacing: 'inherit',
                lineHeight: '1',
                userSelect: 'none',
                color: letterReveal.includes(index) ? '#ffffff' : '#888888', // Theme gray to white transition
                opacity: letterReveal.includes(index) ? 1 : 0.3, // Individual letter opacity
                transition: 'color 0.4s ease-in-out, opacity 0.4s ease-in-out',
                transitionDelay: `${index * 0.05}s`, // Staggered transition
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
