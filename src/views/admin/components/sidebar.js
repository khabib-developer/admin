import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import MuiDrawer from '@mui/material/Drawer';
import { Divider, List, Toolbar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { drawerWidth } from "@/views/admin/components/appBar";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';
import { useHistory, useLocation } from "react-router-dom";
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}));
const Sidebar = ({ open, setOpen }) => {
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const { pathname } = useLocation();
    const history = useHistory();
    return (_jsxs(Drawer, { variant: "permanent", open: open, children: [_jsx(Toolbar, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }, children: _jsx(IconButton, { onClick: toggleDrawer, children: _jsx(ChevronLeftIcon, {}) }) }), _jsx(Divider, {}), _jsxs(List, { component: "nav", children: [_jsxs(ListItemButton, { selected: pathname === "/admin/model", onClick: () => history.push("/admin/model"), children: [_jsx(ListItemIcon, { children: _jsx(PsychologyIcon, {}) }), _jsx(ListItemText, { primary: "Model" })] }), _jsxs(ListItemButton, { selected: pathname === "/admin/module", onClick: () => history.push("/admin/module"), children: [_jsx(ListItemIcon, { children: _jsx(ViewModuleIcon, {}) }), _jsx(ListItemText, { primary: "Module" })] }), _jsxs(ListItemButton, { selected: pathname === "/admin/database", onClick: () => history.push("/admin/database"), children: [_jsx(ListItemIcon, { children: _jsx(StorageIcon, {}) }), _jsx(ListItemText, { primary: "Database" })] }), _jsxs(ListItemButton, { selected: pathname === "/admin/users", onClick: () => history.push("/admin/users"), children: [_jsx(ListItemIcon, { children: _jsx(GroupIcon, {}) }), _jsx(ListItemText, { primary: "Users" })] })] })] }));
};
export default Sidebar;
