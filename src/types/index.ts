
export type LoginForm = {
    username: string;
    password: string;
}

export interface IUser {
    username: string;
    email: string;
    id: number;
    first_name: string;
    last_name: string;
}

export interface IAppStore {
    user: IUser | null,
    setUser: (user: IUser | null) => void,
    error: null | string,
    setError: (error: null | string) => void,
    info: null | string,
    setInfo: (error: null | string) => void,
    loading: boolean,
    setLoading: (loading: boolean) => void
}

export interface IModelStore {
    models: IModel[],
    setModels: (models: IModel[]) => void
}

export interface IPowerUserStore {
    powerUsers: IPowerUser[],
    setPowerUsers: (models: IPowerUser[]) => void
}

export interface IPowerUser {
    id?:number,
    username: string,
    password: string
}

export interface IModel {
    id: number,
    name: string,
    description: string,
    file1: string,
    file2: string,
    file3: string,
    file4: string,
    file5: string,
    file6: string,
    file7: string,
    file8: string,
    file9: string,
    file10: string,
    order: number,
    created_at: string
}