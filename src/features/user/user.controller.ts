import { Controller, Get, Param, Req } from '@nestjs/common';

import { UserService } from './user.service';
import { GetByIdParams } from './dto/getByIdParams';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  @Get(':id')
  getById(@Param() params: GetByIdParams) {
    return this.userService.getById(params.id);
  }
}
