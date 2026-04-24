import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Custom404() {
  const [dark, setDark] = useState(true);
  const router = useRouter();

  // Theme colors
  const T = dark ? {
    bg: '#0A0A0A',
    text: '#ffffff',
    muted: 'rgba(240,237,232,.5)',
    accent: '#FF3CAC',
    secondary: '#00D4FF',
    tertiary: '#FFEA00',
  } : {
    bg: '#ffffff',
    text: '#ffffff',
    muted: 'rgba(240,237,232,.5)',
    accent: '#FF3CAC',
    secondary: '#00D4FF',
    tertiary: '#FFEA00',
  };

  // Check for theme preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        setDark(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', !dark ? 'dark' : 'light');
    }
  };

  return (
    <div className={dark ? "" : "lm"} style={{ 
      fontFamily: "'Syne', sans-serif", 
      background: T.bg, 
      color: T.text, 
      minHeight: "100vh", 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background .35s, color .35s'
    }}>
      {/* Space background - full page */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(ellipse at center, ${dark ? '#0a0a1a' : '#1a1a2e'} 0%, ${dark ? '#050510' : '#0a0a15'} 50%, ${dark ? '#020205' : '#050510'} 100%)`,
        overflow: 'hidden',
        zIndex: 0
      }}>
        {/* Animated stars */}
        {[...Array(60)].map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const distanceFromCenter = Math.sqrt(Math.pow(top - 50, 2) + Math.pow(left - 50, 2));
          const maxDistance = Math.sqrt(Math.pow(50, 2) + Math.pow(50, 2));
          const proximityFactor = 1 - (distanceFromCenter / maxDistance);
          const baseOpacity = 0.15 + Math.random() * 0.25;
          const adjustedOpacity = baseOpacity * (0.3 + proximityFactor * 0.7);
          
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                background: Math.random() > 0.5 ? '#C0C0C0' : T.tertiary,
                borderRadius: '50%',
                top: `${top}%`,
                left: `${left}%`,
                opacity: adjustedOpacity,
                animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          );
        })}
        {/* Nebula effects */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${T.accent}15, transparent 70%)`,
          top: '10%',
          left: '5%',
          filter: 'blur(80px)',
          animation: 'float 15s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          background: `radial-gradient(circle, ${T.secondary}12, transparent 70%)`,
          top: '20%',
          right: '10%',
          filter: 'blur(70px)',
          animation: 'float 18s ease-in-out infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${T.tertiary}10, transparent 70%)`,
          bottom: '10%',
          left: '20%',
          filter: 'blur(60px)',
          animation: 'float 20s ease-in-out infinite'
        }} />
        
        {/* Animated rings */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          border: `1px solid ${T.accent}20`,
          borderRadius: '50%',
          animation: 'spin 40s linear infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          border: `1px solid ${T.secondary}15`,
          borderRadius: '50%',
          animation: 'spin 50s linear infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          border: `1px solid ${T.tertiary}10`,
          borderRadius: '50%',
          animation: 'spin 60s linear infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          border: `2px solid ${T.accent}15`,
          borderRadius: '50%',
          animation: 'spin 35s linear infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          border: `1px solid ${T.secondary}10`,
          borderRadius: '50%',
          animation: 'spin 70s linear infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
          height: '1000px',
          border: `1px solid ${T.accent}08`,
          borderRadius: '50%',
          animation: 'spin 80s linear infinite reverse'
        }} />
        
        {/* Pulsing effects from rings area */}
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.6) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 3s ease-out infinite',
          animationDelay: '0s'
        }} />
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 3s ease-out infinite',
          animationDelay: '0.6s'
        }} />
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(255, 234, 0, 0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 3s ease-out infinite',
          animationDelay: '1.2s'
        }} />
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(135, 206, 235, 0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 3s ease-out infinite',
          animationDelay: '1.8s'
        }} />
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 3s ease-out infinite',
          animationDelay: '2.4s'
        }} />
        
        {/* Random pulsing effects on background */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '20%',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(0, 255, 127, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 4s ease-out infinite',
          animationDelay: '0.5s'
        }} />
        <div style={{
          position: 'absolute',
          top: '75%',
          left: '80%',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, rgba(255, 69, 0, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 3.5s ease-out infinite',
          animationDelay: '1s'
        }} />
        <div style={{
          position: 'absolute',
          top: '85%',
          left: '15%',
          width: '70px',
          height: '70px',
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 4.5s ease-out infinite',
          animationDelay: '1.5s'
        }} />
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '85%',
          width: '90px',
          height: '90px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 5s ease-out infinite',
          animationDelay: '2s'
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          left: '10%',
          width: '50px',
          height: '50px',
          background: 'radial-gradient(circle, rgba(0, 191, 255, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulseRing 3.8s ease-out infinite',
          animationDelay: '2.5s'
        }} />
        
        {/* Space clouds */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '200px',
          height: '80px',
          background: `radial-gradient(ellipse, ${T.text}08, transparent 70%)`,
          filter: 'blur(30px)',
          animation: 'floatCloud 25s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '70%',
          right: '15%',
          width: '180px',
          height: '70px',
          background: `radial-gradient(ellipse, ${T.secondary}08, transparent 70%)`,
          filter: 'blur(25px)',
          animation: 'floatCloud 30s ease-in-out infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '150px',
          height: '60px',
          background: `radial-gradient(ellipse, ${T.accent}06, transparent 70%)`,
          filter: 'blur(20px)',
          animation: 'floatCloud 20s ease-in-out infinite'
        }} />
        
        {/* Animated Rocket */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-100px',
          animation: 'flyRocket 20s linear infinite'
        }}>
          <svg width="60" height="80" viewBox="0 0 60 80">
            <path d="M30 5 L40 25 L50 35 L45 40 L40 35 L40 55 L45 60 L40 65 L35 60 L35 75 L25 75 L25 60 L20 65 L15 60 L20 55 L20 35 L15 40 L10 35 L20 25 L30 5Z" fill={T.accent} opacity="0.6" />
            <circle cx="30" cy="30" r="8" fill={T.secondary} opacity="0.8" />
            <path d="M25 75 L30 85 L35 75" fill={T.tertiary} opacity="0.7" />
          </svg>
        </div>
        
        {/* Animated Satellite */}
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '-80px',
          animation: 'flySatellite 25s linear infinite reverse'
        }}>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <rect x="20" y="15" width="10" height="20" fill={T.text} opacity="0.5" />
            <rect x="5" y="22" width="15" height="6" fill={T.secondary} opacity="0.6" />
            <rect x="30" y="22" width="15" height="6" fill={T.secondary} opacity="0.6" />
            <circle cx="25" cy="25" r="5" fill={T.accent} opacity="0.7" />
          </svg>
        </div>
        
        {/* Animated UFO */}
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '-60px',
          animation: 'flyUFO 30s linear infinite'
        }}>
          <svg width="60" height="30" viewBox="0 0 60 30">
            <ellipse cx="30" cy="20" rx="25" ry="8" fill={T.text} opacity="0.4" />
            <ellipse cx="30" cy="15" rx="15" ry="10" fill={T.secondary} opacity="0.5" />
            <circle cx="20" cy="12" r="3" fill={T.accent} opacity="0.6" />
            <circle cx="30" cy="10" r="3" fill={T.accent} opacity="0.6" />
            <circle cx="40" cy="12" r="3" fill={T.accent} opacity="0.6" />
          </svg>
        </div>
        
        {/* Shooting Star */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '20%',
          animation: 'shootingStar 8s ease-in-out infinite'
        }}>
          <svg width="40" height="4" viewBox="0 0 40 4">
            <defs>
              <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={T.tertiary} stopOpacity="0" />
                <stop offset="100%" stopColor={T.tertiary} stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect width="40" height="4" fill="url(#starGrad)" />
          </svg>
        </div>
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        aria-label="Toggle theme"
        style={{ 
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: "none", 
          border: "none", 
          cursor: 'pointer', 
          padding: "8px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          zIndex: 10
        }}
      >
        {dark ? (
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
            {[0,45,90,135,180,225,270,315].map((deg, i) => (
              <line key={i}
                x1={14 + 9*Math.cos(deg*Math.PI/180)} y1={14 + 9*Math.sin(deg*Math.PI/180)}
                x2={14 + 12.5*Math.cos(deg*Math.PI/180)} y2={14 + 12.5*Math.sin(deg*Math.PI/180)}
                stroke="#FFEA00" strokeWidth="2.2" strokeLinecap="round"
              />
            ))}
            <circle cx="14" cy="14" r="7" fill="#FFEA00" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
            <path d="M13 5 C7.48 5 3 9.48 3 15 C3 20.52 7.48 25 13 25 C16.2 25 19.02 23.44 20.8 21 C19.6 21.64 18.24 22 16.8 22 C12.16 22 8.4 18.24 8.4 13.6 C8.4 10 10.4 6.88 13.36 5.2 C13.24 5.08 13.12 5 13 5Z" fill="#C8B4FF" />
          </svg>
        )}
      </button>

      {/* Main content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        textAlign: 'center',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Illustration - Lost Astronaut */}
        <div style={{ 
          position: 'relative',
          width: 'clamp(250px, 45vw, 350px)',
          height: 'clamp(250px, 45vw, 350px)',
          animation: 'float 6s ease-in-out infinite',
          overflow: 'visible'
        }}>
          {/* Bulb light beam from left hand */}
          <div style={{
            position: 'absolute',
            top: '55%',
            left: '5%',
            width: '30%',
            height: '150px',
            background: `conic-gradient(from 150deg at 0% 50%, transparent 0deg, rgba(255, 255, 200, 0.3) 30deg, rgba(255, 255, 150, 0.15) 60deg, transparent 90deg)`,
            filter: 'blur(30px)',
            animation: 'bulbGlow 2s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: -1,
            transform: 'rotate(-15deg)'
          }} />
          
          <svg viewBox="0 0 500 500" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            {/* Planet */}
            <circle cx="250" cy="250" r="120" fill={T.text} opacity="0.05" />
            <circle cx="250" cy="250" r="100" fill={T.text} opacity="0.08" />
            
            {/* Ring around planet */}
            <ellipse cx="250" cy="250" rx="180" ry="40" 
              fill="none" 
              stroke={T.accent} 
              strokeWidth="2" 
              opacity="0.3"
              transform="rotate(-20 250 250)"
              style={{ animation: 'spin 30s linear infinite' }}
            />
            
            {/* Stars */}
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={50 + Math.random() * 400}
                cy={50 + Math.random() * 400}
                r={1 + Math.random() * 2}
                fill={T.tertiary}
                opacity={0.3 + Math.random() * 0.4}
                style={{ animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite` }}
              />
            ))}
            
            {/* Astronaut body */}
            <g style={{ animation: 'float 4s ease-in-out infinite' }}>
              {/* Helmet */}
              <circle cx="250" cy="230" r="60" fill={T.text} opacity="0.1" />
              <circle cx="250" cy="230" r="50" fill={T.text} opacity="0.15" />
              <circle cx="250" cy="230" r="40" fill={T.text} opacity="0.2" />
              
              {/* Visor */}
              <ellipse cx="250" cy="225" rx="35" ry="30" fill={T.secondary} opacity="0.6" />
              <ellipse cx="250" cy="225" rx="30" ry="25" fill={T.secondary} opacity="0.8" />
              
              {/* Visor reflection */}
              <ellipse cx="240" cy="215" rx="10" ry="8" fill="#ffffff" opacity="0.3" />
              
              {/* Body */}
              <rect x="220" y="270" width="60" height="80" rx="10" fill={T.text} opacity="0.15" />
              
              {/* Arms */}
              <rect x="190" y="280" width="30" height="50" rx="8" fill={T.text} opacity="0.12" transform="rotate(-20 205 305)" />
              <rect x="280" y="280" width="30" height="50" rx="8" fill={T.text} opacity="0.12" transform="rotate(20 295 305)" />
              
              {/* Legs */}
              <rect x="225" y="340" width="20" height="40" rx="6" fill={T.text} opacity="0.12" />
              <rect x="255" y="340" width="20" height="40" rx="6" fill={T.text} opacity="0.12" />
              
              {/* Backpack */}
              <rect x="285" y="280" width="25" height="50" rx="5" fill={T.accent} opacity="0.3" />
            </g>
            
            {/* Floating elements */}
            <g style={{ animation: 'float 5s ease-in-out infinite reverse' }}>
              <circle cx="150" cy="150" r="8" fill={T.accent} opacity="0.5" />
              <circle cx="350" cy="170" r="6" fill={T.secondary} opacity="0.5" />
              <circle cx="330" cy="350" r="10" fill={T.tertiary} opacity="0.4" />
            </g>
            
            {/* 404 Text integrated */}
            <text x="250" y="430" 
              textAnchor="middle" 
              className="error-404"
              fill={T.text}
            >
              404
            </text>
          </svg>
        </div>

        {/* Message */}
        <div style={{ maxWidth: '500px' }}>
          <h2 className="text-primary error-title">
            Lost in <span className='grad'>Space</span>
          </h2>
          
          <p className="error-description">
            The page you're looking for has drifted into the cosmic void. Don't worry, we'll help you find your way back home.
          </p>
        </div>

        {/* Action buttons with theme styles */}
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              console.log('Go Home clicked');
              router.push('/');
            }}
            className="bo error-btn"
            type="button"
          >
            Go Home
          </button>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              console.log('Go Back clicked');
              router.back();
            }}
            className="bo error-btn"
            type="button"
          >
            Go Back
          </button>
        </div>

        {/* Navigation links */}
        <div style={{ 
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/work" style={{ 
            color: T.muted, 
            textDecoration: 'none',
            fontSize: '14px',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'color 0.2s',
            position: 'relative'
          }}>
            Work
          </Link>
          <Link href="/about" style={{ 
            color: T.muted, 
            textDecoration: 'none',
            fontSize: '14px',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'color 0.2s',
            position: 'relative'
          }}>
            About
          </Link>
          <Link href="/contact" style={{ 
            color: T.muted, 
            textDecoration: 'none',
            fontSize: '14px',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'color 0.2s',
            position: 'relative',
          }}>
            Contact
          </Link>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx global>{`
        .lm {
          --bg: #ffffff;
          --text: #0A0A0A;
        }
      `}</style>
    </div>
  );
}
