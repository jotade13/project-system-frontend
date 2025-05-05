import { useTranslation } from "react-i18next"
import useFetchProjectMetrics from "./useFetchProjectMetrics"
import useFetchTaskMetrics from "./useFetchTaskMetrics"
import useFetchUserMetrics from "./useFetchUserMetrics"

const useFetcMetrics = () => {
    const {t} = useTranslation();
    const {projectsMetricsData,projectMetricsError,projectsMetricsIsLoading} = useFetchProjectMetrics(t('projects_metrics'))
    const {usersMetricsData,usersMetricsError,usersMetricsIsLoading} = useFetchUserMetrics(t('user_metrics'))
    const {tasksMetricsData,tasksMetricsError,tasksMetricsIsLoading} = useFetchTaskMetrics(t('task_metrics'))
    console.log(projectsMetricsData);

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