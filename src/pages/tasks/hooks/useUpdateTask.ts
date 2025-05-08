import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { updateTask, UpdateTask } from "../utils/http";
import errorAlert from "../../../components/alerts/errorAlert";
import { useTranslation } from "react-i18next";


const useUpdateTask = () : {UpdateTaskId:UseMutationResult<any, Error, UpdateTask, unknown>} =>  {
    const queryClient = useQueryClient();
    const {t} = useTranslation()
    const UpdateTaskId = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['tasks']})
        },
        onError: () => {
            errorAlert(t('error.update_task'))
        }
    })

    return {UpdateTaskId}
}
export default useUpdateTask;