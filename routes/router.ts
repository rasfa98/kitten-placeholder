import { Router } from "https://deno.land/x/oak/mod.ts";

import getKittens from "./getKittens.ts";

const router = new Router();

router.get("/kittens", getKittens);

export default router;
