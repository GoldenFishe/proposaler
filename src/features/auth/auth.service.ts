import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { SignUpDto } from './dto/signUp.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(id: User['id']) {
    const user = await this.userService.getById(id);
    user['accessToken'] = this.getAccessToken(user.username, user.id);
    return user;
  }

  async signUp(signUpDto: SignUpDto) {
    try {
      const user = await this.userService.create(signUpDto);
      user['accessToken'] = this.getAccessToken(user.username, user.id);
      return user;
    } catch (err) {
      return err;
    }
  }

  private getAccessToken(username: User['username'], id: User['id']) {
    const payload = { username, sub: id };
    return this.jwtService.sign(payload);
  }
}
