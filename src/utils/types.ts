
export interface Response {
    success: boolean,
    message: string,
    statusCode: number,
    payload?: Record<string, unknown>,
    error?: Record<string, unknown>
}


export interface IUser {
    name: string,
    email: String,
    image: string,
    role: string 
}