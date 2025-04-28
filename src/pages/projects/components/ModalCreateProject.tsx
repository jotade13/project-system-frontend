import { FormInput } from "lucide-react"
import Modal from "../../../components/Modal"
import { Form } from "../../../components/ui/form"
import { DialogFooter } from "../../../components/ui/dialog"
import { Button } from "../../../components/ui/button"
import useNewProject from "../hooks/useNewProject"


const ModalCreateProject = () => {

    const {form,onSubmit} = useNewProject()

    return (
        <Modal buttonTitle="Crear Proyecto" title="Nuevo Proyecto">
            <Form {...form} >
                <form id="projects" onSubmit={form.handleSubmit(onSubmit)} className="space-y-3    ">
                    <FormInput name="name" label="Titulo" placeholder="Titulo" type="text" control={form.control} />
                    <FormInput name="description" label="Descripción" placeholder="Descripción" type="text" control={form.control} />
                    <DialogFooter>
                        <Button type="submit">Crear Tarea</Button>
                    </DialogFooter>
                </form>
            </Form>  
        </Modal>
    )

}
export default ModalCreateProject