import { Outlet, Navigate } from "react-router";
import Header from "../components/Header";

const DefaultLayout =  () => {
    const token = localStorage.getItem("token")
    if(!token){
        return <Navigate to="/login"/>
    }
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}
export default DefaultLayout;