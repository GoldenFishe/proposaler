import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comment } from './entities/comment.enity';
import { CommentLike } from './entities/commentLike.entity';
import { CommentDislike } from './entities/commentDislike.entity';
import { CommentFile } from './entities/commentFile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Comment,
      CommentLike,
      CommentDislike,
      CommentFile,
    ]),
  ],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
