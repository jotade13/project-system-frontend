import { Button } from "../../../../components/ui/button"
import {TableCell, TableRow} from "../../../../components/ui/table"
import { User } from "../../utils/interfaces"
import EditUser from "../EditUser"


export interface Rows {
    users: User[]
    deleteItem: (id:string) => void,
    edit: boolean
    deleteUser:boolean
}

const TableRowsUsers = ({users,deleteUser,deleteItem,edit}:Rows) => {
    console.log(users)
    return (
        <>
            {users.map((user) => 
            <TableRow key={user.id}>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                { (deleteUser|| edit) &&
                    <TableCell className="flex space-x-4 justify-center-safe">
                    {deleteItem && <Button variant="destructive" onClick={()=>deleteItem(user.id)}>Delete</Button>}
                    {edit &&  <EditUser user={user} />
                    }
                     </TableCell>
                }
            </TableRow>)}
        </>
    )

}
export default TableRowsUsers