import { useTranslation } from "react-i18next"

const useTable = (): {tableHeads:string[]} => {
    const {t} = useTranslation()
    const tableHeads = [t('name'),t('description'),t('owner')]
    
    return {tableHeads}
}
export default useTable