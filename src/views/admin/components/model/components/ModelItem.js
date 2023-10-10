import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Dialog, DialogActions, DialogTitle, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { cloneElement, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import date from "date-and-time";
import DeleteIcon from '@mui/icons-material/Delete';
import { useModelHook } from "@/hooks/models/model.hook";
import { Modal } from "@/views/admin/components/model/components/dialog";
export const ModelItem = ({ model, setActive }) => {
    const handleClick = () => {
        setActive(true);
    };
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = useState(null);
    const { deleteModel } = useModelHook();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async () => {
        await deleteModel(model.id);
    };
    return (_jsxs(Paper, { elevation: 3, sx: { mt: 2, p: 2 }, children: [_jsxs(Grid, { container: true, children: [_jsxs(Grid, { item: true, xs: 10, children: [_jsx(Typography, { variant: "h6", children: model.name }), _jsx(Typography, { children: model.description }), _jsx(Typography, { variant: "caption", sx: { pt: 1 }, children: date.format(new Date(model.created_at), "YYYY-MM-DD") })] }), _jsxs(Grid, { item: true, xs: 2, sx: { display: "flex", alignItems: "center", justifyContent: "end", gap: 2 }, children: [_jsx(IconButton, { onClick: handleClickOpen, children: _jsx(DeleteIcon, { color: "error" }) }), _jsx(IconButton, { onClick: () => setModal(model), children: _jsx(EditIcon, {}) }), _jsx(IconButton, { onMouseDown: handleClick, sx: { cursor: "grab" }, children: _jsx(MenuIcon, {}) })] })] }), _jsxs(Dialog, { open: open, onClose: handleClose, fullWidth: true, children: [_jsx(DialogTitle, { children: "Are you sure?" }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: handleSubmit, children: "Yes" }), _jsx(Button, { onClick: handleClose, autoFocus: true, children: "No" })] })] }), cloneElement(_jsx(Modal, { model: modal, handleClose: () => setModal(null) }))] }));
};
