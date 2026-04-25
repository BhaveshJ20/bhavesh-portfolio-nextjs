import React, { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "next/router";
import DATA from "../data/data";
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

function Work() {
  const { dark, T } = useTheme();
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(6);
  const cats = ["All", ...Array.from(new Set(DATA.projects.map(p => p.category))).filter(c => c !== "Branding")];
  const all = filter === "All" ? DATA.projects : DATA.projects.filter(p => p.category === filter);
  const list = all.slice(0, visible);
  const ref = useRef<HTMLDivElement>(null);
  useAnim(ref);

  const openProject = (project: any) => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <section className="section-lg page-first-section">
    <div className="container container-content">
      <div ref={ref} className="ap" >
        <span className="stag ac">Selected Work</span>
        <h1 className="sh1 ac" style={{ marginBottom: "12px" }}>Case <span className="grad">Studies.</span></h1>
        <p className="bt ac" style={{ maxWidth: "460px", marginBottom: "34px", fontSize: ".95rem" }}>Real products. Real constraints. Real outcomes. B2B SaaS and enterprise design.</p>
        <div className="ac" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
          {cats.map(c => {
            const isActive = filter === c;
            const bgColor = isActive ? "#FF3CAC" : (dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)");
            const textColor = isActive ? "#0A0A0A" : ((T as any).muted || "rgba(136,136,136,1)");
            const borderColor = isActive ? "#FF3CAC" : (dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)");
            return (
              <button key={c} onClick={() => { setFilter(c); setVisible(6); }} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", padding: "7px 14px", background: bgColor, color: textColor, border: `1px solid ${borderColor}`, cursor: "pointer", transition: "all .2s", borderRadius: "8px" }}>{c}</button>
            );
          })}
        </div>
        <div className="ac pgrid2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {list.map(p => <PCard key={p.id} p={p} onClick={openProject} />)}
        </div>
        {visible < all.length && (
          <div className="ac" style={{ textAlign: "center", marginTop: "32px" }}>
            <button className="bp" onClick={() => setVisible(v => v + 6)}>Load More</button>
          </div>
        )}
      </div>
    </div>
    </section>
  );
}

export default Work;
