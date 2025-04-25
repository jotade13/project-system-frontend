//import { useTranslation } from "react-i18next"
import { SelectItemProps } from "../../../components/form/FormSelect"

const useFormSelects = () : {selectStatus: SelectItemProps[]} => {
   // const {t} = useTranslation()

    const selectStatus : SelectItemProps[] = [
        {value: "CANCELLED", valueTitle: "Pendiente"},
        {value: "IN_PROGRESS", valueTitle: "En progreso"},
        {value: "COMPLETED", valueTitle: "Completada"},
    ]

    return {selectStatus}
}
export default useFormSelects