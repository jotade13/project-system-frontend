import { useQuery,UseQueryResult } from "@tanstack/react-query";
import { getTasks } from "../utils/http";

const useFetchTasks = (): UseQueryResult => {
    const tasks = useQuery({
        queryKey: ['tasks'],
        queryFn: () => getTasks()
    });

    return tasks
}
export default useFetchTasks