import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeCtx } from '../../../context/ThemeContext';
import DATA from '../../../data/data';
import Layout from "../../../components/Layout";
import styles from '../../../styles/branding/nales.module.css';

export default function CaseStudyDetail() {
  const router = useRouter();
  const { category, slug } = router.query;

  const item = DATA.gallery.items.find(
    (i) => i.slug === slug && i.tab.toLowerCase() === (Array.isArray(category) ? category[0]?.toLowerCase() : category?.toLowerCase())
  );

  if (!item || !item.caseStudy) {
    return (
      <Layout>
        <div className={styles.nalesErrorContainer}>
          <h1>Case Study Not Found</h1>
          <button onClick={() => router.push("/playground")} className={styles.nalesErrorButton}>
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
  
  // Theme context
  const { dark, T } = useContext(ThemeCtx);

  return (
    <>
      <Head>
        <title>{item.title} - Bhavesh J20</title>
        <meta name="description" content={caseStudy.fullDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.nalesMainContainer}>
          {/* Back Button */}
          <button
            onClick={() => router.push('/playground')}
            className={styles.nalesBackButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#7AB928";
              e.currentTarget.style.borderColor = "rgba(122,185,40,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            ← Back to Playground
          </button>

          {/* Hero Section */}
          <section className={styles.nalesHero}>
            <div className={styles.nalesHeroLeft}>
              <div className={styles.nalesHeroGridLines}></div>
              <div className={styles.nalesCaseTag}>
                Brand Identity Case Study
              </div>
              <h1 className={styles.nalesHeroTitle}>
                {item.title.split(" — ")[0]} <span className={styles.nalesHeroTitleGreen}>{item.title.includes(" — ") ? item.title.split(" — ")[1] : ""}</span>
              </h1>
              <p className={styles.nalesHeroSubtitle}>
                {caseStudy.industry || "Case Study"}
              </p>
              <div className={styles.nalesHeroMeta}>
                <div className={styles.nalesMetaItem}>
                  <span className={styles.nalesMetaLabel}>Role</span>
                  <span className={styles.nalesMetaValue}>{caseStudy.role || "Designer"}</span>
                </div>
                <div className={styles.nalesMetaItem}>
                  <span className={styles.nalesMetaLabel}>Timeline</span>
                  <span className={styles.nalesMetaValue}>{caseStudy.timeline || "TBD"}</span>
                </div>
                <div className={styles.nalesMetaItem}>
                  <span className={styles.nalesMetaLabel}>Industry</span>
                  <span className={styles.nalesMetaValue}>{caseStudy.industry || "Design"}</span>
                </div>
              </div>
              <div className={styles.nalesHeroLine}></div>
            </div>
            <div className={styles.nalesHeroRight}>
              <img src={caseStudy.heroBanner} alt={item.title} className={styles.nalesHeroRightImg} />
            </div>
          </section>

          <div className={styles.nalesSectionDivider}></div>

          {/* Overview Section */}
          {caseStudy.sections?.overview && (
            <section className={styles.nalesOverview}>
              <div className={styles.nalesOverviewContainer}>
                <div className={styles.nalesOverviewHeader}>
                  01 — Project Overview
                  <div className={styles.nalesOverviewHeaderLine}></div>
                </div>
                <h2 className={styles.nalesOverviewTitle}>
                  The <span className={styles.nalesOverviewTitleSpan}>Brief.</span>
                </h2>
                <div className={styles.nalesOverviewGrid}>
                  <div>
                    <p className={styles.nalesOverviewDescription}>
                      {caseStudy.sections.overview.description}
                    </p>
                    <div className={styles.nalesCoreBrief}>
                      <h4 className={styles.nalesCoreBriefTitle}>Core Brief</h4>
                      <p className={styles.nalesCoreBriefText}>{caseStudy.sections.overview.coreBrief}</p>
                    </div>
                  </div>
                  <div className={styles.nalesSpecs}>
                    {caseStudy.sections.overview.specs.map((spec, i) => (
                      <div key={i} className={styles.nalesSpecsRow}>
                        <span className={styles.nalesSpecsLabel}>{spec.key}</span>
                        <span className={(spec.key === "Role" || spec.key === "Status") ? styles.nalesSpecsValueGreen : styles.nalesSpecsValue}>{spec.value}</span>
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
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesProblem}>
                <div className={styles.nalesProblemContainer}>
                  <div className={styles.nalesProblemHeader}>
                    02 — Problem Statement
                    <div className={styles.nalesProblemHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesProblemTitle}>
                    What Was<br /><span className={styles.nalesProblemTitleSpan}>Broken.</span>
                  </h2>
                  <p className={styles.nalesProblemDescription}>
                    {caseStudy.sections.problem.description}
                  </p>
                  <div className={styles.nalesProblemGrid}>
                    {caseStudy.sections.problem.problems.map((problem, i) => (
                      <div key={i} className={styles.nalesProblemCard}>
                        <div className={styles.nalesProblemCardBorder}></div>
                        <span className={styles.nalesProblemNum}>{problem.num}</span>
                        <div className={styles.nalesProblemCardTitle}>{problem.title}</div>
                        <p className={styles.nalesProblemCardDesc}>{problem.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className={styles.nalesProblemQuote}>
                    <span className={styles.nalesProblemQuoteLine1}>
                      "THE BRAND NEEDED TO EARN THE SAME TRUST,
                    </span>
                    <br />
                    <span className={styles.nalesProblemQuoteLine2}>
                      THAT NALES EARNS IN THE LAB."
                    </span>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Approach Section */}
          {caseStudy.sections?.approach && (
            <>
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesApproach}>
                <div className={styles.nalesApproachContainer}>
                  <div className={styles.nalesApproachHeader}>
                    03 — Design Approach
                    <div className={styles.nalesApproachHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesApproachTitle}>
                    How I<br /><span className={styles.nalesApproachTitleSpan}>Approached It.</span>
                  </h2>
                  <p className={styles.nalesApproachDescription}>
                    {caseStudy.sections.approach.description}
                  </p>
                  <div className={styles.nalesApproachGrid}>
                    {caseStudy.sections.approach.approaches.map((approach, i) => (
                      <div key={i} className={styles.nalesApproachCard}>
                        <div className={styles.nalesApproachCardLine}></div>
                        <span className={styles.nalesApproachCardIcon}>{approach.icon}</span>
                        <div className={styles.nalesApproachCardLabel}>{approach.label}</div>
                        <div className={styles.nalesApproachCardTitle}>{approach.title}</div>
                        <p className={styles.nalesApproachCardDesc}>{approach.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className={styles.nalesApproachConcept}>
                    <div className={styles.nalesApproachConceptIcon}>⚛</div>
                    <div>
                      <h3 className={styles.nalesApproachConceptTitle}>{caseStudy.sections.approach.concept.title}</h3>
                      <p className={styles.nalesApproachConceptDesc}>{caseStudy.sections.approach.concept.desc}</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Logo Section */}
          {caseStudy.sections?.logo && (
            <>
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesLogo}>
                <div className={styles.nalesLogoContainer}>
                  <div className={styles.nalesLogoHeader}>
                    04 — Logo Design & Concept
                    <div className={styles.nalesLogoHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesLogoTitle}>
                    Symbol of<br /><span className={styles.nalesLogoTitleSpan}>Science.</span>
                  </h2>
                  <p className={styles.nalesLogoDescription}>
                    {caseStudy.sections.logo.description}
                  </p>
                </div>
                <div className={styles.nalesLogoDisplay}>
                  <img src="/images/branding/nales/Logo.png" alt="NALES Logo" className={styles.nalesLogoImage} />
                </div>
                <div className={styles.nalesLogoAnatomyGrid}>
                  {caseStudy.sections.logo.anatomy.map((item, i) => (
                    <div key={i} className={styles.nalesLogoAnatomyCard}>
                      <div className={styles.nalesLogoAnatomyLabel}>{item.label}</div>
                      <div className={styles.nalesLogoAnatomyTitle}>{item.title}</div>
                      <p className={styles.nalesLogoAnatomyDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Colors Section */}
          {caseStudy.sections?.colors && (
            <>
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesColors}>
                <div className={styles.nalesColorsContainer}>
                  <div className={styles.nalesColorsHeader}>
                    05 — Visual Identity · Colour
                    <div className={styles.nalesColorsHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesColorsTitle}>
                    The <span className={styles.nalesColorsTitleSpan}>Palette.</span>
                  </h2>
                  <p className={styles.nalesColorsDescription}>
                    {caseStudy.sections.colors.description}
                  </p>
                  <div className={styles.nalesColorPaletteGrid}>
                    {caseStudy.sections.colors.colors.map((color, i) => (
                      <div key={i} className={styles.nalesColorCard}>
                        <div className={styles.nalesColorSwatch}>
                          <div className={styles.nalesColorSwatchDynamic} style={{ background: color.hex }}></div>
                        </div>
                        <div className={styles.nalesColorInfo}>
                          <div className={styles.nalesColorName}>{color.name}</div>
                          <div className={styles.nalesColorHex}>{color.hex}</div>
                          <div className={styles.nalesColorUsage}>{color.usage}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.nalesColorRulesGrid}>
                    {caseStudy.sections.colors.rules.map((rule, i) => (
                      <div key={i} className={styles.nalesColorRuleCard}>
                        <div className={styles.nalesColorRuleLabel}>{rule.label}</div>
                        <div className={styles.nalesColorRuleTrack}>
                          <div className={styles.nalesColorRuleBar}>
                            <div className={styles.nalesColorRuleBarDynamic} style={{ width: rule.width, background: rule.color }}></div>
                          </div>
                        </div>
                        <p className={styles.nalesColorRuleDesc}>{rule.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Typography Section */}
          {caseStudy.sections?.typography && (
            <>
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesTypography}>
                <div className={styles.nalesTypographyContainer}>
                  <div className={styles.nalesTypographyHeader}>
                    06 — Visual Identity · Typography
                    <div className={styles.nalesTypographyHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesTypographyTitle}>
                    The <span className={styles.nalesTypographyTitleSpan}>Type System.</span>
                  </h2>
                  <p className={styles.nalesTypographyDescription}>
                    {caseStudy.sections.typography.description}
                  </p>
                  <div className={styles.nalesTypographyWrapper}>
                  {caseStudy.sections.typography.types.map((type, i) => (
                    <div key={i} className={styles.nalesTypographyItem}>
                      <div className={styles.nalesTypographyMeta}>
                        <div className={styles.nalesTypographyTag}>{type.tag}</div>
                        <div className={styles.nalesTypographySpec}>{type.spec}</div>
                      </div>
                      <div className={styles.nalesTypographySample}>
                        <div className={styles.nalesTypographySampleTextDynamic} style={{ fontSize: type.fontSize, fontFamily: type.fontFamily, letterSpacing: type.letterSpacing, lineHeight: type.lineHeight, fontWeight: type.fontWeight, textTransform: type.textTransform }}>
                          {type.sampleHighlight ? (
                            <>
                              {type.sample.substring(0, type.sample.indexOf(type.sampleHighlight))}
                              <span className={styles.nalesTypographyHighlight}>{type.sampleHighlight}</span>
                              {type.sample.substring(type.sample.indexOf(type.sampleHighlight) + type.sampleHighlight.length)}
                            </>
                          ) : (
                            type.sample
                          )}
                        </div>
                      </div>
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
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesApplications}>
                <div className={styles.nalesApplicationsContainer}>
                  <div className={styles.nalesApplicationsHeader}>
                    07 — Brand Applications
                    <div className={styles.nalesApplicationsHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesApplicationsTitle}>
                    The System<br /><span className={styles.nalesApplicationsTitleSpan}>in Action.</span>
                  </h2>
                  <p className={styles.nalesApplicationsDescription}>
                    {caseStudy.sections.applications.description}
                  </p>
                  {caseStudy.sections.applications.items.map((app, i) => (
                    <div key={i} className={styles.nalesApplication}>
                      <div className={styles.nalesApplicationSectionTitle}>{app.sectionTitle}</div>
                      <div className={styles.nalesApplicationHeading}>{app.heading}</div>
                      <p className={styles.nalesApplicationRationale}>{app.rationale}</p>
                      <div className={styles.nalesApplicationGrid}>
                        {app.images.map((img, j) => (
                          <div key={j} className={styles.nalesApplicationImage}>
                            <img src={img.src} alt={img.caption} className={styles.nalesApplicationImg} />
                            <div className={styles.nalesApplicationCaption}>
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

          {/* System Section */}
          {caseStudy.sections?.system && (
            <>
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesSystem}>
                <div className={styles.nalesSystemContainer}>
                  <div className={styles.nalesSystemHeader}>
                    08 — Design System
                    <div className={styles.nalesSystemHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesSystemTitle}>
                    The Rules<br /><span className={styles.nalesSystemTitleSpan}>That Scale.</span>
                  </h2>
                  <p className={styles.nalesSystemDescription}>
                    {caseStudy.sections.system.description}
                  </p>
                  <div className={styles.nalesSystemGrid}>
                    {caseStudy.sections.system.cards.map((item, i) => (
                      <div key={i} className={styles.nalesSystemCard}>
                        <div className={styles.nalesSystemNum}>{item.num}</div>
                        <div className={styles.nalesSystemCardTitle}>{item.title}</div>
                        <p className={styles.nalesSystemCardDesc}>{item.desc}</p>
                        <div className={styles.nalesSystemPills}>
                          {item.pills.map((pill, j) => (
                            <span key={j} className={styles.nalesSystemPill}>{pill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Before/After Section */}
          {caseStudy.sections?.beforeAfter && (
            <>
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesBeforeAfter}>
                <div className={styles.nalesBeforeAfterContainer}>
                  <div className={styles.nalesBeforeAfterHeader}>
                    09 — Before & After
                    <div className={styles.nalesBeforeAfterHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesBeforeAfterTitle}>
                    The <span className={styles.nalesBeforeAfterTitleSpan}>Shift.</span>
                  </h2>
                  <p className={styles.nalesBeforeAfterDescription}>
                    {caseStudy.sections.beforeAfter.description}
                  </p>
                  <div className={styles.nalesBeforeAfterGrid}>
                    <div className={styles.nalesBeforeAfterColumn}>
                      <div className={styles.nalesBeforeAfterLabel}>
                        <div className={styles.nalesBeforeAfterDot}></div>
                        <span className={styles.nalesBeforeAfterLabelText}>{caseStudy.sections.beforeAfter.before.label}</span>
                      </div>
                      <div className={styles.nalesBeforeAfterImageWrapper}>
                        <img src={caseStudy.sections.beforeAfter.before.image} alt="Before" className={styles.nalesBeforeAfterImage} />
                      </div>
                      <ul className={styles.nalesBeforeAfterList}>
                        {caseStudy.sections.beforeAfter.before.points.map((point, i) => (
                          <li key={i} className={styles.nalesBeforeAfterListItem}>
                            <span className={styles.nalesBeforeAfterDash}>—</span> {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.nalesBeforeAfterColumn}>
                      <div className={styles.nalesBeforeAfterLabel}>
                        <div className={styles.nalesBeforeAfterDotGreen}></div>
                        <span className={styles.nalesBeforeAfterLabelTextGreen}>{caseStudy.sections.beforeAfter.after.label}</span>
                      </div>
                      <div className={styles.nalesBeforeAfterImageWrapper}>
                        <img src={caseStudy.sections.beforeAfter.after.image} alt="After" className={styles.nalesBeforeAfterImage} />
                      </div>
                      <ul className={styles.nalesBeforeAfterList}>
                        {caseStudy.sections.beforeAfter.after.points.map((point, i) => (
                          <li key={i} className={styles.nalesBeforeAfterListItemHighlight}>
                            <span className={styles.nalesBeforeAfterDashGreen}>—</span> {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Impact Section */}
          {caseStudy.sections?.impact && (
            <>
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesImpact}>
                <div className={styles.nalesImpactContainer}>
                  <div className={styles.nalesImpactHeader}>
                    10 — Impact
                    <div className={styles.nalesImpactHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesImpactTitle}>
                    What<br /><span className={styles.nalesImpactTitleSpan}>Changed.</span>
                  </h2>
                  <p className={styles.nalesImpactDescription}>
                    {caseStudy.sections.impact.description}
                  </p>
                  <div className={styles.nalesImpactMetricsGrid}>
                    {caseStudy.sections.impact.metrics.map((metric, i) => (
                      <div key={i} className={styles.nalesImpactMetric}>
                        <span className={styles.nalesImpactMetricNum}>{metric.num}</span>
                        <span className={styles.nalesImpactMetricLabel}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.nalesImpactCardsGrid}>
                    {caseStudy.sections.impact.impacts.map((impact, i) => (
                      <div key={i} className={styles.nalesImpactCard}>
                        <h4 className={styles.nalesImpactCardTitle}>{impact.title}</h4>
                        <p className={styles.nalesImpactCardDesc}>{impact.desc}</p>
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
              <div className={styles.nalesSectionDivider}></div>
              <section className={styles.nalesTakeaways}>
                <div className={styles.nalesTakeawaysContainer}>
                  <div className={styles.nalesTakeawaysHeader}>
                    11 — Key Takeaways
                    <div className={styles.nalesTakeawaysHeaderLine}></div>
                  </div>
                  <h2 className={styles.nalesTakeawaysTitle}>
                    What This<br /><span className={styles.nalesTakeawaysTitleSpan}>Proves.</span>
                  </h2>
                  <p className={styles.nalesTakeawaysDescription}>
                    {caseStudy.sections.takeaways.description}
                  </p>
                  <div className={styles.nalesTakeawaysGrid}>
                    {caseStudy.sections.takeaways.takeaways.map((takeaway, i) => (
                      <div key={i} className={styles.nalesTakeawayCard}>
                        <div className={styles.nalesTakeawayCardTopBorder}></div>
                        <span className={styles.nalesTakeawayIcon}>{takeaway.icon}</span>
                        <div className={styles.nalesTakeawayTitle}>{takeaway.title}</div>
                        <p className={styles.nalesTakeawayDesc}>{takeaway.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* CTA Section */}
          <div className={styles.nalesCTA}>
            <div className={styles.nalesCTAContent}>
              <h2 className={styles.nalesCTATitle}>
                Liked this<br /><span className={styles.nalesCTATitleSpan}>case study?</span>
              </h2>
              <p className={styles.nalesCTADescription}>Let's talk about your next brand or product challenge.</p>
            </div>
            <a href="mailto:bhaveshjariwala99@gmail.com" className={styles.nalesCTAButton}>
              Get In Touch →
            </a>
          </div>

          {/* Navigation */}
          <div className={styles.nalesNavigation}>
            <button onClick={() => router.push(`/playground/${item.tab.toLowerCase()}/${prevItem.slug}`)} className={styles.nalesNavButton}>
              ← Prev
            </button>
            <button onClick={() => router.push(`/playground/${item.tab.toLowerCase()}/${nextItem.slug}`)} className={styles.nalesNavButton}>
              Next →
            </button>
          </div>

        </div>
      </Layout>
    </>
  );
}
