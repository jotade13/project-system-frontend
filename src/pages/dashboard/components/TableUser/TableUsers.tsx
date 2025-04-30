import { Table } from "lucide-react"
import useFetchUsers from "../../hooks/useFetchUsers"
import { TableBody, TableCaption, TableHeader, TableRow } from "../../../../components/ui/table"
import TableHeads from "../../../../components/TableHeads"
import TableRowsUsers from "./TableRowsUsers"

const TableUsers = () => {
    const HeadUsers = ['Nombre','Apellido','Role']
    const {data,isLoading,isError} = useFetchUsers()

    console.log(data)


    return (
        <Table>
            <TableCaption>{/*caption*/}Hola</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHeads head={HeadUsers} cell/>
                </TableRow>
            </TableHeader>
            <TableBody>
                {!isLoading ? <TableRowsUsers  users={data.data}  edit/> : <p>Cargando</p>}
            </TableBody>
        </Table>
    )

}
export default TableUsers