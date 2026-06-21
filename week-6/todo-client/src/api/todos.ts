import api from "./client"

export type Todo = {
    _id: string,
    title: string,
    completed: boolean,
    description: string,
    createdAt: string,
    updatedAt: string
}

// getTodos
export async function getTodos(): Promise<Todo[]> {
    const response = await api.get<Todo[]>("/todos")
    return response.data
}

// createTodo
export async function createTodo(title: string, description: string): Promise<Todo> {
    const response = await api.post<Todo>("/todos", { title, description })
    return response.data
}

// updateTodo
export async function updateTodo(
    id: string,
    payload: Partial<Pick<Todo, "title" | "completed" | "description">>
): Promise<Todo> {
    const response = await api.patch<Todo>(`/todos/${id}`, payload)
    return response.data
}

// deleteTodo
export async function deleteTodo(id: string) {
    await api.delete(`/todos/${id}`)
}