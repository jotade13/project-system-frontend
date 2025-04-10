import { Button } from "./ui/button";
const Header = () => {
    return (
    <header className="flex w-full">
        <p className="text-4xl w-full">
            Sistema de Gestion de proyectos y tareas
        </p>
        <Button className="mr-2 my-1">Salir</Button>
    </header>
    )
}
export default Header;