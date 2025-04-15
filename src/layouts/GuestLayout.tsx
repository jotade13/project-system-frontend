import { Outlet} from "react-router";
import Header from "../components/Header";

const GuestLayout =  () => {

    return (<>
        <Header />
        <Outlet />
    </>)
}
export default GuestLayout;