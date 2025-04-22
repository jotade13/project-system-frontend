import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";

interface ModalProps extends React.PropsWithChildren{
    buttonTitle:string,
    title: string,
    buttonInModal: string
}

const Modal = ({buttonTitle,title,buttonInModal,children}:ModalProps) => {
    const {t} = useTranslation()

    return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>{t(buttonTitle)}</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{t(title)}</DialogTitle>
            </DialogHeader>
            {children}
            <DialogFooter>
                <Button type="submit">{buttonInModal}</Button>
            </DialogFooter>
        </DialogContent> 
    </Dialog>
    )
}
export default Modal