module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: {
          50: "#ffd1ff",
          100: "#e0b1d5",
          300: "#d664bc",
          400: "#a35592",
          "400_19": "#a3559219",
        },
        pink: { 900: "#5e0d4a" },
        gray: { 900: "#311e2c", "700_11": "#55555511" },
        red: { 200: "#f0a9af" },
        black: {
          900: "#150900",
          "900_3f": "#0000003f",
          "900_87": "#00000087",
          "900_01": "#000000",
          "900_02": "#161000",
        },
        deep_orange: { 100: "#fad0c4", 200: "#f0b1a2", 300: "#ff7a59" },
        blue_gray: { 900: "#262b35" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { gilroy: "Gilroy" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#fad0c4,#fad0c4,#ffd1ff)",
        gradient1: "linear-gradient(180deg ,#5e0d4a,#311e2c)",
      },
      boxShadow: {
        bs: "0px 0px  10px 4px #55555511",
        bs1: "0px -6px  74px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
