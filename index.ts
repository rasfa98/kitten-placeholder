import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config/server.ts";
import router from "./routes/router.ts";
import errorMiddleware from "./middlewares/error.ts";

const app = new Application();

app.use(errorMiddleware);
app.use(router.routes());

console.log(`Server is running on ${APP_HOST}:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
