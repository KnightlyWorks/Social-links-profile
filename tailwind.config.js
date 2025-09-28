// tailwind.config.js
export default {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'fm-green': 'hsl(75, 94%, 57%)',
        'fm-grey-700': 'hsl(0, 0%, 20%)',
        'fm-grey-800': 'hsl(0, 0%, 12%)',
        'fm-grey-900': 'hsl(0, 0%, 8%)',
      }
    },
  },
  plugins: [],
}
