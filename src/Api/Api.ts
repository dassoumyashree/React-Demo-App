import axios from 'axios';
import { BASE_URL } from './ApiConstants';


const axiosClient = axios.create({
    baseURL: BASE_URL
})

export async function getAsync(url: string) {
    const response = await axiosClient.get(url);
    return response;
}