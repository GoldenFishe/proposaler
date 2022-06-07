import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Message } from './enities/message.entity';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UserModule],
  providers: [MessageService, JwtStrategy],
  controllers: [MessageController],
})
export class MessageModule {}
