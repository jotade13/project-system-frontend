import CardTask from "./CardTask"

interface CardsTasksProps {
    tasks:any,
    handleDelete:(id:string) => void
}

const CardsTasks = ({tasks,handleDelete}:CardsTasksProps) => {
    return  (
        <>
            {tasks.data.map((task) => <CardTask key={task.id} task={task} handleDelete={handleDelete}/>)}
        </>
    )

}
export default CardsTasks