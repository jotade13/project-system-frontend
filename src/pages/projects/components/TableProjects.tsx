import { Table } from "../../../components/ui/table"
import useDeleteProject from "../hooks/useDeleteProject"
import useFetchProjects from "../hooks/useFetchProjects"
import useTable from "../hooks/useTable"

const TableProjects = () => {
    const {tableHeads} = useTable()
    const {projects,isLoading} = useFetchProjects()
    const {deleteProjectId} = useDeleteProject()

    return (
        <>
            {!isLoading ? <Table caption="Projects" head={tableHeads} data={projects} deleteItem={deleteProjectId.mutate} edit /> : <p>Cargando</p>}
        </>
    )

}
export default TableProjects