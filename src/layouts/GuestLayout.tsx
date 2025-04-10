import { Outlet } from "react-router";
import { ModeToggle } from "../components/mode-toggle";
const GuestLayout =  () => {
    return (<>
        <ModeToggle/>
        <Outlet />
    </>)
}
export default GuestLayout;