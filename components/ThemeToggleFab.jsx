import { useState } from "react";

function ThemeToggleFab({ dark, setDark }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      className="theme-fab"
      onClick={() => setDark(d => !d)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle theme"
    >
      {dark ? (
        /* ☀️ SUN with animated rays + cute eyes — shown in dark mode (click → go light) */
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          {/* Rays — 8 animated lines */}
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <line key={i} className="sun-ray"
              x1={14 + 9*Math.cos(deg*Math.PI/180)} y1={14 + 9*Math.sin(deg*Math.PI/180)}
              x2={14 + 12.5*Math.cos(deg*Math.PI/180)} y2={14 + 12.5*Math.sin(deg*Math.PI/180)}
              stroke="#FFEA00" strokeWidth="2.2" strokeLinecap="round"
            />
          ))}
          {/* Sun body */}
          <circle cx="14" cy="14" r="7" fill="#FFEA00" />
          {/* Left eye (blinks) */}
          <g className="sun-eye">
            <ellipse cx="11.5" cy="13.5" rx="1.2" ry="1.4" fill="#0A0A0A" />
            {/* Highlight */}
            <circle cx="12" cy="13" r="0.4" fill="white" opacity="0.8" />
          </g>
          {/* Right eye (blinks, offset) */}
          <g style={{ animation: "eyesBlink 3s 0.4s ease-in-out infinite" }}>
            <ellipse cx="16.5" cy="13.5" rx="1.2" ry="1.4" fill="#0A0A0A" />
            <circle cx="17" cy="13" r="0.4" fill="white" opacity="0.8" />
          </g>
          {/* Pupils looking around */}
          <circle className="sun-pupil" cx="11.5" cy="13.8" r="0.55" fill="#4A0030" />
          <circle style={{ animation: "eyeLook 2.2s 0.3s ease-in-out infinite" }} cx="16.5" cy="13.8" r="0.55" fill="#4A0030" />
          {/* Smile */}
          <path d="M11.2 16.5 Q14 18.5 16.8 16.5" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>
      ) : (
        /* 🌙 MOON — elegant crescent with sleepy face — shown in light mode (click → go dark) */
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          {/* Outer glow circle */}
          <circle cx="14" cy="14" r="12" fill="rgba(123,47,255,.08)" className="moon-icon" />
          {/* Crescent: big circle minus offset circle */}
          <circle cx="13" cy="14" r="9" fill="#C8B4FF" className="moon-icon" />
          <circle cx="17.5" cy="11" r="7" fill="transparent" style={{ mixBlendMode: "normal" }} />
          {/* The actual crescent shape */}
          <path d="M13 5 C7.48 5 3 9.48 3 15 C3 20.52 7.48 25 13 25 C16.2 25 19.02 23.44 20.8 21 C19.6 21.64 18.24 22 16.8 22 C12.16 22 8.4 18.24 8.4 13.6 C8.4 10 10.4 6.88 13.36 5.2 C13.24 5.08 13.12 5 13 5Z" fill="#C8B4FF" className="moon-icon" />
          {/* Stars */}
          <g className="moon-star">
            <circle cx="21" cy="7" r="1.4" fill="#FFEA00" />
          </g>
          <g style={{ animation: "moonStars 1.8s 0.7s ease-in-out infinite" }}>
            <circle cx="23" cy="13" r="0.9" fill="#FFEA00" />
          </g>
          <g style={{ animation: "moonStars 1.8s 1.3s ease-in-out infinite" }}>
            <circle cx="20" cy="19" r="1.1" fill="#FFEA00" />
          </g>
          {/* Sleepy eyes — closed lines */}
          <path d="M9.5 14.5 Q10.5 13.5 11.5 14.5" stroke="#7B2FFF" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d="M13.5 14 Q14.5 13 15.5 14" stroke="#7B2FFF" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          {/* Content smile */}
          <path d="M10 17 Q12.5 18.5 15 17" stroke="#7B2FFF" strokeWidth="1" strokeLinecap="round" fill="none" />
          {/* Zs floating */}
          <text x="20" y="9" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="4" fill="#FFEA00" className="moon-star" opacity="0.9">z</text>
          <text x="22" y="6" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="3" fill="#FFEA00" style={{ animation: "moonStars 1.8s 0.5s ease-in-out infinite" }} opacity="0.7">z</text>
        </svg>
      )}
    </button>
  );
}


export default ThemeToggleFab;
