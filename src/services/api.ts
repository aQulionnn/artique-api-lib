import axios, { AxiosInstance } from "axios";
import { getArtworks, getArtworkById } from "./artworkService"

export const createApi = (url: string) => {
    const api = axios.create({
        baseURL: url
    })

    api.interceptors.response.use(
        response => response,
        error => Promise.reject(error)
    )

    return {
        getArtworks: () => getArtworks(api),
        getArtworkById: (id: string) => getArtworkById(api, id),
    }
}