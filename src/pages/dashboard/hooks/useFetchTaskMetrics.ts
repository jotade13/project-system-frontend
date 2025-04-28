import { useQuery } from "@tanstack/react-query";
import { getTasksMetrics } from "../utils/http";

const useFetchTaskMetrics = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['TasksMetrics'],
        queryFn: () => getTasksMetrics()
    });

    const metricsData = data ? {
        title: "Total tareas asignadas",
        content: data.data
    }: {}

    return {
        tasksMetricsData: metricsData,
        tasksMetricsIsLoading: isLoading,
        tasksMetricsError: error
    };
};

export default useFetchTaskMetrics;