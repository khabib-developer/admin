import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { usePowerUserHook } from "@/hooks/poweruser/poweruser.hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppStore } from "@/store/index.store";
export const UserItem = ({ powerUser }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { createOrUpdatePowerUser, updatePowerUsers, deletePowerUsers } = usePowerUserHook();
    const { setError } = useAppStore();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: yupResolver(yup.object({
            username: yup.string().required().min(2),
        }))
    });
    const onSubmit = async (data) => {
        if (powerUser) {
            if (data.password.trim() === "")
                return await updatePowerUsers({ username: data.username, id: powerUser.id });
            data = { ...powerUser, ...data };
        }
        else {
            if (data.password.trim() === "")
                return setError("Password is empty");
        }
        await createOrUpdatePowerUser(data, !!powerUser);
        if (!powerUser)
            reset({ username: "", password: "" });
    };
    const onDelete = async () => powerUser && await deletePowerUsers(powerUser.id);
    return (_jsx(Paper, { sx: { width: "20%", mt: 2 }, elevation: 3, children: _jsxs(Box, { component: "form", onSubmit: handleSubmit(onSubmit), py: 1, px: 3, pt: 2, children: [_jsx(Box, { children: _jsx(TextField, { ...register("username"), defaultValue: powerUser ? powerUser.username : "", sx: { width: "100%" }, variant: "standard", placeholder: "Username" }) }), _jsx(Box, { pt: 2, children: _jsx(TextField, { sx: { width: "100%" }, defaultValue: "", ...register("password"), variant: "standard", placeholder: powerUser ? "" : "Password", type: showPassword ? "text" : "password", InputProps: {
                            endAdornment: _jsx(InputAdornment, { sx: { cursor: "pointer" }, onClick: () => setShowPassword(prev => !prev), position: "start", children: showPassword ? _jsx(VisibilityOff, {}) :
                                    _jsx(Visibility, {}) }),
                        } }) }), _jsx(Box, { sx: { display: "flex", justifyContent: "end", pt: 1 }, children: powerUser ? _jsxs(_Fragment, { children: [_jsx(Button, { type: "submit", sx: { px: 2 }, children: "Yangilash" }), _jsx(Button, { onClick: onDelete, color: "error", children: "O'chirish" })] }) : _jsx(Button, { type: "submit", children: "Yaratish" }) })] }) }));
};
