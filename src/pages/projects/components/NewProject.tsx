import { useTranslation } from "react-i18next"
import useNewProject from "../hooks/useNewProject"
import ModalProject from "./ModalProjects"

const NewProject = () => {
    const {form,onSubmit} = useNewProject()
    const {t} = useTranslation()
    
    return (
        <ModalProject onSubmit={onSubmit} buttonTitle={t('create_project')} title={t('new_project')} form={form}/>
    )
}
export default NewProject