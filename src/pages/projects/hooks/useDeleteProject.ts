import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { deleteProject } from "../utils/http";

const useDeleteProject = () : {deleteProjectId:UseMutationResult<void, Error, string, unknown>} =>  {
    const queryClient = useQueryClient()
    const deleteProjectId = useMutation({
        
        mutationFn: deleteProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects']})
        }
    })

    return {deleteProjectId}
}
export default useDeleteProject;