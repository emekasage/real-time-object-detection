/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#755AE2",
          75: "#E6E0FF",
          100: "#F5F3FF",
          200: "#ECE8FF",
        },
        secondary: {
          50: "#FF5F56",
        },
        neutral: {
          50: "#8C8CA1",
        },
      },
    },
  },
  plugins: [],
};
