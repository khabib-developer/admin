import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Paper,
    Typography
} from "@mui/material";
import React, {cloneElement, useState} from "react";
import {IModel} from "@/types";
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import date from "date-and-time";
import DeleteIcon from '@mui/icons-material/Delete';
import {useModelHook} from "@/hooks/models/model.hook";
import {Modal} from "@/views/admin/components/model/components/dialog";


export const ModelItem: React.FC<{model: IModel, setActive}> = ({model, setActive}) => {
    const handleClick = () => {
        setActive(true)
    }
    const [open, setOpen] = React.useState(false);

    const [modal, setModal] = useState<IModel | null>(null)

    const {deleteModel} = useModelHook()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        await deleteModel(model.id)
    }

    return (
        <Paper elevation={3} sx={{mt:2, p: 2}} >
            <Grid container>
                <Grid item xs={10}>
                    <Typography variant="h6">
                        {model.name}
                    </Typography>
                    <Typography>
                        {model.description}
                    </Typography>
                    <Typography variant="caption" sx={{pt:1}}>
                        {date.format(new Date(model.created_at), "YYYY-MM-DD")}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{display:"flex", alignItems:"center", justifyContent:"end", gap:2}}>
                    <IconButton onClick={handleClickOpen}>
                        <DeleteIcon color="error" />
                    </IconButton>
                    <IconButton onClick={() => setModal(model)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onMouseDown={handleClick} sx={{cursor:"grab"}}>
                        <MenuIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
            >
                <DialogTitle>
                    Are you sure?
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleSubmit}>Yes</Button>
                    <Button onClick={handleClose} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>

            {
                cloneElement(<Modal model={modal} handleClose={() => setModal(null)} />)
            }

            {/*<Modal model={modal} handleClose={() => setModal(null)} />*/}

        </Paper>
    )
}