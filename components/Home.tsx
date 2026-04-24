import React, { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "next/router";
import DATA from "../data/data";
import { WA_SVG } from "../data/constants";
import AnimatedNumber from "./AnimatedNumber";
import ProfilePhoto from "./ProfilePhoto";
import HeroVideoPanel from "./HeroVideoPanel";
import MarqueeStrip from "./MarqueeStrip";
import SkyBlueMarquee from "./SkyBlueMarquee";
import BrandsMarquee from "./BrandsMarquee";
import StandFor from "./StandFor";
import DrivesMe from "./DrivesMe";
import Beyond from "./Beyond";
import Testimonials from "./Testimonials";
import PCard from "./PCard";

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

function Home({ loadingComplete = false }: { loadingComplete?: boolean }) {
  const { dark, T } = useTheme();
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroRow1Ref = useRef<HTMLDivElement>(null);
  const heroRow2Ref = useRef<HTMLDivElement>(null);
  const heroRow3Ref = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const standForRef = useRef<HTMLDivElement>(null);

  // Trigger hero row animations in sequence after loading completes
  React.useEffect(() => {
    if (loadingComplete) {
      const delays = [500, 900, 1300]; // Staggered delays for rows 1, 2, 3 (much slower)
      const refs = [heroRow1Ref, heroRow2Ref, heroRow3Ref];

      refs.forEach((ref, index) => {
        setTimeout(() => {
          if (ref.current) {
            ref.current.classList.add('vis');
          }
        }, delays[index]);
      });
    } else {
      // Fallback to IntersectionObserver if no loading screen
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

      [heroRow1Ref, heroRow2Ref, heroRow3Ref].forEach(ref => {
        if (ref.current) observer.observe(ref.current);
      });

      return () => observer.disconnect();
    }
  }, [loadingComplete]);

  // Keep IntersectionObserver for other sections
  useAnim(aboutRef);
  useAnim(standForRef);

  const go = (page: string) => {
    router.push(`/${page}`);
  };

  const openProject = (project: any) => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <div>
      {/* HERO */}
      <section className="section-lg" style={{ minHeight: "calc(100vh + 62px)", display: "flex", alignItems: "center", position: "relative", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container container-content" style={{ position: "relative", zIndex: 1 }}>
          <div className="heroflex ap hero-container" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* ROW 1: BJ and available text/name in same row */}
            <div ref={heroRow1Ref} className="hero-row-1 ap" style={{ display: "flex", alignItems: "center", gap: "32px", paddingLeft: "18px", flexDirection: "row" }}>
              {/* BJ */}
              <div className="ac" style={{ display: "flex", justifyContent: "flex-start" }}>
                <ProfilePhoto size={200} />
              </div>
              {/* Available text and name */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                <div className="ac" style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ width: "24px", height: "2px", background: "#FF3CAC" }} />
                  <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: ".24em", textTransform: "uppercase", color: "#FF3CAC" }}>Available for work</span>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00FF9D", animation: "pulse 2s infinite" }} />
                </div>
                <h1 className="ac hero-name" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 800, lineHeight: .94, letterSpacing: "-.025em", margin: 0, marginBottom: "8px" }}>Bhavesh Jariwala</h1>
                <p className="ac grad" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(.95rem,1.7vw,1.35rem)", fontWeight: 700, marginBottom: "14px" }}>{DATA.role}</p>
              </div>
            </div>
            {/* ROW 2: Role and tagline */}
            <div ref={heroRow2Ref} className="hero-row-2 ap" style={{ textAlign: "left" }}>
              <p className="ac bt hero-tagline">Turning complex business problems into simple, actionable <span className="highlight">digital</span> <span className="highlight-blue">experiences</span>.

