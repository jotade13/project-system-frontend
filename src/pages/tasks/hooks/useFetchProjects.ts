import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../projects/utils/http";
import { getAuthToken } from "../../../util/auth";
import { SelectItemProps } from "../../../components/form/FormSelect";

/*interface Project {
    id: number;
    name: string;
    description: string;
    owner_id: number
}*/

const useFetchProjects = (): {
    projects: SelectItemProps[];
    isLoading?: boolean;
    error?: Error | null;
} => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects(getAuthToken())
    });
    console.log (data)
    // Transformación de datos
    const projectSelect = data 
        ? data.data.map((project) => ({
            value: project.id,
            valueTitle: project.name
          }))
        : [];

    return {
        projects: projectSelect,
        isLoading,
        error
    };
};

export default useFetchProjects;