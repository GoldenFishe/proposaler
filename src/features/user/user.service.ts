import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { SignUpDto } from '../auth/dto/signUp.dto';
import { SignInDto } from '../auth/dto/signIn.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll() {
    return this.userRepository.find();
  }

  getById(id: number) {
    return this.userRepository.find({ id });
  }

  create(signUpDto: SignUpDto) {
    const user = this.userRepository.create(signUpDto);
    return this.userRepository.save(user);
  }

  async getByLoginAndPassword(signInDto: SignInDto) {
    return this.userRepository.findOne(signInDto);
  }
}
