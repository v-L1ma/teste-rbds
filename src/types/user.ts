export interface User {
    id: string,
    email: string,
    fullname: string,
    active: boolean,
    role: string,
    externalUserId: string | null
}