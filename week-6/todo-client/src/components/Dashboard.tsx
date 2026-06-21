
import { getTodos, createTodo, updateTodo, deleteTodo, type Todo } from "../api/todos"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import type { TodoFormData } from "../types/TodoFormData"

import "../styles/Dashboard.css"

const Dashboard = () => {

    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm<TodoFormData>()

    const onSubmit = async (data: TodoFormData) => {
        try {
            const newTodo = await createTodo(data.title, data.description)
            setTodos(prev => [...prev, newTodo])
        } catch (error) {
            console.error(error)
        }
    }

    const handleToggleCompleted = async (
        id: string,
        completed: boolean
    ) => {
        try {
            const updatedTodo = await updateTodo(id, {
                completed: !completed
            })

            setTodos(prev =>
                prev.map(todo =>
                    todo._id === id ? updatedTodo : todo
                )
            )
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await deleteTodo(id)

            setTodos(prev =>
                prev.filter(todo => todo._id !== id)
            )
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos()
                setTodos(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchTodos()
    }, [])

    if (loading) return <div>Loading...</div>


    return (
        <>
            <div>Todo Dashboard</div>

            <div className="todo-control">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        {...register("title", { required: true })}
                    />

                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        {...register("description")}
                    />

                    <button type="submit">Add Todo</button>
                </form>

            </div>

            <div className="todo-list">
                {todos.map(todo => (
                    <div key={todo._id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() =>
                                handleToggleCompleted(
                                    todo._id,
                                    todo.completed
                                )
                            }
                        />


                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>

                        <span>
                            {todo.completed ? "Completed" : "Pending"}
                        </span>

                        <button onClick={() => handleDelete(todo._id)}>
                            Delete Todo
                        </button>
                    </div>
                ))}
            </div>
        </>



    )
}

export default Dashboard