import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { deleteTask, queryClient } from "../utils/http";

const useFetchDeleteTask = () : {deleteTaskId:UseMutationResult<void, Error, string, unknown>} =>  {
    const deleteTaskId = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            // Actualizar la caché local con invalidateQueries
            queryClient.invalidateQueries({
              queryKey: ['tasks']
            })
        }
    })

    return {deleteTaskId}
}
export default useFetchDeleteTask;
