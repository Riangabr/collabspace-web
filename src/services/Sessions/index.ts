import api from "../Api/api";

import { ISessionRequest, ISessionResponse } from "./types";

const session = async ({
  email,
  password,
}: ISessionRequest): Promise<ISessionResponse> => {
  const response = await api
    .post("/sessions", { email, password })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export { session };
