import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
  UseGuards,
  Request,
} from '@nestjs/common';

import { ProjectService } from './project.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateDto } from './dto/create.dto';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('create')
  create(@Body() createDto: CreateDto, @Request() req) {
    return this.projectService.create(createDto, req.user.id);
  }
}
