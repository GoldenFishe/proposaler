import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../../user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({ usernameField: 'login' });
  }

  async validate(login: string, password: string) {
    const user = await this.userService.getByLoginAndPassword({
      login,
      password,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
