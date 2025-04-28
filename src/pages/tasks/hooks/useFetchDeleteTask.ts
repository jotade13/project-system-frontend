import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../utils/http";

const useFetchDeleteTask = () : {deleteTaskId:UseMutationResult<void, Error, string, unknown>} =>  {
    const queryClient=useQueryClient()
    const deleteTaskId = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ['tasks']
            })
        }
    })

    return {deleteTaskId}
}
export default useFetchDeleteTask;
