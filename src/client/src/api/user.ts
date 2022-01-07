import { Http } from './http';
import { UserType } from '../types/UserType';

export namespace UserRequests {
  export function getUserById(id: UserType['id']) {
    return Http.Instance.get<UserType>(`/user/${id}`);
  }

  export function getProfile() {
    return Http.Instance.get<UserType>(`/user/profile`);
  }

  export function updateProfile(changes: FormData) {
    return Http.Instance.patch<FormData, UserType>('/user/profile', changes);
  }
}
