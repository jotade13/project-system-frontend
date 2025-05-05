import Modal from "../../../components/Modal"
import { Form } from "../../../components/ui/form"
import { DialogClose, DialogFooter } from "../../../components/ui/dialog"
import { Button } from "../../../components/ui/button"
import { UseFormReturn } from "react-hook-form"
import FormInput from "../../../components/form/FormInput"
import useFormSelects from "../hooks/useFormSelect"
import FormSelect from "../../../components/form/FormSelect"
import {  formSchemaProjectType } from "../utils/validations"
import SelectUser from "./selectUser"
import FormMultSelect from "../../../components/form/FormMultSelect"
import useUsersSelect from "../hooks/useUsersSelect"
import { useTranslation } from "react-i18next"


interface PropsModalProject
{
    project?:formSchemaProjectType,
    buttonTitle: string,
    title:string,
    onSubmit:(dataProject:formSchemaProjectType,id:string) => void,
    form: UseFormReturn<formSchemaProjectType>,
    id?: string|undefined
}

const ModalProject = ({onSubmit,buttonTitle,title,id,form}:PropsModalProject) => {
    const {t} = useTranslation()
    const {selectStatus} = useFormSelects()
    const {users} = useUsersSelect()

    return (
        <Modal buttonTitle={buttonTitle} title={title}>
            <Form {...form} >
                <form id="projects" onSubmit={form.handleSubmit((dataProject)=>onSubmit(dataProject,id))} className="space-y-3">
                    <FormInput name="name" label={t('label.name')} placeholder={t('placeholder.name')} type="text" control={form.control} />
                    <FormInput name="description" label={t('label.description')} placeholder={t('placeholder.description')} type="text" control={form.control} />
                    <FormSelect name="status" label={t('label.status')} placeholder={t('placeholder.status')} selectItems={selectStatus} control={form.control} />
                    <FormMultSelect name="assigned_users" label={t('label.add_users')} placeholder={t('placeholder.add_users')} control={form.control} selectItems={users} />
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
export default ModalProject