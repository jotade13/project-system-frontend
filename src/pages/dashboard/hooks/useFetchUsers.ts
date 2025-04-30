import { useQuery, } from "@tanstack/react-query";
import { getUsers } from "../../tasks/utils/http";

const useFetchUsers= ()=> {
    const {data,isError,isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers()
    });
    console.log(data)

    return {data,isError,isLoading}
}
export default useFetchUsers