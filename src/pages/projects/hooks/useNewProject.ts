import { useForm, UseFormReturn } from "react-hook-form"
import { formSchemaProject, formSchemaProjectType } from "../utils/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import errorAlert from "../../../components/alerts/errorAlert";
import { newProject } from "../utils/http";

const useNewProject = ():{form:UseFormReturn<formSchemaProjectType>,onSubmit:(data:formSchemaProjectType)=> void} => {
    const Navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchemaProject),
        defaultValues:{
            name: "",
            description: "",
        }
    })
    const {mutate} =  useMutation({
        mutationFn: newProject,
        onSuccess: () => {
            Navigate('/projects');
        },
        onError: () => {
            errorAlert("Error al Subir El Proyecto")
        }
    })

    const onSubmit = (data:formSchemaProjectType) => {
        mutate({data})
        console.log("hola")
    }

    return {form,onSubmit}
}
export default useNewProject