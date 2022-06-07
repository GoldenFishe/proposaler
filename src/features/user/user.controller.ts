import { FilesInterceptor } from '@nestjs/platform-express';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  Req,
  Request,
  SerializeOptions,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { UserService } from './user.service';
import { GetByIdParamsDto } from './dto/getByIdParams.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/updateUser.dto';
import { getDiskStorage } from '../../utils/file';

const storage = getDiskStorage('avatars');

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @SerializeOptions({ groups: ['self'] })
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return this.userService.getById(req.user.id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  getById(@Param() params: GetByIdParamsDto) {
    return this.userService.getById(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @SerializeOptions({ groups: ['self'] })
  @UseInterceptors(FilesInterceptor('avatar', 1, { storage }))
  @UseInterceptors(ClassSerializerInterceptor)
  @Patch('profile')
  updateProfile(
    @Req() req,
    @Body() body: UpdateUserDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.userService.update(req.user.id, body, files[0]);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findUser(@Request() req, @Query('username') username: string) {
    return this.userService.find(username, req.user.id);
  }
}
