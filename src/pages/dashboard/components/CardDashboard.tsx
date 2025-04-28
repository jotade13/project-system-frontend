import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"

export interface PropsCardDashboard{ 
    title?: string
    content?:string
}



const CardDashboard = ({title,content}:PropsCardDashboard) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{content}</CardContent>
        </Card>
    )
}

export default CardDashboard