import Axios from 'axios';
import { handlerError } from '../helpers/utils';

const getHeaders = (token) => ({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'Application/json',
  Authorization: `Bearer ${token || ''}`,
});

const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }
  return token;
};

export const baseApi = 'http://localhost:5000';

export const apiFetch = async ({
  url, method, data,
}) => {
  const requestConfig = { method: 'get', url };
  if (method) {
    requestConfig.method = method;
    requestConfig.data = data;
  }
  try {
    const token = await getToken();
    const requestHeaders = { ...getHeaders(token) };
    const request = Axios({
      ...requestConfig,
      baseURL: baseApi,
      headers: requestHeaders,
      timeout: 50000,
      withCredentials: true,
    });
    return request;
  } catch (error) {
    handlerError(error);
    return null;
  }
};
