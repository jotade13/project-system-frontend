import useFetchDeleteTask from "../hooks/useFetchDeleteTask";
import useFetchTasks from "../hooks/useFetchTasks";
import CardsTasks from "./CardsTasks";
import FormTask from "./FormTask";



const Tasks =  () => {
    const tasks = useFetchTasks();  
    const {deleteTaskId} = useFetchDeleteTask();
    const handleDelete = (id:string) => {
        console.log(id)
    }
     
    return (
    <div className="flex mt-8">
        <FormTask />
        {tasks.isSuccess ?  <CardsTasks tasks={tasks.data} handleDelete={()=>handleDelete} /> : <p>Cargando</p>}
        
    </div>
    )
}
export default Tasks;