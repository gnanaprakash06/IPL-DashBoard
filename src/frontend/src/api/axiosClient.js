import axios from "axios";

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
});

axiosClient.interceptors.request.use((config) => {
    return config;
});
