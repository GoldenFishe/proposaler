import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAll() {
    return 'users';
  }

  getById(id: number) {
    return `user with ${id} id`;
  }
}
