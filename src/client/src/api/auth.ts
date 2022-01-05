import { Http } from './http';
import { User } from '../types/User';
import { authTokenManager } from '../utils/authTokenManager';

type SignIn = {
  login: string;
  password: string;
};

type SignUp = {
  login: string;
  username: string;
  password: string;
};

export namespace AuthRequests {
  export async function signIn(login: string, password: string) {
    const user = await Http.post<SignIn, User & { accessToken: string }>(
      '/auth/sign-in',
      { login, password },
    );
    if (user) authTokenManager.setToken(user.accessToken);
    return user;
  }

  export async function signUp(
    login: string,
    username: string,
    password: string,
  ) {
    const user = await Http.post<SignUp, User & { accessToken: string }>(
      'auth/sign-up',
      { login, username, password },
    );
    if (user) authTokenManager.setToken(user.accessToken);
    return user;
  }
}
