import { useTranslation } from "react-i18next"
import { FormInputProps } from "../../../components/form/FormInput"
import { formSchemaUserType } from "../utils/validations"
import { SelectItemProps } from "../../../components/form/FormSelect"

const useFormUser = () => {
    const {t} = useTranslation()
    
    const formUser : FormInputProps<formSchemaUserType>[] = [
        {name:"first_name",label:t('register.label.first_name'), placeholder:t('register.placeholder.first_name'),type:"text"},
        {name:"last_name",label:t('register.label.last_name'), placeholder:t('register.placeholder.last_name'),type:"text"},
        {name:"email",label:t('register.label.email'), placeholder:t('register.placeholder.email'),type:"email"},
        {name:"password",label:t('register.label.password'), placeholder:t('register.placeholder.password'),type:"password"},
        {name:"password_confirmation",label:t('register.label.password_confirmation'), placeholder:t('register.placeholder.password_confirmation'),type:"password"}
    ]
    const selectRole : SelectItemProps[] = [
            {value: "ADMIN", valueTitle: "Administrador"},
            {value: "USER", valueTitle: "Usuario"},
            {value: "SUPERVISOR", valueTitle: "Supervisor"},
        ]

    return {formUser,selectRole}
}
export default useFormUser