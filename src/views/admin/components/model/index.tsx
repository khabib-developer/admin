import React from 'react';
import {Box} from "@mui/material";
import ListModel from "@/views/admin/components/model/components/ListModel";
import Create from "@/views/admin/components/model/components/create";

const Model = () => {
    return (
        <Box sx={{width:"100%", height:"100%", display:"flex",  flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
            <ListModel />
            <Create />
        </Box>
    );
};

export default Model;