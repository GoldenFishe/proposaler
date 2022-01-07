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
  UseGuards,
  Request,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { CreateDto } from './dto/create.dto';
import { GetByIdParams } from './dto/getByIdParams';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';

import { getDiskStorage } from '../../utils/file';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

const storage = getDiskStorage('comments');

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  getById(@Param() params: GetByIdParams) {
    // TODO: userId
    return this.commentService.getByProposalId(params.id, 1);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files', 5, { storage }))
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create')
  create(
    @Body() createDto: CreateDto,
    @UploadedFiles() files: Express.Multer.File[],
    @Request() req,
  ) {
    return this.commentService.create(createDto, files, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('like')
  like(@Body() likeDto: LikeDto, @Request() req) {
    return this.commentService.toggleLike(likeDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('dislike')
  dislike(@Body() dislikeDto: DislikeDto, @Request() req) {
    return this.commentService.toggleDislike(dislikeDto, req.user.id);
  }
}
