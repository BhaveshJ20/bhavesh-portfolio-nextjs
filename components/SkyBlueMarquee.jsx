import { useRef } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import useAnim from "../hooks/useAnim";

function SkyBlueMarquee() {
  const ref = useRef(null); useAnim(ref);
  const words = ["Curious", "Mindful", "Inclusive", "Advocator", "Innovator", "Designer"];
  return (
    <div ref={ref} style={{ overflow: "hidden", borderTop: "1px solid rgba(0,212,255,.2)", borderBottom: "1px solid rgba(0,212,255,.2)", padding: "11px 0", background: "#00D4FF" }}>
      <div className="mqt-reverse">
        {Array(6).fill(words).flat().map((word, i) => (
          <span key={i} style={{ whiteSpace: "nowrap", padding: "0 18px", color: "#0A0A0A", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase" }}>
            {word}<span style={{ margin: "0 8px", opacity: .4 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkyBlueMarquee;
