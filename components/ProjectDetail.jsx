import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import useAnim from "../hooks/useAnim";
import DATA from "../data/data.js";
import { WA_SVG } from "../data/constants.jsx";
import PCard from "../components/PCard.jsx";
import FooterIcon from "./FooterIcon.jsx";
import AnimatedNumber from "./AnimatedNumber.jsx";

function ProjectDetail({ project, goBack, go, openProject }) {
  const { dark, T } = useTheme();
  const [imgIdx, setImgIdx] = useState(0);
  const [explorePage, setExplorePage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null); useAnim(ref);
  
  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [project]);

  // Auto-slide hero images
  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setImgIdx(prev => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images.length]);
  
  const others = DATA.projects.filter(p => p.id !== project.id);
  const projectsPerPage = isMobile ? 1 : 2;
  const explorePages = Math.ceil(others.length / projectsPerPage);
  const socialLinks = [
    { 
      label: "LinkedIn", 
      url: DATA.contact.linkedin, 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    { 
      label: "Behance", 
      url: DATA.contact.behance, 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
    },
    { 
      label: "Dribbble", 
      url: DATA.contact.dribbble, 
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.746zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>
    },
    { 
      label: "GitHub", 
      url: DATA.contact.github, 
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    },
    { 
      label: "X", 
      url: "https://x.com/bhaveshjariwal9", 
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
  ];

  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ position: "relative", height: "clamp(260px,42vw,540px)", overflow: "hidden" }}>
        <img key={imgIdx} src={project.images[imgIdx]} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", animation: "scaleIn .5s ease both" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(10,10,10,.25),rgba(10,10,10,.85))" }} />
        <div className="container container-content" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "26px", paddingBottom: "26px" }}>
          <button onClick={goBack} style={{ background: "rgba(10,10,10,.7)", border: "1px solid rgba(255,255,255,.2)", color: "#F0EDE8", padding: "8px 16px", cursor: "pointer", fontFamily: "'Syne',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "6px", backdropFilter: "blur(8px)", width: "fit-content", borderRadius: "8px" }}>← Back</button>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", background: project.color, color: "#0A0A0A", padding: "4px 10px", borderRadius: "6px" }}>{project.type}</span>
            {project.images.length > 1 && (
              <div style={{ display: "flex", gap: "8px" }}>
                {project.images.map((_, i) => <button key={i} onClick={() => setImgIdx(i)} style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", background: i === imgIdx ? "#FF3CAC" : "rgba(255,255,255,.35)", cursor: "pointer", padding: 0, transition: "all .2s" }} />)}
              </div>
            )}
          </div>
        </div>
      </div>
      <section style={{ padding: "56px 0px 56px" }}>
        <div className="container container-content">
          <div ref={ref} className="ap">
            <div className="ac" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "32px", alignItems: "start", marginBottom: "44px" }}>
              <div>
                <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.7rem,4vw,2.8rem)", fontWeight: 800, lineHeight: 1.06, marginBottom: "9px", color: T.text }}>{project.title}</h1>
                <p className="bt" style={{ fontSize: "1.05rem" }}>{project.subtitle}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", minWidth: "170px" }}>
                {[["Year", project.year], ["Timeline", project.timeline], ["Role", project.role]].map(([l, v]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: T.muted, marginBottom: "3px" }}>{l}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.text }}>{v}</div>
                  </div>
                ))}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className="bp" style={{ fontSize: "11px", padding: "9px 16px" }}>Live Site ↗</button></a>}
              </div>
            </div>

            <div className="ac" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "44px", padding: "20px 24px", background: dark ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)", border: `1px solid ${dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)"}`, transition: "background .35s", borderRadius: "12px" }}>
              {project.metrics.map((m, i) => (
                <div key={i} style={{ flex: "1 1 110px", textAlign: "center" }}>
                  <AnimatedNumber value={m} style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.3rem", fontWeight: 800, color: project.color, marginBottom: "4px" }} />
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: dark ? "rgba(240,237,232,.55)" : "rgba(10,10,10,.55)" }}>Key Metric</div>
                </div>
              ))}
            </div>

            <div className="ac" style={{ marginBottom: "44px" }}>
              <span className="stag">Overview</span>
              <p className="bt" style={{ fontSize: "1rem" }}>{project.fullDescription}</p>
            </div>

            <div className="ac" style={{ marginBottom: "40px" }}>
              <span className="stag">Tools & Stack</span>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "6px" }}>
                {project.tools.map((t, i) => <span key={i} className="spill" style={{ animationDelay: `${i * 0.06}s`, borderRadius: "6px", background: dark ? "rgba(255,255,255,.03)" : "#FFFFFF", border: `1px solid ${dark ? "rgba(255,255,255,.09)" : "rgba(0,0,0,.12)"}`, boxShadow: dark ? "none" : "0 2px 8px rgba(0,0,0,.08)" }}><span style={{ color: "#FF3CAC", fontSize: "11px" }}>✦</span><span className="bt" style={{ fontFamily: "'Syne',sans-serif", fontSize: "12px", fontWeight: 700 }}>{t}</span></span>)}
              </div>
            </div>

            {project.images[1] && <div className="ac" style={{ marginBottom: "44px", overflow: "hidden", border: `1px solid ${T.subtleBorder}`, borderRadius: "12px" }}><img src={project.images[1]} alt={`${project.title} detail`} style={{ width: "100%", objectFit: "cover", display: "block", maxHeight: "460px" }} /></div>}
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 0px" }}>
        <div className="container container-content">
          <div className="ac">
            <div className="ac" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <span className="stag">More Projects</span>
                <h3 className="sh1" style={{ fontSize: "clamp(1.3rem,3vw,1.9rem)" }}>Keep <span className="grad">exploring.</span></h3>
              </div>
              {/* Pagination dots */}
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                {Array.from({ length: explorePages }).map((_, i) => (
                  <button key={i} onClick={() => setExplorePage(i)} style={{ width: i === explorePage ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: i === explorePage ? "#FF3CAC" : T.muted, cursor: "pointer", transition: "all .25s", padding: 0, opacity: i === explorePage ? 1 : 0.35 }} />
                ))}
              </div>
            </div>

            <div style={{ position: "relative", padding: "0 0px" }}>
            <div key={explorePage} className="ac" style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
              gap: "18px", 
              animation: "slideLeft .3s ease both"
            }}>
              {others.slice(explorePage * projectsPerPage, explorePage * projectsPerPage + projectsPerPage).map(op => (
                <PCard key={op.id} p={op} onClick={openProject} />
              ))}
              {others.slice(explorePage * projectsPerPage, explorePage * projectsPerPage + projectsPerPage).length === 1 && !isMobile && (
                <div style={{ background: "rgba(255,60,172,.06)", border: "1px solid rgba(255,60,172,.18)", padding: "28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px", borderRadius: "8px" }}>
                  <div style={{ fontSize: "28px" }}>🚀</div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "16px", fontWeight: 800, color: T.text }}>More projects coming soon</h3>
                  <p className="bt" style={{ fontSize: "13px" }}>Check back for more amazing case studies and design work.</p>
                </div>
              )}
            </div>

            {/* Navigation arrows at bottom right - inside same container */}
            <div style={{ display: "flex", gap: "8px", marginTop: "20px", justifyContent: "flex-end" }}>
              <button onClick={() => setExplorePage((explorePage - 1 + explorePages) % explorePages)} className="bo" style={{ padding: "9px 14px", fontSize: "14px" }}>←</button>
              <button onClick={() => setExplorePage((explorePage + 1) % explorePages)} className="bo" style={{ padding: "9px 14px", fontSize: "14px" }}>→</button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
