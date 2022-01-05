import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { SignUpDto } from '../auth/dto/signUp.dto';
import { SignInDto } from '../auth/dto/signIn.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAll() {
    const users = await this.userRepository.find();
    return users.map(this.format);
  }

  async getById(id: number) {
    const user = await this.userRepository.findOne({ id });
    return this.format(user);
  }

  create(signUpDto: SignUpDto) {
    const user = this.userRepository.create(signUpDto);
    return this.userRepository.save(user);
  }

  async getByLoginAndPassword(signInDto: SignInDto) {
    return this.userRepository.findOne(signInDto);
  }

  private format(user: User) {
    return {
      id: user.id,
      username: user.username,
    };
  }
}
