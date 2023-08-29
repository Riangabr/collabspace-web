import api from "../Api/api";

import { ICreateUserRequest, ICreateUserResponse } from "./types";

const createUser = async ({
  name,
  email,
  confirmEmail,
  password,
  confirmPassword,
  telephone,
  birthDate,
}: ICreateUserRequest): Promise<ICreateUserResponse> => {
  const response = await api
    .post("/users", {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      telephone,
      birthDate,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export { createUser };
