import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaEditUser, formSchemaEditUserType, formSchemaUserType } from "../utils/validations";
import { updateUser } from "../utils/http";



const useUpdateUser = (user:formSchemaEditUserType) => {
    const queryClient = useQueryClient();

    
    const form = useForm({
            resolver: zodResolver(formSchemaEditUser),
            defaultValues: user
    })
    const {mutate} = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']})
            form.reset()
        }
    })
    const onSubmit = (dataUser:formSchemaUserType,id:string) => {
        mutate({dataUser,id})
    }

    return {onSubmitUpdate:onSubmit,form}
}
export default useUpdateUser;