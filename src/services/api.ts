import axios from "axios";
import { getArtworkById, getArtworks } from "./artworkService";

export const createApi = (url: string) => {
    const api = axios.create({
        baseURL: url
    })

    api.interceptors.response.use(
        response => response,
        error => Promise.reject(error)
    )

    return {
        getArtworks: <TResponse>(fields: string[]) => getArtworks<TResponse>(api, fields),
        getArtworkById: <TResponse>(id: string, fields: string[]) => getArtworkById<TResponse>(api, id, fields),
    }
}