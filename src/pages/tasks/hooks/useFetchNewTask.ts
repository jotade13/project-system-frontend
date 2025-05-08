import {UseMutateFunction, useMutation, useQueryClient } from "@tanstack/react-query";
import { dataTask, newTask } from "../utils/http";
import errorAlert from "../../../components/alerts/errorAlert";
import { formSchemaTaskType } from "../utils/validations";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";


const useFetchNewTask = (form:UseFormReturn<formSchemaTaskType>): {mutate:UseMutateFunction<void, Error, dataTask, unknown>} => {
    const queryClient = useQueryClient()
    const {t} = useTranslation();
    const {mutate} =  useMutation({
        mutationFn: newTask,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['tasks']})
            form.reset()
        },
        onError: () => {
            errorAlert(t('error.create_task'))
        }
    })

    return {mutate}
};

export default useFetchNewTask;