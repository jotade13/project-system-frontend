import { useQuery } from "@tanstack/react-query";
import { getProjectMetrics } from "../utils/http";

const useFetchProjectMetrics = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['projectsMetrietrics'],
        queryFn: () => getProjectMetrics()
    });

    const metricsData = data ? {
        title: "Total Proyectos",
        content: data.data
    }: {}

    console.log(metricsData)

    return {
        projectsMetricsData: metricsData,
        projectsMetricsIsLoading: isLoading,
        projectMetricsError: error
    };
};

export default useFetchProjectMetrics;