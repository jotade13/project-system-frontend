import TableCells, { cells } from "./TableCells"
import { Button } from "./ui/button"
import { TableCell, TableRow } from "./ui/table"

export interface Rows {
    rows:cells[]
    deleteItem: () => void
}

const TableRows = ({rows,deleteItem}:Rows[]) =>{
    console.log(rows)
    return (
        <>
            {rows.map((row) => <TableRow key={row}><TableCells data={row}/>{deleteItem && <TableCell><Button variant="destructive" onClick={()=>deleteItem(rows.id)} >Delete</Button></TableCell>}</TableRow>)}
        </>
    )
}
export default TableRows