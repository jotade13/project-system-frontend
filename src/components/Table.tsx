import { UseFormReturn } from "react-hook-form"
import { cells } from "./TableCells"
import TableHeads from "./TableHeads"
import TableRows from "./TableRows"
import { Table, TableBody, TableCaption,  TableHeader, TableRow, } from "./ui/table"
import { formSchemaProjectType } from "../pages/projects/utils/validations"

export interface EditItemProps {
    formEdit: UseFormReturn<formSchemaProjectType>,
    onSubmitUpdate:() => void
}

interface TableProps {
    caption: string,
    head:string[],
    data: {
        data :cells[],
        proyect: formSchemaProjectType
    },
    deleteItem: () => void,
    edit:boolean
}


const TableComp = ({caption,head,data,deleteItem,edit}:TableProps) => {
    return (
        <Table>
            <TableCaption>{caption}</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHeads head={head}/>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRows rows={data} deleteItem={deleteItem} edit/>
            </TableBody>
        </Table>
    )
}
export default TableComp