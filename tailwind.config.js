/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 400ms normal ease-in-out',
      },
      keyframes: theme => ({
        slideIn: {
          '0%': { transform: "translateY(-50vh)", opacity: 0 },
          '100%': { transform: "translateY(0)", opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}

