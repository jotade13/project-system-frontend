import { createBrowserRouter } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/login/Login";
import Tasks from "./pages/tasks/component/Tasks";
import Projects from "./pages/projects/components/Projects";
import Dashboard from "./pages/dashboard/components/Dashboard";
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
                path: "/dashboard",
                Component: Dashboard,
            },
            {
                path: "*",
                loader: checkUnauthLoader
            }
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