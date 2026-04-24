import { createContext, useContext } from "react";

export const ThemeCtx = createContext({
  dark: true,
  setDark: () => {},
  T: {
    bg: "#0a0a0a",
    text: "#ffffff",
    muted: "#888888",
    nav: "rgba(10,10,10,0.8)",
    navBorder: "rgba(255,255,255,0.1)",
    orb1: "rgba(255,60,172,0.15)",
    orb2: "rgba(0,123,255,0.15)",
    card: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.08)",
    input: "rgba(255,255,255,0.05)",
    accent: "#FF3CAC",
    subtle: "rgba(255,255,255,0.03)",
    subtleBorder: "rgba(255,255,255,0.1)",
    cardBorder: "rgba(255,255,255,0.1)"
  },
  galleryModal: null,
  setGalleryModal: () => {}
});
export const useTheme = () => useContext(ThemeCtx);
