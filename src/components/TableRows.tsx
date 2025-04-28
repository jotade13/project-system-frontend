import EditProject from "../pages/projects/components/EditProject"
import ModalProject from "../pages/projects/components/ModalProjects"
import { formSchemaProjectType } from "../pages/projects/utils/validations"
import { EditItemProps } from "./Table"
import TableCells, { PropCells } from "./TableCells"
import { Button } from "./ui/button"
import { TableCell, TableRow } from "./ui/table"

export interface Rows {
    rows:[{
        cells:PropCells[],
        project: formSchemaProjectType 
    }]
    deleteItem: () => void,
    edit: boolean
}

const TableRows = ({rows,deleteItem,onSubmitUpdate,edit}:Rows) =>{

    return (
        <>
            {rows.map((row) => <TableRow key={row.project.id}><TableCells data={row.cells}/>{deleteItem && <TableCell><Button variant="destructive" onClick={()=>deleteItem(row.project.id)}>Delete</Button></TableCell>}
            {edit && <TableCell><EditProject project={row.project} /></TableCell>}</TableRow>)}
        </>
    )
}
export default TableRows