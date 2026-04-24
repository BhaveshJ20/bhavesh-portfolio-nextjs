import React, { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import DATA from "../data/data";

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

function Contact() {
  const { dark, T } = useTheme();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLDivElement>(null); 
  useAnim(ref);
  
  const submit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    setBusy(true); 
    setTimeout(() => { 
      setBusy(false); 
      setSent(true); 
    }, 1300); 
  };
  
  const borderCol = dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.12)";

  return (
    <div className="section-lg" style={{ paddingBottom: "80px" }}>
      <div className="container container-content">
        <div ref={ref} className="ap">
          <span className="stag ac">Let's Connect</span>
          <h1 className="sh1 ac" style={{ marginBottom: "44px" }}>Ready to build<br /><span className="grad">something great?</span></h1>
          <div className="ac pgrid2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "52px", alignItems: "start" }}>
            <div>
              <p className="bt" style={{ fontSize: "1rem", marginBottom: "26px" }}>I'm currently open to senior UX/UI and product design roles in B2B SaaS and enterprise environments hybrid or remote.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "26px" }}>
                {["Senior UX Designer (B2B SaaS / Enterprise)", "Product Designer (SaaS / B2B)", "Design Systems Designer", "Frontend-Aware UX Designer"].map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "9px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.muted || "rgba(240,237,232,.55)" }}>
                    <span style={{ color: "#FF3CAC", fontWeight: 800, fontSize: "11px" }}>✓</span>{r}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                <a href={`mailto:${DATA.contact.email}`} style={{ textDecoration: "none" }}><button className="bp" style={{ width: "100%", justifyContent: "center" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  Email Me
                </button></a>
                <a href={DATA.whatsapp} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className="bw" style={{ width: "100%", justifyContent: "center" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </button></a>
                <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className="bo" style={{ width: "100%", justifyContent: "center" }}>LinkedIn ↗</button></a>
              </div>
            </div>
            <div className="contact-form-box" style={{ background: T.subtle || "rgba(255,255,255,.03)", border: `1px solid ${T.subtleBorder || (dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)")}`, padding: "28px", transition: "background .35s, border-color .35s", borderRadius: "12px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 16px" }}>
                  <div style={{ fontSize: "38px", marginBottom: "12px" }}>✅</div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "18px", fontWeight: 800, marginBottom: "7px", color: T.text || "#F0EDE8" }}>Message Sent!</h3>
                  <p className="bt" style={{ fontSize: ".9rem" }}>I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  {[["Name *", "text", "Your full name", "name"], ["Email *", "email", "your@email.com", "email"], ["Role / Company", "text", "Hiring Manager at Acme Inc.", "company"]].map(([lbl, type, ph, nm]) => (
                    <div key={nm} style={{ marginBottom: "12px" }}>
                      <label style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, color: T.muted || "rgba(240,237,232,.55)", letterSpacing: ".12em", textTransform: "uppercase", display: "block", marginBottom: "5px" }}>{lbl}</label>
                      <input type={type} name={nm} placeholder={ph} required={lbl.includes("*")} style={{ background: T.subtle || "rgba(255,255,255,.05)", border: `1px solid ${borderCol}`, padding: "11px 13px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.text || "#F0EDE8", width: "100%", outline: "none", transition: "border-color .2s, background .35s", borderRadius: "8px" }} onFocus={e => e.target.style.borderColor = "#FF3CAC"} onBlur={e => e.target.style.borderColor = borderCol} />
                    </div>
                  ))}
                  <div style={{ marginBottom: "15px" }}>
                    <label style={{ fontFamily: "'Syne',sans-serif", fontSize: "10px", fontWeight: 700, color: T.muted || "rgba(240,237,232,.55)", letterSpacing: ".12em", textTransform: "uppercase", display: "block", marginBottom: "5px" }}>Message *</label>
                    <textarea name="message" rows={4} placeholder="Tell me about the opportunity..." required style={{ background: T.subtle || "rgba(255,255,255,.05)", border: `1px solid ${borderCol}`, padding: "11px 13px", fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: T.text || "#F0EDE8", width: "100%", outline: "none", resize: "none", transition: "border-color .2s, background .35s", borderRadius: "8px" }} onFocus={e => e.target.style.borderColor = "#FF3CAC"} onBlur={e => e.target.style.borderColor = borderCol} />
                  </div>
                  <button type="submit" className="bp" disabled={busy} style={{ width: "100%", justifyContent: "center", opacity: busy ? .6 : 1 }}>{busy ? "Sending…" : "Send Message"}</button>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: T.muted || "rgba(240,237,232,.55)", textAlign: "center", marginTop: "8px" }}>🔒 No spam.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
