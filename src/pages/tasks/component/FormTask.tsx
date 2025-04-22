import { useForm } from "react-hook-form"
import { Form } from "../../../components/ui/form"
import { formSchemaTask, formSchemaTaskType } from "../utils/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { newTask } from "../utils/http"
import errorAlert from "../../../components/alerts/errorAlert"
import Modal from "../../../components/Modal"
import FormInput from "../../../components/form/FormInput"
import FormSelect from "../../../components/form/FormSelect"
import useFormTask from "../hooks/useFormNewTask"

const FormTask = () => {
    
    const form = useForm({
        resolver: zodResolver(formSchemaTask)
    })

    const {formLogin,selectStatus,selectPriority} = useFormTask();

    const {mutate} = useMutation({
        mutationFn: newTask,
        /*onSuccess: () => {
            navigate('/dashboard');
        }*/
        onError: () => {
            errorAlert("Error al registrar el usuario")
        }
    })
    const onSubmit = (data: formSchemaTaskType) => {
        mutate(data)
    }
    


    return (
        <Form {...form} >
            <form id="login" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Modal buttonTitle="Crear Tarea" title="Nueva Tarea" buttonInModal="Crear Tarea">
                    <FormInput name="title" label="Titulo" placeholder="Titulo" type="text" control={form.control} />
                    <FormInput name="description" label="Descripción" placeholder="Descripción" type="text" control={form.control} />
                  {/*  <FormSelect name="project" selectItems={} />
                    <FormSelect name="assigned_to_id" selectItems={} /> */}
                    <FormSelect name="status" placeholder="selecccione un estado" selectItems={selectStatus} label="Estado" />
                    <FormSelect name="priority" placeholder="selecccione una prioridad" selectItems={selectPriority} label="Prioridad" />
                </Modal>
            </form>
        </Form>
    )

}

export default FormTask