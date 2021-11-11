import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './entities/comment.enity';
import { CreateDto } from './dto/create.dto';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';
import { CommentLike } from './entities/commentLike.entity';
import { CommentDislike } from './entities/commentDislike.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(CommentLike)
    private likesRepository: Repository<CommentLike>,
    @InjectRepository(CommentDislike)
    private dislikesRepository: Repository<CommentDislike>,
  ) {}

  getByProposalId(id: number) {
    return this.commentRepository.find({ proposalId: id });
  }

  async create(createDto: CreateDto) {
    const comment = this.commentRepository.create(createDto);
    const { proposalId } = await this.commentRepository.save(comment);
    return this.getByProposalId(proposalId);
  }

  async toggleLike(likeDto: LikeDto) {
    const like = this.likesRepository.create(likeDto);
    const isLiked = await this.likesRepository.findOne(like);
    if (isLiked) {
      await this.likesRepository.delete(isLiked);
    } else {
      await this.likesRepository.save(like);
    }
    return 200;
  }

  async toggleDislike(dislikeDto: DislikeDto) {
    const dislike = this.dislikesRepository.create(dislikeDto);
    const isDisliked = await this.dislikesRepository.findOne(dislike);
    if (isDisliked) {
      await this.dislikesRepository.delete(isDisliked);
    } else {
      await this.dislikesRepository.save(dislike);
    }
    return 200;
  }
}
