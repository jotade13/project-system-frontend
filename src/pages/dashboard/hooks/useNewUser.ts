"use client"

import { formSchemaUser } from "../utils/validations.ts"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createUser } from "../utils/http.ts"
import { useNavigate } from "react-router"
import errorAlert from "../../../components/alerts/errorAlert.ts"
import { useTranslation } from "react-i18next"

const UseNewUser = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchemaUser>>({
        resolver: zodResolver(formSchemaUser),
        defaultValues: {
          first_name: "",
          last_name:"",
          email: "",
          password: "",
          password_confirmation: ""
        },})

    const {mutate} = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']})
            form.reset()
            
        },
        onError: () => {
            errorAlert(t('error.create_task'))
        }
    })

    const onSubmit = (data: z.infer<typeof formSchemaUser>) => {
        mutate({data})
    }

    return {onSubmit,form}
}
export default UseNewUser