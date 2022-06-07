import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Get,
  UseInterceptors,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';

import { ProjectService } from './project.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateDto } from './dto/create.dto';
import { Proposal } from '../proposal/entities/proposal.enity';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create')
  create(@Body() createDto: CreateDto, @Request() req) {
    return this.projectService.create(createDto, req.user.id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getByProposalId(@Query('proposal') proposalId: Proposal['id']) {
    return this.projectService.getByProposalId(proposalId);
  }
}
