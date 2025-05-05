import useUpdateProject from "../hooks/useUpdateProject"
import { formSchemaProjectType } from "../utils/validations"
import ModalProject from "./ModalProjects"

const EditProject = (project:formSchemaProjectType) => {
    const {onSubmitUpdate, form} = useUpdateProject(project)
    console.log(project)

    return (
        <ModalProject buttonTitle="Editar" title="Editar Proyecto" onSubmit={onSubmitUpdate} form={form} id={project.project.id} />
    )
}
export default EditProject