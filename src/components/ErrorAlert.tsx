import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/ui/alert"

type errorProps = {
    errorText:string
}
const ErrorAlert = ({errorText}:errorProps) => {
    return (
        <Alert variant="destructive" className="mt-2">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorText}</AlertDescription>
        </Alert>
    )
}
export default ErrorAlert