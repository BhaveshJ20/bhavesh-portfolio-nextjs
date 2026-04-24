import { useTheme } from "../context/ThemeContext.jsx";
import DATA from "../data/data.js";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PlaygroundModal from "./PlaygroundModal.jsx";

function GlobalModal({ galleryModal, setGalleryModal }) {
  const { dark, T } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (galleryModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
    return () => {
      // Always cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [galleryModal]);
  
  if (!galleryModal) return null;
  
  // If item has caseStudy data, use PlaygroundModal
  if (galleryModal.caseStudy) {
    return <PlaygroundModal galleryModal={galleryModal} setGalleryModal={setGalleryModal} />;
  }
  
  // Otherwise use simple modal for Graphics, Illustrations, and Videos
  const items = DATA.gallery.items;
  
  const modalContent = (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", zIndex: 100000, display: "flex", flexDirection: "column", overflow: "hidden", animation: "fadeIn .2s ease" }}
      onClick={() => setGalleryModal(null)}>
      {/* Close button at top right - same position as PlaygroundModal */}
      <button onClick={() => setGalleryModal(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#F0EDE8", fontSize: "24px", cursor: "pointer", fontFamily: "'Syne',sans-serif", padding: "8px 16px", borderRadius: "8px", backdropFilter: "blur(10px)", zIndex: 100001 }}>✕ Close</button>
      
      {/* Scrollable content */}
      <div className="modal-scrollable" style={{ flex: 1, overflowY: "auto", maxWidth: "900px", width: "100%", margin: "0 auto", padding: "80px 20px 40px" }} onClick={e => e.stopPropagation()}>
        
        {galleryModal.video ? (
          // Video-only modal
          <div style={{ position: "relative", width: "100%", height: "clamp(300px,50vw,500px)", background: "#000", borderRadius: "12px", overflow: "hidden", marginBottom: "40px" }}>
            <iframe 
              src={galleryModal.video} 
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(10,10,10,.25),rgba(10,10,10,.85))" }} />
            <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
              <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", background: galleryModal.color, color: "#0A0A0A", padding: "4px 10px", borderRadius: "6px", marginBottom: "12px", display: "inline-block" }}>{galleryModal.tab}</span>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.06, color: "#FFFFFF" }}>{galleryModal.title}</h1>
            </div>
          </div>
        ) : (
          // Simple modal for Graphics and Illustrations with short description
          <>
            <div style={{ position: "relative", width: "100%", height: "clamp(300px,50vw,500px)", borderRadius: "12px", overflow: "hidden", marginBottom: "40px" }}>
              <img src={galleryModal.img} alt={galleryModal.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(10,10,10,.25),rgba(10,10,10,.85))" }} />
              <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", background: galleryModal.color, color: "#0A0A0A", padding: "4px 10px", borderRadius: "6px", marginBottom: "12px", display: "inline-block" }}>{galleryModal.tab}</span>
                <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.06, color: "#FFFFFF" }}>{galleryModal.title}</h1>
              </div>
            </div>
            {galleryModal.shortDescription && (
              <div style={{ padding: "16px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "12px" }}>
                <p className="bt" style={{ fontSize: ".95rem", lineHeight: 1.6, color: "#F0EDE8" }}>{galleryModal.shortDescription}</p>
              </div>
            )}
          </>
        )}
        
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "20px", borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <button onClick={(e) => { e.stopPropagation(); const idx = items.findIndex(x => x.id === galleryModal.id); setGalleryModal(items[(idx - 1 + items.length) % items.length]); }} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? "14px" : "16px", padding: isMobile ? "12px" : "10px 20px", background: "#FF3CAC", color: "#0A0A0A", border: "none", cursor: "pointer", transition: "transform .18s, box-shadow .18s", borderRadius: "8px", minWidth: isMobile ? "44px" : "120px", width: isMobile ? "auto" : "120px" }} onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "3px 3px 0 #FFEA00"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>{isMobile ? "←" : "← Prev"}</button>
          <button onClick={(e) => { e.stopPropagation(); const idx = items.findIndex(x => x.id === galleryModal.id); setGalleryModal(items[(idx + 1) % items.length]); }} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? "14px" : "16px", padding: isMobile ? "12px" : "10px 20px", background: "#FF3CAC", color: "#0A0A0A", border: "none", cursor: "pointer", transition: "transform .18s, box-shadow .18s", borderRadius: "8px", minWidth: isMobile ? "44px" : "124px", width: isMobile ? "auto" : "124px" }} onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "3px 3px 0 #FFEA00"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>{isMobile ? "→" : "Next →"}</button>
        </div>
      </div>
    </div>
  );
  
  return createPortal(modalContent, document.body);
}

export default GlobalModal;
