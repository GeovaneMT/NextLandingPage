import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-full px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-gray7',
    'active:opacity-80 w-max',
  ],

  variants: {
    variant: {
      primary: 'bg-orange-600 hover:bg-orange-700',
      ghost: '  px-2 shadow-none hover:text-orange-600 dark:hover:text-orange-600',
      outline: '  hover:text-white border border-orange-600 hover:bg-orange-600',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, title, ...props }: ButtonProps) {
  return (
    <button {...props} className={button({ variant })}>
      {title}
    </button>
  )
}
