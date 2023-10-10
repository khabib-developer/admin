import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Dialog, Grid, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckIcon from '@mui/icons-material/Check';
import { useModelHook } from "@/hooks/models/model.hook";
import { useModelStore } from "@/store/model.store";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const ButtonFile = ({ name, register, watch, errors, updateMode }) => {
    return (_jsxs(Button, { component: "label", variant: validationFile(watch(name)) ? "contained" : "outlined", sx: { width: "100%" }, color: !!errors[name] ? "error" : validationFile(watch(name)) ? "success" : "primary", startIcon: validationFile(watch(name)) ? _jsx(CheckIcon, {}) : _jsx(CloudUploadIcon, {}), children: [name, _jsx(VisuallyHiddenInput, { ...register(name), type: "file" })] }));
};
const validationFile = (value, updateMode) => updateMode ? updateMode : value && Boolean(value.length);
export const Modal = ({ model, handleClose }) => {
    const updateMode = useMemo(() => typeof model === "object", [model]);
    const { createModel } = useModelHook();
    const { models } = useModelStore();
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(yup.object({
            name: yup.string().required().min(2),
            description: yup.string().required().min(2),
            file1: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file2: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file3: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file4: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file5: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file1norm: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file2norm: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file3norm: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file4norm: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            file5norm: yup.mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
        }))
    });
    const submitForm = async (data) => {
        const order = models.length ? Math.max(...models.map(model => model.order)) + 1 : 0;
        const formData = new FormData();
        for (const formDataKey in data) {
            const file = formDataKey.slice(0, 4) === 'file';
            if (file) {
                data[formDataKey][0] && formData.append(formDataKey, data[formDataKey][0]);
            }
            else {
                formData.append(formDataKey, data[formDataKey]);
            }
        }
        if (!updateMode)
            formData.append("order", String(order));
        handleClose();
        await createModel(formData, updateMode ? model.id : undefined);
    };
    return (_jsx(Dialog, { fullWidth: true, maxWidth: "sm", open: !!model, onClose: handleClose, children: _jsx(Box, { sx: { display: "flex", flexDirection: "column" }, children: _jsxs(Box, { noValidate: true, component: "form", onSubmit: handleSubmit(submitForm), sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    flex: 1,
                    width: '100%',
                }, children: [_jsx(Box, { p: 4, children: _jsx(TextField, { ...register("name"), error: !!errors.name, defaultValue: updateMode && model ? model.name : "", id: "standard-basic", label: "Modelning nomlanishi", sx: { width: "100%" }, variant: "standard" }) }), _jsx(Box, { px: 4, children: _jsx(TextField, { error: !!errors.description, defaultValue: updateMode && model ? model.description : "", ...register("description", { required: "Model nomlanishsiz yaratilishi mumkin ekas" }), id: "standard-basic", label: "Description", sx: { width: "100%" }, variant: "standard" }) }), _jsx(Box, { p: 4, children: _jsxs(Grid, { container: true, columnSpacing: 3, children: [_jsxs(Grid, { item: true, xs: 6, children: [_jsx(Typography, { variant: "body2", children: "Model" }), _jsx(Box, { pt: 2, children: _jsx(ButtonFile, { name: "file1", updateMode: updateMode, register: register, errors: errors, watch: watch }) }), _jsx(Box, { pt: 4, children: _jsx(ButtonFile, { name: "file2", updateMode: updateMode, register: register, errors: errors, watch: watch }) }), _jsx(Box, { pt: 4, children: _jsx(ButtonFile, { name: "file3", updateMode: updateMode, register: register, errors: errors, watch: watch }) }), _jsx(Box, { pt: 4, children: _jsx(ButtonFile, { name: "file4", updateMode: updateMode, register: register, errors: errors, watch: watch }) }), _jsx(Box, { pt: 4, children: _jsx(ButtonFile, { name: "file5", updateMode: updateMode, register: register, errors: errors, watch: watch }) })] }), _jsxs(Grid, { item: true, xs: 6, children: [_jsx(Typography, { variant: "body2", children: "Preprocessing model" }), _jsx(Box, { pt: 2, children: _jsx(ButtonFile, { name: "file1norm", updateMode: updateMode, register: register, errors: errors, watch: watch }) }), _jsx(Box, { pt: 4, children: _jsx(ButtonFile, { name: "file2norm", updateMode: updateMode, register: register, errors: errors, watch: watch }) }), _jsx(Box, { pt: 4, children: _jsx(ButtonFile, { name: "file3norm", updateMode: updateMode, register: register, errors: errors, watch: watch }) }), _jsx(Box, { pt: 4, children: _jsx(ButtonFile, { name: "file4norm", updateMode: updateMode, register: register, errors: errors, watch: watch }) }), _jsx(Box, { pt: 4, children: _jsx(ButtonFile, { name: "file5norm", updateMode: updateMode, register: register, errors: errors, watch: watch }) })] })] }) }), _jsxs(Grid, { container: true, justifyContent: "end", p: 3, children: [updateMode ?
                                _jsx(Button, { type: "submit", children: "Yangilash" }) :
                                _jsx(Button, { type: "submit", children: "Yaratish" }), _jsx(Button, { onClick: handleClose, children: "Yopish" })] })] }) }) }));
};
