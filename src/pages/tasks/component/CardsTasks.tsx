import CardTask from "./CardTask"

    
const CardsTasks = (tasks:any) => {

    return  (
        <>
            {tasks.tasks.data.map((task) => <CardTask key={task.id} task={task}/>)}
        </>
    )

}
export default CardsTasks