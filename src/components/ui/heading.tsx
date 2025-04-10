import { type VariantProps, cva } from 'class-variance-authority'

const headingVariants = cva(' text-white gap-4 font-bold font-sans flex flex-col ', {
  variants: {
    size: {
      default: 'text-sm',
      sm: 'text-2xl',
      lg: 'text-3xl',
    },
    align: {
      left: 'text-left',
      center: 'items-center',
    },
  },
  defaultVariants: {
    size: 'default',
    align: 'left',
  },
})

const underlineVariants = cva('w-[170px] h-[2px] bg-yellow-500', {
  variants: {
    variant: {
      primary: 'bg-yellow-500',
      secondary: 'bg-emerald-400',
      destructive: 'bg-red-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
 
type Props = VariantProps<typeof headingVariants> &
  VariantProps<typeof underlineVariants> & {
    children?: string
    className?: string
  }
 
export function Heading({ variant, size, align, className, ...props }: Props) {
  return (
    <div className={headingVariants({ size, align, className })}>
      <h1>{props.children}</h1>
      <div className={underlineVariants({ variant })} />
    </div>
  )
}