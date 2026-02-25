/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        violet: {
          950: "#0d0014",
          900: "#1a0028",
          800: "#2d0050",
        },
        chattr: {
          accent: "#7c3aed",
          glow: "#a855f7",
          soft: "#c4b5fd",
          muted: "#7c6fa0",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 24px rgba(168, 85, 247, 0.4)",
        "glow-lg": "0 0 48px rgba(168, 85, 247, 0.3)",
      },
      animation: {
        "fade-in": "fade-in 0.3s ease forwards",
        "slide-up": "slide-up 0.35s ease forwards",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        chattr: {
          primary: "#7c3aed",
          secondary: "#a855f7",
          accent: "#c084fc",
          neutral: "#1a0028",
          "base-100": "#0d0014",
          "base-200": "#1a0028",
          "base-300": "#2d0050",
          info: "#818cf8",
          success: "#86efac",
          warning: "#fde68a",
          error: "#f87171",
        },
      },
    ],
    base: false,
  },
};
