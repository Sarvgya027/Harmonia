import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = 'Button',
  ...props
}, ref) => {
  return (
    <button type={type} className={twMerge(`w-full rounded-full`,  className)} disabled={disabled} ref={ref} >
      {children}

    </button>
  )
}))

Button.displayName = "Button";

export default Button

