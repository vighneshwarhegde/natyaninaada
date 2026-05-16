import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  initialColorModeName: `dark`,
  config: {
    useCustomProperties: true,
  },
  colors: {
    primary: `#D4AF37`, // Gold
    secondary: `#800000`, // Deep Maroon
    text: `#FDF5E6`, // Old Lace (Cream)
    heading: `#FFD700`, // Pure Gold
    background: `#140C07`, // Deep Dark Wood
    divider: `#3D2B1F`, // Darker Wood
    textMuted: `#A0522D`, // Sienna
    icon_brightest: `#FFD700`,
    icon_darker: `#8B4513`, // Saddle Brown
    icon_darkest: `#5D2906`,
    icon_red: `#800000`,
    icon_blue: `#4682B4`, // Steel Blue
    icon_orange: `#DAA520`, // Goldenrod
    icon_yellow: `#F0E68C`, // Khaki
    icon_pink: `#B03060`, // Maroon
    icon_purple: `#4B0082`, // Indigo
    icon_green: `#556B2F`, // Dark Olive Green
    modes: {
      light: {
        text: `#2C1E16`,
        heading: `#800000`,
        primary: `#B8860B`,
        background: `#FFFDD0`, // Cream
        divider: `#D2B48C`, // Tan
        textMuted: `#8B4513`,
        icon_brightest: `#B8860B`,
        icon_darker: `#D2B48C`,
        icon_darkest: `#8B4513`,
      },
    },
  },
  fonts: {
    body: `"Libre Baskerville", "Georgia", serif`,
    heading: `"Playfair Display", "Georgia", serif`,
  },
  styles: {
    root: {
      fontFamily: `body`,
      color: `text`,
      backgroundColor: `background`,
    },
    h1: {
      fontFamily: `heading`,
      textShadow: `rgba(212, 175, 55, 0.15) 0px 5px 35px`,
    },
    h2: {
      fontFamily: `heading`,
    },
    h3: {
      fontFamily: `heading`,
    },
    h4: {
      fontFamily: `heading`,
    },
    h5: {
      fontFamily: `heading`,
    },
    h6: {
      fontFamily: `heading`,
    },
  },
})

export default theme
