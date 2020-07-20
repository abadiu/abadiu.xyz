import Typography from "typography"

import "typeface-source-code-pro"
import "typeface-source-sans-pro"
import "typeface-source-serif-pro"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  headerFontFamily: [
    "Source Code Pro",
    "monospace",
  ],
  bodyFontFamily: [
    "Source Sans Pro", "sans"
  ],
})

export default typography