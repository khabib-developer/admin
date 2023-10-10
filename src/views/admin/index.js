import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@/views/admin/components/appBar";
import { useEffect, useState } from "react";
import Sidebar from "@/views/admin/components/sidebar";
import { Box } from "@mui/material";
import { Route } from "react-router-dom";
import Model from "@/views/admin/components/model";
import { Module } from "@/views/admin/components/module";
import { Database } from "@/views/admin/components/database";
import { useAppStore } from "@/store/index.store";
import { useAuthHook } from "@/hooks/authorization/auth.hook";
import Loader from "@/components/loading";
import Users from "@/views/admin/components/users";
export const AdminLayout = () => {
    const [open, setOpen] = useState(false);
    const { user } = useAppStore();
    const [permission, setPermission] = useState(false);
    const { check } = useAuthHook();
    useEffect(() => {
        (async function () {
            setPermission(await check(true));
        }());
    }, []);
    if (permission)
        return (_jsxs(Box, { sx: { display: "flex", minHeight: "100vh" }, children: [_jsx(AppBar, { open: open, setOpen: setOpen }), _jsx(Sidebar, { open: open, setOpen: setOpen }), _jsxs(Box, { sx: { mt: '64px', p: 3, width: "100%", height: "calc(100vh-112px) !important", }, children: [_jsx(Route, { path: '/admin/model', children: _jsx(Model, {}) }), _jsx(Route, { path: '/admin/module', children: _jsx(Module, {}) }), _jsx(Route, { path: '/admin/database', children: _jsx(Database, {}) }), _jsx(Route, { path: '/admin/users', children: _jsx(Users, {}) })] })] }));
    return _jsx(Loader, {});
};
