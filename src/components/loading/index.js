import { jsx as _jsx } from "react/jsx-runtime";
import { Backdrop, CircularProgress } from "@mui/material";
const Loader = () => {
    return (_jsx("div", { children: _jsx(Backdrop, { sx: { color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }, open: true, children: _jsx(CircularProgress, { color: "inherit" }) }) }));
};
export default Loader;
