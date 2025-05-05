import { useQuery } from "@tanstack/react-query";
import { SelectItemProps } from "../../../components/form/FormSelect";
import { getUsers } from "../../tasks/utils/http";
import { Option } from "../../../components/ui/MultipleSelector";


const useUsersSelect = (): {
    users: Option[];
    isLoading?: boolean;
    error?: Error | null;
} => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers()
    });

    const usersSelect: Option[]  = data 
        ? data.data.map((users) => ({
            value: users.id.toString(),
            label: users.first_name.toString()
          }))
        : [];

    return {
        users: usersSelect,
        isLoading,
        error
    };
};

export default useUsersSelect;