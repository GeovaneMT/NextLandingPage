import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { blackA } from '@radix-ui/colors'
/** @type {import('tailwindcss').Config} */

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './App.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(
      function ({ addVariant }) {
        addVariant('glow', '.glow-capture .glow-overlay &')
      },
      {
        theme: {
          extend: {
            colors: {
              // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
              glow: 'color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)',
              ...blackA,
            },
          },
        },
      },
    ),
  ],
}
export default config
