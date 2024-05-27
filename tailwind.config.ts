import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#4f00ff",
        
"secondary": "#00caff",
        
"accent": "#00c700",
        
"neutral": "#0d1014",
        
"base-100": "#2b2136",
        
"info": "#00c8f2",
        
"success": "#009600",
        
"warning": "#f2b300",
        
"error": "#ff7f81",
        },
      },
    ],}
};
export default config;
