import useFetchUsers from "../../hooks/useFetchUsers"
import { Table, TableBody, TableCaption, TableHeader, TableRow } from "../../../../components/ui/table"
import TableHeads from "../../../../components/TableHeads"
import TableRowsUsers from "./TableRowsUsers"
import useDeleteUser from "../../hooks/useDeleteUser"
import { useTranslation } from "react-i18next"

const TableUsers = () => {
    const {t} = useTranslation()
    const HeadUsers = [t('first_name'),t('last_name'),t('email'),t('role')]
    const {data,isLoading,isError} = useFetchUsers()
    const {deleteUserId}  = useDeleteUser()

    console.log(data)


    return (
        <Table>
            <TableCaption>{t('users')}</TableCaption>
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