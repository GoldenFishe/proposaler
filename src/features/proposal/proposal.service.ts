import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async getAll(userId: number | null) {
    const proposals = await this.proposalRepository.find({
      order: { createDatetime: 'DESC' },
    });
    return proposals.map((proposal) => this.formatProposal(proposal, userId));
  }

  async getById(id: number, userId: number) {
    const proposal = await this.proposalRepository.findOne({ id });
    if (!proposal) {
      throw new HttpException('Proposal not found', HttpStatus.NOT_FOUND);
    }
    return this.formatProposal(proposal, userId);
  }

  async create(
    createDto: CreateDto,
    files: Express.Multer.File[],
    authorId: number,
  ) {
    const proposal = this.proposalRepository.create({ ...createDto, authorId });
    const { id } = await this.proposalRepository.save(proposal);
    const saveFilePromises = files.map((file) => {
      return this.saveFile(file.path, id);
    });
    await Promise.all(saveFilePromises);
    return this.getById(id, authorId);
  }

  async toggleLike(likeDto: LikeDto, authorId: number) {
    const like = this.likeRepository.create({ ...likeDto, authorId });
    const isLiked = await this.likeRepository.findOne(like);
    if (isLiked) {
      await this.likeRepository.delete(isLiked);
    } else {
      await this.likeRepository.save(like);
    }
    await this.dislikeRepository.delete({
      proposalId: likeDto.proposalId,
      authorId,
    });
    return this.getById(likeDto.proposalId, authorId);
  }

  async toggleDislike(dislikeDto: DislikeDto, authorId: number) {
    const dislike = this.dislikeRepository.create({ ...dislikeDto, authorId });
    const isDisliked = await this.dislikeRepository.findOne(dislike);
    if (isDisliked) {
      await this.dislikeRepository.delete(isDisliked);
    } else {
      await this.dislikeRepository.save(dislike);
    }
    await this.likeRepository.delete({
      proposalId: dislike.proposalId,
      authorId,
    });
    return this.getById(dislikeDto.proposalId, authorId);
  }

  private async saveFile(filename: string, proposalId: number) {
    const file = this.fileRepository.create({ filename, proposalId });
    return this.fileRepository.save(file);
  }

  private formatProposal(proposal: Proposal, userId: number) {
    const isLiked = Boolean(
      proposal.likes.find((like) => like.authorId === userId),
    );
    const isDisliked = Boolean(
      proposal.dislikes.find((dislike) => dislike.authorId === userId),
    );
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
