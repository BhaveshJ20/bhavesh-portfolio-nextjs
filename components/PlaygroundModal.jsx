import { useTheme } from "../context/ThemeContext.jsx";
import { createPortal } from "react-dom";
import { useState, useRef, useEffect } from "react";

function PlaygroundModal({ galleryModal, setGalleryModal }) {
  const { dark, T } = useTheme();
  const [galleryPage, setGalleryPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (!galleryModal || !galleryModal.caseStudy) return null;
  
  const caseStudy = galleryModal.caseStudy;
  const items = require("../data/data.js").default.gallery.items;
  
  // Gallery pagination logic
  const PER = isMobile ? 1 : 2;
  const galleryPages = caseStudy.images ? Math.ceil(caseStudy.images.length / PER) : 0;
  
  const goToGalleryPage = (p) => setGalleryPage((p + galleryPages) % galleryPages);
  
  // Autoplay functionality
  useEffect(() => {
    if (galleryPages > 1) {
      intervalRef.current = setInterval(() => {
        setGalleryPage((prevPage) => (prevPage + 1) % galleryPages);
      }, 4000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [galleryPages]);
  
  const modalContent = (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.9)", zIndex: 100000, display: "flex", flexDirection: "column", overflow: "hidden", touchAction: "none", animation: "fadeIn .2s ease" }}
      onClick={() => setGalleryModal(null)}>
      {/* Close button */}
      <button onClick={() => setGalleryModal(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: dark ? "#F0EDE8" : "#FFFFFF", fontSize: "24px", cursor: "pointer", fontFamily: "'Syne',sans-serif", padding: "8px 16px", borderRadius: "8px", backdropFilter: "blur(10px)", zIndex: 100001 }}>✕ Close</button>
      
      {/* Scrollable content */}
      <div className="modal-scrollable" style={{ flex: 1, overflowY: "auto", maxWidth: "1000px", width: "100%", margin: "0 auto", padding: "60px 20px", touchAction: "auto" }} onClick={e => e.stopPropagation()}>
        {/* Hero Banner */}
        <div style={{ position: "relative", height: "clamp(300px,50vw,500px)", overflow: "hidden", borderRadius: "12px", marginBottom: "40px" }}>
          <img src={caseStudy.heroBanner} alt={galleryModal.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(10,10,10,.25),rgba(10,10,10,.85))" }} />
          <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", background: galleryModal.color, color: "#0A0A0A", padding: "4px 10px", borderRadius: "6px", marginBottom: "12px", display: "inline-block" }}>{galleryModal.tab}</span>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.06, color: "#FFFFFF" }}>{galleryModal.title}</h1>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div style={{ marginBottom: "60px" }}>
          {/* Description */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.7)", marginBottom: "16px" }}>Overview</h2>
            <p className="bt" style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "#F0EDE8" }}>{caseStudy.fullDescription}</p>
          </div>
          
          {/* Metrics */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "40px", padding: "20px 24px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "12px" }}>
              {caseStudy.metrics.map((m, i) => (
                <div key={i} style={{ flex: "1 1 110px", textAlign: isMobile ? "left" : "center" }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.3rem", fontWeight: 800, color: galleryModal.color, marginBottom: "4px" }}>{typeof m === 'string' ? m : m.value}</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(240,237,232,.55)" }}>{typeof m === 'string' ? 'Key Metric' : m.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {/* Tools */}
          {caseStudy.tools && caseStudy.tools.length > 0 && (
            <div style={{ marginBottom: "40px" }}>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.7)", marginBottom: "12px" }}>Tools & Stack</h2>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {caseStudy.tools.map((t, i) => (
                  <span key={i} style={{ 
                    fontFamily: "'Syne',sans-serif", 
                    fontSize: "12px", 
                    fontWeight: 700, 
                    padding: "6px 12px", 
                    background: "rgba(255,255,255,.03)", 
                    border: "1px solid rgba(255,255,255,.09)", 
                    boxShadow: "none",
                    borderRadius: "6px",
                    color: "#F0EDE8"
                  }}>{t}</span>
                ))}
              </div>
            </div>
          )}
          
          {/* Images */}
          {caseStudy.images && caseStudy.images.length > 0 && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "16px" }}>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.7)" }}>Gallery</h2>
                {galleryPages > 1 && (
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    {Array.from({ length: galleryPages }).map((_, i) => (
                      <button key={i} onClick={() => goToGalleryPage(i)} style={{ width: i === galleryPage ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: i === galleryPage ? "#FF3CAC" : "rgba(240,237,232,.55)", cursor: "pointer", transition: "all .25s", padding: 0, opacity: i === galleryPage ? 1 : 0.35 }} />
                    ))}
                  </div>
                )}
              </div>
              <div style={{ position: "relative", padding: "0 0px" }}
                   onMouseEnter={() => {
                     setIsSliderHovered(true);
                     if (intervalRef.current) {
                       clearInterval(intervalRef.current);
                     }
                   }}
                   onMouseLeave={() => {
                     setIsSliderHovered(false);
                     if (galleryPages > 1) {
                       intervalRef.current = setInterval(() => {
                         setGalleryPage((prevPage) => (prevPage + 1) % galleryPages);
                       }, 4000);
                     }
                   }}>
                {/* Navigation arrows - positioned on entire slider area */}
                {galleryPages > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); goToGalleryPage(galleryPage - 1); }}
                      style={{ 
                        position: "absolute", 
                        left: "20px", 
                        top: "50%", 
                        transform: "translateY(-50%)", 
                        padding: "6px 16px", 
                        fontSize: "20px", 
                        opacity: isSliderHovered ? 1 : 0, 
                        transition: "opacity .25s",
                        background: "rgba(0,0,0,.7)",
                        border: "1px solid rgba(255,255,255,.3)",
                        color: "#FFFFFF",
                        borderRadius: "8px",
                        cursor: "pointer",
                        zIndex: 10
                      }}
                    >←</button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); goToGalleryPage(galleryPage + 1); }}
                      style={{ 
                        position: "absolute", 
                        right: "20px", 
                        top: "50%", 
                        transform: "translateY(-50%)", 
                        padding: "6px 16px", 
                        fontSize: "20px", 
                        opacity: isSliderHovered ? 1 : 0, 
                        transition: "opacity .25s",
                        background: "rgba(0,0,0,.7)",
                        border: "1px solid rgba(255,255,255,.3)",
                        color: "#FFFFFF",
                        borderRadius: "8px",
                        cursor: "pointer",
                        zIndex: 10
                      }}
                    >→</button>
                  </>
                )}
                <div key={`gallery-${galleryPage}`} style={{ 
                  display: "grid", 
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
                  gap: "20px", 
                  animation: "slideLeft .3s ease both"
                }}>
                  {caseStudy.images.slice(galleryPage * PER, galleryPage * PER + PER).map((img, i) => (
                    <div key={`${galleryPage}-${i}`} style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,.1)" }}>
                      <img src={img} alt={`${galleryModal.title} ${galleryPage * PER + i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "20px", borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <button onClick={(e) => { e.stopPropagation(); const idx = items.findIndex(x => x.id === galleryModal.id); setGalleryModal(items[(idx - 1 + items.length) % items.length]); }} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? "14px" : "16px", padding: isMobile ? "12px" : "10px 20px", background: "#FF3CAC", color: "#0A0A0A", border: "none", cursor: "pointer", transition: "transform .18s, box-shadow .18s", borderRadius: "8px", minWidth: isMobile ? "44px" : "120px", width: isMobile ? "auto" : "120px" }} onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "3px 3px 0 #FFEA00"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>{isMobile ? "←" : "← Prev"}</button>
          <button onClick={(e) => { e.stopPropagation(); const idx = items.findIndex(x => x.id === galleryModal.id); setGalleryModal(items[(idx + 1) % items.length]); }} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? "14px" : "16px", padding: isMobile ? "12px" : "10px 20px", background: "#FF3CAC", color: "#0A0A0A", border: "none", cursor: "pointer", transition: "transform .18s, box-shadow .18s", borderRadius: "8px", minWidth: isMobile ? "44px" : "124px", width: isMobile ? "auto" : "124x" }} onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "3px 3px 0 #FFEA00"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>{isMobile ? "→" : "Next →"}</button>
        </div>
      </div>
    </div>
  );
  
  return createPortal(modalContent, document.body);
}

export default PlaygroundModal;
