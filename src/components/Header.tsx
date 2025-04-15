import {useNavigate } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { getAuthToken } from "../util/auth";
const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem('token','')
        navigate('/login')
    }

    return (
    <header className="flex w-full border-b-2">
        <p className="text-4xl w-full">
            Sistema de Gestion de proyectos y tareas
        </p>
        <div className="flex mr-4 my-2 space-x-3">
            <ModeToggle />
            {getAuthToken() && <Button onClick={handleLogout}>Salir</Button> }
        </div>
    </header>
    )
}
export default Header;