import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { UserModule } from '../user/user.module';
import { Project } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), UserModule],
  providers: [ProjectService, JwtStrategy],
  controllers: [ProjectController],
})
export class ProjectModule {}
