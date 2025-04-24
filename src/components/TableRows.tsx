import TableCells, { cells } from "./TableCells"
import { TableRow } from "./ui/table"

export interface Rows {
    rows:cells[]
}

const TableRows = ({rows}:Rows) =>{
    return (
        <>
            {rows.map((item) => <TableRow><TableCells data={item.data}/></TableRow>)}
        </>
    )
}
export default TableRows