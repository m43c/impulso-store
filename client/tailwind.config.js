/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Gabarito: ["Gabarito", "sans-serif"],
            },
            colors: {
                dark0: "#0d0e0f",
                dark: "#202020",
                foreground: "#ebdbb2",
                "dark-red": "#ee241d",
                "light-red": "#fb4934",
                "dark-green": "#98971a",
                "light-green": "#b8bb26",
                "dark-purple": "#b16286",
                "light-purple": "#d3869b",
                "dark-gray": "#83a598",
                "dark-yellow": "#d79921",
                "light-yellow": "#fabd2f",
                "dark-aqua": "#689d6a",
                "light-aqua": "#8ec07c",
                "dark-blue": "#458588",
                "light-blue": "#83a598",
            },
        },
    },
    plugins: [],
};
