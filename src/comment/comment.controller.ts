import { Controller, Get, Param } from '@nestjs/common';

import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}
  @Get()
  getAll() {
    return this.commentService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.commentService.getById(id);
  }
}
