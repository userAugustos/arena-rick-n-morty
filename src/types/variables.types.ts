export interface variablesSchema {
    page: number,
    filter: {
        name?: string
        status?: string
        species?: string
        type?: string
        gender?: string
    }
}
