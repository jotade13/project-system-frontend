import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { deleteProject } from "../utils/http";
import errorAlert from "../../../components/alerts/errorAlert";
import { useTranslation } from "react-i18next";

const useDeleteProject = () : {deleteProjectId:UseMutationResult<void, Error, string, unknown>} =>  {
    const queryClient = useQueryClient()
    const {t} = useTranslation()
    const deleteProjectId = useMutation({
        
        mutationFn: deleteProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects']})
        },
        onError: () => {
            errorAlert(t('error.delete_project'))
        }
    })

    return {deleteProjectId}
}
export default useDeleteProject;