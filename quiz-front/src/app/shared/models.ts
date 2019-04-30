export interface IUser {
    id: number,
    usrname: string,
    email: string
}

export interface IPostShort {
    id: number,
    title: string,
    created_at: string,
    like_count: number
}

export interface IPostLong {
    id: number,
    title: string,
    body: string,
    created_at: string,
    like_count: number,
    created_by: IUser
}