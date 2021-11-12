import { FilesInterceptor } from '@nestjs/platform-express';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';

import { ProposalService } from './proposal.service';
import { GetByIdParams } from './dto/getByIdParams';
import { CreateDto } from './dto/create.dto';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';
import { getDiskStorage } from '../../utils/file';

const storage = getDiskStorage('proposals');

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

  @UseInterceptors(FilesInterceptor('files', 5, { storage }))
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create')
  create(
    @Body() createDto: CreateDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.proposalService.create(createDto, files);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('like')
  like(@Body() likeDto: LikeDto) {
    return this.proposalService.toggleLike(likeDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('dislike')
  dislike(@Body() dislikeDto: DislikeDto) {
    return this.proposalService.toggleDislike(dislikeDto);
  }
}
