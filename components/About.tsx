import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import DATA from "../data/data";
import ProfilePhoto from "./ProfilePhoto";
import StandFor from "./StandFor";
import DrivesMe from "./DrivesMe";
import Experience from "./Experience";
import BrandsMarquee from "./BrandsMarquee";
import Testimonials from "./Testimonials";
import Beyond from "./Beyond";

// Custom animation hook
const useAnim = (ref: React.RefObject<HTMLElement>) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
};

function About() {
  const { dark, T } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  useAnim(heroRef);
  const skillRef = useRef<HTMLDivElement>(null);
  useAnim(skillRef);

  return (
    <div>
      {/* Hero - Full width background */}
      <div ref={heroRef} className="ap page-first-section about-hero-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "60px", alignItems: "center", marginBottom: "40px", backgroundImage: "url('/images/about_hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "500px", borderBottom: `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)")}`, }}>
        <div className="container container-content about-hero-container" style={{ display: "grid", gap: "60px", alignItems: "center", width: "100%"}}>
          <div style={{paddingTop:'40px', paddingBottom:'40px' }}>
              <span className="stag ac">The Story</span>
              <h1 className="sh1 ac" style={{ marginBottom: "18px" }}>13 years of<br /><span className="grad">connecting dots.</span></h1>
              <p className="bt ac" style={{ fontSize: "1rem", marginBottom: "12px" }}>{DATA.about}</p>
              <p className="bt ac" style={{ fontSize: "1rem", marginBottom: "20px" }}>I believe clarity beats decoration, structure beats noise, and outcomes matter more than aesthetics alone.</p>
              <div className="ac" style={{ background: "rgba(255,60,172,.06)", border: "1px solid rgba(255,60,172,.16)", padding: "16px 20px", marginBottom: "22px", borderRadius: "12px" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 400, color: T.muted || "rgba(240,237,232,.55)", lineHeight: 1.72, fontStyle: "italic" }}>
                  "A close friend opened a simple HTML file and showed me how a website is structured that moment shifted my direction completely."
                </p>
              </div>
              <div className="ac" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button className="bp" onClick={() => window.open("https://drive.google.com/file/d/1skqUXE_aME07fNGLv689RMfUoSJpi7v0/view", "_blank")}>Download Resume</button>
                <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className="bo">LinkedIn ↗</button></a>
              </div>
            </div>
            {/* Right: animated BJ circle */}
            <div className="ac" style={{display:'flex', alignSelf:'flex-end' }}>
            {/* <ProfilePhoto size={280} showBadges={true} /> */}
            <img src="/images/bhavesh_3d.png" alt="Bhavesh Jariwala" style={{ width: "100%", maxWidth: "700px", height: "auto" }} />
            </div>
        </div>
      </div>

      <div className="container container-content">

          {/* Stand For */}
          <div style={{ marginBottom: "80px", padding: "80px 0", borderBottom: `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)")}`, transition: "border-color .35s" }}>
            <StandFor compact={false} />
          </div>

          {/* Skills */}
          <div ref={skillRef} className="ap" style={{ marginBottom: "80px" }}>
            <span className="stag ac">skills & expertise</span>
            <h2 className="sh1 ac" style={{ marginBottom: "28px" }}>What I bring to <span className="grad">the table</span></h2>
            <div className="ac" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "44px"}}>
              {DATA.skills?.map((s, i) => (
                <div key={i} style={{ 
                  background: T.card || "rgba(255,255,255,.03)", 
                  border: `1px solid ${T.cardBorder || "rgba(255,255,255,.1)"}`, 
                  padding: "16px", 
                  borderRadius: "12px",
                  flex: "1 1 180px",
                  transition: "border-color .22s,transform .22s,background .22s",
                  animationDelay: `${i * 0.05}s`
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = dark ? `${s.color}08` : `${s.color}04`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.cardBorder || "rgba(255,255,255,.1)"; e.currentTarget.style.transform = ""; e.currentTarget.style.background = T.card || "rgba(255,255,255,.03)"; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: s.color, fontSize: "16px" }}>{s.icon}</span>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "13px", fontWeight: 700, color: T.text || "#F0EDE8" }}>{s.name}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: T.muted || "rgba(240,237,232,0.5)", lineHeight: 1.5, fontWeight: 300 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="ac">
              <p className="bt" style={{ fontFamily: "'Syne',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "9px" }}>Toolset</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Figma", "FigJam", "Adobe XD", "Adobe CC", "Framer", "Miro", "Jira", "Confluence", "Notion", "HTML", "CSS", "React", "Tailwind", "Webflow", "GA4", "MS Clarity", "Useberry"].map((t, i) => <span key={t} className="spill" style={{ animationDelay: `${i * 0.06}s`, borderRadius: "6px", background: dark ? "rgba(255,255,255,.03)" : "#FFFFFF", border: `1px solid ${dark ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.12)"}`, boxShadow: dark ? "none" : "0 2px 8px rgba(0,0,0,.08)" }}><span style={{ color: "#FF3CAC", fontSize: "11px" }}>✦</span><span className="bt" style={{ fontFamily: "'Syne',sans-serif", fontSize: "12px", fontWeight: 700 }}>{t}</span></span>)}
              </div>
            </div>
          </div>
        </div>

      {/* Experience */}
      <Experience />

      {/* Testimonials */}
      <Testimonials showCTA={false} />

      {/* What Drives Me */}
      <DrivesMe maxWidth="1140px" />

      {/* Beyond */}
      <Beyond />
    </div>
  );
}

export default About;
