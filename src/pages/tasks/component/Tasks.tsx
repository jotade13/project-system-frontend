import useFetchTasks from "../hooks/useFetchTasks";
import CardsTasks from "./CardsTasks";
import FormTask from "./FormTask";


const Tasks =  () => {
    const {data,isLoading} = useFetchTasks();
     
    return (
    <div className="flex mt-8">
        <FormTask />
        {!isLoading ?  <CardsTasks tasks={data} />:     <p>Cargando</p>}
        
    </div>
    )
}
export default Tasks;