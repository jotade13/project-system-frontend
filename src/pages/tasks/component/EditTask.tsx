import Modal from "../../../components/Modal"
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaTask, formSchemaTaskType } from "../utils/validations";
import useFormSelects from "../hooks/useFormSelects";
import useFetchProjects from "../hooks/useFetchProjects";
import useFetchUsers from "../hooks/useFetchUsers";
import FormInput from "../../../components/form/FormInput";
import FormSelect from "../../../components/form/FormSelect";
import { DialogClose, DialogFooter } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import useUpdateTask from "../hooks/useUpdateTask";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EditTask = ({task}:any) => {
    const form = useForm({
        resolver: zodResolver(formSchemaTask),
        defaultValues: {
            title: task.title,
            description: task.description,
            assigned_to_id: task.assigned_to_id.toString(),
            priority: task.priority,
            status: task.status,
            project_id: task.project_id.toString()
        }
    })
        
    const {selectStatus,selectPriority} = useFormSelects();
    const {projects} = useFetchProjects();
    const {users} = useFetchUsers();
    const {UpdateTaskId} = useUpdateTask();
    
   
    const onSubmit = (data:formSchemaTaskType,id:any) => {
        UpdateTaskId.mutate({dataTask: data,id})
    }



    return (
        <FormProvider {...form}>
            <Modal buttonTitle="Editar Tarea" title="Editar Tarea">  
                    <form id="login" onSubmit={form.handleSubmit((dataTask)=>onSubmit(dataTask,task.id))} className="space-y-3">
                        <FormInput name="title" label="Titulo" placeholder="Titulo" type="text" control={form.control} />
                        <FormInput name="description" label="Descripción" placeholder="Descripción" type="text" control={form.control}  />
                        <FormSelect name="project_id" selectItems={projects} placeholder="Selecccione un proyecto" label="Proyecto" control={form.control}  />
                        <FormSelect name="assigned_to_id" selectItems={users} placeholder="Selecccione el Usuario" label="Usuario" control={form.control} />
                        <FormSelect name="status" placeholder="Selecccione un estado" selectItems={selectStatus} label="Estado" control={form.control} />
                        <FormSelect name="priority" placeholder="Selecccione una prioridad" selectItems={selectPriority} label="Prioridad" control={form.control} />
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit">Editar Tarea</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
            </Modal>
        </FormProvider>
        
    )
}
export default EditTask