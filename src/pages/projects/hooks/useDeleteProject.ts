import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { deleteProject } from "../utils/http";

const useDeleteProject = () : {deleteProjectId:UseMutationResult<void, Error, string, unknown>} =>  {
    const deleteProjectId = useMutation({
        mutationFn: deleteProject,
       /* onSuccess: () => {
            // Actualizar la caché local con invalidateQueries
            queryClient.invalidateQueries({
              queryKey: ['projects']
            })
        }*/
    })

    return {deleteProjectId}
}
export default useDeleteProject;