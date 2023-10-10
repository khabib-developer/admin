import { useCallback } from "react";
import useAxios from "@/services";
import { usePowerUserStore } from "@/store/powerusers.store";
export const usePowerUserHook = () => {
    const { fetchData } = useAxios();
    const { powerUsers, setPowerUsers } = usePowerUserStore();
    const createOrUpdatePowerUser = useCallback(async (data, update = false) => {
        const url = update ? `/accounts/add-power-user/${data.id}/` : "/accounts/add-power-user/";
        const method = update ? "PUT" : "POST";
        const powerUser = await fetchData(url, method, data);
        if (powerUser) {
            const restPowerUsers = update ? powerUsers.filter(powerUser => powerUser.id !== data.id) : powerUsers;
            setPowerUsers([...restPowerUsers, powerUser]);
        }
    }, [powerUsers]);
    const updatePowerUsers = useCallback(async (data) => {
        const result = await fetchData(`/accounts/add-power-user/${data.id}/`, "PATCH", { username: data.username });
        console.log(result);
    }, [powerUsers]);
    const deletePowerUsers = useCallback(async (id) => {
        await fetchData(`/accounts/add-power-user/${id}/`, "DELETE");
        setPowerUsers([...powerUsers.filter(powerUser => powerUser.id !== id)]);
    }, [powerUsers]);
    const getPowerUsers = useCallback(async () => {
        const powerUsers = await fetchData("/accounts/add-power-user/");
        setPowerUsers(powerUsers);
    }, []);
    return { createOrUpdatePowerUser, getPowerUsers, updatePowerUsers, deletePowerUsers };
};
