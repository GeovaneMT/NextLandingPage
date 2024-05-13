import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import * as colors from '@radix-ui/colors'
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
    require('tailwindcss-bg-patterns'),
    require('@tailwindcss/typography'),
    plugin(function({ addVariant }) {
      addVariant('highlighted', ['&:hover', '&:focus'])
    }),
    plugin(
      function ({ addVariant }) {
        addVariant('glow', '.glow-capture .glow-overlay &')
      },
      {
        theme: {
          patterns: {
            opacities: {
                100: "1",
                80: ".80",
                60: ".60",
                40: ".40",
                20: ".20",
                10: ".10",
                5: ".05",
            },
            sizes: {
                1: "0.25rem",
                2: "0.5rem",
                4: "1rem",
                6: "1.5rem",
                8: "2rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                32: "8rem",
            }
        },
          extend: {
            colors: {
              // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
              glow: 'color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)',
              ...colors, // Importing all default colors
            },
            keyframes: {
              slideDown: {
                from: { height: '0px' },
                to: { height: 'var(--radix-accordion-content-height)' },
              },
              slideUp: {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0px' },
              },
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
              slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
              slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
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
