import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { updateTask, UpdateTask } from "../utils/http";


const useUpdateTask = () : {UpdateTaskId:UseMutationResult<any, Error, UpdateTask, unknown>} =>  {
    const queryClient = useQueryClient();
    const UpdateTaskId = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['tasks']})
            
        }
    })

    return {UpdateTaskId}
}
export default useUpdateTask;