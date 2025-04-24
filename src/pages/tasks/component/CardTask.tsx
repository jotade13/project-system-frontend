import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"


const CardTask = (task) => {
    return  <Card className="w-[350px]">
                <CardHeader>    
                    <CardTitle>{task.task.title}</CardTitle>
                    <CardDescription>{task.task.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardTitle>Estado</CardTitle>
                    <CardDescription>{task.task.status}</CardDescription>
                    <CardTitle>Prioridad</CardTitle>
                    <CardDescription>{task.task.priority}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button>Editar</Button>
                </CardFooter>
            </Card>

}
export default CardTask