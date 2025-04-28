import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "../utils/http";
import { formSchemaProject, formSchemaProjectType } from "../utils/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const useUpdateProject = ({project}:formSchemaProjectType) => {

    const form = useForm({
            resolver: zodResolver(formSchemaProject),
            defaultValues: project
    })
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: updateProject,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['projects']})
        }
    })
    const onSubmit = (dataProject:formSchemaProjectType,id:string) => {
        mutate({dataProject,id})
    }

    return {onSubmitUpdate:onSubmit,form}
}
export default useUpdateProject;