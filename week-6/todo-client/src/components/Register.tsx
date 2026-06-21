import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, type RegisterDTO } from "../schema/RegisterSchema"
import { useForm } from "react-hook-form"
import {register as registerRequest} from "../api/auth"

const Register = () => {

    const navigate = useNavigate()
    const [submitError, setSubmitError] = useState("")

    const {
        register, 
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<RegisterDTO>({
        resolver: zodResolver(registerSchema)
    })

    const handleRegister = async(data: RegisterDTO) => {
        setSubmitError("")

        try{
            await registerRequest(data)
            navigate("/login", {
                replace: true,
                state: {message: "Account created. You can log in now."}
            })
        } catch {
            setSubmitError("Could not create an account. Try with different email.")
        }

    }



  return (
    <div>
        <form onSubmit={handleSubmit(handleRegister)}>
            <h2>Register</h2>
            {submitError && <p className="error-message">{submitError}</p>}
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating account..." : "Register"}
            </button>

            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>



        </form>
        
    </div>
  )
}

export default Register