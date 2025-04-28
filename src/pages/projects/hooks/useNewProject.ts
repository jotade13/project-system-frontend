import {formSchemaProject, formSchemaProjectType } from "../utils/validations"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import errorAlert from "../../../components/alerts/errorAlert";
import { newProject } from "../utils/http";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useNewProject = () => {
    const queryClient = useQueryClient()

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
            errorAlert("Error al Subir El Proyecto")
        }
    })

    const onSubmit = (data:formSchemaProjectType) => {
        mutate({data})
    }

    return {form,onSubmit}
}
export default useNewProject