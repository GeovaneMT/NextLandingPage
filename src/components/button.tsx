import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: 'bg-violet-600 text-black hover:bg-violet-700',
      ghost:
        'rounded-md px-2 hover:bg-zinc-900 shadow-none hover:text-orange-600',
      outline: 'border border-zinc-700 text-zinc-300 hover:bg-zinc-50',
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
