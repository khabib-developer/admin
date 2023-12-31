import React from 'react';
import styled from "@emotion/styled";
import MuiDrawer from '@mui/material/Drawer';
import {Divider, List, Toolbar} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {drawerWidth} from "@/views/admin/components/appBar";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';
import {useHistory, useLocation} from "react-router-dom";

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })
(
    ( { theme, open } ) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: (theme as any).transitions.create('width', {
                easing: (theme as any).transitions.easing.sharp,
                duration: (theme as any).transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!(open as any) && {
                overflowX: 'hidden',
                transition: (theme as any).transitions.create('width', {
                    easing: (theme as any).transitions.easing.sharp,
                    duration: (theme as any).transitions.duration.leavingScreen,
                }),
                width: (theme as any).spacing(7),
                [(theme as any).breakpoints.up('sm')]: {
                    width: (theme as any).spacing(9),
                },
            }),
        },
    }) as any,
);

interface ISidebar {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const Sidebar: React.FC<ISidebar> = ({open, setOpen}) => {

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const {pathname} = useLocation()

    const history = useHistory()

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <ListItemButton selected={pathname === "/admin/model"} onClick={() => history.push("/admin/model")}>
                    <ListItemIcon>
                        <PsychologyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Model" />
                </ListItemButton>
                <ListItemButton selected={pathname === "/admin/module"} onClick={() => history.push("/admin/module")}>
                    <ListItemIcon>
                        <ViewModuleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Module" />
                </ListItemButton>
                <ListItemButton selected={pathname === "/admin/database"} onClick={() => history.push("/admin/database")}>
                    <ListItemIcon>
                        <StorageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Database" />
                </ListItemButton>
                <ListItemButton selected={pathname === "/admin/users"} onClick={() => history.push("/admin/users")}>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItemButton>
            </List>
        </Drawer>
    );
};

export default Sidebar;