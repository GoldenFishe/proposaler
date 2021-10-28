import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Patch,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { CreateDto } from './dto/create.dto';
import { GetByIdParams } from './dto/getByIdParams';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  getById(@Param() params: GetByIdParams) {
    return this.commentService.getByProposalId(params.id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/create')
  create(@Body() createDto: CreateDto) {
    return this.commentService.create(createDto);
  }

  @Patch('like')
  like(@Body() likeDto: LikeDto) {
    return this.commentService.toggleLike(likeDto);
  }

  @Patch('dislike')
  dislike(@Body() dislikeDto: DislikeDto) {
    return this.commentService.toggleDislike(dislikeDto);
  }
}
