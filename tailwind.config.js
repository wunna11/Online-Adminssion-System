/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
    screens: { sm: "320px", md: "768px", lg: "976px", xl: "1440pd" },
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#D30000",
        black: "#000000",
        white: {
          50: '#FAFAFA',
          100: '#FFFFFF',
        },
        blue: {
          50: "#60a5fa",
          100: "#007AFF",
        },
        gray: {
          50: '#E4E4E4',
          100: "#D1D3D9",
          200: "#C0C0C0",
          300: "#B8B8B8",
          400: "#A9A9A9",
          500: "#808080",
          600: "#696969",
          700: "#3C3C3C",
          800: '#212121',
          900: '#000000'
        },
        red: {
          50: "#DE0909",
          100: "#D30000"
        },
        green: '#38B551',
        border: {
          50: "#E4E4E4",
          100: "#E3ECF3"
        }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
