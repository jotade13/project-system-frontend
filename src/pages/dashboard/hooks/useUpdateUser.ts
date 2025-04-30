import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaUser, formSchemaUserType } from "../utils/validations";
import { updateUser } from "../utils/http";
import { User } from "../utils/interfaces";



const useUpdateUser = (user:User) => {
    
    const form = useForm({
            resolver: zodResolver(formSchemaUser),
            defaultValues: user
    })
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['User']})
        }
    })
    const onSubmit = (dataUser:formSchemaUserType,id:string) => {
        mutate({dataUser,id})
    }

    return {onSubmitUpdate:onSubmit,form}
}
export default useUpdateUser;