import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import useFetchDeleteTask from "../hooks/useFetchDeleteTask"
import EditTask from "./EditTask"

export interface CardTaskProps  {
    task: any,
    handleDelete: (id:string) => void
}



const CardTask = ({task}:CardTaskProps) => {
    const {deleteTaskId} = useFetchDeleteTask()
    const handleDelete = (id:string) => {
        deleteTaskId.mutate(id)

    }

    return  (
        <Card className="w-[350px]">
            <CardHeader>    
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <CardTitle>Estado</CardTitle>
                <CardDescription>{task.status}</CardDescription>
                <CardTitle>Prioridad</CardTitle>
                <CardDescription>{task.priority}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <EditTask task={task} />
                <Button onClick={()=>handleDelete(task.id)} variant="destructive">Eliminar</Button>
            </CardFooter>
        </Card>
    )
}
export default CardTask