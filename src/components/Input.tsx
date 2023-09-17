import { forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
}, ref) => {
    return (
        <input
            type={type}
            className={clsx(`
                flex
                w-full
                rounded-md
                bg-neutral-800/50
                border
                border-neutral-700/50
                px-3
                py-3
                text-md
                transition
                placeholder:text-neutral-400
                disabled:cursor-not-allowed
                disabled:opacity-50
                focus:outline-none
                text-neutral-200
                focus:bg-neutral-800
                focus:border-neutral-700
                focus:text-white
            `, className)}
            disabled={disabled}
            ref={ref}
            {...props}
        />
    )
});

Input.displayName = 'Input'

export default Input;