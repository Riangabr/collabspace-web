import api from "../Api/api";

import {
  IAcceptRequestRequest,
  IAcceptRequestResponse,
  ICancelRequestRequest,
  ICancelRequestResponse,
  ICreateFriendRequest,
  ICreateFriendResponse,
  IDeleteFriendRequest,
  IDeleteFriendResponse,
  IListAllFriendsByUserRequest,
  IListAllFriendsByUserResponse,
  IListAllRequestsByUserRequest,
  IListAllRequestsByUserResponse,
  IRecuseRequestRequest,
  IRecuseRequestResponse,
} from "./types";

const listAllFriendsByUser = async ({
  id,
}: IListAllFriendsByUserRequest): Promise<IListAllFriendsByUserResponse> => {
  const response = await api
    .get(`/friends/listAllFriends/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const listAllRequestsByUser = async ({
  id,
}: IListAllRequestsByUserRequest): Promise<IListAllRequestsByUserResponse> => {
  const response = await api
    .get(`/friends/listAllRequests/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const createFriend = async ({
  id,
}: ICreateFriendRequest): Promise<ICreateFriendResponse> => {
  const response = await api
    .post(`/friends/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const cancelRequest = async ({
  id,
}: ICancelRequestRequest): Promise<ICancelRequestResponse> => {
  const response = await api
    .patch(`/friends/cancelRequest/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const acceptRequest = async ({
  id,
}: IAcceptRequestRequest): Promise<IAcceptRequestResponse> => {
  const response = await api
    .patch(`/friends/acceptRequest/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const recuseRequest = async ({
  id,
}: IRecuseRequestRequest): Promise<IRecuseRequestResponse> => {
  const response = await api
    .patch(`/friends/recuseRequest/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const deleteFriend = async ({
  id,
}: IDeleteFriendRequest): Promise<IDeleteFriendResponse> => {
  const response = await api
    .delete(`/friends/deleteFriend/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export {
  listAllFriendsByUser,
  listAllRequestsByUser,
  createFriend,
  cancelRequest,
  acceptRequest,
  recuseRequest,
  deleteFriend,
};
