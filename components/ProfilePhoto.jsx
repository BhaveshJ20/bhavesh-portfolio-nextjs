import { useRef } from "react";
import DATA from "../data/data.js";
import AnimatedNumber from "./AnimatedNumber.jsx";

function ProfilePhoto({ size = 300, showBadges = true }) {
  return (
    <div style={{ position: "relative", width: `${size}px`, height: `${size}px`, flexShrink: 0 }}>
      {/* Spinning dashed outer ring */}
      <div className="sring" style={{ position: "absolute", inset: `-${size * 0.07}px`, borderRadius: "50%", border: "1px dashed rgba(255,60,172,.35)", pointerEvents: "none" }} />
      {/* Shimmer gradient border */}
      <div className="shimb" style={{ position: "absolute", inset: "-3px", borderRadius: "50%", padding: "3px" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#0A0A0A" }} />
      </div>
      {/* Inner circle — gradient bg + BJ initials or photo */}
      <div className="pfloat" style={{ position: "relative", width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", zIndex: 1 }}>
        {DATA.profilePhoto
          ? <img src={DATA.profilePhoto} alt={DATA.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          : (
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #7FFFD4 0%, #00D4FF 40%, #90EE90 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: `${size * 0.32}px`, color: "#FF3CAC", letterSpacing: "-.04em", lineHeight: 1, userSelect: "none" }}>BJ</span>
            </div>
          )
        }
      </div>
      {showBadges && (
        <>
          <div style={{ position: "absolute", bottom: `${size * 0.05}px`, right: `-${size * 0.07}px`, background: "#0A0A0A", border: "1px solid rgba(0,255,157,.4)", padding: "6px 12px", display: "flex", alignItems: "center", gap: "6px", zIndex: 2, boxShadow: "0 6px 20px rgba(0,0,0,.6)", borderRadius: "12px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00FF9D", animation: "pulse 2s infinite", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, color: "#F0EDE8", whiteSpace: "nowrap" }}>Open to work</span>
          </div>
          <div style={{ position: "absolute", top: `${size * 0.06}px`, left: `-${size * 0.08}px`, background: "#FF3CAC", padding: "6px 12px", zIndex: 2, boxShadow: "0 6px 20px rgba(255,60,172,.4)", borderRadius: "8px" }}>
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 800, color: "#0A0A0A", whiteSpace: "nowrap" }}>13+ Years</span>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePhoto;
