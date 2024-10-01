module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: { 
          "50": "#eff6ff", 
          "100": "#dbeafe", 
          "200": "#bfdbfe", 
          "300": "#93c5fd", 
          "400": "#60a5fa", 
          "500": "#3b82f6", 
          "600": "#2563eb", 
          "700": "#1d4ed8" 
        },
        mono: { 
          background: "#121212",
          card: "#0b0b0b", 
          accent: "#1a1a1a" 
        },
        type: { 
          emphasized: "#e0e0e0", 
          subheader: "#d0d0d0", 
          dimmed: "#c0c0c0", 
          footer: "#6b7280" 
        },
      },
    },
  },
  plugins: [],
};