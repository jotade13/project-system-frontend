import { DialogClose } from "@radix-ui/react-dialog"
import Modal from "../../../components/Modal"
import FormFields from "../../../components/form/FormFields"
import { DialogFooter } from "../../../components/ui/dialog"
import { Form } from "../../../components/ui/form"
import useFormUser from "../hooks/useFormUser"
import { formSchemaCreateUserType } from "../utils/validations"
import { UseFormReturn } from "react-hook-form"
import { Button } from "../../../components/ui/button"
import FormSelect from "../../../components/form/FormSelect"

interface PropsModalUsuario
{
    project?:formSchemaCreateUserType,
    buttonTitle: string,
    title:string,
    onSubmit:(dataUser:formSchemaCreateUserType,id:string) => void,
    form: UseFormReturn<formSchemaCreateUserType>,
    id?: string
}


const ModalUsuario = ({onSubmit,buttonTitle,title,form,id}:PropsModalUsuario) => {

    const {formUser,selectRole} = useFormUser()
    
   

    return (
       
            <Modal buttonTitle={buttonTitle} title={title}>
                <Form {...form} >
                <form onSubmit={form.handleSubmit((dataUser)=>onSubmit(dataUser,id))} className="space-y-8">
                    <FormFields inputForms={formUser} control={form.control} />
                    <FormSelect name="role" control={form.control} selectItems={selectRole} label="Rol" placeholder="Selecciona un rol"/>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">{buttonTitle}</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </Form>
        </Modal>
    )
}
export default ModalUsuario