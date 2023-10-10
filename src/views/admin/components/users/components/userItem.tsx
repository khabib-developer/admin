import React, {useState} from "react";
import {IPowerUser, LoginForm} from "@/types";
import {Box, Button, Paper, TextField} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import {usePowerUserHook} from "@/hooks/poweruser/poweruser.hook";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useAppStore} from "@/store/index.store";

export const UserItem: React.FC<{ powerUser?: IPowerUser | undefined }> = ({powerUser}) => {
    const [showPassword, setShowPassword] = useState(false)
    const {createOrUpdatePowerUser, updatePowerUsers, deletePowerUsers} = usePowerUserHook()
    const {setError} = useAppStore()

    const {register, handleSubmit, reset, formState: {errors},} = useForm<LoginForm>({
        resolver: yupResolver(
            yup.object({
                username: yup.string().required().min(2),
            }) as any
        )
    } as any)

    const onSubmit = async (data: any) => {
        if(powerUser) {
            if(data.password.trim() === "")
                return await updatePowerUsers({username: data.username, id: powerUser.id})
            data = {...powerUser, ...data}
        } else {
            if(data.password.trim() === "") return setError("Password is empty")
        }

        await createOrUpdatePowerUser(data, !!powerUser)
        if(!powerUser) reset({username:"", password:""})
    }

    const onDelete = async () => powerUser && await deletePowerUsers(powerUser.id)

    return (
        <Paper sx={ {width: "20%", mt: 2} } elevation={ 3 }>
            <Box component="form" onSubmit={ handleSubmit(onSubmit) } py={ 1 } px={ 3 } pt={ 2 }>
                <Box>
                    <TextField { ...register("username") } defaultValue={ powerUser ? powerUser.username : "" }
                               sx={ {width: "100%"} }
                               variant="standard" placeholder="Username"/>
                </Box>
                <Box pt={ 2 }>
                    <TextField
                        sx={ {width: "100%"} }
                        defaultValue={  "" }
                        { ...register("password") }
                        variant="standard"
                        placeholder={ powerUser ? "":"Password" }
                        type={ showPassword ? "text" : "password" }
                        InputProps={ {
                            endAdornment: <InputAdornment sx={ {cursor: "pointer"} }
                                                          onClick={ () => setShowPassword(prev => !prev) }
                                                          position="start">{ showPassword ? <VisibilityOff/> :
                                <Visibility/> }</InputAdornment>,
                        } }
                    />
                </Box>
                <Box sx={ {display: "flex", justifyContent: "end", pt: 1} }>
                    {
                        powerUser ? <>
                            <Button type="submit" sx={ {px: 2} }>
                                Yangilash
                            </Button>
                            <Button onClick={onDelete} color="error">
                                O'chirish
                            </Button>
                        </> : <Button type="submit">
                            Yaratish
                        </Button>
                    }

                </Box>
            </Box>
        </Paper>
    )
}