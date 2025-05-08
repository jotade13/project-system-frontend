import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../utils/http";
import errorAlert from "../../../components/alerts/errorAlert";
import { useTranslation } from "react-i18next";

const useFetchDeleteTask = () : {deleteTaskId:UseMutationResult<void, Error, string, unknown>} =>  {
    const queryClient=useQueryClient()
    const {t} = useTranslation()
    const deleteTaskId = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ['tasks']
            })
        },
        onError: () => {
            errorAlert(t('error.delete_task'))
        }
    })

    return {deleteTaskId}
}
export default useFetchDeleteTask;
