import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Button } from "@mui/material";
import { Modal } from "@/views/admin/components/model/components/dialog";
const Create = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (_jsxs(Box, { children: [_jsx(Button, { onClick: () => setOpen(true), variant: "outlined", sx: { px: 4, borderStyle: "dotted" }, children: "Model qo'shish" }), _jsx(Modal, { model: open, handleClose: handleClose })] }));
};
export default Create;
