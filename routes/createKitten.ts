import kittens from "../data.ts";

export default async (
  { request, response }: { request: any; response: any },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {};

    return;
  }

  const { value: {name, color, age, breed} } = await request.body();

  if (!name || !color || !age || !breed) {
    response.status = 400;
    response.body = {};

    return;
  }

  response.status = 204;
  response.body = {};
};
