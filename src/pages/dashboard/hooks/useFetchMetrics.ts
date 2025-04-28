import useFetchProjectMetrics from "./useFetchProjectMetrics"
import useFetchTaskMetrics from "./useFetchTaskMetrics"
import useFetchUserMetrics from "./useFetchUserMetrics"

const useFetcMetrics = () => {
    const {projectsMetricsData,projectMetricsError,projectsMetricsIsLoading} = useFetchProjectMetrics()
    const {usersMetricsData,usersMetricsError,usersMetricsIsLoading} = useFetchUserMetrics()
    const {tasksMetricsData,tasksMetricsError,tasksMetricsIsLoading} = useFetchTaskMetrics()

    const metricsData = (projectsMetricsData&&usersMetricsData&&tasksMetricsData) ? [projectsMetricsData,usersMetricsData,tasksMetricsData]: []
    const metricsError = (projectMetricsError&&usersMetricsError&&tasksMetricsError) ? [projectsMetricsData,usersMetricsData,tasksMetricsData]: []
    const metricsIsLoading = (projectsMetricsIsLoading&&usersMetricsIsLoading&&tasksMetricsIsLoading) ? [projectsMetricsData,usersMetricsData,tasksMetricsData]: []

    console.log(metricsData)
    

    return {
        metricsData: metricsData,
        metricsError:metricsError,
        metricsIsLoading:metricsIsLoading
    }

}

export default useFetcMetrics