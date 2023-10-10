import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Pages from "@/views";
import { createTheme, ThemeProvider } from "@mui/material";
import { useAppStore } from "@/store/index.store";
import Loader from "@/components/loading";
import { ErrorMessage, InfoMessage } from "@/components/Notifier";
function App() {
    const { loading } = useAppStore();
    return (_jsxs(ThemeProvider, { theme: createTheme(), children: [_jsx(Pages, {}), _jsx(ErrorMessage, {}), _jsx(InfoMessage, {}), loading && _jsx(Loader, {})] }));
}
export default App;
