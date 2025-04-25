import Table from "../../../components/Table";
import useDeleteProject from "../hooks/useDeleteProject";
import useFetchProjects from "../hooks/useFetchProjects";
import useFormSelects from "../hooks/useFormSelect";
import useNewProject from "../hooks/useNewProject";
import useTable from "../hooks/useTable";
import ModalProject from "./ModalProjects";

const Projects =  () => {
    const {tableHeads} = useTable()
    const {projects,isLoading} = useFetchProjects()
    const {form,onSubmit} = useNewProject()
    const {deleteProjectId} = useDeleteProject()
    console.log(projects)
    
    return (
        <>
            <ModalProject form={form} onSubmit={onSubmit} buttonTitle="Crear Proyecto" title="Nuevo proyecto"  />
            {!isLoading ? <Table caption="Projects" head={tableHeads} data={projects} deleteItem={deleteProjectId.mutate} /> : <p>Cargando</p>}
        </>
    )
}
export default Projects;