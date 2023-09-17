import { forwardRef } from 'react';
import clsx from 'clsx';

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
    className,
    disabled,
    ...props
}, ref) => {
    return (
        <textarea
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

Textarea.displayName = 'Textarea'

export default Textarea;