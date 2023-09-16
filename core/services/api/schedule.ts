import { AxiosRequestConfig } from "axios"
import { apiClient } from "./clients"

type Event = {
    id: string,
    start: string,
    end: string,
    title: string,
    type: string,
    description: string,
    imageUrl: string,
    location:string,
}

const getSchedule = async (config?: AxiosRequestConfig) => {
    const { data } = await apiClient.request<Event[]>({
        ...config,
        method: 'GET',
        url: `/api/schedule`,
    })

    return data
}

export { getSchedule }
export type { Event }

