import { apiFetch } from '../Components/utils';
import { handlerError } from '../helpers/utils';

export const login = async (idToken, cb, errCb) => {
  try {
    const requestConfig = { method: 'POST', url: 'users/login', data: { idToken } };
    const response = await apiFetch(requestConfig);
    const { user, token } = response.data;
    cb({ user, token });
  } catch (error) {
    handlerError(error);
    errCb();
  }
};
export const getCurrentUser = async (cb, errCb) => {
  try {
    const requestConfig = { method: 'POST', url: 'users/current' };
    const response = await apiFetch(requestConfig);
    cb(response.data);
  } catch (error) {
    handlerError(error);
    errCb();
  }
};
