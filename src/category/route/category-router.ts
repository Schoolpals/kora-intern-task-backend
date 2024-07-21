import express from "express";
import { piggy, storePiggy } from './../piggyvest/controller';
import { kora, storeKora } from '../kora/controller';
import { quidax, storeQuidax} from '../quidax/controller';
import { isAuthenticated } from '../../middleware/auth';
import { createCategory } from '../controller';
const router = express.Router();

router.get("/kora-display",kora);
router.put("/store-kora",storeKora)
router.get("/piggy-display",piggy)
router.put("/store-piggy",storePiggy)
router.get("/quidax-display",quidax)
router.put("/store-quidax",storeQuidax)
router.post("/",isAuthenticated,createCategory)

export default router