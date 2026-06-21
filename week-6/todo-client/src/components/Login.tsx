
import { useNavigate } from "react-router"
import { useAuth } from "../contexts/useAuth"
import { loginSchema, type LoginDTO } from "../schema/LoginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const Login = () => {

    const { login } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginDTO>({
        resolver: zodResolver(loginSchema)
    })

    const handleLogin = async (data: LoginDTO) => {
        try {
            await login(data.email, data.password)
            console.log("Login Successful")

            navigate("/dashboard")
        } catch (error) {
            console.error("login failed", error)
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(handleLogin)}>
                <h2>Login</h2>

                <div className="field">
                    <label htmlFor="emailInput">Email:</label>
                    <input type="text" id="email" {...register("email")} />
                </div>
                {errors.email && <p>{errors.email.message}</p>}

                <div className="field">
                    <label htmlFor="passwordInput">Password:</label>
                    <input type="password" id="password" {...register("password")} />
                </div>
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login