import { isAutenticated } from "../services/apiAuth"
import { Outlet, Navigate } from "react-router-dom"
function ProtectedRoute() {
    const isAuth=isAutenticated()
    return isAuth  ? <Outlet /> : <Navigate to='/' />
}
export default ProtectedRoute
