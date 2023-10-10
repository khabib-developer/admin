import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import ListModel from "@/views/admin/components/model/components/ListModel";
import Create from "@/views/admin/components/model/components/create";
const Model = () => {
    return (_jsxs(Box, { sx: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }, children: [_jsx(ListModel, {}), _jsx(Create, {})] }));
};
export default Model;
