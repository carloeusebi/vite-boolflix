import axios from 'axios';
import { baseURL, API_KEY } from '../assets/data';

export const axiosInstance = axios.create({
    baseURL,
    params: {},
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});
