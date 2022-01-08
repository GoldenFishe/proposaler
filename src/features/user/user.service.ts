import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { SignUpDto } from '../auth/dto/signUp.dto';
import { SignInDto } from '../auth/dto/signIn.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getById(id: number) {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new HttpException('UserType not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(
    id: User['id'],
    changes: UpdateUserDto,
    file: Express.Multer.File,
  ) {
    if (file) changes['avatar'] = file.filename;
    await this.userRepository.update({ id }, changes);
    return this.getById(id);
  }

  create(signUpDto: SignUpDto) {
    const user = this.userRepository.create(signUpDto);
    return this.userRepository.save(user);
  }

  async getByLoginAndPassword(signInDto: SignInDto) {
    return this.userRepository.findOne(signInDto);
  }
}
