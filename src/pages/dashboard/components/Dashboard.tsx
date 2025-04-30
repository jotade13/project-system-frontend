import { userRole } from '../../../util/auth';
import useFetchMetrics from '../hooks/useFetchMetrics'
import ASideDashboard from './ASideDashboard';
import CardsDashboard from './CardsDashboard';
import TableUsers from './TableUser/TableUsers';
const Dashboard =  () => {
    const {metricsData,metricsIsLoading} = useFetchMetrics()
   
    
    return (
        <>
        <div className='flex'>
        {(userRole() === 'ADMIN' || userRole() === 'SUPERVISOR')  && <ASideDashboard />}
        <div className='block'>
            <h1 className='text-center text-5xl mt-5'>Panel</h1>
            <div className='flex space-x-10 max-w-full justify-center mt-20 mx-auto'>
                {metricsIsLoading ? <CardsDashboard content={metricsData} /> : <p>Cargando</p>}
            </div>
            <TableUsers />
        </div>
        </div>
        </>
    )
}
export default Dashboard;