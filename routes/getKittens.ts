import kittens from "../data.ts";

export default async ({ response }: { response: any }) => {
  response.body = kittens;
};
