/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001F3F",
        accent: "#007BFF",
        neutral: {
          50: "#F4F4F4",
          900: "#1A1A1A",
        },
        nexura: {
          bg: "#0B0B0F",
          surface: "#12121A",
          border: "#1F1F2A",
          muted: "#A1A1AA",
          turquoise: "#2CE6D1",
          violet: "#7C5CFF",
          rose: "#FF4D8D",
        },
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 12px 40px -24px rgba(0,0,0,0.65)",
        "card-hover": "0 20px 50px -20px rgba(0,0,0,0.55)",
        glow: "0 0 24px rgba(124, 92, 255, 0.25)",
        "glow-turquoise": "0 0 22px rgba(44, 230, 209, 0.2)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "-0.0125em" },
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }],
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "-0.0268em" },
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }],
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite",
        "mockup-float": "mockup-float 14s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
        "mockup-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
