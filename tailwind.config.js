/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss");
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,module.css}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                lobster: ['Lobster'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
