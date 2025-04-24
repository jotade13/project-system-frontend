import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../utils/http";

const useFetchTasks = () : { data: any, isLoading?: boolean, error?: Error | null} => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => getTasks()
    });

    return {data, isLoading, error}
}
export default useFetchTasks