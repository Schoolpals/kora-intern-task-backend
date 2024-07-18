

import express from "express";
import { startQuiz } from "../quiz";
const router = express.Router();

router.post("/start",startQuiz);



export default router