import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import DATA from "../../../data/data";

export default function CaseStudyDetail() {
  const router = useRouter();
  const { category, slug } = router.query;

  const item = DATA.gallery.items.find(
    (i) => i.slug === slug && i.tab.toLowerCase() === (Array.isArray(category) ? category[0]?.toLowerCase() : category?.toLowerCase())
  );

  if (!item || !item.caseStudy) {
    return (
      <Layout>
        <div style={{ padding: "120px 24px", textAlign: "center" }}>
          <h1>Case Study Not Found</h1>
          <button onClick={() => router.push("/playground")} style={{ marginTop: "20px", padding: "12px 24px", background: "#FF3CAC", border: "none", color: "#0A0A0A", cursor: "pointer", borderRadius: "8px" }}>
            Back to Playground
          </button>
        </div>
      </Layout>
    );
  }

  const caseStudy = item.caseStudy;
  const allItems = DATA.gallery.items.filter(i => i.tab === item.tab);
  const currentIndex = allItems.findIndex(i => i.id === item.id);
  const prevItem = allItems[(currentIndex - 1 + allItems.length) % allItems.length];
  const nextItem = allItems[(currentIndex + 1) % allItems.length];

  return (
    <>
      <Head>
        <title>{item.title} - Bhavesh J20</title>
        <meta name="description" content={caseStudy.fullDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{ minHeight: "100vh", background: "#0D0D0D", color: "#F5F4F0" }}>
          {/* Back Button */}
          <button
            onClick={() => router.push("/playground")}
            style={{
              position: "fixed",
              top: "24px",
              left: "28px",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              fontWeight: 500,
              color: "#888",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "8px 16px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(13,13,13,0.9)",
              backdropFilter: "blur(12px)",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#7AB928";
              e.currentTarget.style.borderColor = "rgba(122,185,40,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            ← Back to Playground
          </button>

          {/* Hero Section */}
          <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "120px 64px 80px", position: "relative", zIndex: 2 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7AB928", padding: "5px 12px", border: "1px solid rgba(122,185,40,0.3)", background: "rgba(122,185,40,0.08)", borderRadius: "100px", marginBottom: "28px", width: "fit-content" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7AB928" }}></span>
                Brand Identity Case Study
              </div>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 10vw, 148px)", lineHeight: 0.88, letterSpacing: "0.02em", marginBottom: "6px", color: "#F5F4F0" }}>
                {item.title}
              </h1>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(14px, 2vw, 22px)", letterSpacing: "0.28em", color: "#888", marginBottom: "48px" }}>
                {caseStudy.industry || "Case Study"}
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888" }}>Role</span>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#F5F4F0" }}>{caseStudy.role || "Designer"}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888" }}>Timeline</span>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#F5F4F0" }}>{caseStudy.timeline || "TBD"}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888" }}>Industry</span>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#F5F4F0" }}>{caseStudy.industry || "Design"}</span>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 64, right: 64, height: "1px", background: "linear-gradient(90deg, #7AB928, transparent)", opacity: 0.4 }}></div>
            </div>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={caseStudy.heroBanner} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center", filter: "brightness(0.55) saturate(0.8)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0D0D0D 0%, transparent 40%)" }}></div>
            </div>
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(122,185,40,0.18), transparent)" }}></div>

          {/* Overview Section */}
          {caseStudy.sections?.overview && (
            <section style={{ padding: "120px 64px", background: "#0D0D0D" }}>
              <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                  01 — Project Overview
                  <div style={{ flex: 1, height: "1px", background: "rgba(122,185,40,0.2)", maxWidth: "80px" }}></div>
                </div>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.03em", marginBottom: "20px" }}>
                  The <em style={{ color: "#7AB928", fontStyle: "normal" }}>Brief.</em>
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
                  <div>
                    <p style={{ fontSize: "16px", color: "rgba(245,244,240,0.68)", lineHeight: 1.82, marginBottom: "24px" }}>
                      {caseStudy.sections.overview.description}
                    </p>
                    <div style={{ background: "rgba(122,185,40,0.06)", border: "1px solid rgba(122,185,40,0.18)", borderLeft: "3px solid #7AB928", padding: "32px 36px", marginTop: "32px" }}>
                      <h4 style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px" }}>Core Brief</h4>
                      <p style={{ fontSize: "15px", color: "rgba(245,244,240,0.7)", lineHeight: 1.75 }}>{caseStudy.sections.overview.coreBrief}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid rgba(255,255,255,0.07)" }}>
                    {caseStudy.sections.overview.specs.map((spec, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.02)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#888" }}>{spec.key}</span>
                        <span style={{ fontSize: "14px", fontWeight: 600, color: "#F5F4F0", textAlign: "right" }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Problem Section */}
          {caseStudy.sections?.problem && (
            <>
              <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(122,185,40,0.18), transparent)" }}></div>
              <section style={{ padding: "120px 64px", background: "#111111" }}>
                <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    02 — Problem Statement
                    <div style={{ flex: 1, height: "1px", background: "rgba(122,185,40,0.2)", maxWidth: "80px" }}></div>
                  </div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.03em", marginBottom: "20px" }}>
                    What Was<br /><em style={{ color: "#7AB928", fontStyle: "normal" }}>Broken.</em>
                  </h2>
                  <p style={{ fontSize: "16px", color: "rgba(245,244,240,0.6)", maxWidth: "560px", lineHeight: 1.78, marginBottom: "60px" }}>
                    {caseStudy.sections.problem.description}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    {caseStudy.sections.problem.problems.map((problem, i) => (
                      <div key={i} style={{ background: "#111111", padding: "40px 36px", position: "relative", overflow: "hidden", transition: "background 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.background = "#141414"} onMouseLeave={(e) => e.currentTarget.style.background = "#111111"}>
                        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "60px", lineHeight: 1, color: "rgba(122,185,40,0.1)", marginBottom: "16px", display: "block" }}>{problem.num}</span>
                        <div style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px", color: "#F5F4F0" }}>{problem.title}</div>
                        <p style={{ fontSize: "14px", color: "rgba(245,244,240,0.55)", lineHeight: 1.72 }}>{problem.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "0.02em", color: "rgba(245,244,240,0.12)", marginTop: "80px", borderLeft: "3px solid #7AB928", paddingLeft: "32px" }}>
                    "{caseStudy.sections.problem.quote}"
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Approach Section */}
          {caseStudy.sections?.approach && (
            <>
              <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(122,185,40,0.18), transparent)" }}></div>
              <section style={{ padding: "120px 64px", background: "#0D0D0D" }}>
                <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    03 — Design Approach
                    <div style={{ flex: 1, height: "1px", background: "rgba(122,185,40,0.2)", maxWidth: "80px" }}></div>
                  </div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.03em", marginBottom: "20px" }}>
                    How I<br /><em style={{ color: "#7AB928", fontStyle: "normal" }}>Approached It.</em>
                  </h2>
                  <p style={{ fontSize: "16px", color: "rgba(245,244,240,0.6)", maxWidth: "560px", lineHeight: 1.78, marginBottom: "60px" }}>
                    {caseStudy.sections.approach.description}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginBottom: "64px" }}>
                    {caseStudy.sections.approach.approaches.map((approach, i) => (
                      <div key={i} style={{ padding: "32px 28px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", position: "relative", overflow: "hidden", transition: "border-color 0.3s, transform 0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(122,185,40,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; }}>
                        <span style={{ fontSize: "28px", marginBottom: "20px", display: "block" }}>{approach.icon}</span>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "8px" }}>{approach.label}</div>
                        <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{approach.title}</div>
                        <p style={{ fontSize: "13.5px", color: "rgba(245,244,240,0.55)", lineHeight: 1.7 }}>{approach.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "rgba(122,185,40,0.06)", border: "1px solid rgba(122,185,40,0.2)", padding: "52px 56px", display: "flex", alignItems: "center", gap: "48px" }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "96px", lineHeight: 1, color: "#7AB928", opacity: 0.15, flexShrink: 0 }}>⚛</div>
                    <div>
                      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "36px", letterSpacing: "0.04em", color: "#7AB928", marginBottom: "10px" }}>{caseStudy.sections.approach.concept.title}</h3>
                      <p style={{ fontSize: "15px", color: "rgba(245,244,240,0.65)", lineHeight: 1.78, maxWidth: "540px" }}>{caseStudy.sections.approach.concept.desc}</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Logo Section */}
          {caseStudy.sections?.logo && (
            <>
              <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(122,185,40,0.18), transparent)" }}></div>
              <section style={{ padding: "120px 64px", background: "#111111" }}>
                <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    04 — Logo Design & Concept
                    <div style={{ flex: 1, height: "1px", background: "rgba(122,185,40,0.2)", maxWidth: "80px" }}></div>
                  </div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.03em", marginBottom: "20px" }}>
                    Symbol of<br /><em style={{ color: "#7AB928", fontStyle: "normal" }}>Science.</em>
                  </h2>
                  <p style={{ fontSize: "16px", color: "rgba(245,244,240,0.6)", maxWidth: "560px", lineHeight: 1.78, marginBottom: "60px" }}>
                    {caseStudy.sections.logo.description}
                  </p>
                </div>
                <div style={{ background: "#F5F4F0", padding: "80px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2px", position: "relative", overflow: "hidden", minHeight: "420px", maxWidth: "1160px", margin: "0 auto" }}>
                  <img src="/images/branding/nales/Logo.png" alt="NALES Logo" style={{ maxWidth: "600px", width: "100%", position: "relative", zIndex: 1, filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.12))" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "24px", maxWidth: "1160px", margin: "24px auto 0" }}>
                  {caseStudy.sections.logo.anatomy.map((item, i) => (
                    <div key={i} style={{ padding: "28px 28px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "10px" }}>{item.label}</div>
                      <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{item.title}</div>
                      <p style={{ fontSize: "13.5px", color: "rgba(245,244,240,0.55)", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Colors Section */}
          {caseStudy.sections?.colors && (
            <>
              <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(122,185,40,0.18), transparent)" }}></div>
              <section style={{ padding: "120px 64px", background: "#0D0D0D" }}>
                <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    05 — Visual Identity · Colour
                    <div style={{ flex: 1, height: "1px", background: "rgba(122,185,40,0.2)", maxWidth: "80px" }}></div>
                  </div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.03em", marginBottom: "20px" }}>
                    The <em style={{ color: "#7AB928", fontStyle: "normal" }}>Palette.</em>
                  </h2>
                  <p style={{ fontSize: "16px", color: "rgba(245,244,240,0.6)", maxWidth: "560px", lineHeight: 1.78, marginBottom: "60px" }}>
                    {caseStudy.sections.colors.description}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "48px" }}>
                    {caseStudy.sections.colors.colors.map((color, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"} onMouseLeave={(e) => e.currentTarget.style.transform = ""}>
                        <div style={{ height: "120px", position: "relative", background: color.hex }}></div>
                        <div style={{ padding: "20px 18px", background: "#111" }}>
                          <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "6px" }}>{color.name}</div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#888", marginBottom: "3px" }}>{color.hex}</div>
                          <div style={{ fontSize: "11px", color: "rgba(245,244,240,0.38)", lineHeight: 1.5, marginTop: "8px" }}>{color.usage}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                    {caseStudy.sections.colors.rules.map((rule, i) => (
                      <div key={i} style={{ padding: "22px 20px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7AB928", marginBottom: "8px" }}>{rule.label}</div>
                        <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", marginBottom: "8px", borderRadius: "2px", overflow: "hidden" }}>
                          <div style={{ height: "100%", borderRadius: "2px", width: rule.width, background: rule.color }}></div>
                        </div>
                        <p style={{ fontSize: "12.5px", color: "rgba(245,244,240,0.5)", lineHeight: 1.6 }}>{rule.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Applications Section */}
          {caseStudy.sections?.applications && (
            <>
              <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(122,185,40,0.18), transparent)" }}></div>
              <section style={{ padding: "120px 64px", background: "#0D0D0D" }}>
                <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    07 — Brand Applications
                    <div style={{ flex: 1, height: "1px", background: "rgba(122,185,40,0.2)", maxWidth: "80px" }}></div>
                  </div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.03em", marginBottom: "20px" }}>
                    The System<br /><em style={{ color: "#7AB928", fontStyle: "normal" }}>in Action.</em>
                  </h2>
                  <p style={{ fontSize: "16px", color: "rgba(245,244,240,0.6)", maxWidth: "560px", lineHeight: 1.78, marginBottom: "60px" }}>
                    {caseStudy.sections.applications.description}
                  </p>
                  {caseStudy.sections.applications.items.map((app, i) => (
                    <div key={i} style={{ marginBottom: "80px" }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "16px" }}>{app.sectionTitle}</div>
                      <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>{app.heading}</div>
                      <p style={{ fontSize: "14px", color: "rgba(245,244,240,0.55)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "28px" }}>{app.rationale}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        {app.images.map((img, j) => (
                          <div key={j} style={{ border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", position: "relative", background: "#161616", transition: "border-color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(122,185,40,0.2)"} onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}>
                            <img src={img.src} alt={img.caption} style={{ width: "100%", display: "block" }} />
                            <div style={{ padding: "14px 20px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#888", letterSpacing: "0.1em", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span>{img.caption}</span>
                              <span>{img.size}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Impact Section */}
          {caseStudy.sections?.impact && (
            <>
              <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(122,185,40,0.18), transparent)" }}></div>
              <section style={{ padding: "120px 64px", background: "#111111" }}>
                <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    10 — Impact
                    <div style={{ flex: 1, height: "1px", background: "rgba(122,185,40,0.2)", maxWidth: "80px" }}></div>
                  </div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.03em", marginBottom: "20px" }}>
                    What<br /><em style={{ color: "#7AB928", fontStyle: "normal" }}>Changed.</em>
                  </h2>
                  <p style={{ fontSize: "16px", color: "rgba(245,244,240,0.6)", maxWidth: "560px", lineHeight: 1.78, marginBottom: "56px" }}>
                    {caseStudy.sections.impact.description}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "rgba(255,255,255,0.04)", marginBottom: "56px" }}>
                    {caseStudy.sections.impact.metrics.map((metric, i) => (
                      <div key={i} style={{ background: "#111111", padding: "44px 28px", textAlign: "center", transition: "background 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.background = "#141414"} onMouseLeave={(e) => e.currentTarget.style.background = "#111111"}>
                        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "64px", lineHeight: 1, color: "#7AB928", display: "block", marginBottom: "8px" }}>{metric.num}</span>
                        <span style={{ fontSize: "13px", color: "rgba(245,244,240,0.5)", lineHeight: 1.5 }}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    {caseStudy.sections.impact.impacts.map((impact, i) => (
                      <div key={i} style={{ padding: "28px 28px", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "2px solid #7AB928", background: "rgba(255,255,255,0.02)" }}>
                        <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px" }}>{impact.title}</h4>
                        <p style={{ fontSize: "13.5px", color: "rgba(245,244,240,0.55)", lineHeight: 1.7 }}>{impact.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Takeaways Section */}
          {caseStudy.sections?.takeaways && (
            <>
              <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(122,185,40,0.18), transparent)" }}></div>
              <section style={{ padding: "120px 64px", background: "#0D0D0D" }}>
                <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7AB928", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    11 — Key Takeaways
                    <div style={{ flex: 1, height: "1px", background: "rgba(122,185,40,0.2)", maxWidth: "80px" }}></div>
                  </div>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.03em", marginBottom: "20px" }}>
                    What This<br /><em style={{ color: "#7AB928", fontStyle: "normal" }}>Proves.</em>
                  </h2>
                  <p style={{ fontSize: "16px", color: "rgba(245,244,240,0.6)", maxWidth: "560px", lineHeight: 1.78, marginBottom: "60px" }}>
                    {caseStudy.sections.takeaways.description}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
                    {caseStudy.sections.takeaways.takeaways.map((takeaway, i) => (
                      <div key={i} style={{ padding: "36px 30px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#7AB928" }}></div>
                        <span style={{ fontSize: "32px", marginBottom: "20px", display: "block" }}>{takeaway.icon}</span>
                        <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>{takeaway.title}</div>
                        <p style={{ fontSize: "13.5px", color: "rgba(245,244,240,0.55)", lineHeight: 1.72 }}>{takeaway.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* CTA Section */}
          <div style={{ padding: "100px 64px", maxWidth: "1160px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 4vw, 60px)", lineHeight: 1, letterSpacing: "0.03em", marginBottom: "10px" }}>
                Liked this<br /><span style={{ color: "#7AB928" }}>case study?</span>
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(245,244,240,0.5)" }}>Let's talk about your next brand or product challenge.</p>
            </div>
            <a href="mailto:bhaveshjariwala99@gmail.com" style={{ background: "#7AB928", color: "#0D0D0D", fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "16px 32px", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s", display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", borderRadius: "8px" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(122,185,40,0.3)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              Get In Touch →
            </a>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", maxWidth: "1160px", margin: "0 auto" }}>
            <button onClick={() => router.push(`/playground/${item.tab.toLowerCase()}/${prevItem.slug}`)} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "16px", padding: "10px 20px", background: "#FF3CAC", color: "#0A0A0A", border: "none", cursor: "pointer", transition: "transform .18s, box-shadow .18s", borderRadius: "8px", minWidth: "120px" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "3px 3px 0 #FFEA00"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              ← Prev
            </button>
            <button onClick={() => router.push(`/playground/${item.tab.toLowerCase()}/${nextItem.slug}`)} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "16px", padding: "10px 20px", background: "#FF3CAC", color: "#0A0A0A", border: "none", cursor: "pointer", transition: "transform .18s, box-shadow .18s", borderRadius: "8px", minWidth: "124px" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "3px 3px 0 #FFEA00"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              Next →
            </button>
          </div>

          <div style={{ padding: "24px 64px", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", maxWidth: "1160px", margin: "0 auto" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(245,244,240,0.2)", letterSpacing: "0.1em" }}>© 2025 Bhavesh Jariwala · Lead Brand Designer</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(245,244,240,0.2)", letterSpacing: "0.1em" }}>{item.title} Case Study</span>
          </div>
        </div>
      </Layout>
    </>
  );
}
