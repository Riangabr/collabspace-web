import { AppResponse } from "../../Api/types";

interface IUserReaction {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
}

interface IReaction {
  id: string;
  entityType: 1 | 2 | 3 | 4 | 5 | 6;
  reactedAt: string;
  user: IUserReaction;
}

interface ICreateReactionRequest {
  postId?: string;
  commentId?: string;
  entityType: 1 | 2 | 3 | 4 | 5 | 6;
}

interface ICreateReactionResponse extends AppResponse {
  data?: IReaction;
}

interface IDeleteReactionRequest {
  reactionId: string;
}

type IDeleteReactionResponse = AppResponse;

export type {
  IReaction,
  ICreateReactionRequest,
  ICreateReactionResponse,
  IDeleteReactionRequest,
  IDeleteReactionResponse,
};
