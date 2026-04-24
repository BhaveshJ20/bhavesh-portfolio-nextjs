import DATA from "../data/data.js";
import AnimatedNumber from "./AnimatedNumber.jsx";

function HeroVideoPanel() {
  return (
    <div style={{ position: "relative", flex: "0 0 auto", width: "clamp(280px,38vw,440px)" }}>
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
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(240,237,232,.25)", marginLeft: "8px", flex: 1, textAlign: "center" }}>bhaveshjariwala — portfolio video</span>
        </div>
        {/* Embedded YouTube */}
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px" }}>
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
          <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(240,237,232,.3)" }}>Portfolio Intro</span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#FF3CAC", animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#FF3CAC" }}>Watch</span>
          </span>
        </div>
      </div>

      {/* Floating stat badges */}
      <div style={{ position: "absolute", top: "14px", right: "-22px", background: "rgba(10,10,10,.9)", border: "1px solid rgba(255,234,0,.35)", padding: "8px 14px", zIndex: 3, backdropFilter: "blur(8px)", animation: "floatPhoto 5s ease-in-out infinite", borderRadius: "12px" }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "16px", fontWeight: 800, color: "#FFEA00", lineHeight: 1 }}><AnimatedNumber value="70+" /></div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: "rgba(240,237,232,.4)", marginTop: "2px" }}>Projects</div>
      </div>
      <div style={{ position: "absolute", bottom: "20px", left: "-20px", background: "rgba(10,10,10,.9)", border: "1px solid rgba(0,212,255,.35)", padding: "8px 14px", zIndex: 3, backdropFilter: "blur(8px)", animation: "floatPhoto 7s 1s ease-in-out infinite", borderRadius: "12px" }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "16px", fontWeight: 800, color: "#00D4FF", lineHeight: 1 }}><AnimatedNumber value="13+" /></div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: "rgba(240,237,232,.4)", marginTop: "2px" }}>Years XP</div>
      </div>
    </div>
  );
}


export default HeroVideoPanel;
