import UseNewUser from "../hooks/useNewUser"
import ModalUsuario from "./ModalUser"

const NewUser = () => {
    const {form,onSubmit} = UseNewUser()

    return (
        <ModalUsuario onSubmit={onSubmit} buttonTitle="Crear Usuario" form={form} title="Nuevo Usuario"  />
    )
}

export default NewUser