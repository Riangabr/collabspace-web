import axios from "axios";

const getAPIClient = () => {
  const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("token") as string,
      )}`,
    },
  });

  api.defaults.validateStatus = () => {
    return true;
  };

  return api;
};

export default getAPIClient;
