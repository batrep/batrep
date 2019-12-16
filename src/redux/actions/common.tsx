export interface BaseAction {
    type: string,
}

export interface BaseError extends BaseAction {
    error: any
}