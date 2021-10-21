import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  getAll() {
    return 'all comments';
  }

  getById(id: number) {
    return id;
  }

  create() {
    return 'create';
  }

  
}
