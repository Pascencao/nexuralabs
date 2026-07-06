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
        ink: "#16233A",
        "ink-dark": "#0F1B2D",
        muted: "#5B6472",
        canvas: "#F5F6F8",
        gold: "#AD8A52",
        ops: "#1B4D4A",
        build: "#8A5A2B",
        scale: "#463A66",
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 12px 32px -20px rgba(22, 35, 58, 0.25)",
        "card-hover": "0 18px 40px -18px rgba(22, 35, 58, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.55" }],
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.03", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
