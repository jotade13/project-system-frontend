import { Navigate, Outlet} from "react-router";
import { ModeToggle } from "../components/mode-toggle";

const GuestLayout =  () => {
    const token = localStorage.getItem("token")
    if(token){
        return <Navigate to="/dashboard"/>
    }
    return (<>
        <ModeToggle/>
        <Outlet />
    </>)
}
export default GuestLayout;