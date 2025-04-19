import { useTranslation } from "react-i18next"
import { FormInputProps } from "../../../components/form/FormInput"
import { formSchemaRegisterType } from "../utils/validations"

const useFormRegister = () : FormInputProps<formSchemaRegisterType>[] => {
    const {t} = useTranslation()
    
    const formLogin : FormInputProps<formSchemaRegisterType>[] = [
        {name:"first_name",label:t('register.label.first_name'), placeholder:t('register.placeholder.first_name'),type:"text"},
        {name:"last_name",label:t('register.label.last_name'), placeholder:t('register.placeholder.last_name'),type:"text"},
        {name:"email",label:t('register.label.email'), placeholder:t('register.placeholder.email'),type:"email"},
        {name:"password",label:t('register.label.password'), placeholder:t('register.placeholder.password'),type:"password"},
        {name:"password_confirmation",label:t('register.label.password_confirmation'), placeholder:t('register.placeholder.password_confirmation'),type:"password"}
    ]

    return formLogin
}
export default useFormRegister