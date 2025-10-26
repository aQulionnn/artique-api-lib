import {AxiosInstance} from "axios";
import type {GetArtworkByIdResponse, GetArtworksResponse} from "../types/artwork";


export const getArtworks = async (api: AxiosInstance) => {
    const { data } = await api.get<GetArtworksResponse[]>("/artworks")
    return data
}

export const getArtworkById = async (api: AxiosInstance, id: string) => {
    const {data} = await api.get<GetArtworkByIdResponse>("/artworks/" + id)
    return data
}