import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Redirect, Route, Switch, } from "react-router-dom";
import { Login } from "@/views/authentication/login";
import { AdminLayout } from "@/views/admin";
const Pages = () => {
    return (_jsx(BrowserRouter, { children: _jsxs(Switch, { children: [_jsx(Route, { path: "/auth/login", children: _jsx(Login, {}) }), _jsx(Route, { path: "/admin", children: _jsx(AdminLayout, {}) }), _jsx(Route, { exact: true, path: "*", children: _jsx(Redirect, { to: "/admin/model" }) })] }) }));
};
export default Pages;
