import useAxios from "@/services";
import { useAppStore } from "@/store/index.store";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useModelHook } from "@/hooks/models/model.hook";
import { usePowerUserHook } from "@/hooks/poweruser/poweruser.hook";
export const useAuthHook = () => {
    const { fetchData } = useAxios();
    const { user, setUser, setError, setInfo } = useAppStore();
    const { getModels } = useModelHook();
    const { getPowerUsers } = usePowerUserHook();
    const history = useHistory();
    const login = useCallback(async (data) => {
        const user = await fetchData("/accounts/auth/", "POST", data);
        if (user) {
            setUser(user);
            history.push("/admin/model");
        }
    }, []);
    const check = useCallback(async (admin) => {
        const user = await fetchData("/accounts/auth/", "GET", null, {}, false, true, false);
        if (user) {
            setUser(user);
            await Promise.all([await getPowerUsers(), await getModels()]);
        }
        if (!admin && user)
            history.push('/admin/model');
        if (admin && !user)
            history.push('/auth/login');
        return !!user;
    }, []);
    const logout = useCallback(async () => {
        if (user) {
            await fetchData(`/accounts/auth/${user.id}`, "DELETE");
            setUser(null);
            history.push("/auth/login");
        }
    }, [user]);
    return { login, logout, check };
};
