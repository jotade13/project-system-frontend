import { Select, SelectContent, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { SelectItem } from "@radix-ui/react-select"
import useFetchUsers from "../../tasks/hooks/useFetchUsers"
/*
const SelectUserSchema = z.object({
    user: z
      .string({
        required_error: "Please select an email to display.",
      })
      .email(),
  })*/

const SelectUserEdit = () => {
   /* const form = useForm<z.infer<typeof SelectUserSchema>>({
        resolver: zodResolver(SelectUserSchema),
    })
    function onSubmit(){

    }*/
    const {users} = useFetchUsers()
    

    return (
        
    )
}

export default SelectUserEdit