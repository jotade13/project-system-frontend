import { useTranslation } from "react-i18next"
import { Button } from "../../../../components/ui/button"
import {TableCell, TableRow} from "../../../../components/ui/table"
import { userRole } from "../../../../util/auth"
import { User } from "../../utils/interfaces"
import EditUser from "../EditUser"


export interface Rows {
    users: User[]
    deleteItem: (id:string) => void,
}

const TableRowsUsers = ({users,deleteItem}:Rows) => {
    console.log(users)
    const {t} = useTranslation()
    return (
        <>
            {users.map((user) => 
            <TableRow key={user.id}>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                { (userRole() === 'ADMIN') && 
                    <TableCell className="flex space-x-4 justify-center-safe">
                    <Button variant="destructive" onClick={()=>deleteItem(user.id)}>{t('delete')}</Button> 
                    <EditUser user={user} />
                    </TableCell>
                }
            </TableRow>)}
        </>
    )

}
export default TableRowsUsers