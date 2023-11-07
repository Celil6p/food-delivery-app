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
        'nunito': ['Nunito', 'sans'], 
      },
      fontSize: {
        '60': '60px', 
      },
      letterSpacing: {
        'tighter': '0.1px', 
      },
      lineHeight: {
        'tighter': '82px', 
      },
      colors: {
        'neutral-black': '#2B2B43', 
        'primary-indigo-hover': '#697BFF',
        'primary-indigo': '#4E60FF',
        'light-indigo': '#F3F4FF',
        'light-gray': '#EDEEF2',
        'primary-gray': '#83859C',
        'secondary-light': '#FFF3ED',
        'secondary-default':'#FD6D22',
      }
    },
  },
  plugins: [],
}
export default config
