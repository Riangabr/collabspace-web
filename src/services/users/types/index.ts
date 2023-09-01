import { AppResponse } from "../../Api/types";

interface IUser {
  id: string;
  name: string;
  email: string;
  telephone?: string;
  birthDate: string;
  avatarUrl: string | null;
  createdAt: string;
}

interface ICreateUserRequest {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  telephone?: string | null;
  birthDate: string;
}

interface ICreateUserResponse extends AppResponse {
  data?: {
    id: string;
    name: string;
    email: string;
    telephone: string | null;
    birthDate: string;
  };
}

interface IListUserByIdRequest {
  id: string;
}

interface IListUserByIdResponse extends AppResponse {
  data?: {
    user: IUser;
  };
}

export type {
  IUser,
  ICreateUserRequest,
  ICreateUserResponse,
  IListUserByIdRequest,
  IListUserByIdResponse,
};
