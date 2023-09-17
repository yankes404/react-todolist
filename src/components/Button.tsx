import { forwardRef } from 'react';
import clsx from 'clsx';

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    type,
    disabled,
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={clsx(`
                px-5
                py-2
                rounded-lg
                bg-cyan-500
                font-medium
                transition
                text-sm
                hover:opacity-75
                focus:opacity-75
            `, className)}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = 'Button'

export default Button;