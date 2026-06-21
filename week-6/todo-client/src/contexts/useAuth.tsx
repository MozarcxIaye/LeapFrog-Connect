import { useContext, type ReactNode } from "react";
import { createContext } from "react";
import { useState } from "react";
import { login as loginApi } from "../api/auth";


type AuthContextType = {
    accessToken: string | null,
    isAuthenticated: boolean,
    login: (
        email: string,
        password: string
    ) => Promise<void>,
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {

    const [accessToken, setAccessToken] = useState<string | null>(
        () => localStorage.getItem("access_token")
    )
    const login = async (email: string, password: string) => {
        const { access_token } = await loginApi({ email, password })
        console.log("Received access token: ", access_token)
        localStorage.setItem("access_token", access_token)
        setAccessToken(access_token)
    }

    const logout = () => {
        localStorage.removeItem("access_token")
        setAccessToken(null)
        console.log("Successfully Logged out.")
    }

    return <AuthContext.Provider 
            value={
        {
            accessToken,
                isAuthenticated: !!accessToken,
                    login,
                    logout
        }
    }
>
        { children }
        </AuthContext.Provider>

}



export function useAuth() {
    const ctx = useContext(AuthContext)

    if (!ctx) {
        throw new Error("useAuth must be used inside Authprovider")
    }
    return ctx
}
