import {usePowerUserStore} from "@/store/powerusers.store";
import {Box} from "@mui/material";
import {UserItem} from "@/views/admin/components/users/components/userItem";

const styles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}

export const UserList = () => {
    const {powerUsers} = usePowerUserStore()

    return (
        <Box sx={ styles }>
            { powerUsers.sort((a, b) => a.id - b.id).map(powerUser => <UserItem powerUser={ powerUser }
                                                                                key={ powerUser.id }/>) }
        </Box>
    )
}