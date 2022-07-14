/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            "3xl": "2000px",
        },
    },
    variants: {
        extend: {}
    },
    plugins: [require('tailwind-scrollbar-hide')],
}