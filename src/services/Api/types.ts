/* eslint-disable @typescript-eslint/no-explicit-any */

interface AppResponse {
  statusCode: number;
  result: "success" | "error";
  message: string;
  data?: any;
}

export type { AppResponse };
