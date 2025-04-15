import { createBrowserRouter } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import { checkAuthLoader, checkUnauthLoader } from "./util/auth";

const router = createBrowserRouter([
    {
        path: "/",
        Component: DefaultLayout,
        loader: checkAuthLoader,
        children: [
            {
                path: "/tasks",
                Component: Tasks,
            },
            {
                path: "/projects",
                Component: Projects,
            },
            {
                path: "/settings",
                Component: Settings,
            },
            {
                path: "/dashboard",
                Component: Dashboard,
                
            },
        ],
    },
    {
        path: "/",
        Component: GuestLayout,
        loader: checkUnauthLoader,
        children: [
            {
                index: true,
                path: "/login",
                Component: Login,
            }
        ],
    },
]);

export default router;