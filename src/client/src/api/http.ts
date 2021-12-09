import Axios from 'axios';

export class Http {
  static async get<Response>(url: string) {
    return Axios.get<Response>(url)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }

  static post<Body, Response>(url: string, data: Body) {
    return Axios.post<Response>(url, data)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }
}
