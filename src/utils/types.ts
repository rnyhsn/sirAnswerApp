
export interface Response {
    success: boolean,
    message: string,
    statusCode: number,
    payload?: Record<string, unknown>,
    error?: Record<string, unknown>
}