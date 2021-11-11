import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { ProposalService } from './proposal.service';
import { GetByIdParams } from './dto/getByIdParams';
import { CreateDto } from './dto/create.dto';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';

@Controller('proposal')
export class ProposalController {
  constructor(private proposalService: ProposalService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAll() {
    return this.proposalService.getAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  getById(@Param() params: GetByIdParams) {
    return this.proposalService.getById(params.id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create')
  create(@Body() createDto: CreateDto) {
    return this.proposalService.create(createDto);
  }

  @Post('like')
  like(@Body() likeDto: LikeDto) {
    return this.proposalService.toggleLike(likeDto);
  }

  @Post('dislike')
  dislike(@Body() dislikeDto: DislikeDto) {
    return this.proposalService.toggleDislike(dislikeDto);
  }
}
