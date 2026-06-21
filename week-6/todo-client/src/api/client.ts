import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token")

    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})


api.interceptors.response.use(
    (response) => response, 
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("access_token")
            if(!["/login", "/register"].includes(window.location.pathname)){
                window.location.href = "/login"
            }
        }
        return Promise.reject(error)
    }
)

export default api