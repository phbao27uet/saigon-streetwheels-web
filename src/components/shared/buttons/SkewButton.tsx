import { cn } from '@/libs/utils'
import type React from 'react'

interface SkewButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SkewButton = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<SkewButtonProps>) => {
  return (
    <button
      className={cn(
        'relative bg-transparent px-5 py-2.5 inline-block w-fit text-white border-white border text-sm font-semibold uppercase cursor-pointer transform -skew-x-12 overflow-hidden group hover:text-black transition-colors duration-500',
        className,
      )}
      type="button"
      {...props}
    >
      <span className="inline-block skew-x-12">{children}</span>
      <div className="absolute inset-0 bg-white text-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10" />
    </button>
  )
}

export default SkewButton
