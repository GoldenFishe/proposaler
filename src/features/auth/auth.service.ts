import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { SignInDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signUp.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  signIn(signInDto: SignInDto) {
    return this.userService.getByLoginAndPassword(signInDto);
  }

  signUp(signUpDto: SignUpDto) {
    return this.userService.create(signUpDto);
  }
}
