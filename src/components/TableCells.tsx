import { TableCell } from "./ui/table"

export interface cells {
    data: string[]
}


const TableCells = ({data}:cells) =>{
    return (
        <>
            {data.map((item) => <TableCell>{item}</TableCell>)}
        </>
    )
}
export default TableCells