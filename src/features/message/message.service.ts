import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Message } from './enities/message.entity';
import { User } from '../user/entities/user.entity';
import { MessageDto } from './dto/message.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    private userService: UserService,
  ) {}

  async getByUser(id: User['id']) {
    const recipient = await this.userService.getById(id);
    return this.messageRepository.find({ recipient });
  }

  async create(message: MessageDto, id: User['id']) {
    const [recipient, sender] = await Promise.all([
      this.userService.getById(message.recipient),
      this.userService.getById(id),
    ]);
    const messageEntity = this.messageRepository.create({
      text: message.text,
      recipient: recipient,
      sender: sender,
    });

    return this.messageRepository.save(messageEntity);
  }
}
