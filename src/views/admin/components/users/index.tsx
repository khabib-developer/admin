import React from 'react';
import {Box} from "@mui/material";
import {UserItem} from "@/views/admin/components/users/components/userItem";
import {UserList} from "@/views/admin/components/users/components/userList";

const Users = () => {
    return (
        <Box sx={{width:"100%", height:"100%", display:"flex",  flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
            <UserList />
            <UserItem />
        </Box>
    );
};

export default Users;