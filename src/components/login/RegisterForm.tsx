import { TabsContent } from "@radix-ui/react-tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import InputLabel from "../InputLabel";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query"
import { register } from "../../util/http";
import { useNavigate } from "react-router";


const RegisterForm = () => {
const navigate = useNavigate();

    const {mutate} = useMutation({
        mutationFn: register,
        onSuccess: () => {
            navigate('/dashboard');
          }
    })

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        mutate({data})
    }
    return (
        <TabsContent value="register">
            <Card>
                <form id="login" onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Registrar</CardTitle>
                        <CardDescription>
                            Puedes registrarte aquí
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                            <InputLabel name="first_name" label="Nombre" placeholder="Nombre" type="text" />
                            <InputLabel name="last_name" label="Apellido" placeholder="Apellido" type="text" />
                            <InputLabel name="email" label="Correo" placeholder="correo@correo.com" type="email" />
                            <InputLabel name="password" label="Contraseña" placeholder="Contraseña" type="password" />
                            <InputLabel name="password_confirmation" label="Confirmar contraseña" placeholder="Contraseña" type="password" />
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Registrarse</Button>
                    </CardFooter>
                </form>
            </Card>
        </TabsContent>
    )
}
export default RegisterForm;