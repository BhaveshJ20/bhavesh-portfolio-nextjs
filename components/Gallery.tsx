import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import DATA from "../data/data";
import GlobalModal from "./GlobalModal";

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

function Gallery() {
  const { dark, T } = useTheme();
  const [modalItem, setModalItem] = useState<any>(null);
  const [tab, setTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);
  const [isDesktop, setIsDesktop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useAnim(ref);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = tab === "All" ? DATA.gallery?.items || [] : DATA.gallery?.items?.filter(x => x.tab === tab) || [];
  const tabs = DATA.gallery?.tabs || ["All", "UI", "Branding", "Illustration"];

  // Show only first visibleCount items
  const visibleItems = items.slice(0, visibleCount);
  const hasMoreItems = items.length > visibleCount;

  // Masonry-like varying heights
  const heights = [240, 300, 200, 280, 260, 220, 300, 240, 200, 280, 260, 220];

  return (
    <div className="section-lg page-first-section">
      <div className="container container-content">
        <div ref={ref} className="ap">
          <span className="stag ac">Playground</span>
          <h1 className="sh1 ac" style={{ marginBottom: "8px", color: dark ? "#F0EDE8" : "#0A0A0A" }}>Creative <span className="grad">art & crafts</span></h1>
          <p className="bt ac" style={{ maxWidth: "480px", marginBottom: "40px", fontSize: ".95rem" }}>Illustrations, branding, UI concepts, and experimental graphics - the full creative spectrum.</p>

          {/* Tabs */}
          <div className="ac" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
            {tabs.map(t => {
              const isActive = tab === t;
              const bgColor = isActive ? "#FF3CAC" : (dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)");
              const textColor = isActive ? "#0A0A0A" : ((T as any).muted || "rgba(136,136,136,1)");
              const borderColor = isActive ? "#FF3CAC" : (dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)");
              return (
                <button key={t} onClick={() => { setTab(t); setVisibleCount(9); }} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", padding: "7px 14px", background: bgColor, color: textColor, border: `1px solid ${borderColor}`, cursor: "pointer", transition: "all .2s", whiteSpace: "nowrap", borderRadius: "8px" }}>
                  {t}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="ac" style={{ display: "grid", gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", alignItems: "start" }}>
            {visibleItems.map((item, i) => (
              <div
                key={item.id}
                className="ac gitem"
                onClick={() => setModalItem(item)}
                style={{
                  cursor: "pointer",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "280px",
                  transition: "all .3s ease",
                  animationDelay: `${i * 50}ms`,
                  position: "relative"
                }}
              >
                {item.video ? (
                  <>
                    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                      <iframe
                        src={item.video}
                        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="goverlay" />
                      <div className="gtitle">{item.title}</div>
                      <span style={{ position: "absolute", top: "10px", left: "10px", fontFamily: "'Syne',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", background: item.color, color: "#0A0A0A", padding: "2px 7px", zIndex: 2, borderRadius: "6px" }}>{item.tab}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.img || item.thumbnail}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform .3s ease"
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                    <div className="goverlay" />
                    <div className="gtitle">{item.title}</div>
                    <span style={{ position: "absolute", top: "10px", left: "10px", fontFamily: "'Syne',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", background: item.color, color: "#0A0A0A", padding: "2px 7px", zIndex: 2, borderRadius: "6px" }}>{item.tab}</span>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreItems && (
            <div className="ac" style={{ textAlign: "center", marginTop: "32px" }}>
              <button className="bp" onClick={() => setVisibleCount(prev => prev + 9)}>Load More</button>
            </div>
          )}
        </div>
      </div>
      <GlobalModal galleryModal={modalItem} setGalleryModal={setModalItem} />
    </div>
  );
}

export default Gallery;
