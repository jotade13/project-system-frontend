import {UseMutateFunction, useMutation } from "@tanstack/react-query";
import { dataNewTask, newTask } from "../utils/http";
import errorAlert from "../../../components/alerts/errorAlert";
import { useNavigate } from "react-router";


const useFetchNewTask = (): {mutate:UseMutateFunction<void, Error, dataNewTask, unknown>} => {
    const Navigate = useNavigate();
    const {mutate} = useMutation({
        mutationFn: newTask,
        onSuccess: () => {
            Navigate('/tasks');
        },
        onError: () => {
            errorAlert("Error al Subir la tarea")
        }
    })

    return {mutate}
};

export default useFetchNewTask;