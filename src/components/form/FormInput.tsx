import {Control, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';


interface inputProps <T extends FieldValues> {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    control: Control<T>
}


const FormInput = <T extends FieldValues>({name,label,placeholder,type,control}:inputProps<T>) =>{
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} type={type }{...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}/>
    )
}

export default FormInput;