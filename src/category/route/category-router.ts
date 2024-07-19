import express from "express";
import { kora } from '../kora/controller';
import { quidax } from '../quidax/controller';
import { storeKora } from "../kora/controller";
const router = express.Router();

router.get("/kora-display",kora);
router.post("/quidax-display",quidax)
router.post("/kora-question",storeKora)

export default router