import { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

function PCard({ p, onClick }) {
  const { dark, T } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <div className="pcard card" style={{ background: T.card || "rgba(255,255,255,.03)", overflow: "hidden", borderColor: hov ? `${p.color}50` : T.cardBorder || (dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)"), transition: "all .3s", borderRadius: "12px" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onClick && onClick(p)}>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <img className="pimg" src={p.image} alt={p.title} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 40%,rgba(0,0,0,.7))", pointerEvents: "none" }} />
        <span style={{ position: "absolute", top: "12px", left: "12px", fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", background: p.color, color: "#0A0A0A", padding: "3px 9px", borderRadius: "6px" }}>{p.type || p.category}</span>
        <span style={{ position: "absolute", top: "12px", right: "12px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(240,237,232,.55)", background: "rgba(0,0,0,.55)", padding: "2px 8px", borderRadius: "6px" }}>{p.year}</span>
      </div>
      <div style={{ padding: "18px 18px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "7px" }}>
          <span style={{ fontSize: "1.1rem" }}>{p.icon}</span>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "15px", fontWeight: 800, lineHeight: 1.22, flex: 1, color: T.text || "#F0EDE8" }}>{p.title}</h3>
        </div>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: T.muted || "rgba(240,237,232,.55)", lineHeight: 1.65, fontWeight: 300, marginBottom: "12px" }}>{p.description}</p>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "8px" }}>
          {p.metrics.map((m, i) => <span key={i} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", padding: "2px 7px", background: `${p.color}18`, border: `1px solid ${p.color}30`, color: p.color, fontWeight: 600, borderRadius: "6px" }}>{m}</span>)}
        </div>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "10px" }}>
          {p.tools.map((t, i) => <span key={i} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", padding: "2px 7px", background: dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)", border: `1px solid ${dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)"}`, color: dark ? "rgba(240,237,232,.55)" : "rgba(10,10,10,.55)", borderRadius: "6px" }}>{t}</span>)}
        </div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px", fontWeight: 700, color: p.color, letterSpacing: ".1em", opacity: hov ? 1 : 0, transition: "opacity .2s" }}>VIEW CASE STUDY →</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PROJECT DETAIL
// ─────────────────────────────────────────────────────────────

export default PCard;
