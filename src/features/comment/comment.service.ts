import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './entities/comment.enity';
import { CreateDto } from './dto/create.dto';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}

  getByProposalId(id: number) {
    return this.commentRepository.find({ proposalId: id });
  }

  async create(createDto: CreateDto) {
    const comment = this.commentRepository.create(createDto);
    const { proposalId } = await this.commentRepository.save(comment);
    return this.getByProposalId(proposalId);
  }

  toggleLike(likeDto: LikeDto) {}

  toggleDislike(dislikeDto: DislikeDto) {}
}
