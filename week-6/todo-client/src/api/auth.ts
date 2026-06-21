import api from "./client"

type LoginPayload = {
    email: string,
    password: string
}

type LoginResponse = {
    access_token : string
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/auth/login", payload)
    return response.data
}


export async function register(payload: LoginPayload) {
    const response = await api.post("/auth/register", payload)
    return response.data
}


