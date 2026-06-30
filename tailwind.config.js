/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12161F",
          soft: "#1B2130",
          line: "#2A3142",
        },
        paper: {
          DEFAULT: "#F6F4EF",
          dim: "#ECE8DF",
        },
        amber: {
          DEFAULT: "#D9A441",
          dark: "#B8862E",
          light: "#F0C97A",
        },
        teal: {
          DEFAULT: "#36B7A0",
          dark: "#279482",
        },
        slate: {
          muted: "#707585",
        },
      },
      fontFamily: {
        display: [
          "-apple-system",
          "ui-sans-serif",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: [
          "-apple-system",
          "ui-sans-serif",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
