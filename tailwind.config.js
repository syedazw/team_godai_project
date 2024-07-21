/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#03050d",
        firebrick: "#bb1d2b",
      },
      spacing: {},
      fontFamily: {
        langar: "Langar",
        "kaushan-script": "'Kaushan Script'",
      },
    },
    fontSize: {
      "6xl": "25px",
      xl: "20px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
