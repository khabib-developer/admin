import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { UserItem } from "@/views/admin/components/users/components/userItem";
import { UserList } from "@/views/admin/components/users/components/userList";
const Users = () => {
    return (_jsxs(Box, { sx: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }, children: [_jsx(UserList, {}), _jsx(UserItem, {})] }));
};
export default Users;
