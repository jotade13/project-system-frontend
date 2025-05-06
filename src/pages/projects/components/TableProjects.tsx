import { useTranslation } from "react-i18next"
import Table  from "../../../components/Table"
import useDeleteProject from "../hooks/useDeleteProject"
import useFetchProjects from "../hooks/useFetchProjects"
import useTable from "../hooks/useTable"

const TableProjects = () => {
    const {tableHeads} = useTable()
    const {projects,isLoading} = useFetchProjects()
    const {deleteProjectId} = useDeleteProject()
    const {t} = useTranslation()

    return (
        <>
            {!isLoading ? <Table caption={t('projects')} head={tableHeads} data={projects} deleteItem={deleteProjectId.mutate} edit /> : <p>Cargando</p>}
        </>
    )

}
export default TableProjects