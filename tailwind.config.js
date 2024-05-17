/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F87516",
        secondary: "#5E11FF",
      },
      backgroundImage: {
        gradient1: "linear-gradient(90deg, #F87516 0%, #5E11FF 55%)",
        gradient2: "linear-gradient(90deg, #F87516 0%, #5E11FF 9%)",
        "gradient-to-r": "linear-gradient(90deg, #5E11FF 30%, #F87516 100%)",
        gradient4: "linear-gradient(90deg,#F87516 0%, #5E11FF  100%)",
        gradient3: "linear-gradient(180deg, #0D061F 0%, #251E35 100%);",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
