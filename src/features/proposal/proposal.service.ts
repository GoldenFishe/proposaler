import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Proposal } from './entities/proposal.enity';
import { CreateDto } from './dto/create.dto';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';
import { ProposalLike } from './entities/proposalLike.entity';
import { ProposalDislike } from './entities/proposalDislike.entity';

@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(Proposal)
    private proposalRepository: Repository<Proposal>,
    @InjectRepository(ProposalLike)
    private likesRepository: Repository<ProposalLike>,
    @InjectRepository(ProposalDislike)
    private dislikesRepository: Repository<ProposalDislike>,
  ) {}

  getAll() {
    return this.proposalRepository.find();
  }

  getById(id: number) {
    return this.proposalRepository.findOne({ id });
  }

  async create(createDto: CreateDto) {
    const proposal = this.proposalRepository.create(createDto);
    const { id } = await this.proposalRepository.save(proposal);
    return this.getById(id);
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
