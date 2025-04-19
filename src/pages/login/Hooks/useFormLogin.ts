import { useTranslation } from "react-i18next"
import { FormInputProps } from "../../../components/form/FormInput"
import { formSchemaLoginType } from "../utils/validations"

const useFormLogin = () : FormInputProps<formSchemaLoginType>[] => {
    const {t} = useTranslation()
    
    const formLogin : FormInputProps<formSchemaLoginType>[] = [
        {name:"email",label:t('login.label.email'), placeholder:t('login.placeholder.email'),type:"email"},
        {name:"password",label:t('login.label.password'), placeholder:t('login.placeholder.password'),type:"password"}
    ]

    return formLogin
}
export default useFormLogin