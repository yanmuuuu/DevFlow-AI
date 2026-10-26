import type { Config } from "tailwindcss";

const mint = {
  50: "#effbf5",
  100: "#dbf5e8",
  200: "#b8ebd1",
  300: "#8adcb5",
  400: "#5cc897",
  500: "#3db17e",
  600: "#2b9468",
  700: "#237756",
  800: "#1f5f47",
  900: "#1b4e3c",
  950: "#0d2c21"
};

const sage = {
  50: "#f6fbf8",
  100: "#edf5f0",
  200: "#dceae1",
  300: "#c3d7ca",
  400: "#93ab9b",
  500: "#6c8474",
  600: "#536a5b",
  700: "#415649",
  800: "#2f3f35",
  900: "#1f2b24",
  950: "#121a15"
};

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2c3a31",
        panel: "#f3fbf6",
        line: "#d3eadc",
        accent: "#2b9468",
        warn: "#b45309",
        teal: mint,
        slate: sage
      },
      borderRadius: {
        md: "0.75rem",
        lg: "1.1rem"
      },
      fontFamily: {
        sans: [
          "Nunito",
          "Varela Round",
          "PingFang SC",
          "Microsoft YaHei UI",
          "Microsoft YaHei",
          "ui-rounded",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
