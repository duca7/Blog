import { Author } from './article.model';

export interface Comment {
  body: string;
}

export interface CommentInfo {
  _id: string;
  body: string;
  author: Author;
  article: string;
  createdAt: string;
  updatedAt: string;
}
