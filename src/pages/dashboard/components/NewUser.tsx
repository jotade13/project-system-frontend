import { useTranslation } from "react-i18next";
import UseNewUser from "../hooks/useNewUser"
import ModalUsuario from "./ModalUser"

const NewUser = () => {
    const {form,onSubmit} = UseNewUser()
    

    return (
        <ModalUsuario onSubmit={onSubmit} buttonTitle="create_user" form={form} title="new_user"  />
    )
}

export default NewUser