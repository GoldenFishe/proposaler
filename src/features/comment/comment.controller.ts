import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { CreateDto } from './dto/create.dto';
import { GetByIdParams } from './dto/getByIdParams';

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
}
