"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query"
import { register } from "../../util/http";
import { useNavigate } from "react-router";
import { formSchemaRegister } from "../../util/validations";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import errorAlert from "../alerts/errorAlert";
import { useTranslation } from "react-i18next";


const RegisterForm = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
    const form = useForm<z.infer<typeof formSchemaRegister>>({
            resolver: zodResolver(formSchemaRegister),
            defaultValues: {
              first_name: "",
              last_name:"",
              email: "",
              password: "",
              password_confirmation: ""
            },
          })

    const {mutate, isPending} = useMutation({
        mutationFn: register,
        onSuccess: () => {
            navigate('/dashboard');
        },
        onError: () => {
            errorAlert("Error al registrar el usuario")
        }
    })

    const onSubmit = (data: z.infer<typeof formSchemaRegister>) => {
        console.log(data)
        mutate({data})
    }

    return (
        <TabsContent value="register">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('register.title')}</CardTitle>
                            <CardDescription>{t('register.description')}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nombre</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Nombre" type="text" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                            />
                            <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Apelido</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Apellido" type="text" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                            />
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
                            <FormField
                            control={form.control}
                            name="password_confirmation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirmar contraseña</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Contraseña" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        </CardContent>
                        <CardFooter>
                            {!isPending ? <Button type="submit">{t('register.title')}</Button> :<p>Cargando</p>}
                        </CardFooter>  
                    </Card>
                </form>
            </Form>
        </TabsContent>
    )
}
export default RegisterForm;