import { useRef } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import useAnim from "../hooks/useAnim";
import DATA from "../data/data.js";

function BrandsMarquee() {
  const { dark, T } = useTheme();
  const ref = useRef(null); useAnim(ref);
  const items = [...DATA.brands, ...DATA.brands];
  return (
    <section className="section" style={{ background: "rgba(255,255,255,.015)" }}>
      <div ref={ref} className="ap">
        <div className="ac" style={{ textAlign: "center", marginBottom: "36px", marginLeft:"auto", marginRight:"auto", maxWidth: "1100px", padding: "0 16px" }}>
          <span className="stag" style={{ textAlign: "center" }}>Brands I've Helped</span>
           <p className="bt" style={{ fontSize: "1rem", marginBottom: "24px", marginLeft:"auto", marginRight:"auto", maxWidth: "620px" }}>Helping brands to create expressive and engaging solutions for their tecnology and design needs. I thrive under tight deadlines, delivering complex projects with exceptional quality and efficiency.</p>
          {/* <h2 className="sh1">Trusted by teams <span className="grad">across industries</span></h2> */}
        </div>
        <div className="ac" style={{ overflow: "hidden", padding: "8px 0", position: "relative" }}>
          {/* Left blur overlay */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: "60px", background: `linear-gradient(to right, ${T.bg}, transparent)`,
            pointerEvents: "none", zIndex: 5
          }} />
          
          {/* Right blur overlay */}
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0,
            width: "60px", background: `linear-gradient(to left, ${T.bg}, transparent)`,
            pointerEvents: "none", zIndex: 5
          }} />
          
          <div className="mqt" style={{ alignItems: "center", display: "flex", gap: "16px" }}>
            {items.map((b, i) => (
              <div key={i} style={{
                background: T.card,
                border: `1px solid ${T.cardBorder}`,
                padding: "16px 24px",
                transition: "all .22s",
                whiteSpace: "nowrap",
                flexShrink: 0,
                cursor: "default",
                borderRadius: "8px"
              }}
                onMouseEnter={e => { 
                  e.currentTarget.style.borderColor = "rgba(255,60,172,.35)"; 
                  e.currentTarget.style.transform = "translateY(-4px)"; 
                  e.currentTarget.style.background = dark ? "rgba(255,60,172,.06)" : "rgba(255,60,172,.04)"; 
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.borderColor = T.cardBorder; 
                  e.currentTarget.style.transform = ""; 
                  e.currentTarget.style.background = T.card; 
                }}>
                <span style={{ color: "#FF3CAC", marginRight: "8px", fontSize: "8px" }}>✦</span>
                <span style={{ 
                  fontFamily: "'Syne',sans-serif", 
                  fontWeight: 700, 
                  fontSize: "13px", 
                  color: T.text,
                  letterSpacing: ".08em"
                }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default BrandsMarquee;
