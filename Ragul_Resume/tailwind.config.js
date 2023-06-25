/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        light: "0 1px 6px 0 rgba(32, 33, 36, .28);",
        medium: "0 16px 32px 0 rgba(7, 28, 31, 0.1)",
      },
    },
  },
  plugins: [],
};
