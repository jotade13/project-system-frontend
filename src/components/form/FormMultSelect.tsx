import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import MultipleSelector, { Option } from '../ui/MultipleSelector';
import { Control, FieldValues, Path } from 'react-hook-form';


export interface FormMultSelectProps <T extends FieldValues> {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    control?: Control<T>
    selectItems: Option[]
    disabled?: boolean
    id?: string
}

const FormMultSelect = <T extends FieldValues>({name,label,placeholder,control,selectItems,disabled}:FormMultSelectProps<T>) =>{
    return (
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
                <FormControl>
                <MultipleSelector
                    onChange={field.onChange}
                    value={field.value}
                    defaultOptions={selectItems}
                    placeholder={placeholder}
                    emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                    </p>
                    }
                    disabled={disabled}
                    
                />
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}

export default FormMultSelect;