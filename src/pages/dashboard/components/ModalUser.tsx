import { DialogClose } from "@radix-ui/react-dialog"
import Modal from "../../../components/Modal"
import FormFields from "../../../components/form/FormFields"
import { DialogFooter } from "../../../components/ui/dialog"
import { Form } from "../../../components/ui/form"
import useFormUser from "../hooks/useFormUser"
import { formSchemaUserType } from "../utils/validations"
import { UseFormReturn } from "react-hook-form"
import { Button } from "../../../components/ui/button"
import FormSelect from "../../../components/form/FormSelect"
import { useTranslation } from "react-i18next"

interface PropsModalUsuario
{
    buttonTitle: string,
    title:string,
    onSubmit:(dataUser:formSchemaUserType,id:string|undefined) => void,
    form: UseFormReturn<formSchemaUserType>,
    id?: string
}


const ModalUsuario = ({onSubmit,buttonTitle,title,form,id}:PropsModalUsuario) => {

    const {formUser,selectRole} = useFormUser()
    const { t } = useTranslation();

   

    return (
       
            <Modal buttonTitle={t(buttonTitle)} title={title}>
                <Form {...form} >
                <form onSubmit={form.handleSubmit((dataUser)=>onSubmit(dataUser,id))} className="space-y-8">
                    <FormFields inputForms={formUser} control={form.control} />
                    <FormSelect name="role" control={form.control} selectItems={selectRole} label={t('role')} placeholder={t('select_role')}/>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">{t(buttonTitle)}</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </Form>
        </Modal>
    )
}
export default ModalUsuario