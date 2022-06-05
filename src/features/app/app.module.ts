import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ProposalModule } from '../proposal/proposal.module';
import { CommentModule } from '../comment/comment.module';
import { ProjectModule } from '../project/project.module';

const typeOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: '666666',
  database: 'proposaler',
  entities: [],
  synchronize: true,
  logging: 'all',
  autoLoadEntities: true,
});

@Module({
  imports: [
    typeOrmModule,
    AuthModule,
    UserModule,
    ProposalModule,
    CommentModule,
    ProjectModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'static'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
