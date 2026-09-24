import type { Config } from "tailwindcss";

const token = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        elevated: token("elevated"),
        line: token("line"),
        ink: token("ink"),
        muted: token("muted"),
        brand: token("brand"),
        "brand-ink": token("brand-ink"),
        gain: token("gain"),
        loss: token("loss"),
        warn: token("warn"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 1px 0 0 hsl(var(--ink) / 0.04) inset, 0 24px 48px -24px hsl(var(--shadow) / 0.6)",
      },
      keyframes: {
        draw: { to: { strokeDashoffset: "0" } },
        rise: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        draw: "draw 1.6s cubic-bezier(.22,.8,.2,1) 0.3s forwards",
        rise: "rise .5s cubic-bezier(.22,.8,.2,1) both",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
