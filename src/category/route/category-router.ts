import { piggy, storePiggy } from './../piggyvest/controller';
import { kora, storeKora } from '../kora/controller';
import express from "express";
import { quidax } from '../quidax/controller';
const router = express.Router();

router.get("/kora-display",kora);
router.put("/store-kora",storeKora)
router.post("/quidax-display",quidax)
router.get("/piggy-display",piggy)
router.put("/store-piggy",storePiggy)
router.post("/quidax-display",quidax)
router.post("/kora-question",storeKora)

export default router