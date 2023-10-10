import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton, Toolbar } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import styled from "@emotion/styled";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthHook } from "@/hooks/authorization/auth.hook";
export const drawerWidth = 240;
const AppBarStyled = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const AppBar = ({ open, setOpen }) => {
    const { logout } = useAuthHook();
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (_jsx(AppBarStyled, { position: "absolute", open: open, children: _jsxs(Toolbar, { sx: {
                pr: '24px', // keep right padding when drawer closed
            }, children: [_jsx(IconButton, { edge: "start", color: "inherit", "aria-label": "open drawer", onClick: toggleDrawer, sx: {
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }, children: _jsx(MenuIcon, {}) }), _jsx(Typography, { component: "h1", variant: "h6", color: "inherit", noWrap: true, sx: { flexGrow: 1 }, children: "Admin User" }), _jsx(IconButton, { color: "inherit", onClick: () => logout(), children: _jsx(Badge, { color: "secondary", children: _jsx(LogoutIcon, {}) }) })] }) }));
};
export default AppBar;
