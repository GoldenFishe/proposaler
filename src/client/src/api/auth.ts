import { Http } from './http';
import { Author } from '../types/Author';

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
  export function signIn(login: string, password: string) {
    return Http.post<SignIn, Author & { accessToken: string }>(
      '/auth/sign-in',
      { login, password },
    );
  }

  export function signUp(login: string, username: string, password: string) {
    return Http.post<SignUp, Author>('auth/sign-up', {
      login,
      username,
      password,
    });
  }
}
