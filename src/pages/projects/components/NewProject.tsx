import useNewProject from "../hooks/useNewProject"
import ModalProject from "./ModalProjects"

const NewProject = () => {
    const {form,onSubmit} = useNewProject()
    
    return (
        <ModalProject  onSubmit={onSubmit} buttonTitle="Crear Proyecto" title="Nuevo proyecto" form={form}/>
    )
}
export default NewProject