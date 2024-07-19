import { kora } from '../kora/controller';
import express from "express";
import { quidax } from '../quidax/controller';
const router = express.Router();

router.get("/kora-display",kora);
router.post("/quidax-display",quidax)

export default router