/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0a0f1c',
                'bg-secondary': '#0f1629',
                'bg-tertiary': '#1a2236',
                'accent-cyan': '#00f0ff',
                'accent-green': '#0aff00',
                'accent-red': '#ff003c',
                'accent-purple': '#bc13fe',
            }
        },
    },
    plugins: [],
}
