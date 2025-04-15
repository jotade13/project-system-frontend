import {useNavigate } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem('token','')
        navigate('/login')
    }

    return (
    <header className="flex w-full">
        <p className="text-4xl w-full">
            Sistema de Gestion de proyectos y tareas
        </p>
        <div className="flex mr-4 my-2 space-x-3">
            <ModeToggle/>
            <Button onClick={handleLogout}>Salir</Button>
        </div>
    </header>
    )
}
export default Header;