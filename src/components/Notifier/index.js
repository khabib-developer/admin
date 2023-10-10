import { jsx as _jsx } from "react/jsx-runtime";
import { useAppStore } from "@/store/index.store";
import { Alert, Snackbar } from "@mui/material";
export const ErrorMessage = () => {
    const { error, setError } = useAppStore();
    const handleClose = () => {
        setError(null);
    };
    return (_jsx(Snackbar, { open: !!error, anchorOrigin: { vertical: 'top', horizontal: "center" }, autoHideDuration: 2000, onClose: handleClose, children: _jsx(Alert, { onClose: handleClose, severity: "error", sx: { width: '100%' }, children: error }) }));
};
export const InfoMessage = () => {
    const { info, setInfo } = useAppStore();
    const handleClose = () => {
        setInfo(null);
    };
    return (_jsx(Snackbar, { open: !!info, anchorOrigin: { vertical: 'top', horizontal: "center" }, autoHideDuration: 6000, onClose: handleClose, children: _jsx(Alert, { onClose: handleClose, severity: "info", sx: { width: '100%' }, children: info }) }));
};
