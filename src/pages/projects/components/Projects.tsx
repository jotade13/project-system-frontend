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
            <div className="flex justify-end-safe mr-48 mt-8 ">
                <NewProject />
            </div>
            <div className= "px-40 bg-white">
                {!isLoading ? <Table caption="Projects" head={tableHeads} data={projects} deleteItem={deleteProjectId.mutate} edit />: <p>Cargando</p>}
            </div>
        </>
    )
}
export default Projects;