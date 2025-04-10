import { createBrowserRouter } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/login";
import Tasks from "./pages/tasks";
import Projects from "./pages/Projects";
import Settings from "./pages/settings";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        Component: DefaultLayout,
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
        children: [
            {
                path: "/login",
                Component: Login,
            }
        ],
    },
]);

export default router;