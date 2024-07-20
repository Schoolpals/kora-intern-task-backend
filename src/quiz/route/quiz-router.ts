import { displayScore } from './../quiz';
// import { upload } from './../quiz';
import express from "express";
import { startQuiz } from "../quiz";
const router = express.Router();

router.post("/start",startQuiz);
router.post("/display-score",displayScore)

export default router