import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "../utils/http";
import { formSchemaProject, formSchemaProjectType } from "../utils/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { renameKey } from "../../../util/functions";


const useUpdateProject = ({project}:formSchemaProjectType) => {

    if (project.assigned_users) {
        project.assigned_users = project.assigned_users.map((user:any) => 
            renameKey(
                renameKey(user, 'id', 'value'),
                'first_name', 'label'
            )
        );
    }
    const projectValue = {...project}
    const form = useForm({
            resolver: zodResolver(formSchemaProject),
            defaultValues: projectValue
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