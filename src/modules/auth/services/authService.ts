import { postData } from '@/modules/chore/services/HandleAPI';
import { Server1API } from '@/modules/chore/config/constants';
import type {
  LoggedUser,
  LoginInterface,
  SignUpInterface,
} from '../interfaces/LoginInterface';

export const logoutService = () => {
  return postData({
    key: 'logout',
    url: `${Server1API}/auth/logout`,
    method: 'GET',
  });
};
export const loginService = () => {
  return postData<LoggedUser, LoginInterface>({
    key: 'login',
    url: `${Server1API}/auth/login`,
    method: 'POST',
  });
};
export const signUpService = () => {
  return postData<LoggedUser, SignUpInterface>({
    key: 'sign-up',
    url: `${Server1API}/users`,
    method: 'POST',
  });
};

export const verifyEmailService = ({ token }: { token: string }) => {
  return postData({
    key: 'verify-email',
    url: `${Server1API}/auth/verify-email/${token}`,
    method: 'GET',
  });
};
