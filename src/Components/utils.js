import Axios from "axios"

export const myHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
}
export const baseApi = 'http://localhost:5000'

export const apiFetch = async ({ url, method, data, headers }) => {
    let requestConfig = { method: 'get', url: url }
    if (method) {
        requestConfig.method = method
        requestConfig.data = data
    }
    try {
        const requestHeaders = { ...myHeaders }
        const request = Axios({
            ...requestConfig,
            baseURL: baseApi,
            headers: requestHeaders,
            timeout: 50000,
            withCredentials: true
        });
        return request
    } catch (error) {
        console.log('Something wrong was happened', error)
    }
}