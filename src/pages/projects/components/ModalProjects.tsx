import { FormInput } from "lucide-react"
import Modal from "../../../components/Modal"

const ModalProject = () => {

    return (
        <Modal buttonTitle="Crear Proyecto" title="Nuevo Proyecto" openModal={}>
            <Form >
                <form>
                    <FormInput name="title" label="Titulo" placeholder="Titulo" type="text" control={form.control} />
                    <FormInput name="description" label="Descripción" placeholder="Descripción" type="text" control={form.control} />
                    <DialogFooter>
                        <Button type="submit">Crear Tarea</Button>
                    </DialogFooter>
                </form>
            </Form>  
        </Modal>
    )

}
export default ModalProject