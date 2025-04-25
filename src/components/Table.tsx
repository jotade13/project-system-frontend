import { cells } from "./TableCells"
import TableHeads from "./TableHeads"
import TableRows from "./TableRows"
import { Table, TableBody, TableCaption,  TableHeader, TableRow, } from "./ui/table"

interface TableProps {
    caption: string,
    head:string[],
    data: cells[],
    deleteItem: () => void
}

const TableComp = ({caption,head,data,deleteItem}:TableProps) => {
    return (
        <Table>
            <TableCaption>{caption}</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHeads head={head}/>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRows rows={data} deleteItem={deleteItem}/>
            </TableBody>
        </Table>
    )
}
export default TableComp