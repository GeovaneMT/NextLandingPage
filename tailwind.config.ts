import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { blackA, mauve, violet } from '@radix-ui/colors'
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
              ...mauve,
              ...violet,
            },
            keyframes: {
              slideDownAndFade: {
                from: { opacity: '0', transform: 'translateY(-2px)' },
                to: { opacity: '1', transform: 'translateY(0)' },
              },
              slideLeftAndFade: {
                from: { opacity: '0', transform: 'translateX(2px)' },
                to: { opacity: '1', transform: 'translateX(0)' },
              },
              slideUpAndFade: {
                from: { opacity: '0', transform: 'translateY(2px)' },
                to: { opacity: '1', transform: 'translateY(0)' },
              },
              slideRightAndFade: {
                from: { opacity: '0', transform: 'translateX(-2px)' },
                to: { opacity: '1', transform: 'translateX(0)' },
              },
            },
            animation: {
              slideDownAndFade:
                'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
              slideLeftAndFade:
                'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
              slideUpAndFade:
                'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
              slideRightAndFade:
                'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            },
          },
        },
      },
    ),
  ],
}
export default config
