import { useQuery } from "@tanstack/react-query";
import { getUsersMetrics } from "../utils/http";

const useFetchUserMetrics = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['usersMetrics'],
        queryFn: () => getUsersMetrics()
    });

    const metricsData = data ? {
        title: "Total de Usuarios",
        content: data.total_users
    }: {}

    return {
        usersMetricsData: metricsData,
        usersMetricsIsLoading: isLoading,
        usersMetricsError: error
    };
};

export default useFetchUserMetrics;