import { I18nextProvider } from "react-i18next";
import { userRole } from "../../../util/auth";
import useFetchTasks from "../hooks/useFetchTasks";
import CardsTasks from "./CardsTasks";
import FormTask from "./FormTask";
import i18next from "../utils/i18n";

export const i18n = i18next;



const Tasks =  () => {
    const tasks = useFetchTasks();  
    const handleDelete = (id:string) => {
        console.log(id)
    }
     
    return (
        <I18nextProvider i18n={i18n} defaultNS={'translation'} >
            <div className="flex justify-end-safe mr-16 mt-8 mb-2 ">
                { (userRole() === 'ADMIN' || userRole() === 'SUPERVISOR') &&<FormTask />}
            </div>
            <div className="grid px-10 space-x-8 space-y-5 grid-cols-3">
                {tasks.isSuccess ?  <CardsTasks tasks={tasks.data} handleDelete={()=>handleDelete} /> : <p>Cargando</p>}
            </div>
        </I18nextProvider> 
    )
}
export default Tasks;