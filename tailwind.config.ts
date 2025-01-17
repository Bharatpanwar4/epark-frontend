import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    
  ],
  prefix: "",
  theme: {


    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
        'xl':'1080px',
        'lg':'900px',
        'md':'600px',
        'sm':'400px'

      },
    },
 

    colors:{
heading:'#373737',
subheading:'#707070',

    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config