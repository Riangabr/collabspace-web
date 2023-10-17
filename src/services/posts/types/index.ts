import { AppResponse } from "../../Api/types";

import { IComment } from "../../comments/types";
import { IReaction } from "../../reactions/types";

interface IUserPost {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
}

interface IPost {
  id: string;
  content: string;
  tags: string | null;
  visibility: 1 | 2 | 3;
  publishedAt: string;
  user: IUserPost;
  comments: IComment[];
  reactions: IReaction[];
}

interface ICreatePostRequest {
  content: string;
  tags?: string;
  visibility?: 1 | 2 | 3;
}

interface ICreatePostResponse extends AppResponse {
  data?: IPost;
}

interface IDeletepostRequest {
  id: string;
}

type IDeletePostResponse = AppResponse;

interface IListAllPostsResponse extends AppResponse {
  data?: {
    total: number;
    posts: IPost[];
  };
}

export type {
  IPost,
  ICreatePostRequest,
  ICreatePostResponse,
  IListAllPostsResponse,
  IDeletepostRequest,
  IDeletePostResponse,
};
