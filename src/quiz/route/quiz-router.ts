import { isAuthenticated } from './../../middleware/auth';
import { displayScore, displayUserQuiz, userUpload } from './../quiz';
import express from "express";
import { startQuiz } from "../quiz";
const router = express.Router();

router.post("/start",startQuiz);
router.post("/display-score",displayScore)
router.post("/upload-quiz",isAuthenticated,userUpload)
router.get("/get-quiz",displayUserQuiz)

export default router