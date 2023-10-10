import {Box, Button, Dialog, Grid, TextField, Typography} from "@mui/material";
import React, {useMemo} from "react";
import {useForm} from "react-hook-form";
import {styled} from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckIcon from '@mui/icons-material/Check';
import {useModelHook} from "@/hooks/models/model.hook";
import {useModelStore} from "@/store/model.store";
import {IModel} from "@/types";

interface IModal {
    model: any,
    handleClose: () => void,
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ButtonFile = ({name, register, watch, errors}) => {
    return (
        <Button
            component="label"
            variant={ validationFile(watch(name)) ? "contained" : "outlined" }
            sx={ {width: "100%"} }
            color={
                !!errors[name] ? "error" : validationFile(watch(name)) ? "success" : "primary"
            }
            startIcon={ validationFile(watch(name)) ? <CheckIcon/> : <CloudUploadIcon/> }>
            { name }
            <VisuallyHiddenInput { ...register(name) } type="file"/>
        </Button>
    )
}

const validationFile = (value, updateMode: any = null) => updateMode ? updateMode : value && Boolean(value.length)

export const Modal: React.FC<IModal> = ({model, handleClose}) => {

    const updateMode = useMemo(() => typeof model === "object", [model])

    const {createModel} = useModelHook()

    const {models} = useModelStore()

    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        resolver: yupResolver(
            yup.object({
                name: yup.string().required().min(2),
                description: yup.string().required().min(2),
                file1: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file2: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file3: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file4: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file5: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file1norm: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file2norm: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file3norm: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file4norm: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
                file5norm: (yup as any).mixed().test("file", "You need to provide a file", (value) => validationFile(value, updateMode)),
            })
        )
    });


    const submitForm = async (data) => {

        const order = models.length ? Math.max(...models.map(model => model.order)) + 1 : 0
        const formData = new FormData()

        for (const formDataKey in data) {
            const file = formDataKey.slice(0, 4) === 'file'
            if(file ) {
                data[formDataKey][0] && formData.append(formDataKey,  data[formDataKey][0] )
            } else {
                formData.append(formDataKey, data[formDataKey])
            }
        }

        if(!updateMode)
            formData.append("order", String(order))

        handleClose()

        await createModel(formData, updateMode ? model!.id!: undefined)
    };


    return (
        <Dialog
            fullWidth={ true }
            maxWidth="sm"
            open={ !!model }
            onClose={ handleClose }
        >
            <Box sx={ {display: "flex", flexDirection: "column"} }>
                <Box
                    noValidate
                    component="form"
                    onSubmit={ handleSubmit(submitForm) }
                    sx={ {
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        flex: 1,
                        width: '100%',
                    } }
                >
                    <Box p={ 4 }>
                        <TextField
                            { ...register("name") }
                            error={ !!errors.name }
                            defaultValue={ updateMode && model ? model.name : "" }
                            id="standard-basic" label="Modelning nomlanishi" sx={ {width: "100%"} } variant="standard"/>
                    </Box>
                    <Box px={ 4 }>
                        <TextField
                            error={ !!errors.description }
                            defaultValue={ updateMode && model ? model.description : "" }
                            { ...register("description", {required: "Model nomlanishsiz yaratilishi mumkin ekas"}) }
                            id="standard-basic" label="Description" sx={ {width: "100%"} } variant="standard"/>
                    </Box>
                    <Box p={ 4 }>
                        <Grid container columnSpacing={ 3 }>
                            <Grid item xs={ 6 }>
                                <Typography variant="body2">
                                    Model
                                </Typography>
                                <Box pt={2}>
                                    <ButtonFile name="file1"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                                <Box pt={ 4 }>
                                    <ButtonFile name="file2"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                                <Box pt={ 4 }>
                                    <ButtonFile name="file3"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                                <Box pt={ 4 }>
                                    <ButtonFile name="file4"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                                <Box pt={ 4 }>
                                    <ButtonFile name="file5"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Typography variant="body2">
                                    Preprocessing model
                                </Typography>
                                <Box pt={2}>
                                    <ButtonFile name="file1norm"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                                <Box pt={ 4 }>
                                    <ButtonFile name="file2norm"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                                <Box pt={ 4 }>
                                    <ButtonFile name="file3norm"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                                <Box pt={ 4 }>
                                    <ButtonFile name="file4norm"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                                <Box pt={ 4 }>
                                    <ButtonFile name="file5norm"  register={ register }
                                                errors={ errors } watch={ watch }/>
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>

                    <Grid container justifyContent="end" p={ 3 }>
                        {
                            updateMode ?
                                <Button type="submit">
                                    Yangilash
                                </Button> :
                                <Button type="submit">
                                    Yaratish
                                </Button>
                        }
                        <Button onClick={ handleClose }>Yopish</Button>

                    </Grid>
                </Box>
            </Box>

        </Dialog>
    )
}