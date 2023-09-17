import useTodos, { Todo } from "../hooks/useTodos";
import useDate from "../hooks/useDate";

import clsx from "clsx";

//import useDate from "../hooks/useDate";

type Status = 'during' | 'passed';

import { BsCheck, BsStopwatchFill } from 'react-icons/bs';
import Button from "./Button";

export interface TodoElementProps {
    id: string;
    name: string;
    description: string;
    status: Status;
    expires: Date;
    createdAt: Date;
}

const TodoElement: React.FC<TodoElementProps> = ({
    id,
    name,
    description,
    status,
    expires,
    createdAt
}) => {
    const { todos, setTodos } = useTodos();

    const createdAtFormated = useDate(createdAt);
    expires = new Date(expires);
    const expiresFormated = `${expires.getMonth() < 10 ? ('0' + (expires.getMonth() + 1)) :( expires.getMonth() + 1)}.${expires.getDate() < 10 ? ('0' + expires.getDate()) : expires.getDate()}.${expires.getFullYear()}`;
    //const expiresFormated =''

    const passedFunc = () => {
        const newTodos: Todo[] = [];

        todos.forEach((todo) => {
            if(todo.id !== id) return newTodos.push(todo);

            todo.status = 'passed';
            return newTodos.push(todo);
        });

        setTodos(newTodos);
    }

    return (
        <div
            className="
                w-full
                p-3
                bg-neutral-800
                border
                border-neutral-700
                rounded-md
                flex
                justify-between
            "
        >
            <div
                className="
                    flex
                    items-start
                    gap-4
                "
            >
                <div>
                    <h2
                        className="
                            text-xl
                            font-semibold
                            mb-1
                        "
                    >
                        {name.length > 8 ? name.substring(0, 8) + '...' : name}
                    </h2>
                    <p
                        className="
                            font-medium
                            text-sm
                            text-neutral-400
                        "
                    >
                        {description}
                    </p>
                </div>
                <div
                    className={clsx(`
                        h-4
                        inset
                        ring-4
                        ring-white
                        rounded-full
                        aspect-square    
                        mt-2
                    `,  status === 'during' && 'bg-yellow-500',
                        status === 'passed' && 'bg-emerald-500'
                    )}
                />
                <p
                    className="
                        font-medium 
                        italic
                        text-sm
                        text-neutral-500
                        hidden
                        sm:block
                        mt-1.5
                    "
                >
                    Added {createdAtFormated} ago
                </p>
            </div>
            <div
                className="
                    flex
                    items-center
                    gap-2
                "
            >
                <p
                    className="
                        font-medium
                        text-neutral-500
                        items-center
                        gap-2
                        hidden
                        sm:flex
                    "
                >
                    <BsStopwatchFill />
                    Expires in {expiresFormated}
                </p>
                {status === 'during' && (
                    <Button
                    onClick={passedFunc}
                    className="
                        flex
                        justify-center
                        items-center
                        text-black
                        bg-white
                        h-14
                        scale-75
                        text-xl
                    "
                    >
                        <BsCheck />
                    </Button>
                )}
            </div>
        </div>
    )
}
 
export default TodoElement;