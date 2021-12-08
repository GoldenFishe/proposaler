import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Proposal } from './entities/proposal.enity';
import { CreateDto } from './dto/create.dto';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';
import { ProposalLike } from './entities/proposalLike.entity';
import { ProposalDislike } from './entities/proposalDislike.entity';
import { ProposalFile } from './entities/proposalFile.entity';

@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(Proposal)
    private proposalRepository: Repository<Proposal>,
    @InjectRepository(ProposalLike)
    private likeRepository: Repository<ProposalLike>,
    @InjectRepository(ProposalDislike)
    private dislikeRepository: Repository<ProposalDislike>,
    @InjectRepository(ProposalFile)
    private fileRepository: Repository<ProposalFile>,
  ) {}

  async getAll() {
    const proposals = await this.proposalRepository.find();
    return proposals.map(this.formatProposal);
  }

  async getById(id: number) {
    const proposal = await this.proposalRepository.findOne({ id });
    return this.formatProposal(proposal);
  }

  async create(createDto: CreateDto, files: Express.Multer.File[]) {
    const proposal = this.proposalRepository.create(createDto);
    const { id } = await this.proposalRepository.save(proposal);
    const saveFilePromises = files.map((file) => this.saveFile(file.path, id));
    await Promise.all(saveFilePromises);
    return this.getById(id);
  }

  async toggleLike(likeDto: LikeDto) {
    const like = this.likeRepository.create(likeDto);
    const isLiked = await this.likeRepository.findOne(like);
    if (isLiked) {
      await this.likeRepository.delete(isLiked);
    } else {
      await this.likeRepository.save(like);
    }
    return 200;
  }

  async toggleDislike(dislikeDto: DislikeDto) {
    const dislike = this.dislikeRepository.create(dislikeDto);
    const isDisliked = await this.dislikeRepository.findOne(dislike);
    if (isDisliked) {
      await this.dislikeRepository.delete(isDisliked);
    } else {
      await this.dislikeRepository.save(dislike);
    }
    return 200;
  }

  private saveFile(filename: string, proposalId: number) {
    const file = this.fileRepository.create({ filename, proposalId });
    return this.fileRepository.save(file);
  }

  private formatProposal(proposal: Proposal) {
    const isLiked = Boolean(proposal.likes.find((like) => like.authorId === 1));
    const isDisliked = Boolean(proposal.dislikes.find((dislike) => dislike.authorId === 1));
    return {
      id: proposal.id,
      author: proposal.author,
      createDatetime: proposal.createDatetime,
      description: proposal.description,
      files: proposal.files,
      title: proposal.title,
      likesAmount: proposal.likes.length,
      dislikesAmount: proposal.dislikes.length,
      isLiked,
      isDisliked,
    };
  }
}
