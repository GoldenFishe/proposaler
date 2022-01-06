import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async getByProposalId(id: number, userId: number) {
    const comments = await this.commentRepository.find({ proposalId: id });
    return comments
      .map((comment) => this.formatComment(comment, userId))
      .sort((a, b) => {
        const aTime = new Date(a.createDatetime).getTime();
        const bTime = new Date(b.createDatetime).getTime();
        return bTime - aTime;
      });
  }

  async getById(id: number, userId: number) {
    const comment = await this.commentRepository.findOne({ id });
    if (!comment) {
      throw new HttpException('Comments not found', HttpStatus.NOT_FOUND);
    }
    return this.formatComment(comment, userId);
  }

  async create(
    createDto: CreateDto,
    files: Express.Multer.File[],
    authorId: number,
  ) {
    const comment = this.commentRepository.create({
      ...createDto,
      authorId: authorId,
    });
    const { id } = await this.commentRepository.save(comment);
    const saveFilePromises = files.map((file) => {
      return this.saveFile(file.path, id);
    });
    await Promise.all(saveFilePromises);
    return this.getByProposalId(createDto.proposalId, authorId);
  }

  async toggleLike(likeDto: LikeDto, authorId: number) {
    const like = this.likesRepository.create({ ...likeDto, authorId });
    const isLiked = await this.likesRepository.findOne(like);
    if (isLiked) {
      await this.likesRepository.delete(isLiked);
    } else {
      await this.likesRepository.save(like);
    }
    await this.dislikesRepository.delete({
      commentId: likeDto.commentId,
      authorId,
    });
    return this.getById(likeDto.commentId, authorId);
  }

  async toggleDislike(dislikeDto: DislikeDto, authorId: number) {
    const dislike = this.dislikesRepository.create({ ...dislikeDto, authorId });
    const isDisliked = await this.dislikesRepository.findOne(dislike);
    if (isDisliked) {
      await this.dislikesRepository.delete(isDisliked);
    } else {
      await this.dislikesRepository.save(dislike);
    }
    await this.likesRepository.delete({
      commentId: dislikeDto.commentId,
      authorId,
    });
    return this.getById(dislikeDto.commentId, authorId);
  }

  private async saveFile(filename: string, commentId: number) {
    const file = this.fileRepository.create({ filename, commentId });
    return this.fileRepository.save(file);
  }

  private formatComment(comment: Comment, userId: number) {
    const isLiked = Boolean(
      comment.likes.find((like) => like.authorId === userId),
    );
    const isDisliked = Boolean(
      comment.dislikes.find((dislike) => dislike.authorId === userId),
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
