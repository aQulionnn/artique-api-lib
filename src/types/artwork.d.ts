export type QueryResponse<TResponse> = {
    data: T
    errors?: { message: string }[]
}