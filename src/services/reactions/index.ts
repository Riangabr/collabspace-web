import api from "../Api/api";

import {
  ICreateReactionRequest,
  ICreateReactionResponse,
  IDeleteReactionRequest,
  IDeleteReactionResponse,
} from "./types";

const createReaction = async ({
  postId,
  commentId,
  entityType,
}: ICreateReactionRequest): Promise<ICreateReactionResponse> => {
  const response = await api
    .post("/reactions", {
      postId,
      commentId,
      entityType,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const deleteReaction = async ({
  reactionId,
}: IDeleteReactionRequest): Promise<IDeleteReactionResponse> => {
  const response = await api
    .delete(`/reactions/${reactionId}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export { createReaction, deleteReaction };
