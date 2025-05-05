import { useTranslation } from "react-i18next"
import CardsDashboard from "./CardsDashboard"
import useFetchMetrics from '../hooks/useFetchMetrics'
import TableUsers from "./TableUser/TableUsers"


const DashboardMain = () => {
    const {metricsData,metricsIsLoading} = useFetchMetrics()
    const {t} = useTranslation()

    return (
        <div className='block'>
            <h1 className='text-center text-5xl mt-5'>{t('title')}</h1>
            <div className='flex space-x-10 max-w-full justify-center mt-20 mx-auto'>
                {metricsIsLoading ? <CardsDashboard content={metricsData} /> : <p>{t('loading')}</p>}
            </div>
            <TableUsers />
        </div>
    )
}
export default DashboardMain