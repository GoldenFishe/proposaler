import Axios from 'axios';

export class Http {
  static async get<T>(url: string) {
    return Axios.get<T>(url)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }

  static post<T>(url: string, data: T) {
    return Axios.post(url, data)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }
}
