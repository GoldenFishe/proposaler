import Axios, { AxiosError } from 'axios';

import { authTokenManager } from '../utils/authTokenManager';
import { notificationsModel } from '../models/NotificationsModel';

type HttpError = {
  message: string;
  statusCode: number;
};

export class Http {
  private static instance: Http | undefined;
  private prefix: '/api';

  private constructor() {
    this.prefix = '/api';
  }

  static get Instance() {
    this.instance = this.instance ? this.instance : new Http();
    return this.instance;
  }

  private getHeaders(token: string | null) {
    const headers: Record<string, string> = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  async get<Response>(url: string, withAuth = true) {
    const token = withAuth ? authTokenManager.getToken() : null;
    const headers = this.getHeaders(token);
    return Axios.get<Response>(`${this.prefix}${url}`, { headers })
      .then((res) => res.data)
      .catch(this.handleError);
  }

  post<Body, Response>(url: string, data: Body, withAuth = true) {
    const token = withAuth ? authTokenManager.getToken() : null;
    const headers = this.getHeaders(token);
    return Axios.post<Response>(`${this.prefix}${url}`, data, { headers })
      .then((res) => res.data)
      .catch(this.handleError);
  }

  patch<Body, Response>(url: string, data: Body, withAuth = true) {
    const token = withAuth ? authTokenManager.getToken() : null;
    const headers = this.getHeaders(token);
    return Axios.patch<Response>(`${this.prefix}${url}`, data, { headers })
      .then((res) => res.data)
      .catch(this.handleError);
  }

  private handleError(err: AxiosError<HttpError>) {
    if (err.response) {
      const { data, status } = err.response;
      if (status === 401) {
        authTokenManager.deleteToken();
      }
      notificationsModel.add({
        type: 'error',
        message: data.message,
      });
    }
    return console.error(err);
  }
}
