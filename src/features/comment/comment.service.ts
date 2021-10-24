import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './comment.enity';
import { CreateDto } from './dto/create.dto';

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
}
