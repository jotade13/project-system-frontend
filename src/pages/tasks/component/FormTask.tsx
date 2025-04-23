import { useForm } from "react-hook-form"
import { Form } from "../../../components/ui/form"
import { formSchemaTask, formSchemaTaskType } from "../utils/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getTasks, newTask } from "../utils/http"
import errorAlert from "../../../components/alerts/errorAlert"
import Modal from "../../../components/Modal"
import FormInput from "../../../components/form/FormInput"
import FormSelect from "../../../components/form/FormSelect"
import useFormTask from "../hooks/useFormNewTask"
import { getAuthToken } from "../../../util/auth"
import { getProjects } from "../../projects/utils/http"
import useFetchProjects from "../hooks/useFetchProjects"

const FormTask = () => {
    
    const form = useForm({
        resolver: zodResolver(formSchemaTask)
    })

    const {selectStatus,selectPriority} = useFormTask();
    const {projects} = useFetchProjects();

    const {mutate} = useMutation({
        mutationFn: newTask,
        /*onSuccess: () => {
            navigate('/dashboard');
        }*/
        onError: () => {
            errorAlert("Error al registrar el usuario")
        }
    })
    const onSubmit = (/*data: formSchemaTaskType*/) => {
     //   mutate(data)
    }

   /* const {data} = useQuery({
        queryKey:['tasks'],
        queryFn: ()=> getTasks(getAuthToken())
    }) */
    
    const openModal = () => {
        
    }
    


    return (
        <Form {...form} >
            <form id="login" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Modal buttonTitle="Crear Tarea" title="Nueva Tarea" buttonInModal="Crear Tarea" openModal={openModal}>
                    <FormInput name="title" label="Titulo" placeholder="Titulo" type="text" control={form.control} />
                    <FormInput name="description" label="Descripción" placeholder="Descripción" type="text" control={form.control} />
                    <FormSelect name="project" selectItems={projects} />
                   {/*<FormSelect name="assigned_to_id" selectItems={} />*/} 
                    <FormSelect name="status" placeholder="selecccione un estado" selectItems={selectStatus} label="Estado" />
                    <FormSelect name="priority" placeholder="selecccione una prioridad" selectItems={selectPriority} label="Prioridad" />
                </Modal>
            </form>
        </Form>
    )

}

export default FormTask