import { useMutation,useQueryClient } from "@tanstack/react-query";
import {deleteUser } from "../utils/http";

const useDeleteUser = () =>  {
    const queryClient = useQueryClient()
    const deleteUserId = useMutation({
        
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users']})
        }
    })

    return {deleteUserId}
}
export default useDeleteUser;