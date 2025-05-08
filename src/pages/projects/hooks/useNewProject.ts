import {formSchemaProject, formSchemaProjectType } from "../utils/validations"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import errorAlert from "../../../components/alerts/errorAlert";
import { newProject } from "../utils/http";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const useNewProject = () => {
    const queryClient = useQueryClient()
    const {t} = useTranslation()

    const form = useForm({
        resolver: zodResolver(formSchemaProject),
        defaultValues: {
            name: "",
            description: ""
        }
    })
    
    const {mutate} =  useMutation({
        mutationFn: newProject,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['projects']})
            form.reset()
        },
        onError: () => {
            errorAlert(t('error.create_project'))
        }
    })

    const onSubmit = (data:formSchemaProjectType) => {
        mutate({data})
    }

    return {form,onSubmit}
}
export default useNewProject