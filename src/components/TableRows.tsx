import { project } from "../pages/dashboard/utils/interfaces"
import EditProject from "../pages/projects/components/EditProject"
import { getId, userRole } from "../util/auth"
import TableCells, { PropCells } from "./TableCells"
import { Button } from "./ui/button"
import { TableCell, TableRow } from "./ui/table"



export interface Rows {
    rows:[{
        cells:PropCells[],
        project: project,
    }]
    deleteItem: (id:string) => void,
    edit: boolean
}

const TableRows = ({rows,deleteItem,edit}:Rows) =>{
    console.log(rows)
    console.log(getId())

    return (
        <>
            {rows.map((row) => 
            <TableRow key={row.project.id}>
                <TableCells data={row.cells}/>
                <TableCell className="flex space-x-4 justify-center-safe">
                    {(deleteItem && (userRole() === 'ADMIN' || ((userRole() === 'SUPERVISOR')&& getId() == row.project.owner_id))) && <Button variant="destructive" onClick={()=>deleteItem(row.project.id)}>Delete</Button>}
                    {(edit && (userRole() === 'ADMIN' || ((userRole() === 'SUPERVISOR')&& getId() == row.project.owner_id))) && <EditProject project={row.project} /> }
                </TableCell>
            </TableRow>)}
        </>
    )
}
export default TableRows