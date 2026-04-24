import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import useAnim from "../hooks/useAnim";
import DATA from "../data/data.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Beyond() {
  const { dark, T } = useTheme();
  const ref = useRef(null); useAnim(ref);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  return (
    <section className="section">
      <div className="container container-content">
        <div ref={ref} className="ap">
          <div className="ac" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "44px", flexWrap: "wrap", gap: "16px" }}>
            <div className="">
              <span className="stag">The Human Side</span>
              <h2 className="sh1" style={{ marginBottom: "10px" }}>Beyond the <span className="grad">work.</span></h2>
              <p className="bt" style={{ maxWidth: "440px", fontSize: ".95rem" }}>Design is how I think — curiosity, culture, and connection are what fuel it.</p>
            </div>
            {/* Desktop: Navigation arrows, Mobile: Dots */}
            {isMobile ? (
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "12px" }}>
                {DATA.beyond.length > 0 && Array.from({ length: Math.ceil(DATA.beyond.length * 2) }).map((_, i) => (
                  <button key={i} onClick={() => swiperInstance?.slideToLoop(i)} style={{ width: i === activeSlide ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: i === activeSlide ? "#FF3CAC" : T.muted || "rgba(240,237,232,.55)", cursor: "pointer", transition: "all .25s", padding: 0, opacity: i === activeSlide ? 1 : 0.35 }} />
                ))}
              </div>
            ) : (
              <div style={{ display: "flex", gap: "8px" }}>
                <button type="button" className="bo beyond-desktop-prev" style={{ padding: "9px 14px", fontSize: "14px" }}>←</button>
                <button type="button" className="bo beyond-desktop-next" style={{ padding: "9px 14px", fontSize: "14px" }}>→</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Carousel with same width constraint as other sections */}
      <div style={{ position: "relative" }}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          speed={5000}
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiperInit}
          navigation={{
            prevEl: isMobile ? '.beyond-mobile-prev' : '.beyond-desktop-prev',
            nextEl: isMobile ? '.beyond-mobile-next' : '.beyond-desktop-next',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 16,
              centeredSlides: true
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 16,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          style={{
            padding: "6px 0px 18px",
          }}
        >
          {DATA.beyond.map((b, i) => (
            <React.Fragment key={i}>
              {/* Text card */}
              <SwiperSlide key={`text-${i}`}>
                <div 
                  className="beyond-card beyond-card-inner"
                  style={{ 
                    background: T.card || "rgba(255,255,255,.03)", 
                    border: `1px solid ${T.cardBorder || (dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)")}`, 
                    boxShadow: dark ? "none" : "0 2px 16px rgba(0,0,0,.07)",
                    height: "240px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "12px"
                  }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.borderColor = b.music ? "rgba(0,212,255,.4)" : "rgba(255,60,172,.32)"; 
                    e.currentTarget.style.boxShadow = dark ? "0 8px 32px rgba(0,0,0,.35)" : "0 8px 32px rgba(0,0,0,.12)"; 
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.borderColor = T.cardBorder || (dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)"); 
                    e.currentTarget.style.boxShadow = dark ? "none" : "0 2px 16px rgba(0,0,0,.07)"; 
                  }}
                >
                  {/* Icon */}
                  <div style={{ 
                    marginBottom: "16px", 
                    fontFamily: "'Syne',sans-serif", 
                    fontWeight: 800, 
                    fontSize: "24px", 
                    color: "#FF3CAC"
                  }}>
                    {b.icon}
                  </div>
                  {/* Title */}
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "16px", color: T.text || "#F0EDE8", marginBottom: "8px", lineHeight: 1.2 }}>{b.title}</div>
                  {/* Description */}
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: T.muted || "rgba(240,237,232,.55)", lineHeight: 1.6, fontWeight: 300, marginBottom: "16px" }}>{b.desc}</div>
                  
                  {/* Music Player - only for music card */}
                  {b.music && (
                    <div style={{ 
                      marginTop: "14px", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "8px" 
                    }}>
                      <div style={{ 
                        display: "flex", 
                        gap: "3px", 
                        alignItems: "flex-end", 
                        height: "16px" 
                      }}>
                        {[9,14,10,16,8,13,11].map((h,j) => (
                          <div 
                            key={j} 
                            style={{ 
                              width: "3px", 
                              height: `${h}px`, 
                              background: "#00D4FF", 
                              borderRadius: "2px", 
                              animation: `barDance ${0.5+j*0.1}s ease-in-out infinite alternate`, 
                              transformOrigin: "bottom" 
                            }} 
                          />
                        ))}
                      </div>
                      <span style={{ 
                        fontFamily: "'DM Sans',sans-serif", 
                        fontSize: "10px", 
                        color: "rgba(0,212,255,.8)" 
                      }}>
                        Always in the ears
                      </span>
                    </div>
                  )}
                </div>
              </SwiperSlide>
              
              {/* Image card */}
              <SwiperSlide key={`img-${i}`}>
                <div 
                  className="beyond-card beyond-card-inner"
                  style={{ 
                    background: T.card || "rgba(255,255,255,.03)", 
                    border: `1px solid ${T.cardBorder || (dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)")}`, 
                    boxShadow: dark ? "none" : "0 2px 16px rgba(0,0,0,.07)",
                    height: "240px",
                    overflow: "hidden",
                    borderRadius: "12px"
                  }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.borderColor = b.music ? "rgba(0,212,255,.4)" : "rgba(255,60,172,.32)"; 
                    e.currentTarget.style.boxShadow = dark ? "0 8px 32px rgba(0,0,0,.35)" : "0 8px 32px rgba(0,0,0,.12)"; 
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.borderColor = T.cardBorder || (dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)"); 
                    e.currentTarget.style.boxShadow = dark ? "none" : "0 2px 16px rgba(0,0,0,.07)"; 
                  }}
                >
                  <img src={b.img} alt={b.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>

        {/* Navigation arrows at bottom right for mobile, Dots at bottom right for desktop */}
        <div className="container container-content">
          <div style={{ display: "flex", gap: "8px", marginTop: "20px", justifyContent: "flex-end" }}>
            {isMobile ? (
              <>
                <button type="button" className="bo beyond-mobile-prev" style={{ padding: "9px 14px", fontSize: "14px" }}>←</button>
                <button type="button" className="bo beyond-mobile-next" style={{ padding: "9px 14px", fontSize: "14px" }}>→</button>
              </>
            ) : (
              <>
                {DATA.beyond.length > 0 && Array.from({ length: Math.ceil(DATA.beyond.length * 2) }).map((_, i) => (
                  <button key={i} onClick={() => swiperInstance?.slideToLoop(i)} style={{ width: i === activeSlide ? "22px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: i === activeSlide ? "#FF3CAC" : T.muted || "rgba(240,237,232,.55)", cursor: "pointer", transition: "all .25s", padding: 0, opacity: i === activeSlide ? 1 : 0.35 }} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beyond;
