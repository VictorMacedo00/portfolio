import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'brand-color': '#00D2DF',
      'dark-10': '#121212',
      'dark-20': '#151515',
      'dark-30': '#C4C4C4',
      'support-01': '#2962FF',
      'support-02': '#0BB07B',
      'support-03': '#FFCE52',
      'support-04': '#F03D3D',
      'support-05': '#E0E0E0'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
