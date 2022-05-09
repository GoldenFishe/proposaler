import { makeAutoObservable } from 'mobx';

import { ProposalRequests } from '../api/proposals';
import { UserType } from '../types/UserType';
import { FileType } from '../types/FileType';
import { CommentsRequests } from '../api/comments';
import { CommentType } from '../types/CommentType';
import { ProposalType, TagType } from "../types/ProposalType";

export class ProposalModel implements ProposalType {
  author: UserType;
  createDatetime: string;
  description: string;
  dislikesAmount: number;
  files: FileType[];
  id: number;
  isDisliked: boolean;
  isLiked: boolean;
  likesAmount: number;
  tags: TagType[];
  title: string;
  comments: CommentType[];

  constructor() {
    makeAutoObservable(this);
    this.files = [];
    this.comments = [];
  }

  async getProposal(id: ProposalType['id']) {
    const proposal = await ProposalRequests.getProposal(id);
    if (proposal) {
      this.setProposal(proposal);
    }
  }

  async getComments(id: ProposalType['id']) {
    const comments = await CommentsRequests.getComments(id);
    if (comments) {
      this.setComments(comments);
    }
  }

  async createComment(newComment: FormData) {
    const comments = await CommentsRequests.createComment(newComment);
    if (comments) {
      this.setComments(comments);
    }
  }

  async like(id: ProposalType['id']) {
    const likedProposal = await ProposalRequests.like(id);
    if (likedProposal) {
      this.setProposal(likedProposal);
    }
  }

  async dislike(id: ProposalType['id']) {
    const dislikedProposal = await ProposalRequests.dislike(id);
    if (dislikedProposal) {
      this.setProposal(dislikedProposal);
    }
  }

  async likeComment(id: CommentType['id']) {
    const likedComment = await CommentsRequests.like(id);
    if (likedComment) {
      const comments = this.comments!.map((comment) => {
        return comment.id === likedComment.id ? likedComment : comment;
      });
      this.setComments(comments);
    }
  }

  async dislikeComment(id: CommentType['id']) {
    const dislikedComment = await CommentsRequests.dislike(id);
    if (dislikedComment) {
      const comments = this.comments!.map((comment) => {
        return comment.id === dislikedComment.id ? dislikedComment : comment;
      });
      this.setComments(comments);
    }
  }

  private setProposal(proposal: ProposalType) {
    this.author = proposal.author;
    this.createDatetime = proposal.createDatetime;
    this.description = proposal.description;
    this.dislikesAmount = proposal.dislikesAmount;
    this.files = proposal.files;
    this.id = proposal.id;
    this.isDisliked = proposal.isDisliked;
    this.isLiked = proposal.isLiked;
    this.likesAmount = proposal.likesAmount;
    this.title = proposal.title;
  }

  private setComments(comments: CommentType[]) {
    this.comments = comments;
  }
}

export const proposalModel = new ProposalModel();
