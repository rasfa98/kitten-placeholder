import { Router } from "https://deno.land/x/oak/mod.ts";

import getKittens from "./getKittens.ts";
import getKitten from "./getKitten.ts";

const router = new Router();

router
  .get("/kittens", getKittens)
  .get("/kittens/:id", getKitten);

export default router;
