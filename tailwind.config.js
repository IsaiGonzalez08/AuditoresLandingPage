/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'custom': '340px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '821px',
      // => @media (min-width: 768px) { ... }

      'lg': '1020px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1220px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1370px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1480px'
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
