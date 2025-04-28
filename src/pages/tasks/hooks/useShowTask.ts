import { useQuery } from "@tanstack/react-query";
import { showTask } from "../utils/http";

const useShowTask = (id:string) => {
    const {data,isError,isLoading} = useQuery({
        queryKey: ['task'],
        queryFn: () => showTask(id)
    });

    return {task: data, taskIsError:isError, taskIsLoading:isLoading}
}
export default useShowTask