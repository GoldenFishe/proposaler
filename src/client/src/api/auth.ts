import { Http } from './http';
import { UserType } from '../types/UserType';
import { authTokenManager } from '../utils/authTokenManager';

type SignInBody = {
  login: string;
  password: string;
};

type SignUpBody = {
  login: string;
  username: string;
  password: string;
};

type SignResponse = UserType & { accessToken: string };

export namespace AuthRequests {
  export async function signIn(login: string, password: string) {
    const user = await Http.Instance.post<SignInBody, SignResponse>(
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
    const user = await Http.Instance.post<SignUpBody, SignResponse>(
      'auth/sign-up',
      { login, username, password },
    );
    if (user) authTokenManager.setToken(user.accessToken);
    return user;
  }
}
