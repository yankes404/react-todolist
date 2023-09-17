import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
    isOpen: boolean;
    title: string;
    description: string;
    children: React.ReactNode;
    onChange: () => void;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    title,
    description,
    children,
    onChange
}) => {
    return (
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
            <Dialog.Portal>
                <Dialog.Overlay
                    className='
                        h-[100vh]
                        w-full
                        bg-neutral-900/50
                        backdrop-blur-sm
                        z-30
                        fixed
                        top-0
                    '
                />
                <Dialog.Content
                    className='
                        bg-neutral-800
                        border
                        border-neutral-700
                        rounded-lg
                        fixed
                        top-1/2
                        left-1/2
                        translate-x-[-50%]
                        translate-y-[-50%]
                        min-w-[450px]
                        w-full
                        sm:w-auto
                        h-full
                        sm:h-auto
                        z-50
                        p-4
                    '
                >
                    <Dialog.Title
                        className='
                            text-center
                            text-2xl
                            font-semibold
                        '
                    >
                        {title}
                    </Dialog.Title>
                    <Dialog.Description
                        className='
                            mt-1
                            text-center
                            text-neutral-400
                            mb-3
                        '
                    >
                        {description}
                    </Dialog.Description>
                    {children}
                    <Dialog.Close asChild>
                        <button
                            className='
                                absolute
                                top-0
                                right-0
                                m-3
                                text-lg
                                text-neutral-400
                                transition
                                p-1
                                rounded-full
                                outline-none
                                hover:text-white
                                focus:text-white
                                focus:bg-neutral-700/50
                                focus:outline-neutral-700
                            '
                        >
                            <IoMdClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
 
export default Modal;