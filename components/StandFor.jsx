import { useRef } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import useAnim from "../hooks/useAnim";
import DATA from "../data/data.js";

function StandFor({ compact = false }) {
  const { dark, T } = useTheme();
  const ref = useRef(null); useAnim(ref);
  return (
    <div>
      {!compact && (
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="stag" style={{ textAlign: "center" }}>What I Stand For</span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,4.5vw,3rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Design with intent,<br /><span className="grad">build with clarity.</span>
          </h2>
        </div>
      )}
      <div ref={ref} className="ap" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "flex-start" }}>
        {DATA.standFor.map((s, i) => (
          <div key={i} className="ac standfor-card card" style={{ background: T.card || "rgba(255,255,255,.03)", border: `1px solid ${T.cardBorder || "rgba(255,255,255,.1)"}`, padding: "20px 16px", transition: "border-color .22s,transform .22s,background .22s,box-shadow .22s", cursor: "default", flex: "1 1 200px", borderRadius: "12px" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,60,172,.35)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = dark ? "rgba(255,60,172,.06)" : "rgba(255,60,172,.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.cardBorder || "rgba(255,255,255,.1)"; e.currentTarget.style.transform = ""; e.currentTarget.style.background = T.card || "rgba(255,255,255,.03)"; }}>
            <div style={{ width: "34px", height: "34px", background: "rgba(255,60,172,.12)", border: "1px solid rgba(255,60,172,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "13px", color: "#FF3CAC", borderRadius: "8px" }}>{s.icon}</div>
            <div className="standfor-tag" style={{ fontFamily: "'Syne',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.muted || "rgba(240,237,232,.55)", marginBottom: "5px", opacity: .65 }}>{s.tag}</div>
            <h3 className="standfor-title" style={{ fontFamily: "'Syne',sans-serif", fontSize: "14px", fontWeight: 800, marginBottom: "8px", lineHeight: 1.2, color: T.text || "#F0EDE8" }}>{s.title}</h3>
            <p className="standfor-desc" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: T.muted || "rgba(240,237,232,0.5)", lineHeight: 1.65, fontWeight: 300 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// WHAT DRIVES ME — portfolio-themed tabbed section
// ─────────────────────────────────────────────────────────────

export default StandFor;
