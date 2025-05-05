import { I18nextProvider, useTranslation } from 'react-i18next';
import { userRole } from '../../../util/auth';
import useFetchMetrics from '../hooks/useFetchMetrics'
import ASideDashboard from './ASideDashboard';
import CardsDashboard from './CardsDashboard';
import TableUsers from './TableUser/TableUsers';
import i18next from '../utils/i18n';

export const i18n = i18next;

const Dashboard =  () => {
    const {metricsData,metricsIsLoading} = useFetchMetrics()
    const { t } = useTranslation();
   
    
    return (
        <I18nextProvider i18n={i18n} defaultNS={'translation'} >
            <div className='flex'>
            {(userRole() === 'ADMIN' || userRole() === 'SUPERVISOR')  && <ASideDashboard />}
            <div className='block'>
                <h1 className='text-center text-5xl mt-5'>{t('dashboard')}</h1>
                <div className='flex space-x-10 max-w-full justify-center mt-20 mx-auto'>
                    {metricsIsLoading ? <CardsDashboard content={metricsData} /> : <p>{}</p>}
                </div>
                <TableUsers />
            </div>
            </div>
        </I18nextProvider>
    )
}
export default Dashboard;