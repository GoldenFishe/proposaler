import { makeAutoObservable } from 'mobx';

import { ProposalRequests } from '../api/proposals';
import { User } from '../types/User';
import { File } from '../types/File';
import { CommentsRequests } from '../api/comments';
import { Comment } from '../types/Comment';
import { Proposal } from '../types/Proposal';

export class ProposalModel implements Proposal {
  author: User;
  createDatetime: string;
  description: string;
  dislikesAmount: number;
  files: File[];
  id: number;
  isDisliked: boolean;
  isLiked: boolean;
  likesAmount: number;
  title: string;
  comments: Comment[];

  constructor() {
    makeAutoObservable(this);
    this.files = [];
    this.comments = [];
  }

  async getProposal(id: number) {
    const proposal = await ProposalRequests.getProposal(id);
    if (proposal) {
      this.setProposal(proposal);
    }
  }

  async getComments(id: number) {
    const comments = await CommentsRequests.getComments(id);
    if (comments) {
      this.comments = comments;
    }
  }

  async like(id: number) {
    const likedProposal = await ProposalRequests.like(id);
    if (likedProposal) {
      this.setProposal(likedProposal);
    }
  }

  async dislike(id: number) {
    const dislikedProposal = await ProposalRequests.dislike(id);
    if (dislikedProposal) {
      this.setProposal(dislikedProposal);
    }
  }

  async likeComment(id: number) {
    const likedComment = await CommentsRequests.like(id);
    if (likedComment) {
      this.comments = this.comments!.map((comment) => {
        return comment.id === likedComment.id ? likedComment : comment;
      });
    }
  }

  async dislikeComment(id: number) {
    const dislikedComment = await CommentsRequests.dislike(id);
    if (dislikedComment) {
      this.comments = this.comments!.map((comment) => {
        return comment.id === dislikedComment.id ? dislikedComment : comment;
      });
    }
  }

  private setProposal(proposal: Proposal) {
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
}

export const proposalModel = new ProposalModel();
