import { TableCell } from "./ui/table"

export interface PropCells {
    data: string[]
}


const TableCells = ({data}:PropCells) =>{
    return (
        <>
            {data.map((item) => <TableCell>{item}</TableCell>)}
        </>
    )
}
export default TableCells