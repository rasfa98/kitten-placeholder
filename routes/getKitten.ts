import kittens from "../data.ts";

export default async ({ params, response }: { response: any; params: any }) => {
  const id = parseInt(params.id);

  if (!Number.isInteger(id)) {
    response.status = 400;
    response.body = {
      "error": "Invalid ID",
      "message": "The provided ID is invalid",
    };

    return;
  }

  const kitten = kittens.find((k) => k.id === id);

  if (!kitten) {
    response.status = 404;
    response.body = {
      "error": "Not Found",
      "message": "Kitten Not Found",
    };

    return;
  }

  response.body = kitten;
};
