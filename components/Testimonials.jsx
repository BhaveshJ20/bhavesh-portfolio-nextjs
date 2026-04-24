import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import useAnim from "../hooks/useAnim";
import DATA from "../data/data.js";
import { WA_SVG } from "../data/constants.jsx";

function Testimonials({ showCTA = true }) {
  const { dark, T } = useTheme();
  const [pg, setPg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null); useAnim(ref);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const PER = isMobile ? 1 : 2;
  const pages = Math.ceil(DATA.testimonials.length / PER);
  
  // Autoplay functionality
  useEffect(() => {
    // Only setup autoplay if pages > 1
    if (pages > 1) {
      intervalRef.current = setInterval(() => {
        setPg((prevPg) => (prevPg + 1) % pages);
      }, 4000); // Change slide every 4 seconds
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [PER]); // Use PER instead of pages to avoid dependency issues
  
  const goTo = p => setPg((p + pages) % pages);

  return (
    <section className="section" style={{ background: T.sectionAlt || "rgba(0,0,0,.03)", transition: "background .35s" }}>
      <div className="container container-content">
        <div ref={ref} className="ap">
          <div className="ac" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "44px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="stag">Social Proof</span>
              <h2 className="sh1">What people <span className="grad">say.</span></h2>
            </div>
            {/* Desktop: Navigation arrows, Mobile: Dots */}
            {isMobile ? (
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "12px" }}>
                {Array.from({ length: pages }).map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{ width: i === pg ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: i === pg ? "#FF3CAC" : T.muted || "rgba(240,237,232,.55)", cursor: "pointer", transition: "all .25s", padding: 0, opacity: i === pg ? 1 : 0.35 }} />
                ))}
                {showCTA && <button onClick={() => setPg(pages)} style={{ width: pg === pages ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: pg === pages ? "#FF3CAC" : T.muted || "rgba(240,237,232,.55)", cursor: "pointer", transition: "all .25s", padding: 0, opacity: pg === pages ? 1 : 0.35 }} />}
              </div>
            ) : (
              <div style={{ display: "flex", gap: "8px" }}>
                <button type="button" onClick={() => goTo(pg - 1)} className="bo" style={{ padding: "9px 14px", fontSize: "14px" }}>←</button>
                <button type="button" onClick={() => goTo(pg + 1)} className="bo" style={{ padding: "9px 14px", fontSize: "14px" }}>→</button>
              </div>
            )}
          </div>

          {pg < pages ? (
            <div style={{ position: "relative", padding: "0 0px" }}
                 onMouseEnter={() => {
                   if (intervalRef.current) {
                     clearInterval(intervalRef.current);
                   }
                 }}
                 onMouseLeave={() => {
                   intervalRef.current = setInterval(() => {
                     setPg((prevPg) => (prevPg + 1) % pages);
                   }, 4000);
                 }}>
            <div key={pg} className="testimonial-grid-wrapper" style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
              gap: "18px", 
              paddingBottom:"18px",
              animation: "slideLeft .3s ease both"
            }}>
              {DATA.testimonials.slice(pg * PER, pg * PER + PER).map((t, i) => (
                <div key={i} className="tc" style={{ borderColor: `${t.color}22`, background: T.card || "rgba(255,255,255,.03)", borderRadius: "12px" }}>
                  <div style={{ color: t.color, fontSize: "13px", letterSpacing: "3px", marginBottom: "12px" }}>★★★★★</div>
                  <p className="tc-quote" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.muted || "rgba(240,237,232,.55)", lineHeight: 1.78, fontStyle: "italic", marginBottom: "18px" }}>"{t.quote}"</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img src={t.image} alt={t.name} style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", border: `1px solid ${t.color}44`, flexShrink: 0 }} />
                      <div>
                        <div className="tc-name" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "14px", color: T.text || "#F0EDE8" }}>{t.name}</div>
                        <div className="tc-role" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: T.muted || "rgba(240,237,232,.55)", marginTop: "2px" }}>{t.role}</div>
                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: t.color, fontWeight: 600, marginTop: "4px" }}>{t.metric}</div>
                      </div>
                    </div>
                    <a href={t.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: t.color, fontWeight: 600, transition: "opacity .2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.7"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
              {DATA.testimonials.slice(pg * PER, pg * PER + PER).length === 1 && !isMobile && (
                <div style={{ background: "rgba(255,60,172,.06)", border: "1px solid rgba(255,60,172,.18)", padding: "28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px", borderRadius: "12px" }}>
                  <div style={{ fontSize: "28px" }}>💼</div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "16px", fontWeight: 800, color: T.text || "#F0EDE8" }}>Open to new roles</h3>
                  <p className="bt" style={{ fontSize: "13px" }}>Senior UX Designer, Product Designer (SaaS/B2B), Design Systems in hybrid/remote.</p>
                  <a href={DATA.whatsapp} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className="bw" style={{ fontSize: "11px" }}>{WA_SVG} Let's Talk</button></a>
                </div>
              )}
            </div>

            {/* Navigation arrows at bottom right for mobile, Dots at bottom right for desktop */}
            <div style={{ display: "flex", gap: "8px", marginTop: "20px", justifyContent: "flex-end" }}>
              {isMobile ? (
                <>
                  <button onClick={() => goTo(pg - 1)} className="bo" style={{ padding: "9px 14px", fontSize: "14px" }}>←</button>
                  <button onClick={() => goTo(pg + 1)} className="bo" style={{ padding: "9px 14px", fontSize: "14px" }}>→</button>
                </>
              ) : (
                <>
                  {Array.from({ length: pages }).map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} style={{ width: i === pg ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: i === pg ? "#FF3CAC" : T.muted || "rgba(240,237,232,.55)", cursor: "pointer", transition: "all .25s", padding: 0, opacity: i === pg ? 1 : 0.35 }} />
                  ))}
                  {showCTA && <button onClick={() => setPg(pages)} style={{ width: pg === pages ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: pg === pages ? "#FF3CAC" : T.muted || "rgba(240,237,232,.55)", cursor: "pointer", transition: "all .25s", padding: 0, opacity: pg === pages ? 1 : 0.35 }} />}
                </>
              )}
            </div>
          </div>
          ) : (
            <div key="cta" style={{ background: "linear-gradient(135deg,rgba(255,60,172,.1),rgba(0,212,255,.07))", border: "1px solid rgba(255,60,172,.2)", padding: "40px 44px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", animation: "slideLeft .3s ease both", borderRadius: "12px" }}>
              <div>
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>💼</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: "8px", color: T.text || "#F0EDE8" }}>Open to new roles</h3>
                <p className="bt" style={{ maxWidth: "460px" }}>Senior UX Designer, Product Designer (SaaS/B2B), Design Systems, Frontend-Aware UX — hybrid or remote.</p>
              </div>
              <a href={DATA.whatsapp} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className="bw">{WA_SVG} Let's Talk on WhatsApp</button></a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


export default Testimonials;
