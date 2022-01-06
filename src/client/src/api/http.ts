import Axios from 'axios';

import { authTokenManager } from '../utils/authTokenManager';
import { notificationsModel } from '../models/NotificationsModel';

export class Http {
  private static getHeaders(withAuth: boolean) {
    const headers: Record<string, string> = {};
    if (withAuth) {
      headers['Authorization'] = `Bearer ${authTokenManager.getToken()}`;
    }
    return headers;
  }

  static async get<Response>(url: string) {
    return Axios.get<Response>(url)
      .then((res) => res.data)
      .catch((err) => {
        notificationsModel.add({
          type: 'error',
          message: err.response.data.message,
        });
        return console.error(err);
      });
  }

  static post<Body, Response>(url: string, data: Body, withAuth = true) {
    const headers = Http.getHeaders(withAuth);
    return Axios.post<Response>(url, data, { headers })
      .then((res) => res.data)
      .catch((err) => {
        notificationsModel.add({
          type: 'error',
          message: err.response.data.message,
        });
        return console.error(err);
      });
  }
}
