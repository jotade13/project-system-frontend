import { Button } from "./ui/button";
const Header = () => {
    return (
    <header className="flex w-full">
        <p className="text-4xl">
            Sistema de Gestion de proyectos y tareas
        </p>
        <Button className="self">Salir</Button>
    </header>
    )
}
export default Header;