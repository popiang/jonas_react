import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
    const queryClient = useQueryClient();

    const { isLoading, mutate: updateSetting } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("Setting successfully saved");
            queryClient.invalidateQueries({
                queryKey: ["settings"],
            });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isLoading, updateSetting };
}
