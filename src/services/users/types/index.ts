import { AppResponse } from "../../Api/types";

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

export type { ICreateUserRequest, ICreateUserResponse };
