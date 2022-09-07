const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
    ...defaultColors,
    ...{
        "custom-dark": "#000A25",
    },
};

module.exports = {
    content: ["./resources/js/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: colors,
        },
    },
    plugins: [],
};

