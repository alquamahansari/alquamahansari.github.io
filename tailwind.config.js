/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":                "#44e5c2",
        "primary-container":      "#00C9A7",
        "on-primary":             "#00382d",
        "on-primary-container":   "#004e40",
        "secondary":              "#8fcef5",
        "on-secondary-container": "#8fcef5",
        "secondary-container":    "#00597b",
        "surface-container":      "#191f30",
        "surface-container-high": "#24293b",
        "on-surface":             "#dde2f9",
        "on-surface-variant":     "#bacac3",
        "outline":                "#85948e",
        "outline-variant":        "#3c4a45",
        "background":             "#0d1323",
      },
      fontFamily: {
        display:  ["Space Grotesk", "sans-serif"],
        body:     ["Inter", "sans-serif"],
      },
      fontSize: {
        display: ["48px", {
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
          fontWeight: "700"
        }],
      },
    },
  },
  plugins: [],
}