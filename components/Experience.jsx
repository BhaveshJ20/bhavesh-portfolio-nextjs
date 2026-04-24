import { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import useAnim from "../hooks/useAnim";
import DATA from "../data/data.js";

function Experience() {
  const { dark, T } = useTheme();
  const ref = useRef(null); useAnim(ref);
  const [open, setOpen] = useState(null);
  return (
    <section className="section" style={{ background: T.sectionAlt || "rgba(0,0,0,.03)", transition: "background .35s" }}>
      <div className="container container-content">
        <div ref={ref} className="ap">
          <span className="stag ac">Career</span>
          <h2 className="sh1 ac" style={{ marginBottom: "48px" }}>Experience &<span className="grad"> Timeline</span></h2>
          <div className="ac" style={{ position: "relative", paddingLeft: "28px" }}>
            <div className="exp-line" />
            {DATA.experience.map((e, i) => (
              <div key={i} style={{ position: "relative", marginBottom: i < DATA.experience.length - 1 ? "36px" : 0 }}>
                <div className="exp-dot" />
                <div className={`exp-accordion${open === i ? " open" : ""}`} style={{ background: open === i ? "rgba(255,60,172,.07)" : T.subtle || "rgba(255,255,255,.02)", border: `1px solid ${open === i ? "rgba(255,60,172,.3)" : T.subtleBorder || "rgba(255,255,255,.08)"}`, padding: "22px 24px", cursor: "pointer", transition: "all .22s", borderRadius: "12px" }}
                  onClick={() => setOpen(open === i ? null : i)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
                    <div>
                      <h3 className="exp-role" style={{ fontFamily: "'Syne',sans-serif", fontSize: "16px", fontWeight: 800, marginBottom: "4px", color: T.text || "#F0EDE8" }}>{e.role}</h3>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "13px", fontWeight: 700, color: "#FF3CAC" }}>{e.company}</span>
                        <span className="exp-type-tag" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: T.muted || "rgba(240,237,232,.55)", padding: "2px 8px", background: T.subtle || "rgba(255,255,255,.02)", border: `1px solid ${T.subtleBorder || "rgba(255,255,255,.08)"}`, borderRadius: "6px" }}>{e.type}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="exp-period" style={{ fontFamily: "'Syne',sans-serif", fontSize: "12px", fontWeight: 700, color: T.muted || "rgba(240,237,232,.55)" }}>{e.period}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: T.muted || "rgba(240,237,232,.55)" }}>{e.duration}</div>
                    </div>
                  </div>
                  {open === i && (
                    <div style={{ marginTop: "16px", animation: "fadeUp .25s ease both" }}>
                      <p className="bt" style={{ fontSize: "14px", marginBottom: "14px" }}>{e.desc}</p>
                      <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                        {e.skills.map((sk, j) => (
                          <span key={j} style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, padding: "3px 9px", background: "rgba(255,60,172,.12)", border: "1px solid rgba(255,60,172,.25)", color: "#FF3CAC", borderRadius: "6px" }}>{sk}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div style={{ marginTop: "10px", fontFamily: "'Syne',sans-serif", fontSize: "11px", color: T.muted || "rgba(240,237,232,.55)", fontWeight: 700 }}>{open === i ? "▲ See less" : "▼ See more"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Experience;
