import { useForm } from "react-hook-form"
import { Form } from "../../../components/ui/form"
import { formSchemaTask, formSchemaTaskType } from "../utils/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import Modal from "../../../components/Modal"
import FormInput from "../../../components/form/FormInput"
import FormSelect from "../../../components/form/FormSelect"
import useFetchProjects from "../hooks/useFetchProjects"
import useFetchUsers from "../hooks/useFetchUsers"
import useFetchNewTask from "../hooks/useFetchNewTask"
import { Button } from "../../../components/ui/button"
import { DialogClose, DialogFooter } from "../../../components/ui/dialog"
import useFormSelects from "../hooks/useFormSelects"
import { useTranslation } from "react-i18next"

const FormTask = () => {
    const {t} = useTranslation();
    
    const form = useForm({
        resolver: zodResolver(formSchemaTask),
        defaultValues:{
            title: "",
            description: "",
        }
    })

    const {selectStatus,selectPriority} = useFormSelects();
    const {projects} = useFetchProjects();
    const {users} = useFetchUsers();
    const {mutate} = useFetchNewTask(form);
   
    const onSubmit = (data:formSchemaTaskType) => {
        mutate({data})
    }
    
    return (
        
        <Modal buttonTitle={t('create_task')} title={t('new_task')}>
            <Form {...form} >
                <form id="login" onSubmit={form.handleSubmit(onSubmit)} className="space-y-3    ">
                    <FormInput name="title" label={t('label.title')} placeholder={t('placeholder.title')} type="text" control={form.control} />
                    <FormInput name="description" label={t('label.description')} placeholder={t('placeholder.description')} type="text" control={form.control} />
                    <FormSelect name="project_id" label={t('label.project')} placeholder={t('placeholder.project')}  selectItems={projects} control={form.control} />
                    <FormSelect name="assigned_to_id" label={t('label.user')} placeholder={t('placeholder.user')} selectItems={users} control={form.control} />
                    <FormSelect name="status" label={t('label.status')} placeholder={t('placeholder.status')} selectItems={selectStatus}  control={form.control} />
                    <FormSelect name="priority" label={t('label.priority')} placeholder={t('placeholder.priority')} selectItems={selectPriority}  control={form.control} />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">Crear Tarea</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </Form>
        </Modal>
    )

}

export default FormTask