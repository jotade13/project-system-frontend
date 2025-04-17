import { Outlet} from "react-router";
import Header from "../components/header/Header";

const GuestLayout =  () => {

    return (<>
        <Header />
        <Outlet />
    </>)
}
export default GuestLayout;