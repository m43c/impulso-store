/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gabarito: ["Gabarito", "sans-serif"],
      },
      colors: {
        blkMainBg: "#0c0d0e",
        blkBg: "#151718",
        blkTxt: "#151718",

        whtBg: "#ecedee",
        whtTxt: "#ecedee",
        whtHvr: "#d3d7d9",

        gryTxt: "#9ba0a1",
        gryBd: "#9ba0a1",
        gryHvr: "#202425",

        rdBg: "#e5484d",
        rdTxt: "#e5484d",
        rdHvr: "#e85e63",

        bluBg: "#0954a5",
        bluTxt: "#52a9ff",
        bluHvr: "#0B6DD5",

        ltBluBg: "#008efc",

        grnBg: "#2e9e68",
        grnTxt: "#1c4834",
        grnHvr: "#3db87c",

        ylw: "#151718",

        orgBg: "#ff802b",
        orgTxt: "#391a03",
        orgHvr: "#ff781f",

        pur: "#bf7af0",
      },
    },
  },
  plugins: [],
};
