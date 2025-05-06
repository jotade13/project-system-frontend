import { redirect } from "react-router"

export const getAuthToken =  () : string|null  =>  {
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

export const userRole = () => {
    const role = localStorage.getItem('role')
    return role
}
export const getId = () => {
    const id = localStorage.getItem('id')
    return id
}