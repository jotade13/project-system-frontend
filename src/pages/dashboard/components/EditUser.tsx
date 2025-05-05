import { useTranslation } from "react-i18next"
import useUpdateUser from "../hooks/useUpdateUser"
import { EditUserProps } from "../utils/interfaces"
import ModalUsuario from "./ModalUser"

const EditUser = ({user}:EditUserProps) => {
    console.log(user)
    const {form,onSubmitUpdate} = useUpdateUser(user)
    const {t} = useTranslation()
     

    return (
        <ModalUsuario form={form} onSubmit={onSubmitUpdate} buttonTitle={t('edit')} title={t('edit_user')} id={user.id} />

    )
}
export default EditUser