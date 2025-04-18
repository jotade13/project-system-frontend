import { Control, FieldValues, FieldPath} from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

interface inputProps <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    name: string,
    label: TName,
    placeholder?: string,
    type?: React.HTMLInputTypeAttribute,
}

interface formProps extends inputProps = { 
    inputForms: inputProps[];
    control?: Control<TFieldValues>
}
const FormFields = ({inputForms, control }:<formProps>) => {
    return (
        <>
            {inputForms.map(item => (<FormField
                                control={control}
                                name={item.name}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{item.label}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={item.placeholder} type={item.type }{...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>))}
        </>
    )
}

export default FormFields