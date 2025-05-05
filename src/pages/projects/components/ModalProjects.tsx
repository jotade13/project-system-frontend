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

    const {selectStatus} = useFormSelects()
    const {users} = useUsersSelect()

    return (
        <Modal buttonTitle={buttonTitle} title={title}>
            <Form {...form} >
                <form id="projects" onSubmit={form.handleSubmit((dataProject)=>onSubmit(dataProject,id))} className="space-y-3">
                    <FormInput name="name" label="Titulo" placeholder="Titulo" type="text" control={form.control} />
                    <FormInput name="description" label="Descripción" placeholder="Descripción" type="text" control={form.control} />
                    <FormSelect name="status" selectItems={selectStatus} placeholder="Selecccione un proyecto" label="Proyecto" control={form.control} />
                    <FormMultSelect name="assigned_users" placeholder="Seleccionar Usuarios" label="Agregar Usuarios" control={form.control} selectItems={users} />
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