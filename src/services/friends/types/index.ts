import { AppResponse } from "../../Api/types";

interface IFriend {
  id: string;
  user1: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  user2: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  createdAt: string;
}

interface IRequest {
  id: string;
  user1: {
    id: string;
    name: string;
    avatarUrl: string | null;
  };
  createdAt: string;
}

interface IListAllFriendsByUserRequest {
  id: string;
}

interface IListAllFriendsByUserResponse extends AppResponse {
  data?: {
    friends: IFriend[];
  };
}

interface IListAllRequestsByUserRequest {
  id: string;
}

interface IListAllRequestsByUserResponse extends AppResponse {
  data?: {
    requests: IRequest[];
  };
}

interface ICreateFriendRequest {
  id: string;
}

interface ICreateFriendResponse extends AppResponse {
  data?: {
    id: string;
    userId1: string;
    userId2: string;
    actionId1: 1 | 2;
    actionId2: 3 | 4 | null;
    createdAt: string;
  };
}

interface ICancelRequestRequest {
  id: string;
}

type ICancelRequestResponse = AppResponse;

interface IAcceptRequestRequest {
  id: string;
}

type IAcceptRequestResponse = AppResponse;

interface IRecuseRequestRequest {
  id: string;
}

type IRecuseRequestResponse = AppResponse;

interface IDeleteFriendRequest {
  id: string;
}

type IDeleteFriendResponse = AppResponse;

export type {
  IFriend,
  IRequest,
  IListAllFriendsByUserRequest,
  IListAllFriendsByUserResponse,
  IListAllRequestsByUserRequest,
  IListAllRequestsByUserResponse,
  ICreateFriendRequest,
  ICreateFriendResponse,
  ICancelRequestRequest,
  ICancelRequestResponse,
  IAcceptRequestRequest,
  IAcceptRequestResponse,
  IRecuseRequestRequest,
  IRecuseRequestResponse,
  IDeleteFriendRequest,
  IDeleteFriendResponse,
};
