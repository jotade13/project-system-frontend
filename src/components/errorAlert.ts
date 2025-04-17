import { toast } from "sonner"

const errorAlert = (descriptionError:string) => {
    return toast("Error", {
        description: descriptionError
    })
}

export default errorAlert;
