import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../utils/http"; 
import { getAuthToken } from "../../../util/auth"; 

export interface Projects {
        id: string;
        name: string;
        description: string;
        status:string,
        owner_id: string
}
export interface dataProjects{
    data: Projects[]
}

const  useFetchProjects =  () : {
    projects: dataProjects[];
    isLoading?: boolean;
    error?: Error | null;
} => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects(getAuthToken())
    });
    const projects = data 
        ? data.data.map((project:Projects) => ({
            cells:[project.name, project.description,project.status],
            id:project.id
          }))
        : [];

    return {
        projects: projects,
        isLoading,
        error
    };
};

export default useFetchProjects;