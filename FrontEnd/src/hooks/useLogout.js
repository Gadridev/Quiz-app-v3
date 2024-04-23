import { useAuth } from "./useAuth"

export function useLogout(){
    const {dispatch}=useAuth()
    const Logout=()=>{
        localStorage.removeItem('token')
        dispatch({type:'logout'})
    }
    return {Logout}
}