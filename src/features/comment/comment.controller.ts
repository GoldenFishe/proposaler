import { FilesInterceptor } from '@nestjs/platform-express';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { CreateDto } from './dto/create.dto';
import { GetByIdParams } from './dto/getByIdParams';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';

import { getDiskStorage } from '../../utils/file';

const storage = getDiskStorage('comments');

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  getById(@Param() params: GetByIdParams) {
    return this.commentService.getByProposalId(params.id);
  }

  @UseInterceptors(FilesInterceptor('files', 5, { storage }))
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create')
  create(
    @Body() createDto: CreateDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.commentService.create(createDto, files);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('like')
  like(@Body() likeDto: LikeDto) {
    return this.commentService.toggleLike(likeDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('dislike')
  dislike(@Body() dislikeDto: DislikeDto) {
    return this.commentService.toggleDislike(dislikeDto);
  }
}
