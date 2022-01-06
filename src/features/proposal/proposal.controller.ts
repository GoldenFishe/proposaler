import { FilesInterceptor } from '@nestjs/platform-express';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { ProposalService } from './proposal.service';
import { GetByIdParams } from './dto/getByIdParams';
import { CreateDto } from './dto/create.dto';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';
import { getDiskStorage } from '../../utils/file';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

const storage = getDiskStorage('proposals');

@Controller('proposal')
export class ProposalController {
  constructor(private proposalService: ProposalService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAll() {
    // TODO: userId
    return this.proposalService.getAll(1);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  getById(@Param() params: GetByIdParams) {
    // TODO: userId
    return this.proposalService.getById(params.id, 1);
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
    return this.proposalService.create(createDto, files, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('like')
  like(@Body() likeDto: LikeDto, @Request() req) {
    return this.proposalService.toggleLike(likeDto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('dislike')
  dislike(@Body() dislikeDto: DislikeDto, @Request() req) {
    return this.proposalService.toggleDislike(dislikeDto, req.user.userId);
  }
}
