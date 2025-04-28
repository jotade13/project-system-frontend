import useFetchMetrics from '../hooks/useFetchMetrics'
import CardsDashboard from './CardsDashboard';
const Dashboard =  () => {
    const {metricsData,metricsIsLoading} = useFetchMetrics()

    
    return (
        <>
        <h1 className='text-center text-5xl mt-5'>Panel</h1>
            <div className='flex space-x-10 max-w-full justify-center-safe mt-20'>
                {metricsIsLoading ? <CardsDashboard content={metricsData} /> : <p>Cargando</p>}
            </div>
        </>
    )
}
export default Dashboard;