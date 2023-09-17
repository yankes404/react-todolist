import { create } from "zustand";

import { TodoElementProps } from "../components/TodoElement";

export interface Todo extends TodoElementProps {}

interface TodosStore {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

const getTodos = () => {
    const todos = JSON.parse(window.localStorage.getItem('todos') || '[]') || [];
    return todos;
}

const useTodos = create<TodosStore>((set) => ({
    todos: getTodos(),
    setTodos: (todos: Todo[]) => {
        set({ todos })
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }
}));

export default useTodos;