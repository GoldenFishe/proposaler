import { Controller, Get, Param, Query } from "@nestjs/common";
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.userService.getById(id);
  }
}
