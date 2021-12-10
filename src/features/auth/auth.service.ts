import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { SignUpDto } from './dto/signUp.dto';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  signIn(user: User) {
    return this.format(user);
  }

  async signUp(signUpDto: SignUpDto) {
    const user = await this.userService.create(signUpDto);
    return this.format(user);
  }

  private format(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      id: user.id,
      username: user.username,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
