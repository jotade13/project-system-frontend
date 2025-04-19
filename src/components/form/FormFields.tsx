import {Control, FieldValues} from 'react-hook-form';
import FormInput, { FormInputProps } from './FormInput';

export interface FormFieldProps <T extends FieldValues>{ 
    inputForms: FormInputProps<T>[];
    control: Control<T>;
}
const FormFields = <T extends FieldValues>({inputForms,control}:FormFieldProps<T>) => {
    return (
        <>
            {inputForms.map(item => (<FormInput key={item.name} name={item.name} label={item.label} placeholder={item.placeholder} type={item.type} control={control} />))}
        </>
    )
}

export default FormFields