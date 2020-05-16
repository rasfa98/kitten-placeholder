import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config/server.ts";
import router from "./routes/router.ts";
import errorMiddleware from "./middlewares/error.ts";
import loggerMiddleware from "./middlewares/logger.ts";

const app = new Application();

app.use(errorMiddleware);
app.use(loggerMiddleware);
app.use(router.routes());

console.log(`Server is running on ${APP_HOST}:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
