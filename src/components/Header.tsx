import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
const Header = () => {
    return (
    <header className="flex w-full">
        <p className="text-4xl w-full">
            Sistema de Gestion de proyectos y tareas
        </p>
        <div className="flex mr-4 my-2 space-x-3">
            <ModeToggle/>
            <Button>Salir</Button>
        </div>
    </header>
    )
}
export default Header;