import {Control, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';


export interface FormSelectProps <T extends FieldValues> {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    control?: Control<T>
    selectItems: SelectItemProps[]
    disabled?: boolean
}

export interface SelectItemProps{
    value: string,
    valueTitle: string
}

const FormSelect = <T extends FieldValues>({name,label,placeholder,control,selectItems,disabled}:FormSelectProps<T>) =>{
    return (
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectItems.map(item => <SelectItem key={item.value} value={item.value}>{item.valueTitle}</SelectItem>)}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}

export default FormSelect;