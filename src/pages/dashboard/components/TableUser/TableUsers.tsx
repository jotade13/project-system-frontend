import useFetchUsers from "../../hooks/useFetchUsers"
import { Table, TableBody, TableCaption, TableHeader, TableRow } from "../../../../components/ui/table"
import TableHeads from "../../../../components/TableHeads"
import TableRowsUsers from "./TableRowsUsers"
import useDeleteUser from "../../hooks/useDeleteUser"

const TableUsers = () => {
    const HeadUsers = ['Nombre','Apellido','Correo','Role']
    const {data,isLoading,isError} = useFetchUsers()
    const {deleteUserId}  = useDeleteUser()

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
                {!isLoading ? <TableRowsUsers  users={data.data}  edit deleteItem={deleteUserId.mutate} deleteUser/> : <p>Cargando</p>}
            </TableBody>
        </Table>
    )

}
export default TableUsers