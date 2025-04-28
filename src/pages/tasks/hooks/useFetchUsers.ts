import { useQuery } from "@tanstack/react-query";
import { getAuthToken } from "../../../util/auth";
import { SelectItemProps } from "../../../components/form/FormSelect";
import { getUsers } from "../utils/http";

const useFetchUsers = (): {
    users: SelectItemProps[];
    isLoading?: boolean;
    error?: Error | null;
} => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(getAuthToken())
    });

    const usersSelect = data 
        ? data.data.map((users) => ({
            value: users.id.toString(),
            valueTitle: users.first_name
          }))
        : [];

    return {
        users: usersSelect,
        isLoading,
        error
    };
};

export default useFetchUsers;