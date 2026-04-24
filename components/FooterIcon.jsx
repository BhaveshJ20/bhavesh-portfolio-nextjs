import { useState } from "react";

function FooterIcon({ s, dark }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={s.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
      <div
        className="footer-icon"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        title={s.label}
        style={{
          width: "36px", height: "36px",
          background: hov ? "rgba(255,60,172,.18)" : dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.06)",
          border: `1px solid ${hov ? "#FF3CAC" : dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.12)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hov ? "#FF3CAC" : dark ? "rgba(240,237,232,.55)" : "rgba(10,10,10,.52)",
          borderRadius: "12px",
          transition: "all .2s", cursor: "pointer",
          transform: hov ? "translateY(-2px)" : "",
          boxShadow: hov ? "0 4px 14px rgba(255,60,172,.25)" : "none",
        }}
      >{s.icon}</div>
    </a>
  );
}

export default FooterIcon;
