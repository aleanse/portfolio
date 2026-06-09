module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter, sans-serif",
      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        "greenbg": "#D7FFE0",
        "purple": "#7e087e",
        "blue": "#6b00d7",
      },
      backgroundImage: {
        tech: "linear-gradient(rgba(20,20,20,0.80), rgba(20,20,20,0.80)), url('/src/assets/nairobi.png')",
        },
    },
  },
  plugins: [],
};
