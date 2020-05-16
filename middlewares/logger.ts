export default async (
  { request }: { request: any },
  next: any,
) => {
  await next();

  console.log(`${request.method} ${request.url}`);
};
