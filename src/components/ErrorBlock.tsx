import { Card, CardDescription, CardTitle } from "./ui/card"

type errorProps = {
    errorText:string
}
const ErrorBlock = ({errorText}:errorProps) => {
    return (
        <Card className="flex w-[400px] mt-8">
            <CardTitle className="self-start ml-6">Error</CardTitle>
            <CardDescription className="self-start ml-6">{errorText}</CardDescription>
        </Card>
    )
}
export default ErrorBlock