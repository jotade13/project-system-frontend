"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { login } from "../../util/http"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { TabsContent } from "../ui/tabs"
import { useNavigate } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import ErrorAlert from "../ErrorAlert"


const formSchema = z.object({
    email: z.string().email({ message: "Dirección de correo invalida" }),
    password: z.string().min(6,{message: "Contraseña debe tener al menos 6 caracteres"}).max(50, {message: "La contraseña no puede tener 50 caracteres"})
})

const LoginForm = () => {

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })

    const {mutate, isError} = useMutation({
        mutationFn: login,
        onSuccess: () => {
            navigate('/dashboard');
          }, 
    })

    const onSubmit= (data: z.infer<typeof formSchema>) => {
        mutate({data})
    }


    return (
        <TabsContent value="login">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Iniciar Sesión</CardTitle>
                                <CardDescription>
                                    Puedes iniciar sesión aquí
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Correo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="correo@corre.com" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contraseña</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Contraseña" type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit">Iniciar Sesión</Button>
                                </CardFooter>
                        </Card>
                    </form>
                </Form>
                {isError && <ErrorAlert errorText="Error en la autenticación"/>}
        </TabsContent>
    )
}

export default LoginForm

