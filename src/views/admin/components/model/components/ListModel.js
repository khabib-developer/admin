import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { DragSortList } from "@/components/DragSortList";
import { useModelStore } from "@/store/model.store";
import { ModelItem } from "@/views/admin/components/model/components/ModelItem";
import { useModelHook } from "@/hooks/models/model.hook";
const ListModel = () => {
    const { models, setModels } = useModelStore();
    const { bulkUpdateOrders } = useModelHook();
    const setData = (updatedArray) => {
        bulkUpdateOrders(updatedArray);
    };
    return (_jsx(Box, { pb: 4, sx: { width: "50%" }, children: _jsx(DragSortList, { data: models.sort((a, b) => a.order - b.order), setData: setData, children: (item, setActive, active) => {
                return (_jsx(ModelItem, { model: item, setActive: setActive, active: active }));
            } }) }));
};
export default ListModel;
