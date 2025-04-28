"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TabsContent } from "../../components/ui/Tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useMutation } from "@tanstack/react-query"
import { register } from "./utils/http";
import { useNavigate } from "react-router";
import { formSchemaRegister } from "./utils/validations";
import { Form} from "../../components/ui/form";
import errorAlert from "../../components/alerts/errorAlert";
import { useTranslation } from "react-i18next";
import FormFields from "../../components/form/FormFields";
import useFormRegister from "./Hooks/useFormRegister";


const RegisterForm = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const formRegister = useFormRegister();
    
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
                           <FormFields inputForms={formRegister} control={form.control} />
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