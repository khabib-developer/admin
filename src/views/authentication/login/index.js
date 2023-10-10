import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuthHook } from "@/hooks/authorization/auth.hook";
import Loader from "@/components/loading";
export const Login = () => {
    const { login, check } = useAuthHook();
    const [permission, setPermission] = useState(false);
    useEffect(() => {
        (async function () {
            setPermission(!(await check(false)));
        }());
    }, []);
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(yup.object({
            username: yup.string().required().min(2),
            password: yup.string().required().min(2),
        }))
    });
    const onSubmit = async (data) => await login(data);
    if (permission)
        return (_jsx(Box, { sx: { height: "98vh", m: 0, display: "flex", alignItems: "center", justifyContent: "center" }, children: _jsxs(Box, { sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }, children: [_jsx(Avatar, { sx: { m: 1, bgcolor: 'secondary.main' }, children: _jsx(LockOutlinedIcon, {}) }), _jsx(Typography, { component: "h1", variant: "h5", children: "Kirish" }), _jsxs(Box, { component: "form", onSubmit: handleSubmit(onSubmit), noValidate: true, sx: { mt: 1 }, children: [_jsx(TextField, { margin: "normal", required: true, fullWidth: true, id: "email", label: "Username", autoComplete: "email", error: !!errors.username, ...register("username"), autoFocus: true }), _jsx(TextField, { margin: "normal", required: true, fullWidth: true, label: "Password", type: "password", id: "password", error: !!errors.password, ...register("password") }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 }, children: "Kirish" })] })] }) }));
    return _jsx(Loader, {});
};
