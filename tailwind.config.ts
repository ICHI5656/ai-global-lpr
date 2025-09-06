import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Main Purple
        primary: {
          DEFAULT: "#C14FE6",
          shade: {
            100: "#A62FCA",
            200: "#721D88",
            300: "#551666",
            400: "#390E44",
            500: "#2B0B33",
            600: "#1C0722",
            700: "#0E0411"
          },
          tint: {
            100: "#D580F2",
            200: "#E4AFF8",
            300: "#EFD2FC",
            400: "#F1E3F6"
          }
        },
        // State Colors
        error: "#F44336",
        warning: "#FF9800",
        info: "#2196F3",
        success: "#4CAF50",
        // Neutral Colors
        neutral: {
          100: "#B3B3B3",
          200: "#999999",
          300: "#454545",
          400: "#363636",
          500: "#303030",
          600: "#242424",
          700: "#1F1F1F",
          800: "#1B1B1B",
          900: "#191919",
          1000: "#121212"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Display
        "display-1": ["50px", { fontWeight: "700" }],
        "display-2": ["56px", { fontWeight: "700" }],
        "display-3": ["62px", { fontWeight: "700" }],
        // Headers
        "header-1": ["24px", { fontWeight: "500" }],
        "header-2": ["24px", { fontWeight: "700" }],
        "header-3": ["24px", { fontWeight: "600" }],
        "header-4": ["28px", { fontWeight: "700" }],
        "header-5": ["28px", { fontWeight: "600" }],
        "header-6": ["32px", { fontWeight: "700" }],
        "header-7": ["32px", { fontWeight: "600" }],
        "header-8": ["36px", { fontWeight: "700" }],
        "header-9": ["36px", { fontWeight: "600" }],
        "header-10": ["40px", { fontWeight: "700" }],
        "header-11": ["40px", { fontWeight: "600" }],
        "header-12": ["44px", { fontWeight: "700" }],
        "header-13": ["44px", { fontWeight: "600" }],
        // Body
        "body-1": ["10px", { fontWeight: "400" }],
        "body-2": ["12px", { fontWeight: "400" }],
        "body-3": ["12px", { fontWeight: "500" }],
        "body-4": ["14px", { fontWeight: "400" }],
        "body-5": ["14px", { fontWeight: "500" }],
        "body-6": ["16px", { fontWeight: "400" }],
        "body-7": ["16px", { fontWeight: "500" }],
        "body-8": ["16px", { fontWeight: "700" }],
        "body-9": ["18px", { fontWeight: "400" }],
        "body-10": ["18px", { fontWeight: "500" }],
        "body-11": ["18px", { fontWeight: "700" }],
        "body-12": ["20px", { fontWeight: "400" }],
        "body-13": ["20px", { fontWeight: "500" }],
        "body-14": ["20px", { fontWeight: "700" }],
        "body-15": ["22px", { fontWeight: "400" }],
        "body-16": ["22px", { fontWeight: "500" }],
        "body-17": ["22px", { fontWeight: "700" }],
      },
      spacing: {
        "spacing-1": "4px",
        "spacing-2": "8px",
        "spacing-3": "12px",
        "spacing-4": "16px",
        "spacing-5": "20px",
        "spacing-6": "24px",
        "spacing-7": "32px",
        "spacing-8": "40px",
        "spacing-9": "48px",
        "spacing-10": "56px",
        "spacing-11": "64px",
        "spacing-12": "72px",
        "spacing-13": "80px",
        "spacing-14": "88px",
        "spacing-15": "96px",
        "spacing-16": "104px",
        "spacing-17": "124px",
      },
      borderRadius: {
        "radius-1": "4px",
        "radius-2": "8px",
        "radius-3": "16px",
        "radius-4": "24px",
      },
      screens: {
        mobile: "393px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;