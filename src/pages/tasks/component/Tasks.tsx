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
        <>
            <div className="flex justify-end-safe mr-16 mt-8 mb-2 ">
                <FormTask />
            </div>
            <div className="grid px-10 space-x-8 space-y-5 grid-cols-3 bg-white">
                {tasks.isSuccess ?  <CardsTasks tasks={tasks.data} handleDelete={()=>handleDelete} /> : <p>Cargando</p>}
            </div>
        </> 
    )
}
export default Tasks;