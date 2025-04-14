import { Label } from "./ui/label";
import { Input } from "./ui/input";

type childrens = {
    name:string,
    type:string,
    placeholder:string,
    label:string
}

const InputLabel = ({name,type,placeholder,label}:childrens) => {
    return (
        <div className="space-y-1">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}
export default InputLabel;