module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        mono: {
          background: "#121212",
          lightBackground: "#ffffff",
          card: "#202020",
          accent: "#1a1a1a",
          divider: "#333333",
          blueAccent: "#2e6aac",
          yellowAccent: "#f6d365",
          accentDark: "#252525",
          accentLight1: "#2c2c2c",
          accentLight2: "#3a3a3a",
        },
        type: {
          primary: "#d0d0d0",
          emphasized: "#e0e0e0",
          dimmed: "#a3a3a3",
          footer: "#505050",
          dark: "#0a0a0a",
        },
      },
    },
  },
};
