export type Proposal = {
  id: number;
  title: string;
  description: string;
  author: Author;
  createDatetime: string;
  dislikes: Dislike[]
  files: File[]
  likes: Like[]
}

export type Author = {
  id: number;
  username: string;
}

export type Like = {}

export type Dislike = {}

export type File = {
  filename: string;
  id: number;
  proposalId: Proposal["id"]
}