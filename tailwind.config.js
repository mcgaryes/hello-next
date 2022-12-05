/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
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
        require('@tailwindcss/line-clamp'),
    ],
}
