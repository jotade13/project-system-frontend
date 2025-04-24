import CardTask from "./CardTask"

interface CardsTasksProps {
    tasks:any,
    handleDelete:(id:string) => void
}

const CardsTasks = ({tasks,handleDelete}:CardsTasksProps) => {
    handleDelete("1");
    console.log(tasks);

    return  (
        <>
            {tasks.data.map((task) => <CardTask key={task.id} task={task} handleDelete={handleDelete}/>)}
        </>
    )

}
export default CardsTasks