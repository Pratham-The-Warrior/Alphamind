/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Bloomberg Terminal inspired colors
        "terminal-bg": "#0A0E1A",
        "terminal-surface": "#0F1419",
        "terminal-panel": "#1A1F2E",
        "terminal-border": "#2A3441",
        "terminal-accent": "#FF6B35",
        "terminal-success": "#00D4AA",
        "terminal-warning": "#FFB800",
        "terminal-danger": "#FF4757",
        "terminal-info": "#3742FA",
        "terminal-text": "#E8EAED",
        "terminal-text-dim": "#9AA0A6",
        "terminal-text-muted": "#5F6368",
        "terminal-orange": "#FF6B35",
        "terminal-green": "#00D4AA",
        "terminal-blue": "#1E90FF",
        "terminal-purple": "#8B5CF6",
        "terminal-yellow": "#FFB800",
        "terminal-red": "#FF4757",
        "terminal-cyan": "#00BCD4",
        "terminal-pink": "#E91E63",
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Consolas",
          "Monaco",
          "Courier New",
          "monospace",
        ],
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["10px", "14px"],
        sm: ["11px", "16px"],
        base: ["12px", "18px"],
        lg: ["14px", "20px"],
        xl: ["16px", "24px"],
        "2xl": ["18px", "28px"],
        "3xl": ["24px", "32px"],
        "4xl": ["32px", "40px"],
      },
      boxShadow: {
        terminal: "0 0 20px rgba(255, 107, 53, 0.1)",
        "terminal-glow": "0 0 30px rgba(255, 107, 53, 0.2)",
        panel: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1s step-end infinite",
        ticker: "ticker 20s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
