import kittens from "../data.ts";

export default async ({ params, response }: { response: any; params: any }) => {
  const id = parseInt(params.id);

  if (!Number.isInteger(id)) {
    response.status = 400;
    response.body = {};

    return;
  }

  const kitten = kittens.find((k) => k.id === id);

  if (!kitten) {
    response.status = 404;
    response.body = {};

    return;
  }

  response.status = 204;
  response.body = {};
};
