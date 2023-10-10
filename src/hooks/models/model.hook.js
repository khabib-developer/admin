import { useCallback } from "react";
import useAxios from "@/services";
import { useModelStore } from "@/store/model.store";
export const useModelHook = () => {
    const { fetchData } = useAxios();
    const { setModels, models } = useModelStore();
    const getModels = useCallback(async () => {
        let models = await fetchData("/accounts/admin-system/");
        if (models && models.filter(model => model.order === 0).length > 1) {
            models = models.map((model, i) => ({ ...model, order: i }));
        }
        setModels(models);
    }, []);
    const createModel = useCallback(async (data, updateMode) => {
        const url = updateMode ? `/accounts/admin-system/${updateMode}/` : "/accounts/admin-system/";
        const model = await fetchData(url, !!updateMode ? "PATCH" : "POST", data);
        const updatedModels = !updateMode ? [
            ...models, model
        ] :
            [...models.filter(model => model.id !== updateMode), model];
        setModels(updatedModels);
    }, [models]);
    const deleteModel = useCallback(async (id) => {
        await fetchData(`/accounts/admin-system/${id}`, "DELETE");
        setModels([...models.filter(model => model.id !== id)]);
    }, [models]);
    const bulkUpdateOrders = useCallback((updatedArray) => {
        setModels(updatedArray);
        fetchData("/accounts/update-order/", "POST", {
            order: updatedArray.map(item => ({
                id: item.id,
                order: item.order
            }))
        }, {}, true, true, false);
    }, [models]);
    return { getModels, createModel, deleteModel, bulkUpdateOrders };
};
