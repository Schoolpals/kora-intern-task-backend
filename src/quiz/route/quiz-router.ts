// import { upload } from './../quiz';
import express from "express";
import { startQuiz } from "../quiz";
const router = express.Router();

router.post("/start",startQuiz);
// router.post("/upload",upload)

export default router