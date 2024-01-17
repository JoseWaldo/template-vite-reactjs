/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-primary": "#1C1C1C",
        "green-yellow": "#D5FF40",
        "grey-b": "#737373",
        "grey-light": "#404040",
        "grey-dark": "#262626",
        "error-red": "#E22727",
        "success-green": "#0D8327",
        "warning-yellow": "#FF9800",
      },
      fontFamily: {
        "days-one": ["Days One", "sans-serif"],
        "darker-grotesque": ["Darker Grotesque", "sans-serif"],
      },
      borderRadius: {
        normal: "0.5rem",
        "corner-left-normal": "0.5rem 0 0.5rem 0",
        "corner-right-normal": "0 0.5rem 0 0.5rem",
      },
      boxShadow: {
        yellow: "0px 1px 20px 0px rgba(213, 255, 64, 0.20)",
      },
    },
  },
  plugins: [],
};
