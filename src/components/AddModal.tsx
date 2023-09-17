import useAddModal from "../hooks/useAddModal";
import useTodos, { Todo } from "../hooks/useTodos";
import Button from "./Button";

import Input from "./Input";
import Modal from "./Modal";
import Textarea from "./Textarea";

import { FieldValues, useForm } from "react-hook-form";

const AddModal = () => {
    const { todos, setTodos } = useTodos();
    const { isOpen, onClose, name } = useAddModal();

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: name,
            description: '',
            expires: null
        }
    })

    const onChange = () => {
        if(isOpen) {
            onClose();
        }
    }

    const onSubmit = (values: FieldValues) => {
        const newTodo: Todo = {
            id: `${Date.now()}`,
            name: values.name || 'Not name typed!',
            description: values.name || 'Not description typed!',
            status: 'during',
            expires: new Date(values.expires),
            createdAt: new Date()
        }

        setTodos([...todos, newTodo]);

        reset();
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onChange={onChange}
            title="New task"
            description="Add new task to your todo list!"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    id="name"
                    placeholder="Enter name..."
                    defaultValue={name}
                    required
                    {...register('name')}
                    className="
                        bg-neutral-700/50
                        border-neutral-600/50
                        focus:bg-neutral-700
                        focus:border-neutral-600
                        mb-3
                    "
                />
                <Textarea 
                    id="description"
                    placeholder="Enter description..."
                    required
                    {...register('description')}
                    className="
                        bg-neutral-700/50
                        border-neutral-600/50
                        focus:bg-neutral-700
                        focus:border-neutral-600
                        min-h-[100px]
                        h-[150px]
                        max-h-[200px]
                        mb-3
                    "
                />
                <div>
                    <label
                        htmlFor="expires"
                        className="
                            text-lg
                            font-medium
                        "
                    >
                        How much time you need?
                    </label>
                    <Input
                        id="expires"
                        type="date"
                        required
                        {...register('expires')}
                        className="
                            mt-2
                            bg-neutral-700/50
                            border-neutral-600/50
                            focus:bg-neutral-700
                            focus:border-neutral-600
                        "
                    />
                    <Button
                        className="
                            mt-4
                            w-full
                            py-4
                        "
                    >
                        Add
                    </Button>
                </div>             
            </form>
        </Modal>
    )
}
 
export default AddModal;