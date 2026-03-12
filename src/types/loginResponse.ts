export interface loginResponse{
    id: string,
    email: string,
    fullname: string,
    active: boolean,
    role: "CUSTOMER" | "STAFF",
    account: {
        jwt: string
    }
}
