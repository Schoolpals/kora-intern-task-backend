import { piggy, storePiggy } from './../piggyvest/controller';
import { kora, storeKora } from '../kora/controller';
import express from "express";
import { quidax, storeQuidax} from '../quidax/controller';
const router = express.Router();

router.get("/kora-display",kora);
router.put("/store-kora",storeKora)
router.get("/piggy-display",piggy)
router.put("/store-piggy",storePiggy)
router.get("/quidax-display",quidax)
router.post("/store-quidax",storeQuidax)

export default router