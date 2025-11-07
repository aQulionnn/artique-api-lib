import type { AxiosInstance } from "axios"
import type { QueryResponse } from "../types/artwork"


export const getArtworks = async <TResponse>(api: AxiosInstance, fields: string[]) => {
    const query = `
        query {
            artworks { 
                ${fields.join(" ") } 
            }
        }
    `

    const { data } = await api.post<QueryResponse<TResponse>>("", { query })
    return data
}

export const getArtworkById = async <TResponse>(api: AxiosInstance, id: string, fields: string[]) => {
    const query = `
        query {
            artworkById(id: "${id}") {
                ${fields.join(" ") }            
            }
        }
    `

    const variables = {
        id: id,
    }

    const { data } =  await api.post<QueryResponse<TResponse>>("", { query, variables })
    return data
}