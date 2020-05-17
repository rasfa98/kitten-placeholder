import { Router } from "https://deno.land/x/oak/mod.ts";

import getKittens from "./getKittens.ts";
import getKitten from "./getKitten.ts";
import deleteKitten from "./deleteKitten.ts";
import updateKitten from "./updateKitten.ts";
import createKitten from "./createKitten.ts";

const router = new Router();

router
  .get("/kittens", getKittens)
  .post("/kittens", createKitten)
  .get("/kittens/:id", getKitten)
  .delete("/kittens/:id", deleteKitten)
  .put("/kittens/:id", updateKitten);

export default router;
