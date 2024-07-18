import { kora } from './../controller';

import express from "express";
const router = express.Router();

router.post("/display",kora);



export default router