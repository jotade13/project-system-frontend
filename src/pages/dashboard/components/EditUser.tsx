import useUpdateUser from "../hooks/useUpdateUser"
import { EditUserProps } from "../utils/interfaces"
import ModalUsuario from "./ModalUser"

const EditUser = ({user}:EditUserProps) => {
    console.log(user)
    const {form,onSubmitUpdate} = useUpdateUser(user)
     

    return (
        <ModalUsuario form={form} onSubmit={()=>onSubmitUpdate(user,user.id)} buttonTitle="Editar" title="Editar Usuario" id={user.id} />

    )
}
export default EditUser