import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans'], // Add Nunito font family
      },
      fontSize: {
        '60': '60px', // Custom font size of 60px
      },
      letterSpacing: {
        'tighter': '0.1px', // Custom letter-spacing of 0.1px
      },
      lineHeight: {
        'tighter': '82px', // Custom line-height of 82px
      },
      colors: {
        'neutral-black': '#2B2B43', // Custom color 'neutral-black'
        'primal-purple': '#697BFF'
      }
    },
  },
  plugins: [],
}
export default config
