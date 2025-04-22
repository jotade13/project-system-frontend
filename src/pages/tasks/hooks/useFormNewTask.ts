//import { useTranslation } from "react-i18next"
import { SelectItemProps } from "../../../components/form/FormSelect"

const useFormTask = () : {selectStatus: SelectItemProps[], selectPriority :SelectItemProps[] } => {
   // const {t} = useTranslation()
    
   
    const selectStatus : SelectItemProps[] = [
        {value: "PENDING", valueTitle: "Pendiente"},
        {value: "IN_PROGRESS", valueTitle: "En progreso"},
        {value: "Completados", valueTitle: "Completada"},
    ]
    const selectPriority : SelectItemProps[] = [
        {value: "LOW", valueTitle: "baja"},
        {value: "MEDIUM", valueTitle: "media"},
        {value: "HIGH", valueTitle: "alta"},
    ]

    return {selectStatus,selectPriority}
}
export default useFormTask