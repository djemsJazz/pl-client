import Axios from "axios"

const getHeaders = (token) => {
  return {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "Application/json",
    "Authorization": `Bearer ${token ? token : ""}`
  }
}

export const baseApi = 'http://localhost:5000'

export const apiFetch = async ({ url, method, data, headers }) => {
  let requestConfig = { method: 'get', url: url }
  if (method) {
    requestConfig.method = method
    requestConfig.data = data
  }
  const token = getToken();
  try {
    const requestHeaders = { ...getHeaders(token) }
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

const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }
  return token;
}
