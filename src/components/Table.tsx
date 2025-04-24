import { cells } from "./TableCells"
import TableHeads from "./TableHeads"
import TableRows from "./TableRows"
import { Table, TableBody, TableCaption,  TableHeader, TableRow, } from "./ui/table"

interface TableProps {
    caption: string,
    head:string[],
    products: cells[]
}

const table = ({caption,head,products}:TableProps) => {
    return (
    <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHeads head={head}/>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRows rows={products}/>
        </TableBody>
    </Table>
    )
}
export default table