import { Http } from './http';
import { User } from '../types/User';

export namespace UserRequests {
  export function getUserById(id: number) {
    return Http.get<User>(`/user/${id}`);
  }
}
