import { Todo } from "../hooks/useTodos";

export default () => {
    let todos = JSON.parse(localStorage.getItem('todos') || '[]');

    if (!Array.isArray(todos)) {
        return [];
    }

    const returnTodos: Todo[] = []

    todos.forEach((todo) => {
        const new_todo: Todo = todo;

        if(!new_todo.id || typeof new_todo.id !== 'string') return;
        if(!new_todo.name || typeof new_todo.name !== 'string') return;
        if(!new_todo.description || typeof new_todo.description !== 'string') return;
        if(!new_todo.status) return;
        if(new_todo.status !== 'during' && new_todo.status !=='passed') return;
        if(!new_todo.expires || new_todo.expires !instanceof Date) return;
        if(!new_todo.createdAt || new_todo.createdAt !instanceof Date) return;

        return returnTodos.push(new_todo);
    })

    return returnTodos;
}