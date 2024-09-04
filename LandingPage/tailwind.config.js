// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      beige: "#f5f5dc", // Beige color

      "green-500": "#10B981", // Example green color
      "gray-300": "#D1D5DB", // Example gray color
      "blue-500": "#3B82F6", // Example blue color
      "hover-green": "#d1fae5",
      "border-green": "#10b981",
    },
    customGreen: {
      900: '#064e3b', // Dark green color you prefer
      
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      borderColor: ["hover", "focus"],
    },
  },
  plugins: [],
};
