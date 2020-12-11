import Axios from 'axios'
import { myHeaders, baseApi, apiFetch } from '../Components/utils'
import { handlerError } from '../helpers/utils'

export const signUpUser = async (data, cb, errCb) => {
    try {
        await Axios.post(`${baseApi}/users/signup`, data, { headers: myHeaders })
        cb()
    } catch (error) {
       handlerError(error);
        errCb()
    }
}
export const verifyCode = async (data, cb, errCb) => {
    try {
        const { data: { token, user } } = await Axios.post(`${baseApi}/users/checkcode`, data, { headers: myHeaders })
        cb(token, user)
    } catch (error) {
       handlerError(error);
        errCb()
    }
}
export const login = async (idToken, cb, errCb) => {
    try {
        const requestConfig = {method: 'POST', url: 'users/login', data: { idToken } };
        const response = await apiFetch(requestConfig);
        const { user, token } = response.data
        cb({ user, token })
    } catch (error) {
        handlerError(error);
        errCb()
    }
}
export const getCurrentUser = async (token, cb, errCb) => {
    try {
        const requestConfig = {method: 'POST', url: 'users/current' };
        const response = await apiFetch(requestConfig);
        cb(response.data);
    } catch (error) {
        handlerError(error);
        errCb()
    }
}