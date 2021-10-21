import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ProposalModule } from '../proposal/proposal.module';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [AuthModule, UserModule, ProposalModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
