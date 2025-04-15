import InputLabel from "../../components/InputLabel"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  TabsContent,
} from "../../components/ui/tabs"
import{login } from '../../util/http'
import { useMutation } from "@tanstack/react-query"
import React from "react"
import { useNavigate } from "react-router"

const LoginForm = () => {
    const navigate = useNavigate();

    const {mutate, isPending, isSuccess} = useMutation({
        mutationFn: login,
        onSuccess: () => {
            navigate('/dashboard');
          }, 
    })

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        mutate({data})
    }

    return (
        <TabsContent value="login">
            <Card>
                <form id="login" onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Iniciar Sesión</CardTitle>
                        <CardDescription>
                            Puedes iniciar sesión aquí
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <InputLabel name="email" label="Correo" placeholder="correo@correo.com" type="email" />
                        <InputLabel name="password" label="Contraseña" placeholder="Contraseña" type="password" />
                     </CardContent>
                    <CardFooter>
                        {!isPending ? <Button className="flex" type="submit">Iniciar Sesión</Button> : <p>Cargando</p> }
                </CardFooter>
                </form>
            </Card>
            
         </TabsContent>
        )
}
export default LoginForm;