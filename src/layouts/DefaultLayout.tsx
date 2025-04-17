import { Outlet } from "react-router";
import Header from "../components/header/Header";

const DefaultLayout =  () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}
export default DefaultLayout;