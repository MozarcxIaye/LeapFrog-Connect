import type { ReactNode } from "react"
import { useAuth } from "../contexts/useAuth"
import { useLocation } from "react-router"
import { Navigate } from "react-router"

const ProtectedRoute = ({children}: {children: ReactNode}) => {

    // const isAuthenticated?
    const {accessToken: token} = useAuth()
    const location = useLocation()

    if(!token) {
        return <Navigate to="/login" replace state={{from: location}} />
    }

  return <>{children}</>
  
}

export default ProtectedRoute