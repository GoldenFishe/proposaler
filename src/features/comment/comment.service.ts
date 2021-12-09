import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './entities/comment.enity';
import { CreateDto } from './dto/create.dto';
import { LikeDto } from './dto/like.dto';
import { DislikeDto } from './dto/dislike.dto';
import { CommentLike } from './entities/commentLike.entity';
import { CommentDislike } from './entities/commentDislike.entity';
import { CommentFile } from './entities/commentFile.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(CommentLike)
    private likesRepository: Repository<CommentLike>,
    @InjectRepository(CommentDislike)
    private dislikesRepository: Repository<CommentDislike>,
    @InjectRepository(CommentFile)
    private fileRepository: Repository<CommentFile>,
  ) {}

  async getByProposalId(id: number) {
    const comments = await this.commentRepository.find({ proposalId: id });
    return comments.map(this.formatComment).sort((a, b) => {
      const aTime = new Date(a.createDatetime).getTime();
      const bTime = new Date(b.createDatetime).getTime();
      return bTime - aTime;
    });
  }

  async getById(id: number) {
    const comment = await this.commentRepository.findOne({ id });
    return this.formatComment(comment);
  }

  async create(createDto: CreateDto, files: Express.Multer.File[]) {
    const comment = this.commentRepository.create(createDto);
    const { proposalId } = await this.commentRepository.save(comment);
    const saveFilePromises = files.map((file) => {
      return this.saveFile(file.path, proposalId);
    });
    await Promise.all(saveFilePromises);
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
    await this.dislikesRepository.delete({ commentId: likeDto.commentId });
    return this.getById(likeDto.commentId);
  }

  async toggleDislike(dislikeDto: DislikeDto) {
    const dislike = this.dislikesRepository.create(dislikeDto);
    const isDisliked = await this.dislikesRepository.findOne(dislike);
    if (isDisliked) {
      await this.dislikesRepository.delete(isDisliked);
    } else {
      await this.dislikesRepository.save(dislike);
    }
    await this.likesRepository.delete({ commentId: dislikeDto.commentId });
    return this.getById(dislikeDto.commentId);
  }

  private async saveFile(filename: string, commentId: number) {
    const file = this.fileRepository.create({ filename, commentId });
    await this.fileRepository.save(file);
    return this.getById(commentId);
  }

  private formatComment(comment: Comment) {
    const isLiked = Boolean(comment.likes.find((like) => like.authorId === 1));
    const isDisliked = Boolean(
      comment.dislikes.find((dislike) => dislike.authorId === 1),
    );
    return {
      id: comment.id,
      author: comment.author,
      createDatetime: comment.createDatetime,
      files: comment.files,
      comment: comment.comment,
      likesAmount: comment.likes.length,
      dislikesAmount: comment.dislikes.length,
      isLiked,
      isDisliked,
    };
  }
}
