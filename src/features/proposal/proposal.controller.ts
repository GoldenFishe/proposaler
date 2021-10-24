import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { ProposalService } from './proposal.service';
import { GetByIdParams } from './dto/getByIdParams';
import { CreateDto } from './dto/create.dto';

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
}
