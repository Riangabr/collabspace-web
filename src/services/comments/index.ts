import api from "../Api/api";
import {
  ICreateCommentRequest,
  ICreateCommentResponse,
  IDeleteCommentRequest,
  IDeleteCommentResponse,
} from "./types";

const createComment = async ({
  postId,
  content,
}: ICreateCommentRequest): Promise<ICreateCommentResponse> => {
  const response = await api
    .post(`/comments/${postId}`, { content })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const deleteComment = async ({
  commentId,
  postId,
}: IDeleteCommentRequest): Promise<IDeleteCommentResponse> => {
  const response = await api
    .delete(`/comments/${commentId}/${postId}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export { createComment, deleteComment };
