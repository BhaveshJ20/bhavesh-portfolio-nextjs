export default function MarqueeStrip() {
  const w = ["Brand Identity", "UI/UX Design", "Design Systems", "Frontend Thinking", "SaaS Products", "Figma", "Adobe CC", "Typography", "Information Architecture", "User Research"];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(240,237,232,.07)", borderBottom: "1px solid rgba(240,237,232,.07)", padding: "11px 0", background: "#FF3CAC" }}>
      <div className="mqt">
        {Array(6).fill(w).flat().map((x, i) => (
          <span key={i} style={{ whiteSpace: "nowrap", padding: "0 18px", color: "#0A0A0A", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase" }}>
            {x}<span style={{ margin: "0 8px", opacity: .4 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

