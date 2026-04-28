import React, { useState, useEffect } from "react";
import { ThemeCtx } from "../context/ThemeContext";
import { useRouter } from "next/router";
import { PAGES } from "../data/constants";
import DATA from "../data/data";
import BackToTop from "./BackToTop";
import FooterIcon from "./FooterIcon";
import GlobalModal from "./GlobalModal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);
  const [galleryModal, setGalleryModal] = useState(null);
  const [menu, setMenu] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  // Handle client-side mount and theme initialization
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      setDark(saved === 'dark');
    } else {
      // Check OS preference if no saved theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
    }
  }, []);

  // Persist theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Navigation helper
  const go = (page: string) => {
    setMenu(false);
    router.push(`/${page === "home" ? "" : page}`);
  };

  // Social links for footer
  const socialLinks = [
    { 
      label: "LinkedIn", 
      url: DATA.contact.linkedin, 
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    { 
      label: "Behance", 
      url: DATA.contact.behance, 
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 5h-3.391v-3h3.341c3.055 0 2.868 3-3.341 3z"/></svg>
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

  const T = dark ? {
    bg: "#0a0a0a",
    text: "#ffffff",
    muted: "#888888",
    nav: "rgba(10,10,10,0.8)",
    navBorder: "rgba(255,255,255,0.1)",
    orb1: "rgba(255,60,172,0.15)",
    orb2: "rgba(0,123,255,0.15)",
    card: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.08)",
    input: "rgba(255,255,255,0.05)",
    accent: "#FF3CAC",
    subtle: "rgba(255,255,255,0.03)",
    subtleBorder: "rgba(255,255,255,0.1)",
    cardBorder: "rgba(255,255,255,0.1)"
  } : {
    bg: "#ffffff",
    text: "#0a0a0a",
    muted: "#666666",
    nav: "rgba(255,255,255,0.8)",
    navBorder: "rgba(0,0,0,0.1)",
    orb1: "rgba(255,60,172,0.08)",
    orb2: "rgba(0,123,255,0.08)",
    card: "rgba(0,0,0,0.03)",
    border: "rgba(0,0,0,0.08)",
    input: "rgba(0,0,0,0.05)",
    accent: "#FF3CAC",
    subtle: "rgba(0,0,0,0.03)",
    subtleBorder: "rgba(0,0,0,0.1)",
    cardBorder: "rgba(0,0,0,0.1)"
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (galleryModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [galleryModal]);

  return (
    <ThemeCtx.Provider value={{ dark, setDark: () => setDark(!dark), T, galleryModal, setGalleryModal: () => setGalleryModal(null) }}>
      {!mounted ? (
        <div style={{ background: "#0A0A0A", minHeight: "100vh" }}></div>
      ) : (
        <div className={dark ? "" : "lm"} style={{ fontFamily: "'Syne',sans-serif", background: T.bg, color: T.text, minHeight: "100vh", overflowX: "hidden" }}>
        
        {/* Ambient orbs */}
        <div className="orb" style={{ width: "420px", height: "420px", background: `radial-gradient(circle,${T.orb1},transparent 70%)`, top: "-6%", right: "-4%", animationDuration: "11s" }} />
        <div className="orb" style={{ width: "320px", height: "320px", background: `radial-gradient(circle,${T.orb2},transparent 70%)`, bottom: "5%", left: "-4%", animationDuration: "15s", animationDelay: "-5s" }} />

        {/* Navigation */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, borderBottom: `1px solid ${T.navBorder}`, backdropFilter: "blur(16px)", background: T.nav }}>
          <div className="container container-content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "62px" }}>
            <div onClick={() => go("home")} style={{ cursor: "pointer", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "16px", letterSpacing: ".02em", color: T.text }}>
              Bhavesh<span style={{ color: "#FF3CAC" }}>.</span>
            </div>
            {/* Desktop nav */}
            <div className="dnav" style={{ display: "flex", gap: "24px" }}>
              {PAGES.filter(p => p !== "Home").map(p => (
                <span key={p} className={`nlnk${router.pathname === `/${p.toLowerCase()}` ? " on" : ""}`} style={{ color: router.pathname === `/${p.toLowerCase()}` ? "#FF3CAC" : T.muted }} onClick={() => go(p.toLowerCase())}>{p}</span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* WhatsApp icon */}
              <div style={{ position: "relative" }}>
                <a
                  href="https://wa.me/918475046358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  style={{
                    background: "none",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    padding: "2px",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "all 300ms",
                    boxShadow: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 25px rgba(37,211,102,0.8)";
                    e.currentTarget.style.transform = "scale(1.05)";
                    setShowWhatsAppTooltip(true);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(37,211,102,0.5)";
                    e.currentTarget.style.transform = "scale(1)";
                    setShowWhatsAppTooltip(false);
                  }}
                >
                  {/* Circular backdrop layer */}
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 0,
                    }}
                  >
                    {/* WhatsApp icon */}
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="#25D366"
                      style={{ position: "relative", zIndex: 1 }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.M157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                </a>
                <span
                  style={{
                    position: "absolute",
                    right: "100%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    marginRight: "8px",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    color: "white",
                    fontSize: "12px",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    opacity: showWhatsAppTooltip ? 1 : 0,
                    transition: "opacity 0.3s",
                    whiteSpace: "nowrap",
                    border: "1px solid rgba(37,211,102,0.3)",
                    pointerEvents: "none",
                  }}
                >
                  Chat on WhatsApp
                </span>
              </div>
              {/* Theme toggle */}
              <button
                onClick={() => setDark(d => !d)}
                title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle theme"
                style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {dark ? (
                  /* Sun icon */
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    {[0,45,90,135,180,225,270,315].map((deg, i) => (
                      <line key={i}
                        x1={14 + 9*Math.cos(deg*Math.PI/180)} y1={14 + 9*Math.sin(deg*Math.PI/180)}
                        x2={14 + 12.5*Math.cos(deg*Math.PI/180)} y2={14 + 12.5*Math.sin(deg*Math.PI/180)}
                        stroke="#FFEA00" strokeWidth="2.2" strokeLinecap="round"
                      />
                    ))}
                    <circle cx="14" cy="14" r="7" fill="#FFEA00" />
                  </svg>
                ) : (
                  /* Moon icon */
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <path d="M13 5 C7.48 5 3 9.48 3 15 C3 20.52 7.48 25 13 25 C16.2 25 19.02 23.44 20.8 21 C19.6 21.64 18.24 22 16.8 22 C12.16 22 8.4 18.24 8.4 13.6 C8.4 10 10.4 6.88 13.36 5.2 C13.24 5.08 13.12 5 13 5Z" fill="#C8B4FF" />
                  </svg>
                )}
              </button>
              {/* Mobile menu toggle */}
              <div
                className={`hbg-wrap${menu ? " open" : ""}`}
                style={{ color: T.text }}
                onClick={() => setMenu(!menu)}
                aria-label="Toggle menu"
              >
                <span className="hb-line hb-l1" />
                <span className="hb-line hb-l2" />
                <span className="hb-line hb-l3" />
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {menu && (
          <div style={{ position: "fixed", inset: 0, background: T.bg, zIndex: 100, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "28px", animation: "fadeIn .25s ease" }}>
            <button onClick={() => setMenu(false)} style={{ position: "absolute", top: "20px", right: "26px", background: "none", border: "none", color: T.text, fontSize: "26px", cursor: "pointer" }}>×</button>
            {PAGES.map(p => <span key={p} onClick={() => go(p.toLowerCase())} style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.9rem", fontWeight: 800, color: router.pathname === `/${p.toLowerCase()}` ? "#FF3CAC" : T.text, cursor: "pointer" }}>{p}</span>)}
            <a href="mailto:bhaveshjariwala99@gmail.com" style={{ textDecoration: "none", marginTop: "6px" }}>
              <button className="bo">
                Contact Me
              </button>
            </a>
          </div>
        )}

        {/* Back to Top */}
        <BackToTop />

        {/* Main Content */}
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>

        

        {/* Footer */}
        <footer style={{ marginTop: '80px' }}>
          {/* Footer Top Section - Let's Work Together */}
          <section className="lets-work-section">
            <div className="container container-content">
              <div className="lets-work-container">
                {/* Left column - CTA Buttons */}
                <div className="lets-work-left">
                  <h2 className="lets-work-title">
                    Let's Work <span className="grad">Together</span>
                  </h2>
                  <p className="bt lets-work-description">
                    Have a project in mind? I'd love to hear about it. Let's create something great together!
                  </p>
                </div>

                {/* Right column - Navigation and Connect */}
                <div className="lets-work-right">
                  {/* Navigation Links */}
                  <div className="footer-quick-links">
                    <div className="title">
                      Navigation
                    </div>
                    {/* Desktop/Tablet: Normal vertical list */}
                    <ul>
                      <li>
                        <a href="/home">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/work">
                          Work
                        </a>
                      </li>
                      <li>
                        <a href="/about">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="/playground">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                    {/* Mobile: Accordion */}
                    <div className="footer-quick-links-accordion">
                      <div className="footer-quick-links-accordion" id="nav-accordion">
                        <button className="footer-quick-links-accordion-button" onClick={() => {
                          const content = document.querySelector('#nav-accordion .footer-quick-links-accordion-content') as HTMLElement;
                          const indicator = document.querySelector('#nav-accordion .footer-quick-links-accordion-button span:last-child') as HTMLElement;
                          if (content && indicator) {
                            if (content.style.display === 'block') {
                              content.style.display = 'none';
                              indicator.textContent = '+';
                            } else {
                              content.style.display = 'block';
                              indicator.textContent = '-';
                            }
                          }
                        }}>
                          <span></span>
                          <span>Navigation</span>
                          <span>+</span>
                        </button>
                        <div className="footer-quick-links-accordion-content" style={{ display: 'none', background: T.subtle, borderColor: T.border }}>
                          <div>
                            <a href="/home">
                              Home
                            </a>
                          </div>
                          <div>
                            <a href="/work">
                              Work
                            </a>
                          </div>
                          <div>
                            <a href="/about">
                              About
                            </a>
                          </div>
                          <div>
                            <a href="/playground">
                              Playground
                            </a>
                          </div>
                          <div>
                            <a href="/contact">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connect - Text List */}
                  <div className="footer-quick-links">
                    <div className="title">
                      Connect
                    </div>
                    {/* Desktop/Tablet: Normal vertical list */}
                    <ul>
                      <li>
                        <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer">
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a href={DATA.contact.behance} target="_blank" rel="noreferrer">
                          Behance
                        </a>
                      </li>
                      <li>
                        <a href={DATA.contact.dribbble} target="_blank" rel="noreferrer">
                          Dribbble
                        </a>
                      </li>
                      <li>
                        <a href={DATA.contact.github} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a href={DATA.contact.twitter} target="_blank" rel="noreferrer">
                          Twitter
                        </a>
                      </li>
                    </ul>
                    {/* Mobile: Accordion */}
                    <div className="footer-quick-links-accordion">
                      <div className="footer-quick-links-accordion" id="connect-accordion">
                        <button className="footer-quick-links-accordion-button" onClick={() => {
                          const content = document.querySelector('#connect-accordion .footer-quick-links-accordion-content') as HTMLElement;
                          const indicator = document.querySelector('#connect-accordion .footer-quick-links-accordion-button span:last-child') as HTMLElement;
                          if (content && indicator) {
                            if (content.style.display === 'block') {
                              content.style.display = 'none';
                              indicator.textContent = '+';
                            } else {
                              content.style.display = 'block';
                              indicator.textContent = '-';
                            }
                          }
                        }}>
                          <span></span>
                          <span>Connect</span>
                          <span>+</span>
                        </button>
                        <div className="footer-quick-links-accordion-content" style={{ display: 'none', background: T.subtle, borderColor: T.border }}>
                          <div>
                            <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer">
                              LinkedIn
                            </a>
                          </div>
                          <div>
                            <a href={DATA.contact.behance} target="_blank" rel="noreferrer">
                              Behance
                            </a>
                          </div>
                          <div>
                            <a href={DATA.contact.dribbble} target="_blank" rel="noreferrer">
                              Dribbble
                            </a>
                          </div>
                          <div>
                            <a href={DATA.contact.github} target="_blank" rel="noreferrer">
                              GitHub
                            </a>
                          </div>
                          <div>
                            <a href={DATA.contact.twitter} target="_blank" rel="noreferrer">
                              Twitter
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>        
          {/* Footer Bottom Section */}
          <section className="footer-bottom">
            <div className="container container-content">
              <div className="footer-bottom-content">
                <span>Bhavesh Jariwala<span style={{ color: "#FF3CAC" }}>.</span></span>
                <span>
                  Made with ✦ purpose
                </span>
              </div>
            </div>
          </section>
        </footer>

        {/* Global Modal */}
        <GlobalModal galleryModal={galleryModal} setGalleryModal={setGalleryModal} />
      </div>
      )}
    </ThemeCtx.Provider>
  );
}



