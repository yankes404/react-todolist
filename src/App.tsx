import { FormEvent, useMemo, useState } from "react";
import useTodos, { Todo } from "./hooks/useTodos";
import useAddModal from "./hooks/useAddModal";

import Button from "./components/Button";
import Input from "./components/Input";

import { BsSearch } from 'react-icons/bs';
import TodoElement from "./components/TodoElement";

import toast from "react-hot-toast";

const App = () => {
    const { todos, setTodos } = useTodos();
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos.reverse());

    const { onOpen } = useAddModal();

    const filterTodos = (e: FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        const value = e.target.value;

        const filteredTodosNow = todos.reverse().filter((todo) => todo.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredTodos(filteredTodosNow);
    }

    useMemo(() => setFilteredTodos(todos.reverse()), [todos]);

    return (
        <div
            className="
                w-full
                p-1
                md:p-4
                h-[100vh]
                overflow-hidden
                bg-black
                flex
                items-center
                justify-center
                flex-col
                gap-4
            "
        >
            <div
                className="
                    h-96
                    aspect-square
                    bg-cyan-700
                    fixed
                    bottom-[-15%]
                    left-[-15%]
                    rounded-full
                "
                style={{ filter: 'blur(200px)' }}
            />
            <div
                className="
                    h-96
                    lg:h-[50vh]
                    aspect-square
                    bg-indigo-400
                    fixed
                    top-[-15%]
                    right-[-15%]
                    rounded-full
                "
                style={{ filter: 'blur(200px)' }}
            />
            <div
                className="
                    bg-neutral-900
                    border
                    border-neutral-800
                    rounded-lg
                    p-4
                    w-full
                    h-[90px]
                    md:h-auto
                    min-w-1/2
                    md:w-4/6
                    max-w-3/4
                    flex
                    gap-4
                    xl:w-1/2
                "
            >
                <Button
                    onClick={() => {
                        onOpen()
                    }}
                    className="
                        w-full
                        py-4
                    "
                >
                    Add
                </Button>
                <Button
                    onClick={() => {
                        toast.success('Cleared!');
                        setTodos([]);
                    }}
                    className="
                        w-1/4
                        py-4
                        bg-white
                        text-black
                        rounded-md
                        z-10
                    "
                >
                    Clear all
                </Button>
            </div>
            <div
                className="
                    bg-neutral-900
                    border
                    border-neutral-800
                    rounded-lg
                    p-4
                    min-w-1/2
                    w-full
                    md:w-4/6
                    max-w-3/4
                    xl:w-1/2
                    flex
                    flex-col
                    gap-4
                    h-[100vh]
                    md:h-auto
                "
            >
                {todos.length > 5 && (
                    <div className="w-full relative">
                        <BsSearch className="absolute top-1/2 translate-y-[-50%] ml-4 text-sm text-neutral-400" />
                        <Input 
                            onInput={(e) => filterTodos(e)}
                            type="search"
                            placeholder="Search..."
                            id="searchbar"
                            className="
                                w-full
                                pl-12
                            "
                        />
                    </div>
                )}
                <div
                    className="
                        flex
                        flex-col
                        gap-3
                        max-h-[90vh]
                        md:max-h-[50vh]
                        overflow-y-auto
                        overflow-x-hidden
                        px-1
                    "
                >
                    {filteredTodos.length !== 0 ? (
                        filteredTodos.map((todo, key) => (
                            <TodoElement 
                                key={key}
                                id={todo.id}
                                name={todo.name}
                                description={todo.description}
                                status={todo.status}
                                expires={todo.expires}
                                createdAt={todo.createdAt}
                            />
                        ))
                    ) : (
                        <p
                            className="
                                font-medium
                                text-center
                                text-neutral-500
                                mt-2
                                text-md
                            "
                        >
                            Any todos founded!
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
 
export default App;