import { useTranslation } from "react-i18next"
import { FormInputProps } from "../../../components/form/FormInput"
import { formSchemaTaskType } from "../utils/validations"

const useFormLogin = () : FormInputProps<formSchemaTaskType>[] => {
    const {t} = useTranslation()
    
    const formLogin : FormInputProps<formSchemaTaskType>[] = [
        {name:"title",label:t('login.label.email'), placeholder:t('login.placeholder.email'),type:"email"},
        {name:"description",label:t('login.label.password'), placeholder:t('login.placeholder.password'),type:"password"}
    ]

    return formLogin
}
export default useFormLogin