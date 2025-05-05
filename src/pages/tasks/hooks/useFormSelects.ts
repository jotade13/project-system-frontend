//import { useTranslation } from "react-i18next"
import { useTranslation } from "react-i18next"
import { SelectItemProps } from "../../../components/form/FormSelect"

const useFormSelects = () : {selectStatus: SelectItemProps[], selectPriority :SelectItemProps[] } => {
   const {t} = useTranslation()
    
   
    const selectStatus : SelectItemProps[] = [
        {value: "PENDING", valueTitle: t('pending')},
        {value: "IN_PROGRESS", valueTitle: t('in_progress')},
        {value: "COMPLETED", valueTitle: t('Completed')},
    ]
    const selectPriority : SelectItemProps[] = [
        {value: "LOW", valueTitle: t('low')},
        {value: "MEDIUM", valueTitle: t('medium')},
        {value: "HIGH", valueTitle: t('high')},
    ]

    return {selectStatus,selectPriority}
}
export default useFormSelects