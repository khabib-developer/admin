import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import {Modal} from "@/views/admin/components/model/components/dialog";

const Create = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    return (
        <Box>
            <Button onClick={ () => setOpen(true) } variant="outlined" sx={ {px: 4, borderStyle: "dotted"} }>
                Model qo'shish
            </Button>
            <Modal model={ open }  handleClose={ handleClose }/>
        </Box>
    );
};

export default Create;