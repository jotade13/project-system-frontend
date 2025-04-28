import Table from "../../../components/Table";
import useDeleteProject from "../hooks/useDeleteProject";
import useFetchProjects from "../hooks/useFetchProjects";
import useTable from "../hooks/useTable";
import NewProject from "./NewProject";

const Projects =  () => {
    const {tableHeads} = useTable()
    const {projects,isLoading} = useFetchProjects()
    const {deleteProjectId} = useDeleteProject()
    
    return (
        <>
            <NewProject />
            {!isLoading ? <Table caption="Projects" head={tableHeads} data={projects} deleteItem={deleteProjectId.mutate} edit />: <p>Cargando</p>}
        </>
    )
}
export default Projects;