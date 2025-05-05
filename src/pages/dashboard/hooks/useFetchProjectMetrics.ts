import { useQuery } from "@tanstack/react-query";
import { getProjectMetrics } from "../utils/http";
import { useTranslation } from "react-i18next";

const useFetchProjectMetrics = (title:string) => {
    const {t} = useTranslation()
    
    const { data, isLoading, error } = useQuery({
        queryKey: ['projectsMetrietrics'],
        queryFn: () => getProjectMetrics()
    });

    const metricsData = data ? {
        title: title,
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