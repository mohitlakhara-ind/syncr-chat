/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        chat: {
          bg: "#f0f2f5",
          sidebar: "#ffffff",
          primary: "#2563eb", // Classic blue
          primaryHover: "#1d4ed8",
          bubbleSent: "#2563eb",
          bubbleReceived: "#ffffff",
          textDark: "#111827",
          textMuted: "#6b7280",
          border: "#e5e7eb"
        }
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
    themes: ["light"],
    base: true, // ensure base generic styles are enabled for light theme
  },
};
