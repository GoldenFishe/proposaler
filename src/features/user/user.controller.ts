import { Controller, Get, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { GetByIdParams } from './dto/getByIdParams';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getById(@Param() params: GetByIdParams) {
    return this.userService.getById(params.id);
  }
}
