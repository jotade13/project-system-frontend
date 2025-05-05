import { useQuery } from "@tanstack/react-query";
import { getTasksMetrics } from "../utils/http";

const useFetchTaskMetrics = (title:string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['TasksMetrics'],
        queryFn: () => getTasksMetrics()
    });

    const metricsData = data ? {
        title: title,
        content: data.data
    }: {}

    return {
        tasksMetricsData: metricsData,
        tasksMetricsIsLoading: isLoading,
        tasksMetricsError: error
    };
};

export default useFetchTaskMetrics;