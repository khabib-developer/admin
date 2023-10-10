import AppBar from "@/views/admin/components/appBar";
import {useEffect, useState} from "react";
import Sidebar from "@/views/admin/components/sidebar";
import {Box} from "@mui/material";
import {Route} from "react-router-dom";
import Model from "@/views/admin/components/model";
import {Module} from "@/views/admin/components/module";
import {Database} from "@/views/admin/components/database";
import {useAppStore} from "@/store/index.store";
import {useAuthHook} from "@/hooks/authorization/auth.hook";
import Loader from "@/components/loading";
import Users from "@/views/admin/components/users";

export const AdminLayout = () => {
    const [open, setOpen] = useState<boolean>(false)

    const {user} = useAppStore()

    const [permission, setPermission] = useState(false)

    const {check} = useAuthHook()

    useEffect(() => {
        (async function () {
            setPermission(await check(true))
        }())
    }, [])

    if (permission)
        return (
            <Box sx={ {display: "flex", minHeight: "100vh"} }>
                <AppBar open={ open } setOpen={ setOpen }/>
                <Sidebar open={ open } setOpen={ setOpen }/>
                <Box sx={ {mt: '64px', p: 3, width:"100%",height:"calc(100vh-112px) !important",} }>
                    <Route path={ '/admin/model' }>
                        <Model />
                    </Route>
                    <Route path={ '/admin/module' }>
                        <Module/>
                    </Route>
                    <Route path={ '/admin/database' }>
                        <Database/>
                    </Route>
                    <Route path={ '/admin/users' }>
                        <Users />
                    </Route>
                </Box>

            </Box>
        )

    return <Loader />
}