I blend creativity, strategy, and <span className="highlight-blue">product thinking</span> to transform complexity into <span className="highlight">clarity</span>—helping teams ship faster while <span className="highlight">delivering</span> <span className="highlight-blue">measurable</span> product <span className="highlight">outcomes</span>.</p>
            </div>
            {/* ROW 3: Buttons and stats */}
            <div ref={heroRow3Ref} className="hero-row-3 ap" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <div className="ac statrow" style={{ display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
                {DATA.stats.map(([n, l], i) => (
                  <div key={i} className="stat ac" style={{ display: "flex", flexDirection: "column" }}>
                    <AnimatedNumber value={n} style={{ fontSize: "1.8rem", fontWeight: 800, color: "#FF3CAC", lineHeight: 1 }} />
                    <span className="bt" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", marginTop: "3px", fontWeight: 300 }}>{l}</span>
                  </div>
                ))}
              </div>
              <div className="ac ctarow" style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                <button className="bp" onClick={() => go("work")}>View Projects →</button>
                <a href={DATA.whatsapp} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <button className="bw">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Let's Talk
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: .25, zIndex: 1 }}>
          <span className="bt" style={{ fontFamily: "'Syne',sans-serif", fontSize: "11px", fontWeight: 300, letterSpacing: ".22em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "28px", background: "linear-gradient(to bottom,#FF3CAC,transparent)" }} />
        </div>
      </section>

      <MarqueeStrip />

      <div style={{ height: "10px" }}></div>
      
      <SkyBlueMarquee />

      <div style={{ height: "10px" }}></div>
      
      {/* ABOUT + VIDEO */}
      <section className="section">
        <div className="container container-content about-designer" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "60px", alignItems: "start" }}>
          <div ref={aboutRef} className="about-section" style={{ opacity: 1, visibility: "visible" }}>
            <span className="stag">About Me</span>
            <h2 className="sh1" style={{ marginBottom: "16px" }}>The person<br /><span className="grad">behind the work</span></h2>
            <p className="bt" style={{ fontSize: "1rem", marginBottom: "24px", maxWidth: "420px" }}>{DATA.about}</p>
            <div style={{ marginBottom: "16px" }}><button className="bo" onClick={() => window.open("https://drive.google.com/file/d/1skqUXE_aME07fNGLv689RMfUoSJpi7v0/view", "_blank")}>Download Resume</button></div>
            {/* Social Icons */}
            <span className="stag">Follow me on</span>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {[
                { 
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
                  url: DATA.contact.linkedin 
                },
                { 
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 5h-3.391v-3h3.341c3.055 0 2.868 3-3.341 3z"/></svg>,
                  url: DATA.contact.behance 
                },
                { 
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.746zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>,
                  url: DATA.contact.dribbble 
                },
                { 
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
                  url: DATA.contact.github 
                },
                { 
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
                  url: "https://x.com/bhaveshjariwal9" 
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.05)",
                      border: `1px solid ${dark ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.08)"}`,
                      borderRadius: "12px",
                      transition: "all .2s",
                      cursor: "pointer",
                      color: (T as any).muted || "rgba(240,237,232,.55)"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,60,172,.25)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    title={social.url.includes('linkedin') ? 'LinkedIn' : 
                           social.url.includes('behance') ? 'Behance' : 
                           social.url.includes('dribbble') ? 'Dribbble' : 
                           social.url.includes('github') ? 'GitHub' : 'X'}
                  >
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="meet-designer-section" style={{ position: "relative", zIndex: 1 }}>
            <p className="stag" style={{textAlign:"center", display:"block"}}>Meet the Designer</p>
            <p className="bt" style={{ fontSize: ".9rem", marginBottom: "24px", textAlign: "center" }}>See how curiosity evolved into a scalable UX/UI career.</p>
            <div style={{ position: "relative", maxWidth: "100%" }}>
              {/* Decorative corner accents */}
              <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "28px", height: "28px", borderTop: "2px solid #FF3CAC", borderLeft: "2px solid #FF3CAC", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "-12px", right: "-12px", width: "28px", height: "28px", borderTop: "2px solid #00D4FF", borderRight: "2px solid #00D4FF", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-12px", left: "-12px", width: "28px", height: "28px", borderBottom: "2px solid #FFEA00", borderLeft: "2px solid #FFEA00", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "28px", height: "28px", borderBottom: "2px solid #FF3CAC", borderRight: "2px solid #FF3CAC", zIndex: 2, pointerEvents: "none" }} />

              {/* Glowing halo behind video */}
              <div style={{ position: "absolute", inset: "-20px", background: "radial-gradient(ellipse at center, rgba(255,60,172,.18) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

              {/* Video frame */}
              <div style={{ position: "relative", zIndex: 1, border: "1px solid rgba(255,60,172,.3)", background: "#0A0A0A", boxShadow: "0 0 60px rgba(255,60,172,.12), 0 24px 64px rgba(0,0,0,.5)", borderRadius: "12px" }}>
                {/* Top bar chrome */}
                <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,.06)", background: "rgba(255,255,255,.03)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF3CAC" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFEA00" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00FF9D" }} />
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(240,237,232,.25)", marginLeft: "8px", flex: 1, textAlign: "right" }}>Bhavesh Jariwala</span>
                </div>
                {/* Embedded YouTube */}
                <div className="intro_video" style={{ position: "relative", paddingBottom: "52%", height: 0, overflow: "hidden", borderRadius: "12px" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${DATA.introVideoId}?autoplay=0&rel=0&modestbranding=1`}
                    title="Bhavesh Jariwala Portfolio"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", top: "-10px", left: "-10px", width: "calc(100% + 20px)", height: "calc(100% + 20px)", border: "none", display: "block" }}
                  />
                </div>
                {/* Bottom tag */}
                <div style={{ padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,.05)" }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(240,237,232,.3)" }}>Intro</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#FF3CAC", animation: "pulse 2s infinite" }} />
                    <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#FF3CAC" }}>Watch</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="video_btn" style={{ display: "flex", gap: "12px", marginTop: "40px", justifyContent: "center" }}>
              <button className="bp" onClick={() => go("work")}>View Case Studies →</button>
              <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className="bo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect on LinkedIn ↗</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section">
        <div className="container container-content">
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "flex-end", 
              marginBottom: "40px", 
              flexWrap: "wrap", 
              gap: "16px",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
            }}
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        target.style.opacity = "1";
                        target.style.transform = "translateY(0)";
                      }
                    });
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            <div><span className="stag">Selected Work</span><h2 className="sh1">Projects that<br /><span className="grad">made noise</span></h2></div>
            <button 
              className="bo" 
              onClick={() => go("work")}
              style={{ 
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.4s ease-out 0.4s, transform 0.4s ease-out 0.4s"
              }}
            >
              View All Projects
            </button>
          </div>
          <div 
            className="pgrid2" 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "20px",
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s"
            }}
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        target.style.opacity = "1";
                        target.style.transform = "translateY(0)";
                        // Animate individual project cards
                        const cards = (entry.target as HTMLElement).querySelectorAll('[data-project-card]');
                        cards.forEach((card, index) => {
                          setTimeout(() => {
                            const cardElement = card as HTMLElement;
                            cardElement.style.opacity = "1";
                            cardElement.style.transform = "translateY(0)";
                          }, index * 150);
                        });
                      }
                    });
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            {DATA.projects.slice(0, 4).map((p, index) => (
              <div
                key={p.id}
                data-project-card
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
                }}
              >
                <PCard p={p} onClick={openProject} />
              </div>
            ))}
          </div>
          <div 
            style={{ 
              textAlign: "center", 
              marginTop: "32px",
              opacity: 0,
              transform: "translateY(15px)",
              transition: "opacity 0.6s ease-out 1s, transform 0.6s ease-out 1s"
            }}
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        target.style.opacity = "1";
                        target.style.transform = "translateY(0)";
                      }
                    });
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            <button className="bp" onClick={() => go("work")}>View All Projects</button>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <BrandsMarquee />

      {/* TESTIMONIALS — moved up, right after Trusted By */}
      <Testimonials showCTA={true} />

      {/* WHAT DRIVES ME */}
      <DrivesMe maxWidth="1140px" />

      {/* BEYOND */}
      <Beyond />

      {/* CTA BANNER */}
      <section className="section">
        <div className="container container-content">
          <div className="cta-banner" style={{ background: "linear-gradient(135deg, rgba(255, 60, 172, 0.1), rgba(0, 212, 255, 0.07))", border: "1px solid rgba(255, 60, 172, 0.16)", padding: "44px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "22px", borderRadius: "12px" }}>
            <div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", fontWeight: 800, marginBottom: "8px" }}>Ready to build<br /><span className="grad">something great?</span></h3>
              <p className="bt" style={{ fontSize: "0.9rem" }}>Open to senior UX/UI and product design roles.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://wa.me/919725035222" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className="bw"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg> Let's Talk</button></a>
              <button className="bo">Contact →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
