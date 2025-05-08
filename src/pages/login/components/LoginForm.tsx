"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { login } from "../utils/http"
import { Form} from "../../../components/ui/form"
import { Button } from "../../../components/ui/button"
import { TabsContent } from "../../../components/ui/Tabs"
import { useNavigate } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { formSchemaLogin, formSchemaLoginType } from "../utils/validations"
import errorAlert from "../../../components/alerts/errorAlert"
import { useTranslation } from "react-i18next"
import FormFields from "../../../components/form/FormFields"
import  useFormLogin  from "../Hooks/useFormLogin"

const LoginForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const formLogin = useFormLogin();

    const form = useForm<formSchemaLoginType>({
        resolver: zodResolver(formSchemaLogin),
        defaultValues: {
          email: "",
          password: ""
        },
    })

    const {mutate, isPending} = useMutation({
        mutationFn: login,
        onSuccess: () => {
            navigate('/dashboard');
        },
        onError: () => {
            errorAlert(t('login.error-auth'))
        }
    })

    const onSubmit = (data: formSchemaLoginType) => {
        mutate({data})
    }


    return (
        <TabsContent value="login">
                <Form {...form} >
                    <form id="login" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>{t('login.title')}</CardTitle>
                                <CardDescription>
                                    {t('login.description')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <FormFields inputForms={formLogin} control={form.control}  />
                            </CardContent>
                            <CardFooter>
                                {!isPending ? <Button type="submit">{t("login.title")}</Button> : <p>Cargando</p>}
                            </CardFooter>
                        </Card>
                    </form>
                </Form>
        </TabsContent>
    )
}

export default LoginForm

