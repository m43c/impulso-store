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
                red: "#fb4934",
                pink: "#d4879c",
                magneta: "#b16286",
                "dark-gray": "#83a598",
                "bright-yellow": "#fabd2f",
                "soft-yellow": "#eebd35",
                "forest-green": "#689d6a",
                "clean-green": "#8ec07c",
                "blue-gray": "#458588",
                "light-blue": "#83a598",
            },
        },
    },
    plugins: [],
};
