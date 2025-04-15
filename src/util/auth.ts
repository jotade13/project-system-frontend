import { redirect } from "react-router"

export const getAuthToken = () => {
    const token = localStorage.getItem('token')
    return token
}

export const checkAuthLoader = () => {
    const token = getAuthToken()
    if(!token){
        return redirect('/login')
    }
    return null
}
export const checkUnauthLoader = () => {
    const token = getAuthToken()
    if(token){
        return redirect('/dashboard')
    }
    return null
}