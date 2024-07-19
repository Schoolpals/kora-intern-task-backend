import { kora, storeKora } from '../kora/controller';
import express from "express";
import { quidax } from '../quidax/controller';
const router = express.Router();

router.get("/kora-display",kora);
router.put("/store-kora",storeKora)
router.post("/quidax-display",quidax)

export default router