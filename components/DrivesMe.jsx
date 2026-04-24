import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import useAnim from "../hooks/useAnim";
import DATA from "../data/data.js";

function DrivesMe({ maxWidth }) {
  const { dark, T } = useTheme();
  const [tab, setTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null); useAnim(ref);
  const t = DATA.drivesMe.tabs[tab];
  const accentColors = ["#FF3CAC", "#00D4FF", "#FFEA00"];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section" style={{ background: T.sectionAlt || "rgba(0,0,0,.03)", transition: "background .35s" }}>
      <div className="container" style={{ maxWidth: maxWidth || "1440px", marginLeft: "auto", marginRight: "auto", paddingLeft: "24px", paddingRight: "24px" }}>
        <div ref={ref} className="ap">
          <div className="ac" style={{ marginBottom: "48px", textAlign: "center" }}>
            <span className="stag">Philosophy</span>
            <h2 className="sh1">What drives <span className="grad">me</span></h2>
          </div>

          {/* Two-column layout: tabs left, content right (desktop) / Accordion (mobile) */}
          <div className="ac dm-grid" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "220px 1fr", gap: "0", border: `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}`, minHeight: isMobile ? "auto" : "280px", transition: "border-color .35s", borderRadius: "12px" }}>
            {isMobile ? (
              // MOBILE: Accordion layout
              <div>
                {DATA.drivesMe.tabs.map((tb, i) => (
                  <div key={i}>
                    <button onClick={() => setTab(tab === i ? null : i)} style={{
                      width: "100%",
                      background: tab === i ? dark ? "rgba(255,60,172,.07)" : "rgba(255,60,172,.06)" : "transparent",
                      border: "none",
                      borderBottom: i !== DATA.drivesMe.tabs.length - 1 ? `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}` : "none",
                      borderTop: i === 0 ? `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}` : "none",
                      padding: "22px 20px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all .2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: tab === i ? accentColors[i] : T.muted || "rgba(240,237,232,.55)", flexShrink: 0, transition: "background .2s" }} />
                      <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "13px", color: tab === i ? T.text || "#F0EDE8" : T.muted || "rgba(240,237,232,.55)", letterSpacing: ".04em", transition: "color .2s", flex: 1 }}>{tb.label}</span>
                      <span style={{ fontSize: "16px", color: T.muted || "rgba(240,237,232,.55)" }}>{tab === i ? "−" : "+"}</span>
                    </button>
                    {tab === i && (
                      <div style={{ padding: "24px 20px", background: dark ? "rgba(0,0,0,.02)" : "rgba(255,255,255,.02)", animation: "fadeUp .28s ease both", borderBottom: i !== DATA.drivesMe.tabs.length - 1 ? `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}` : "none" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                          <div style={{ width: "3px", height: "24px", background: accentColors[i], flexShrink: 0 }} />
                          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.15, color: T.text || "#F0EDE8" }}>{tb.title}</h3>
                        </div>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
                          {tb.bullets.map((b, j) => (
                            <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.muted || "rgba(240,237,232,.55)", lineHeight: 1.5 }}>
                              <span style={{ color: accentColors[i], marginTop: "4px", flexShrink: 0, fontSize: "7px", fontWeight: 800 }}>●</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.muted || "rgba(240,237,232,.55)", lineHeight: 1.7, fontWeight: 300, borderTop: `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}`, paddingTop: "16px" }}>{tb.body}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // DESKTOP: Two-column layout
              <>
                {/* LEFT: tab list */}
                <div className="dm-tabs-col" style={{ borderRight: `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {DATA.drivesMe.tabs.map((tb, i) => (
                    <button key={i} onClick={() => setTab(i)} style={{
                      background: tab === i ? dark ? "rgba(255,60,172,.07)" : "rgba(255,60,172,.06)" : "transparent",
                      border: "none",
                      borderBottom: `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}`,
                      borderTop: i === 0 ? `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}` : "none",
                      borderLeft: `3px solid ${tab === i ? accentColors[i] : "transparent"}`,
                      padding: "22px 20px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all .2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: tab === i ? accentColors[i] : T.muted || "rgba(240,237,232,.55)", flexShrink: 0, transition: "background .2s" }} />
                      <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "13px", color: tab === i ? T.text || "#F0EDE8" : T.muted || "rgba(240,237,232,.55)", letterSpacing: ".04em", transition: "color .2s" }}>{tb.label}</span>
                    </button>
                  ))}
                </div>

                {/* RIGHT: content */}
                <div key={tab} style={{ padding: "32px 36px", animation: "fadeUp .28s ease both" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                    <div style={{ width: "3px", height: "28px", background: accentColors[tab], flexShrink: 0 }} />
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.1rem,2vw,1.45rem)", fontWeight: 800, lineHeight: 1.15, color: T.text || "#F0EDE8" }}>{t.title}</h3>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px", marginBottom: "22px" }}>
                    {t.bullets.map((b, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "11px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.muted || "rgba(240,237,232,.55)", lineHeight: 1.6 }}>
                        <span style={{ color: accentColors[tab], marginTop: "5px", flexShrink: 0, fontSize: "7px", fontWeight: 800 }}>●</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.muted || "rgba(240,237,232,.55)", lineHeight: 1.78, fontWeight: 300, borderTop: `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.1)")}`, paddingTop: "18px" }}>{t.body}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default DrivesMe;
