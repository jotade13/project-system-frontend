import { useForm } from "react-hook-form"
import { Form } from "../../../components/ui/form"
import { formSchemaTask, formSchemaTaskType } from "../utils/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import Modal from "../../../components/Modal"
import FormInput from "../../../components/form/FormInput"
import FormSelect from "../../../components/form/FormSelect"
import useFormTask from "../hooks/useFormNewTask"
import useFetchProjects from "../hooks/useFetchProjects"
import useFetchUsers from "../hooks/useFetchUsers"
import useFetchNewTask from "../hooks/useFetchNewTask"
import { Button } from "../../../components/ui/button"
import { DialogFooter } from "../../../components/ui/dialog"

const FormTask = () => {
    
    const form = useForm({
        resolver: zodResolver(formSchemaTask),
        defaultValues:{
            title: "",
            description: "",
        }
    })

    const {selectStatus,selectPriority} = useFormTask();
    const {projects} = useFetchProjects();
    const {users} = useFetchUsers();
    const {mutate} = useFetchNewTask();
   
    const onSubmit = (data:formSchemaTaskType) => {
        mutate({data})
    }
    
    const openModal = () => {
        
    }
    
    return (
        
        <Modal buttonTitle="Crear Tarea" title="Nueva Tarea" openModal={openModal}>
            <Form {...form} >
                <form id="login" onSubmit={form.handleSubmit(onSubmit)} className="space-y-3    ">
                    <FormInput name="title" label="Titulo" placeholder="Titulo" type="text" control={form.control} />
                    <FormInput name="description" label="Descripción" placeholder="Descripción" type="text" control={form.control} />
                    <FormSelect name="project_id" selectItems={projects} placeholder="Selecccione un proyecto" label="Proyecto" control={form.control} />
                    <FormSelect name="assigned_to_id" selectItems={users} placeholder="Selecccione el Usuario" label="Usuario" control={form.control} />
                    <FormSelect name="status" placeholder="Selecccione un estado" selectItems={selectStatus} label="Estado" control={form.control} />
                    <FormSelect name="priority" placeholder="Selecccione una prioridad" selectItems={selectPriority} label="Prioridad" control={form.control} />
                    <DialogFooter>
                        <Button type="submit">Crear Tarea</Button>
                    </DialogFooter>
                </form>
            </Form>
        </Modal>
    )

}

export default FormTask