import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bdki-darkest': '#15191d',
        'bdki-dark': '#262626',
        'bdki-dark-blue': '#313b4b',
        'bdki-light-grey': '#6f6f6f',
        'bdki-lighter-grey': '#BFBFBF'
      },
    },
  },
  plugins: [],
}
export default config
